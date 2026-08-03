import { setRequestLocale, getTranslations } from 'next-intl/server';
import CareersClient from '@/components/sections/CareersClient';
import { getJobPostingJsonLd } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('careersTitle'),
    description: t('careersDesc'),
  };
}

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJobPostingJsonLd()) }}
      />
      <CareersClient />
    </>
  );
}
