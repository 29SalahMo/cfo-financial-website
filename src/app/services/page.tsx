'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const servicesEn = [
  'Preparation of financial statements and closing accounts',
  'Financial analysis of statements and accounts',
  'Tax accounting and preparation of tax returns',
  'Internal auditing and strengthening internal control systems',
  'Design of financial documentary cycles and chart of accounts',
  'Design and implementation of cost accounting systems',
  'Budget preparation, forecasting, and performance monitoring',
  'Feasibility studies for new projects and investments',
  'Supervision of accounting and cost management functions',
  'Design and supervision of procurement and inventory cycles',
  'Banking operations, credit facilities, and letters of credit',
  'Financial leasing and related accounting treatments',
  'Administration and HR financial oversight',
  'Import logistics and customs clearance supervision',
  'Treasury management and supplier payments',
  'Customer account management and collection follow‑up',
  'Cash flow management and cash budgeting'
];

const servicesAr = [
  'إعداد الميزانيات والحسابات الختامية',
  'التحليل المالي للقوائم المالية والحسابات الختامية',
  'أعمال المحاسبة الضريبية وإعداد الإقرارات الضريبية',
  'أعمال المراجعة الداخلية وتعزيز نظم الرقابة',
  'تصميم الدورة المستندية والمجموعة الدفترية',
  'تصميم وإعداد نظم التكاليف',
  'إعداد الموازنة العامة والرقابة عليها والتنبؤ المالي',
  'إعداد دراسات الجدوى للمشروعات والأنشطة الجديدة',
  'الإشراف والمتابعة لأعمال الحسابات والتكاليف',
  'تصميم دورة المخازن والمشتريات والإشراف عليها',
  'تنفيذ ومتابعة الأعمال البنكية والتسهيلات الائتمانية والاعتمادات المستندية',
  'تنفيذ كافة أعمال الإيجار التمويلي ومعالجتها محاسبياً',
  'الإشراف والمتابعة لكافة أعمال الشئون الإدارية وشئون العاملين من ناحية مالية',
  'الإشراف على أعمال المتابعة والتخليص للرسائل الاستيرادية',
  'الإشراف على الخزينة وتنفيذ أعمال الصرف وتسديدات الموردين',
  'الإشراف والمتابعة لأعمال التحصيل والعملاء',
  'تنفيذ وإدارة كافة أعمال السيولة والموازنة النقدية'
];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const services = lang === 'en' ? servicesEn : servicesAr;

  return (
    <section className="container-page space-y-8">
      <div className="card space-y-3">
        <h1 className="text-2xl font-semibold text-slate-900">
          {lang === 'en' ? 'Financial Services & Expertise' : 'الخدمات المالية والخبرات المتخصصة'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'en'
            ? 'All services are delivered with strict confidentiality, professional integrity, and alignment with Egyptian regulations and international best practices.'
            : 'تقدم كافة الخدمات بأعلى درجات السرية والنزاهة المهنية، ووفقاً للمتطلبات التنظيمية المصرية وأفضل الممارسات الدولية.'}
        </p>
      </div>

      <div className="card">
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
          {services.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

