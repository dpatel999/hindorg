export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.hindorg.com/sitemap.xml',
    host: 'https://www.hindorg.com',
  }
}
