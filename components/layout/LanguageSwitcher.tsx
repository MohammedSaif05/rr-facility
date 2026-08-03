'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button 
      onClick={switchLanguage}
      className="text-sm font-medium hover:text-primary transition-colors border border-border px-3 py-1 rounded-md"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
