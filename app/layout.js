import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

// import Header from './Components/Header/Header'

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

export const metadata = {
  title: 'Hindustan Organics | Industrial Chemicals & High-Purity Solvents Manufacturer',
  description: 'Hindustan Organics is a leading manufacturer and supplier of high-purity industrial solvents, specialty chemicals, and refined hydrocarbons in India. Trusted by 500+ clients across pharmaceuticals, paints, adhesives, and manufacturing industries since 1995.',
  icons: {
    icon: '/icons/favicon.ico',
  },
  metadataBase: new URL('https://www.hindorg.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hindustan Organics | Premium Industrial Chemicals & Solvents',
    description: 'High-purity solvents and specialty chemicals supplier. Methylene Dichloride, IPA, Toluene, Acetonitrile, Ethyl Acetate and 40+ industrial chemicals with rigorous quality control.',
    url: 'https://www.hindorg.com',
    siteName: 'Hindustan Organics',
    images: [
      {
        url: '/seo/og-image-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Hindustan Organics - Industrial Chemicals Manufacturer',
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
    title: 'Hindustan Organics | Industrial Chemicals & Solvents',
    description: 'Leading supplier of high-purity industrial solvents and specialty chemicals in India. 500+ clients trust our quality and reliability.',
    images: ['/seo/og-image-horizontal.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico"/>
        <meta name="keywords" content="industrial chemicals, high purity solvents, methylene dichloride, isopropyl alcohol, toluene, acetonitrile, ethyl acetate, chemical supplier India, solvent manufacturer Ahmedabad, pharmaceutical chemicals, paint chemicals" />
        <meta name="author" content="Hindustan Organics" />
        <meta name="robots" content="index, follow" />



      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>

        {/* <nav className='headwrapper'><Header/></nav> */}
        <div className='container'>
          {children}
        </div>

        {/* Organization + LocalBusiness Structured Data for SEO + GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.hindorg.com/#organization",
                  "name": "Hindustan Organics",
                  "url": "https://www.hindorg.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.hindorg.com/Assets/Layer_2.png"
                  },
                  "description": "Leading manufacturer and supplier of high-purity industrial solvents and specialty chemicals in India.",
                  "foundingDate": "1995",
                  "areaServed": "India",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-94270-50266",
                    "contactType": "sales",
                    "email": "sales@hindorg.com"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.hindorg.com/#localbusiness",
                  "name": "Hindustan Organics",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Plot No C-1, 1114/C, Behind Gayatri Temple Road, Phase 4, GIDC Estate, Naroda",
                    "addressLocality": "Ahmedabad",
                    "addressRegion": "Gujarat",
                    "postalCode": "382330",
                    "addressCountry": "IN"
                  },
                  "telephone": "+91-94270-50266",
                  "email": "sales@hindorg.com",
                  "openingHours": "Mo-Sa 09:00-18:00",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "23.099333",
                    "longitude": "72.677923"
                  },
                  "image": "https://www.hindorg.com/seo/og-image-horizontal.png"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
