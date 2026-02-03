export type SupportedLanguage = 'en' | 'ar';

export const isRtl = (lang: SupportedLanguage) => lang === 'ar';

export const messages = {
  en: {
    brandName: 'Mohamed Salah Eldin',
    brandRole: 'Chief Financial Officer & Strategic Financial Advisor',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      requestService: 'Request a Service',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    hero: {
      title: 'Trusted Financial Leadership for Complex Decisions',
      subtitle:
        'Decades of hands-on experience in corporate finance, budgeting, restructuring, and high‑stakes financial management across leading Egyptian and regional organizations.',
      ctaPrimary: 'Request a Service',
      ctaSecondary: 'Download CV'
    }
  },
  ar: {
    brandName: 'محمد صلاح الدين',
    brandRole: 'مدير مالي تنفيذي ومستشار مالي استراتيجي',
    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      services: 'الخدمات',
      requestService: 'طلب خدمة',
      portfolio: 'الأعمال والإنجازات',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'قيادة مالية موثوقة للقرارات المعقدة',
      subtitle:
        'خبرة عملية تمتد لعقود في الإدارة المالية، ووضع الموازنات، وإعادة الهيكلة، وإدارة المواقف المالية الحرجة في كبرى المؤسسات المصرية والإقليمية.',
      ctaPrimary: 'طلب خدمة',
      ctaSecondary: 'تحميل السيرة الذاتية'
    }
  }
} as const;

