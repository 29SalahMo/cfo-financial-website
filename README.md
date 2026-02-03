## Executive Financial Manager Website (Mohamed Salah Eldin)

High‑end bilingual (Arabic / English) portfolio and service‑request website for an experienced Egyptian Financial Manager / CFO.

### 1. Folder Structure (main parts)

- `src/app`:
  - `layout.tsx` – root layout, header, footer, language provider.
  - `page.tsx` – Home page (hero, positioning).
  - `about/page.tsx` – Career summary and profile.
  - `services/page.tsx` – Services based on CV expertise.
  - `portfolio/page.tsx` – Selected achievements.
  - `contact/page.tsx` – Direct contact details.
  - `request-service/page.tsx` – Structured service request form.
  - `api/request-service/route.ts` – Secure API endpoint for automation (WhatsApp + email).
- `src/components/layout` – `Header`, `Footer`.
- `src/contexts` – `LanguageContext` (language switcher, RTL/LTR).
- `src/lib/i18n.ts` – Simple message dictionary.

### 2. Environment Variables

Copy `.env.example` to `.env.local` and adjust:

- **Admin configuration**
  - `ADMIN_EMAIL` – where email notifications are sent (e.g. `Masry1961@yahoo.com`).
  - `ADMIN_WHATSAPP_TO` – WhatsApp number in international format without `+` (e.g. `201115573716`).
- **SMTP / Email (via Nodemailer)**
  - `EMAIL_HOST` – SMTP server host.
  - `EMAIL_PORT` – SMTP port (`465` for SSL, `587` for TLS).
  - `EMAIL_USER` / `EMAIL_PASS` – SMTP credentials.
  - `EMAIL_FROM` – sender name and address (e.g. `"CFO Website <no-reply@your-domain.com>"`).
- **WhatsApp Business Cloud API**
  - `WHATSAPP_ACCESS_TOKEN` – permanent token generated from Facebook Developer portal.
  - `WHATSAPP_PHONE_NUMBER_ID` – phone number ID from WhatsApp Cloud API settings.

> Do **not** commit `.env.local` – keep secrets private.

### 3. Automation Flow

1. A visitor fills the **Request a Service** form and submits.
2. The browser calls `POST /api/request-service` with the structured data.
3. The API:
   - Validates and sanitizes input with Zod.
   - Applies basic **rate limiting** per IP (max 10 requests per hour).
   - In parallel:
     - Sends a WhatsApp Business message to `ADMIN_WHATSAPP_TO` via WhatsApp Cloud API.
     - Sends a professional email to `ADMIN_EMAIL` via SMTP.
   - Uses **retry logic** (up to 3 attempts) for each channel.
   - Logs operational errors to server console without exposing details to the client.
4. The user receives a clear success or generic error message.

### 4. Security Best Practices Implemented

- **Input validation & sanitization** – all fields are validated server‑side using Zod.
- **XSS protection** – no untrusted HTML is rendered; data is treated as plain text.
- **CSRF protection** – Next.js API routes are same‑origin only; do not expose them cross‑domain.
- **Rate limiting** – simple in‑memory per‑IP limiter on the service‑request API.
- **Secrets handling** – WhatsApp and SMTP credentials are only read from environment variables.
- **Error handling** – internal errors are logged; the API returns generic error messages only.
- **Production hardening** – `poweredByHeader` disabled in `next.config.mjs`, console output stripped in production except errors.

For more advanced hardening in production, consider:

- Putting the site behind a WAF / reverse proxy (Cloudflare, etc.) with request throttling.
- Enabling HTTPS everywhere.
- Using external logging (e.g. Logtail, Datadog) instead of relying only on console logs.

### 5. Running Locally

1. Install Node.js LTS (v18+ recommended).
2. From the `cfo-financial-website` folder, install dependencies:

```bash
npm install
```

3. Create `.env.local` based on `.env.example` and fill in:
   - SMTP details.
   - WhatsApp Cloud API token and phone number ID.
4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000` in your browser.

### 6. Deployment / Hosting (Production)

#### Option A – Vercel (recommended for Next.js)

1. Create a free account at `https://vercel.com`.
2. Push this project to a Git repository (GitHub / GitLab / Bitbucket).
3. Import the repository in Vercel and choose:
   - Framework: **Next.js**.
   - Root directory: `cfo-financial-website`.
4. In Vercel project settings, set all environment variables from `.env.example` under **Environment Variables**.
5. Deploy. Vercel will build and host the site on a production URL.

#### Option B – Your Own VPS / Server

1. On the server:
   - Install Node.js LTS and a process manager (e.g. `pm2`).
   - Copy the project folder (or pull from Git).
2. Install dependencies:

```bash
npm install
npm run build
```

3. Set environment variables in a `.env.local` file or via your process manager.
4. Start the app:

```bash
npm start
```

5. Put Nginx or another reverse proxy in front of the Node.js app:
   - Force HTTPS.
   - Enable basic rate limiting if needed.

### 7. How to Access the Website for Real Work

- **Local testing**: open `http://localhost:3000` after running `npm run dev`.
- **Production use**:
  - Deploy using Vercel or your server.
  - Share the production URL with clients and companies.
  - All new service requests will automatically send:
    - A WhatsApp message to `+20 111 557 3716`.
    - An email to `Masry1961@yahoo.com`.

