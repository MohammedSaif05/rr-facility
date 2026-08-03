import { setRequestLocale, getTranslations } from 'next-intl/server';
import ServicesGrid from '@/components/sections/ServicesGrid';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('servicesTitle'),
    description: t('servicesDesc'),
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24 pb-12">
      <ServicesGrid />
    </div>
  );
}
