import { setRequestLocale, getTranslations } from 'next-intl/server';
import AboutClient from '@/components/sections/AboutClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('aboutTitle'),
    description: t('aboutDesc'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutClient />;
}
