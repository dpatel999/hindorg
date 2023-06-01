import './globals.css'
// import Header from './Components/Header/Header'

export const metadata = {
  title: 'Hindustan Organics | The Chemistry of Success',
  description: 'Discover Hindustan Organics comprehensive range of high-quality chemicals and specialized products for various industries. Our rigorous quality control processes ensure safety and performance, making us your trusted solution provider.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico"/>
        <meta name="keywords" content="hindorg, hindustan organics, chemicals, high-quality, industrial-grade, solvents, adhesives, specialized, food, beverage, expertise, experience, quality control, safety, performance, products, range, materials, business solutions, industries" />
        <meta name="author" content="Hindustan Organics" />
        <meta property="og:image" content="https://www.hindorg.com/seo/og-image-horizontal.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://www.hindorg.com/seo/og-image-square.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.hindorg.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Hindustan Organics | The Chemistry of Success"/>
        <meta property="og:description" content="Discover Hindustan Organics comprehensive range of high-quality chemicals and specialized products for various industries. Our rigorous quality control processes ensure safety and performance, making us your trusted solution provider."/>
        <meta property="og:image" content="https://www.hindorg.com/seo/og-image-horizontal.png"/>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="hindorg.com"/>
        <meta property="twitter:url" content="https://www.hindorg.com/"/>
        <meta name="twitter:title" content="Hindustan Organics | The Chemistry of Success"/>
        <meta name="twitter:description" content="Discover Hindustan Organics comprehensive range of high-quality chemicals and specialized products for various industries. Our rigorous quality control processes ensure safety and performance, making us your trusted solution provider."/>
        <meta name="twitter:image" content="https://www.hindorg.com/seo/og-image-horizontal.png"/>



      </head>
      <body>

        {/* <nav className='headwrapper'><Header/></nav> */}
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}
