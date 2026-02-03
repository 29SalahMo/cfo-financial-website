import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const RequestSchema = z.object({
  clientName: z.string().min(2).max(200),
  companyName: z.string().max(200).optional().or(z.literal('')),
  serviceType: z.string().min(2).max(200),
  projectDescription: z.string().min(10).max(3000),
  budgetRange: z.string().max(200).optional().or(z.literal('')),
  deadline: z.string().max(200).optional().or(z.literal('')),
  email: z.string().email().max(200),
  phone: z.string().min(6).max(50)
});

// Simple in-memory rate limiting (per IP)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string | null | undefined) {
  if (!ip) return false;
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
}

async function sendEmail(payload: z.infer<typeof RequestSchema>) {
  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_FROM,
    ADMIN_EMAIL
  } = process.env;

  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_FROM || !ADMIN_EMAIL) {
    console.error('Email environment variables are not fully configured.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });

  const subject = `New Financial Service Request – ${payload.clientName}`;

  const textBody = `
New service request received:

Client / Contact Name: ${payload.clientName}
Company: ${payload.companyName || '-'}
Service Type: ${payload.serviceType}
Project Description:
${payload.projectDescription}

Budget Range: ${payload.budgetRange || '-'}
Preferred Deadline: ${payload.deadline || '-'}

Email: ${payload.email}
Phone / WhatsApp: ${payload.phone}
`.trim();

  await transporter.sendMail({
    from: EMAIL_FROM,
    to: ADMIN_EMAIL,
    subject,
    text: textBody
  });
}

async function sendWhatsApp(payload: z.infer<typeof RequestSchema>) {
  const {
    WHATSAPP_ACCESS_TOKEN,
    WHATSAPP_PHONE_NUMBER_ID,
    ADMIN_WHATSAPP_TO
  } = process.env;

  if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID || !ADMIN_WHATSAPP_TO) {
    console.error('WhatsApp environment variables are not fully configured.');
    return;
  }

  const url = `https://graph.facebook.com/v20.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const bodyText = `
New financial service request:

Client: ${payload.clientName}
Company: ${payload.companyName || '-'}
Service: ${payload.serviceType}
Budget: ${payload.budgetRange || '-'}
Deadline: ${payload.deadline || '-'}

Description:
${payload.projectDescription}

Contact:
Email: ${payload.email}
Phone / WhatsApp: ${payload.phone}
`.trim();

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: ADMIN_WHATSAPP_TO,
      type: 'text',
      text: {
        body: bodyText
      }
    })
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('WhatsApp API error:', res.status, text);
    throw new Error('WhatsApp API call failed');
  }
}

async function withRetry<T>(fn: () => Promise<T>, maxAttempts = 3): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.error(`Attempt ${attempt} failed`, err);
      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Operation failed after retries');
}

export async function POST(request: Request) {
  try {
    const ip =
      (request.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      null;

    if (checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const json = await request.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const parsed = RequestSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }

    const payload = parsed.data;

    // Fire WhatsApp and email in parallel with retry and logging
    await Promise.all([
      withRetry(() => sendWhatsApp(payload)).catch((err) =>
        console.error('WhatsApp notification ultimately failed:', err)
      ),
      withRetry(() => sendEmail(payload)).catch((err) =>
        console.error('Email notification ultimately failed:', err)
      )
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Unexpected error in /api/request-service', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

