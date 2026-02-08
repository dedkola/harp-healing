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
    logo: 'https://www.crystalharphealing.com/logo_beige.webp',
    image: 'https://www.crystalharphealing.com/hero.webp',
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
    image: 'https://www.crystalharphealing.com/about_me.webp',
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

export function ReviewSchema() {
  const reviews = [
    { author: 'Maria F', body: 'With Zhenya\'s work, I was able to recognize certain revelations about my behavior. She helped me to uncover some of the many mysteries of who I am. I highly recommend her work.' },
    { author: 'Esteban', body: 'We ended up having an incredible, cathartic session that brought up a lot of things I had bottled up inside. It was a truly awesome experience.' },
    { author: 'Chel-model', body: 'I got more from this one session than I have with any other therapy session. I couldn\'t recommend her more! Zhenya\'s work is truly powerful.' },
    { author: 'Keion', body: 'I left feeling grounded, focused, and confident in my next steps. I\'d recommend Zhenya\'s work to anyone.' },
    { author: 'Yani', body: 'A symbiotic experience that recalibrated my mind, body, and spirit in a synergistic outcome. I am a very well satisfied grateful person again.' },
    { author: 'Dina', body: 'I could truly feel the shift from tension to deep relaxation. Her beautiful, calming energy and the healing sounds of the harp created such peace and transformation.' },
    { author: 'Jaelyn', body: 'After the session, I felt lighter, clearer, and more in tune with myself. I would highly recommend this to anyone.' },
    { author: 'Yev', body: 'Zhenya\'s session was transformative. Her session really gave me the clarity I\'ve been yearning for.' },
    { author: 'Emily', body: 'The tones were mesmerizing and seemed to flow through my entire body, helping release tension. I walked out feeling completely renewed, self-aware, and clear-minded.' },
    { author: 'Maria', body: 'I was very impressed by the insights I gained. It was an amazing experience.' },
    { author: 'Nancy', body: 'The sound resonated deeply through my entire body, bringing an overwhelming sense of peace and joy.' },
    { author: 'Karol', body: 'It felt like a small reset, a reminder to be softer with myself, to release judgment, and to make room for both mourning and presence.' },
    { author: 'Kseniya', body: 'I left feeling lighter and more grounded. Highly recommend, especially if you are doing it with Zhenya.' },
    { author: 'Ivonne', body: 'It was my first time experiencing a Crystal Harp healing session and will definitely not be the last. Thank you Zhenya for holding space during this process.' },
    { author: 'Yana', body: 'I finished the session feeling lighter, more centered, and deeply restored. I can\'t recommend Zhenya and her crystal harp therapy enough.' },
    { author: 'Thiri', body: 'I finished the session feeling uplifted and ready to focus. Overall, this was an amazing session and highly recommend Zhenya.' },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.crystalharphealing.com/#organization',
    name: 'Crystal Harp Healing',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5,
      bestRating: 5,
      ratingCount: reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody: r.body,
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'Crystal Harp Healing',
      },
    })),
  }

  return (
    <Script id="review-schema" type="application/ld+json">
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
  }

  return (
    <Script id="website-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
