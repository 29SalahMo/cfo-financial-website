'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <section className="container-page space-y-8">
      <div className="card space-y-3">
        <h1 className="text-2xl font-semibold text-slate-900">
          {lang === 'en' ? 'Contact' : 'اتصل بنا'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'en'
            ? 'For formal engagements and corporate inquiries, please use the service request form or reach out directly using the channels below.'
            : 'للعقود الرسمية والاستفسارات من الشركات، يُفضّل استخدام نموذج طلب الخدمة أو التواصل عبر القنوات التالية.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-2 text-sm text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en' ? 'Direct Contact Details' : 'بيانات الاتصال المباشر'}
          </h2>
          <p>
            {lang === 'en' ? 'Mobile / WhatsApp:' : 'المحمول / واتساب:'}{' '}
            <Link href="https://wa.me/201115573716" className="text-brand hover:underline">
              +20 111 557 3716
            </Link>
          </p>
          <p>
            {lang === 'en' ? 'Email:' : 'البريد الإلكتروني:'}{' '}
            <Link href="mailto:Masry1961@yahoo.com" className="text-brand hover:underline">
              Masry1961@yahoo.com
            </Link>
          </p>
          <p>
            {lang === 'en' ? 'Location:' : 'العنوان:'}{' '}
            {lang === 'en'
              ? '6th of October City, Nasr Buildings, Neighborhood 17, Block 20, Building 2, Apartment 31'
              : 'مدينة 6 أكتوبر، عمارات النصر، المجاورة 17، بلوك 20، عمارة 2، شقة 31'}
          </p>
        </div>

        <div className="card space-y-3 text-sm text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en' ? 'For Corporates & Institutions' : 'للشركات والمؤسسات'}
          </h2>
          <p>
            {lang === 'en'
              ? 'For structured engagements, please describe your project via the Request a Service page. You will receive a WhatsApp and email confirmation once your request is submitted.'
              : 'للطلبات التفصيلية، برجاء وصف مشروعكم من خلال صفحة طلب خدمة. سيتم تأكيد استلام الطلب عبر رسالة واتساب وبريد إلكتروني.'}
          </p>
          <Link href="/request-service" className="btn-primary inline-flex">
            {lang === 'en' ? 'Go to Request a Service' : 'الانتقال إلى طلب خدمة'}
          </Link>
        </div>
      </div>
    </section>
  );
}

