import Link from 'next/link';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <span>© {year} Mohamed Salah Eldin. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:Masry1961@yahoo.com"
            className="hover:text-brand transition-colors"
          >
            Email
          </Link>
          <Link
            href="https://wa.me/201115573716"
            className="hover:text-brand transition-colors"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
};

