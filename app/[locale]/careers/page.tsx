import { setRequestLocale } from 'next-intl/server';
import CareersClient from '@/components/sections/CareersClient';

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CareersClient />;
}
