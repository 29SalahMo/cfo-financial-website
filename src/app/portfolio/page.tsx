'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioPage() {
  const { lang } = useLanguage();

  return (
    <section className="container-page space-y-8">
      <div className="card space-y-3">
        <h1 className="text-2xl font-semibold text-slate-900">
          {lang === 'en' ? 'Portfolio & Achievements' : 'الأعمال والإنجازات'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'en'
            ? 'Selected highlights from a long career in financial management, governance, and strategic advisory across Egypt and the GCC.'
            : 'نماذج مختارة من مسيرة طويلة في الإدارة المالية والحوكمة والاستشارات الاستراتيجية في مصر ودول مجلس التعاون الخليجي.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en'
              ? 'Architectural Aluminum & Industrial Projects'
              : 'مشروعات الألومنيوم المعماري والصناعية'}
          </h2>
          <p className="text-sm text-slate-600">
            {lang === 'en'
              ? 'Led the financial management of Alural Egypt for Architectural Aluminum Industries, overseeing complex project‑based costing, cash flow planning, and banking facilities.'
              : 'قيادة الإدارة المالية لشركة ألورال إيجيبت لصناعات الألومنيوم المعماري، بما في ذلك نظم التكاليف للمشروعات، وتخطيط التدفقات النقدية، وإدارة التسهيلات البنكية.'}
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en' ? 'Glassworks & Manufacturing' : 'صناعات الزجاج والتصنيع'}
          </h2>
          <p className="text-sm text-slate-600">
            {lang === 'en'
              ? 'Managed the full finance function at Proglass Egypt, including inventory valuation, cost accounting, and financial reporting aligned with management and external audit requirements.'
              : 'إدارة الوظيفة المالية الكاملة بشركة بروجلاس إيجيبت، بما يشمل تقييم المخزون، ونظم التكاليف، والتقارير المالية وفقاً لمتطلبات الإدارة والمراجعة الخارجية.'}
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en' ? 'Contracting & Construction (KSA)' : 'المقاولات والإنشاءات (السعودية)'}
          </h2>
          <p className="text-sm text-slate-600">
            {lang === 'en'
              ? 'Financial leadership roles at SCA Contracting in Riyadh and Al‑Asha Contracting in Abha, managing project cash cycles, subcontractor payments, and bank relationships.'
              : 'تولي مناصب قيادية مالية بشركة سكا للمقاولات بالرياض ومؤسسة الأعشى للمقاولات بأبها، وإدارة الدورة النقدية للمشروعات، ومدفوعات المقاولين، والعلاقات البنكية.'}
          </p>
        </div>

        <div className="card space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en' ? 'Healthcare Supplies & Trading' : 'إمدادات الرعاية الصحية والتجارة'}
          </h2>
          <p className="text-sm text-slate-600">
            {lang === 'en'
              ? 'Oversaw finance for the Arab Company for Hospital Supplies and Egyptian Trading Company, with responsibility for imports, supplier credit, and customer collections.'
              : 'الإشراف على الشئون المالية للشركة العربية لإمداد المستشفيات والشركة المصرية للتجارة، بما يشمل الاستيراد، ومدة الائتمان للموردين، والتحصيل من العملاء.'}
          </p>
        </div>
      </div>
    </section>
  );
}

