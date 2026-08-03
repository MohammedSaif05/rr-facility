import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/content/site-config';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const tServices = useTranslations('Services');
  
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="space-y-4">
          <Image src="/images/logo.png" alt={t('company')} width={180} height={72} className="object-contain max-h-14 w-auto mb-4" />
          <p className="text-sm text-secondary-foreground/80 leading-relaxed">
            {t('tagline')}
          </p>
          <p className="text-xs font-semibold text-primary mt-2">{t('partOf', { defaultMessage: 'Part of the Refined Radiance Group' })}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground">{t('quickLinks')}</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-sm hover:text-primary transition-colors">{tNav('home')}</Link></li>
            <li><Link href="/services" className="text-sm hover:text-primary transition-colors">{tNav('services')}</Link></li>
            <li><Link href="/about" className="text-sm hover:text-primary transition-colors">{tNav('about')}</Link></li>
            <li><Link href="/careers" className="text-sm hover:text-primary transition-colors">{tNav('careers')}</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">{tNav('contact')}</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground">{tServices('coreServices')}</h3>
          <ul className="space-y-3">
            <li className="text-sm text-secondary-foreground/80">{tServices('homeCleaning.title')}</li>
            <li className="text-sm text-secondary-foreground/80">{tServices('officeCleaning.title')}</li>
            <li className="text-sm text-secondary-foreground/80">{tServices('windowCleaning.title')}</li>
            <li className="text-sm text-secondary-foreground/80">{tServices('kitchenCleaning.title')}</li>
            <li className="text-sm text-secondary-foreground/80">{tServices('carpetCleaning.title')}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground">{t('contact')}</h3>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2">
              <span className="font-medium text-primary">P:</span>
              <span dir="ltr">{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-primary">E:</span>
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-primary">A:</span>
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-center text-sm text-secondary-foreground/60">
        {t('copyright')}
      </div>
    </footer>
  );
}
