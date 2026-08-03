import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyUs from '@/components/sections/WhyUs';
import HomeGallery from '@/components/sections/HomeGallery';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <HomeGallery />
    </>
  );
}
