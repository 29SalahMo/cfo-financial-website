'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <section className="container-page space-y-8">
      <div className="card space-y-4">
        <h1 className="text-2xl font-semibold text-slate-900">
          {lang === 'en' ? 'About Mohamed Salah Eldin' : 'نبذة عن محمد صلاح الدين'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'en'
            ? 'An accomplished financial manager with over 20 years of experience across Egypt and the region, combining deep technical accounting expertise with strategic leadership. Mohamed has overseen complex financial operations, restructuring initiatives, and large‑scale projects in manufacturing, contracting, aluminum, glass, and healthcare supplies.'
            : 'مدير مالي متمرس يتمتع بخبرة تزيد عن 20 عاماً في مصر والمنطقة، يجمع بين خبرة محاسبية وفنية عميقة وقيادة استراتيجية. أشرف على عمليات مالية معقدة، ومبادرات إعادة هيكلة، ومشروعات كبرى في مجالات الصناعة والمقاولات والألومنيوم والزجاج وإمدادات الرعاية الصحية.'}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'en'
            ? 'Graduated from Ain Shams University with a Bachelor of Commerce – Accounting, Mohamed has built his career through progressive roles from accountant to Financial Manager and senior executive. His experience spans financial reporting, internal audit, taxation, budgeting, cost control, and governance, with a consistent focus on improving profitability and strengthening control environments.'
            : 'حاصل على بكالوريوس التجارة – شعبة المحاسبة من جامعة عين شمس، وبنى مسيرته المهنية من محاسب حتى مدير مالي وتنفيذي رفيع. تمتد خبرته عبر إعداد التقارير المالية، والمراجعة الداخلية، والضرائب، وإعداد الموازنات، والرقابة على التكاليف، والحوكمة، مع تركيز مستمر على تحسين الربحية وتعزيز نظم الرقابة.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en' ? 'Career Objective' : 'الهدف المهني'}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'To continue contributing as a senior financial leader, partnering with boards and executive management to design robust financial strategies, optimize capital allocation, and build resilient financial structures that support sustainable growth.'
              : 'الاستمرار في الإسهام كقيادة مالية عليا، من خلال الشراكة مع مجالس الإدارات والإدارة التنفيذية لتصميم استراتيجيات مالية قوية، وتحسين تخصيص الموارد، وبناء هياكل مالية مرنة تدعم النمو المستدام.'}
          </p>
        </div>

        <div className="card space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            {lang === 'en' ? 'Education & Credentials' : 'التعليم والمؤهلات'}
          </h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>
              {lang === 'en'
                ? 'Bachelor of Commerce – Accounting, Ain Shams University (May 1984)'
                : 'بكالوريوس تجارة – شعبة المحاسبة، جامعة عين شمس (دور مايو 1984)'}
            </li>
            <li>
              {lang === 'en'
                ? 'Extensive practical exposure in public sector oversight, private sector, and international assignments.'
                : 'خبرة عملية واسعة في العمل الحكومي والرقابي والقطاع الخاص والمهام الخارجية.'}
            </li>
          </ul>
        </div>
      </div>

      <div className="card space-y-3">
        <h2 className="text-base font-semibold text-slate-900">
          {lang === 'en' ? 'Selected Career Path' : 'المسار المهني المختار'}
        </h2>
        <ul className="text-sm text-slate-600 space-y-1">
          <li>
            {lang === 'en'
              ? 'Financial Manager – Alural Egypt for Architectural Aluminum Industries (2014 – 2024)'
              : 'مدير مالي – شركة ألورال إيجيبت لصناعات الألومنيوم المعماري (2014 – 2024)'}
          </li>
          <li>
            {lang === 'en'
              ? 'Financial Manager – Proglass Egypt for Glassworks (2010 – 2014)'
              : 'مدير مالي – شركة بروجلاس إيجيبت للأعمال الزجاجية (2010 – 2014)'}
          </li>
          <li>
            {lang === 'en'
              ? 'Financial Manager – SCA Contracting, Riyadh, Saudi Arabia'
              : 'مدير مالي – شركة سكا للمقاولات، الرياض، المملكة العربية السعودية'}
          </li>
          <li>
            {lang === 'en'
              ? 'Financial Manager – Al-Asha Contracting, Abha, Saudi Arabia'
              : 'مدير مالي – مؤسسة الأعشى للمقاولات، أبها، المملكة العربية السعودية'}
          </li>
          <li>
            {lang === 'en'
              ? 'Financial Manager – Arab Company for Hospital Supplies'
              : 'مدير مالي – الشركة العربية لإمداد المستشفيات'}
          </li>
          <li>
            {lang === 'en'
              ? 'Financial Manager – Egyptian Trading Company'
              : 'مدير مالي – الشركة المصرية للتجارة'}
          </li>
          <li>
            {lang === 'en'
              ? 'Accountability State Authority & Central Agency for Public Mobilization and Statistics (oversight and statistical roles)'
              : 'الجهاز المركزي للمحاسبات والجهاز المركزي للتعبئة العامة والإحصاء (أعمال رقابية وإحصائية)'}
          </li>
        </ul>
      </div>
    </section>
  );
}

