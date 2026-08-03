import { automationTaxationBlogs } from './data/blogs-automation-taxation'

export default function sitemap() {
  const baseUrl = 'https://www.hindorg.com'
  const now = new Date()

  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogPages = automationTaxationBlogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'yearly',
    priority: 0.55,
  }))

  return [...staticPages, ...blogPages]
}
