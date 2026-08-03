import { siteConfig } from '@/content/site-config';

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    image: `https://${siteConfig.domain}/images/hero.png`,
    '@id': `https://${siteConfig.domain}`,
    url: `https://${siteConfig.domain}`,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'Doha',
      addressRegion: 'Doha',
      addressCountry: 'QA'
    },
    areaServed: ['Doha', 'Al Wakrah', 'Al Rayyan', 'Al Khor']
  };
}
