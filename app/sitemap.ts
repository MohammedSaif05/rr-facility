import { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;
  const locales = ['en', 'ar'];

  const routes = [
    '',
    '/about',
    '/contact',
    '/careers',
    '/services',
    '/service-areas',
    ...siteConfig.services.map(s => `/services/${s.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`),
    ...['doha', 'al-wakrah', 'al-rayyan', 'al-khor'].map(area => `/service-areas/${area}`)
  ];

  return routes.flatMap((route) => 
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    }))
  );
}
