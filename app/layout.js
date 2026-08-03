import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://www.hindorg.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hindustan Organics | High-Purity Industrial Solvents & Specialty Chemicals Manufacturer India',
    template: '%s | Hindustan Organics',
  },
  description:
    'Hindustan Organics manufactures and supplies high-purity industrial solvents and specialty chemicals from Ahmedabad, Gujarat. MDC, IPA, Toluene, Acetonitrile, Ethyl Acetate, THF & 40+ products. Trusted by 500+ manufacturers across India since 1995.',
  keywords: [
    'industrial chemicals manufacturer India',
    'high purity solvents supplier',
    'methylene dichloride manufacturer',
    'isopropyl alcohol supplier Ahmedabad',
    'toluene supplier Gujarat',
    'acetonitrile manufacturer India',
    'ethyl acetate supplier',
    'THF tetrahydrofuran supplier',
    'pharmaceutical solvents India',
    'paint thinner manufacturer',
    'specialty chemicals Naroda GIDC',
    'chemical supplier Ahmedabad',
    'solvent manufacturer Gujarat',
    'low moisture solvents',
    'EDC ethylene dichloride',
    'n-hexane supplier India',
    'Hindustan Organics',
  ],
  authors: [{ name: 'Hindustan Organics', url: siteUrl }],
  creator: 'Hindustan Organics',
  publisher: 'Hindustan Organics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hindustan Organics | Premium Industrial Chemicals & High-Purity Solvents',
    description:
      'High-purity solvents & specialty chemicals from Ahmedabad. MDC, IPA, Toluene, Acetonitrile, Ethyl Acetate + 40 products. 500+ clients across India.',
    url: siteUrl,
    siteName: 'Hindustan Organics',
    images: [
      {
        url: '/seo/og-image-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Hindustan Organics — Industrial Chemicals & Solvents Manufacturer Ahmedabad',
      },
      {
        url: '/seo/og-image-square.png',
        width: 600,
        height: 600,
        alt: 'Hindustan Organics Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hindustan Organics | Industrial Chemicals & High-Purity Solvents',
    description:
      'Leading manufacturer of high-purity industrial solvents in India. 500+ clients. Naroda GIDC, Ahmedabad, Gujarat.',
    images: ['/seo/og-image-horizontal.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/favicon.ico',
  },
  category: 'business',
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad, Gujarat',
    'geo.position': '23.099333;72.677923',
    ICBM: '23.099333, 72.677923',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Hindustan Organics',
      legalName: 'Hindustan Organics',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Assets/Layer_2.png`,
        width: 220,
        height: 56,
      },
      image: `${siteUrl}/seo/og-image-horizontal.png`,
      description:
        'Manufacturer and supplier of high-purity industrial solvents and specialty chemicals based in Ahmedabad, Gujarat, India. Serving pharmaceutical, paint, adhesive, rubber, and manufacturing industries since 1995.',
      foundingDate: '1995',
      slogan: 'Reliable Chemistry. Consistent Quality.',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 10,
        maxValue: 50,
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      knowsAbout: [
        'Industrial solvents',
        'High-purity chemicals',
        'Methylene Dichloride',
        'Isopropyl Alcohol',
        'Toluene',
        'Acetonitrile',
        'Pharmaceutical solvents',
        'Paint thinners',
      ],
      sameAs: [],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-94270-50266',
          contactType: 'sales',
          email: 'hindorg@gmail.com',
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
          areaServed: 'IN',
        },
      ],
    },
    {
      '@type': ['LocalBusiness', 'Manufacturer'],
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Hindustan Organics',
      image: `${siteUrl}/seo/og-image-horizontal.png`,
      url: siteUrl,
      telephone: '+91-94270-50266',
      email: 'hindorg@gmail.com',
      priceRange: '$$',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Bank Transfer, Cheque',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Plot No C-1, 1114/C, Behind Gayatri Temple Road, Phase 4, GIDC Estate, Naroda',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '382330',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.099333,
        longitude: 72.677923,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      hasMap: 'https://goo.gl/maps/BPn3B2eEEfPuCiMCA',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Hindustan Organics',
      description: 'Official website of Hindustan Organics — high-purity industrial solvents manufacturer.',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#products`,
      name: 'Industrial Solvents & Specialty Chemicals',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Methylene Dichloride (CAS 75-09-2)' },
        { '@type': 'ListItem', position: 2, name: 'Isopropyl Alcohol (CAS 67-63-0)' },
        { '@type': 'ListItem', position: 3, name: 'Toluene (CAS 108-88-3)' },
        { '@type': 'ListItem', position: 4, name: 'Acetonitrile (CAS 75-05-8)' },
        { '@type': 'ListItem', position: 5, name: 'Ethyl Acetate (CAS 141-78-6)' },
        { '@type': 'ListItem', position: 6, name: 'Ethylene Dichloride (CAS 107-06-2)' },
        { '@type': 'ListItem', position: 7, name: 'n-Hexane (CAS 110-54-3)' },
        { '@type': 'ListItem', position: 8, name: 'Tetrahydrofuran THF (CAS 109-99-9)' },
      ],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="theme-color" content="#0B1D36" />
        <meta name="author" content="Hindustan Organics" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <div className="container">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
