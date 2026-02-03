 'use client';

import Link from 'next/link';
import { messages } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

function HeroContent() {
  const { lang } = useLanguage();
  const t = messages[lang];

  return (
    <section className="container-page flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 space-y-6">
        <span className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
          {lang === 'en' ? 'Egyptian Financial Manager / CFO' : 'مدير مالي مصري / مدير مالي تنفيذي'}
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          {t.hero.title}
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/request-service" className="btn-primary">
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href="/portfolio"
            className="btn-secondary"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-600 mt-6">
          <div className="card">
            <div className="text-xl font-semibold text-brand">25+</div>
            <div>{lang === 'en' ? 'years of leadership' : 'سنة من الخبرة القيادية'}</div>
          </div>
          <div className="card">
            <div className="text-xl font-semibold text-brand">300M+</div>
            <div>{lang === 'en' ? 'managed budgets (EGP)' : 'ميزانيات مدارة (جنيه مصري)'}</div>
          </div>
          <div className="card">
            <div className="text-xl font-semibold text-brand">C‑Level</div>
            <div>{lang === 'en' ? 'executive stakeholder focus' : 'تعامل مباشر مع القيادات التنفيذية'}</div>
          </div>
          <div className="card">
            <div className="text-xl font-semibold text-brand">Regional</div>
            <div>{lang === 'en' ? 'Egypt & MENA exposure' : 'خبرة في مصر والمنطقة'}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-brand via-brand-dark to-brand-accent shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_60%)]" />
          <div className="absolute inset-6 rounded-2xl border border-white/20 backdrop-blur-md flex flex-col justify-between p-4 text-xs text-white">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-light/80">
                Financial Governance
              </div>
              <div className="mt-1 text-sm font-semibold">
                {lang === 'en'
                  ? 'Board‑level insight with operational depth.'
                  : 'رؤية على مستوى مجالس الإدارة مع عمق تشغيلي.'}
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>{lang === 'en' ? 'Budgeting & Forecasting' : 'إعداد الموازنات والتنبؤ المالي'}</span>
                <span>98%</span>
              </div>
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-brand-accent" />
              </div>
              <div className="flex justify-between">
                <span>{lang === 'en' ? 'Risk & Governance' : 'المخاطر والحوكمة'}</span>
                <span>96%</span>
              </div>
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[96%] bg-emerald-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <HeroContent />;
}

