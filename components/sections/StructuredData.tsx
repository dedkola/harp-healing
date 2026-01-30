import Script from 'next/script'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.crystalharphealing.com/#organization',
    name: 'Crystal Harp Healing',
    description:
      'Vibrational healing for emotional balance, nervous system regulation, and inner alignment through crystal harp sound therapy.',
    url: 'https://www.crystalharphealing.com',
    logo: 'https://www.crystalharphealing.com/logo_beige.png',
    image: 'https://www.crystalharphealing.com/hero.png',
    telephone: '+1-323-841-2348',
    email: 'connect@crystalharphealing.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Los Angeles',
    },
    founder: {
      '@type': 'Person',
      name: 'Zhenya',
      jobTitle: 'Sound Healer & Psychotherapist',
      description:
        'Sound healer with a background in psychotherapy, specializing in psycho-sound healing',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sound Healing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Individual Sound Healing Sessions',
            description:
              '60-75 minute personalized sound healing with emotional regulation and gentle somatic attunement',
            serviceType: 'Sound Healing Therapy',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Group Sound Healing Sessions',
            description: 'Shared vibrational experience for families, friends, or circles',
            serviceType: 'Group Sound Healing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Workshops and Corporate Events',
            description: 'Public or private gatherings with crystal harp healing',
            serviceType: 'Sound Bath Events',
          },
        },
      ],
    },
    sameAs: [],
  }

  return (
    <Script id="local-business-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.crystalharphealing.com/about#zhenya',
    name: 'Zhenya',
    jobTitle: 'Sound Healer & Psychotherapist',
    description:
      'Sound healer with a background in psychotherapy, specializing in psycho-sound healing - integrating vibrational therapy with psychological attunement',
    url: 'https://www.crystalharphealing.com/about',
    image: 'https://www.crystalharphealing.com/about_me.jpg',
    worksFor: {
      '@id': 'https://www.crystalharphealing.com/#organization',
    },
    knowsAbout: [
      'Sound Healing',
      'Crystal Harp Therapy',
      'Psychotherapy',
      'Vibrational Therapy',
      'Nervous System Regulation',
      'Trauma-Informed Care',
      'Somatic Awareness',
    ],
  }

  return (
    <Script id="person-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script id="breadcrumb-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.crystalharphealing.com/#website',
    url: 'https://www.crystalharphealing.com',
    name: 'Crystal Harp Healing',
    description:
      'Vibrational healing for emotional balance, nervous system regulation, and inner alignment',
    publisher: {
      '@id': 'https://www.crystalharphealing.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.crystalharphealing.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script id="website-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
