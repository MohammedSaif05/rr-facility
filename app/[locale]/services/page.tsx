import { setRequestLocale } from 'next-intl/server';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24 pb-12">
      <ServicesGrid />
    </div>
  );
}
