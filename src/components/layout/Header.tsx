'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { messages } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { lang, setLang } = useLanguage();
  const t = messages[lang];
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/request-service', label: t.nav.requestService },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/contact', label: t.nav.contact }
  ];

  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-brand text-white flex items-center justify-center text-lg font-semibold">
            MS
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">{t.brandName}</div>
            <div className="text-xs text-slate-500">{t.brandRole}</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  'transition-colors',
                  isActive
                    ? 'text-brand border-b-2 border-brand pb-1'
                    : 'text-slate-600 hover:text-brand'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={classNames(
              'px-3 py-1 text-xs rounded-full border transition',
              lang === 'en'
                ? 'bg-brand text-white border-brand'
                : 'border-slate-300 text-slate-600 hover:border-brand hover:text-brand'
            )}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang('ar')}
            className={classNames(
              'px-3 py-1 text-xs rounded-full border transition',
              lang === 'ar'
                ? 'bg-brand text-white border-brand'
                : 'border-slate-300 text-slate-600 hover:border-brand hover:text-brand'
            )}
          >
            AR
          </button>
        </div>
      </div>
      <nav className="md:hidden border-t border-slate-100 px-3 py-2 flex gap-3 overflow-x-auto text-xs">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                'whitespace-nowrap rounded-full px-3 py-1 border transition',
                isActive
                  ? 'bg-brand text-white border-brand'
                  : 'border-slate-200 text-slate-600 hover:border-brand hover:text-brand'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

