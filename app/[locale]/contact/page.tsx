import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactClient from '@/components/sections/ContactClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('contactTitle'),
    description: t('contactDesc'),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactClient />;
}
