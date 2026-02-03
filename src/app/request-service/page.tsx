'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type FormState = {
  clientName: string;
  companyName: string;
  serviceType: string;
  projectDescription: string;
  budgetRange: string;
  deadline: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  clientName: '',
  companyName: '',
  serviceType: '',
  projectDescription: '',
  budgetRange: '',
  deadline: '',
  email: '',
  phone: ''
};

export default function RequestServicePage() {
  const { lang } = useLanguage();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const res = await fetch('/api/request-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Request failed');
      }

      setMessage(
        lang === 'en'
          ? 'Your request has been submitted successfully. A confirmation has been sent via WhatsApp and email.'
          : 'تم إرسال طلبكم بنجاح، وتم إرسال تأكيد عبر الواتساب والبريد الإلكتروني.'
      );
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setError(
        lang === 'en'
          ? 'We could not submit your request at the moment. Please try again in a few minutes.'
          : 'تعذر إرسال الطلب حالياً، برجاء المحاولة مرة أخرى بعد قليل.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container-page space-y-8">
      <div className="card space-y-3">
        <h1 className="text-2xl font-semibold text-slate-900">
          {lang === 'en' ? 'Request a Service' : 'طلب خدمة'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'en'
            ? 'Please provide accurate details so that your request can be reviewed quickly and professionally. All information is handled with strict confidentiality.'
            : 'برجاء إدخال بيانات دقيقة حتى يمكن دراسة طلبكم بسرعة وباحترافية. يتم التعامل مع جميع المعلومات بسرية تامة.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1 text-sm">
            <label className="font-medium">
              {lang === 'en' ? 'Client Name' : 'اسم طالب الخدمة'}
            </label>
            <input
              type="text"
              required
              value={form.clientName}
              onChange={(e) => handleChange('clientName', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="font-medium">
              {lang === 'en' ? 'Company Name (if applicable)' : 'اسم الشركة (إن وجد)'}
            </label>
            <input
              type="text"
              value={form.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1 text-sm">
            <label className="font-medium">
              {lang === 'en' ? 'Service Type' : 'نوع الخدمة المطلوبة'}
            </label>
            <select
              required
              value={form.serviceType}
              onChange={(e) => handleChange('serviceType', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="">
                {lang === 'en' ? 'Select a service' : 'اختر الخدمة'}
              </option>
              <option value="financial-statements">
                {lang === 'en'
                  ? 'Preparation of financial statements & closing accounts'
                  : 'إعداد القوائم المالية والحسابات الختامية'}
              </option>
              <option value="financial-analysis">
                {lang === 'en' ? 'Financial analysis' : 'التحليل المالي'}
              </option>
              <option value="tax-accounting">
                {lang === 'en' ? 'Tax accounting & returns' : 'المحاسبة الضريبية والإقرارات'}
              </option>
              <option value="internal-audit">
                {lang === 'en' ? 'Internal audit' : 'المراجعة الداخلية'}
              </option>
              <option value="cost-systems">
                {lang === 'en' ? 'Cost systems design' : 'تصميم نظم التكاليف'}
              </option>
              <option value="budgeting">
                {lang === 'en'
                  ? 'Budgeting & performance monitoring'
                  : 'إعداد الموازنات والرقابة عليها'}
              </option>
              <option value="feasibility">
                {lang === 'en' ? 'Feasibility study' : 'دراسات الجدوى'}
              </option>
              <option value="cashflow">
                {lang === 'en' ? 'Cash flow & treasury' : 'التدفقات النقدية والخزينة'}
              </option>
              <option value="other">
                {lang === 'en' ? 'Other financial advisory' : 'استشارات مالية أخرى'}
              </option>
            </select>
          </div>

          <div className="space-y-1 text-sm">
            <label className="font-medium">
              {lang === 'en' ? 'Budget Range (EGP)' : 'النطاق التقريبي للميزانية (جنيه مصري)'}
            </label>
            <input
              type="text"
              value={form.budgetRange}
              onChange={(e) => handleChange('budgetRange', e.target.value)}
              placeholder={lang === 'en' ? 'Example: 200,000 – 500,000' : 'مثال: 200,000 – 500,000'}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>

        <div className="space-y-1 text-sm">
          <label className="font-medium">
            {lang === 'en' ? 'Project Description' : 'وصف مختصر للمشروع أو الطلب'}
          </label>
          <textarea
            required
            value={form.projectDescription}
            onChange={(e) => handleChange('projectDescription', e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-1 text-sm">
            <label className="font-medium">
              {lang === 'en' ? 'Preferred Deadline' : 'الموعد الزمني المتوقع'}
            </label>
            <input
              type="text"
              value={form.deadline}
              onChange={(e) => handleChange('deadline', e.target.value)}
              placeholder={lang === 'en' ? 'e.g., within 4 weeks' : 'مثال: خلال 4 أسابيع'}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="font-medium">
              {lang === 'en' ? 'Email' : 'البريد الإلكتروني'}
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="font-medium">
              {lang === 'en' ? 'Phone / WhatsApp' : 'الهاتف / واتساب'}
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>

        {message && (
          <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 text-xs text-emerald-800">
            {message}
          </div>
        )}
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-800">
            {error}
          </div>
        )}

        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting
            ? lang === 'en'
              ? 'Submitting...'
              : 'جاري الإرسال...'
            : lang === 'en'
            ? 'Submit Request'
            : 'إرسال الطلب'}
        </button>
      </form>
    </section>
  );
}

