import { siteConfig } from '@/content/site-config';

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: `https://${siteConfig.domain}`,
    logo: `https://${siteConfig.domain}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
      availableLanguage: ['English', 'Arabic']
    },
    sameAs: [
      // Add social links here if available
    ]
  };
}

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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2723549,
      longitude: 51.5249841
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    areaServed: ['Doha', 'Al Wakrah', 'Al Rayyan', 'Al Khor']
  };
}

export function getJobPostingJsonLd() {
  // Configured specifically for the Facility Management Professional role
  const datePosted = new Date().toISOString().split('T')[0];
  const validThrough = new Date();
  validThrough.setMonth(validThrough.getMonth() + 6); // Valid for 6 months
  
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Facility Management Professional',
    description: '<p>Join Qatar\'s elite facility management team. We are looking for dedicated professionals to deliver premium cleaning and facility services. Responsibilities include deep cleaning, maintaining pristine environments, and ensuring customer satisfaction.</p>',
    identifier: {
      '@type': 'PropertyValue',
      name: siteConfig.name,
      value: 'RR-FM-2024'
    },
    datePosted: datePosted,
    validThrough: validThrough.toISOString().split('T')[0],
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: `https://${siteConfig.domain}`,
      logo: `https://${siteConfig.domain}/images/logo.png`
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressLocality: 'Doha',
        addressRegion: 'Doha',
        addressCountry: 'QA'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'QAR',
      value: {
        '@type': 'QuantitativeValue',
        value: 1000,
        unitText: 'MONTH'
      }
    },
    jobBenefits: 'Accommodation provided, Transportation provided, Health Card provided, Overtime available'
  };
}

export function getServiceJsonLd(serviceName: string, serviceDescription: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name
    },
    areaServed: {
      '@type': 'Country',
      name: 'Qatar'
    },
    description: serviceDescription,
    url: `https://${siteConfig.domain}/en/services/${slug}`
  };
}
