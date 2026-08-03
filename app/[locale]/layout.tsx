import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import "../globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getLocalBusinessJsonLd, getOrganizationJsonLd } from '@/lib/seo';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
});

import { siteConfig } from '@/content/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    template: '%s | Refined Radiance',
    default: 'Refined Radiance Facility Management | Qatar',
  },
  description: 'Premium facility management and specialized cleaning services across Qatar.',
  openGraph: {
    type: 'website',
    locale: 'en_QA',
    alternateLocale: 'ar_QA',
    url: '/',
    siteName: 'Refined Radiance',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Refined Radiance Facility Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refined Radiance Facility Management',
    description: 'Premium facility management and specialized cleaning services across Qatar.',
    images: ['/images/hero.png'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([getLocalBusinessJsonLd(), getOrganizationJsonLd()]) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
