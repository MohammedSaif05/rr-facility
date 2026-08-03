import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/content/site-config';
import ServiceDetailClient from '@/components/sections/ServiceDetailClient';
import { getServiceJsonLd } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });
  
  let translatedTitle = slug;
  if (slug === 'home-cleaning') translatedTitle = t('homeCleaning.title');
  if (slug === 'office-cleaning') translatedTitle = t('officeCleaning.title');
  if (slug === 'window-cleaning') translatedTitle = t('windowCleaning.title');
  if (slug === 'kitchen-deep-cleaning') translatedTitle = t('kitchenCleaning.title');
  if (slug === 'carpet-sofa-shampooing') translatedTitle = t('carpetCleaning.title');

  return {
    title: translatedTitle,
    description: t('overviewText'),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const serviceTitle = siteConfig.services.find(s => s.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === slug || slug.includes(s.split(' ')[0].toLowerCase()));

  if (!serviceTitle && !['home-cleaning', 'office-cleaning', 'window-cleaning', 'kitchen-deep-cleaning', 'carpet-sofa-shampooing'].includes(slug)) {
    notFound();
  }

  const title = serviceTitle || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const t = await getTranslations({ locale, namespace: 'Services' });
  const desc = t('overviewText');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceJsonLd(title, desc, slug)) }}
      />
      <ServiceDetailClient title={title} slug={slug} />
    </>
  );
}
