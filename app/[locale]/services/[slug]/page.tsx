import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/content/site-config';
import ServiceDetailClient from '@/components/sections/ServiceDetailClient';

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // Simple stub for mapping slug back to service title
  const serviceTitle = siteConfig.services.find(s => s.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === slug || slug.includes(s.split(' ')[0].toLowerCase()));

  if (!serviceTitle && !['home-cleaning', 'office-cleaning', 'window-cleaning', 'kitchen-deep-cleaning', 'carpet-sofa-shampooing'].includes(slug)) {
    notFound();
  }

  const title = serviceTitle || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return <ServiceDetailClient title={title} slug={slug} />;
}
