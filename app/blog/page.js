import Link from 'next/link';
import { automationTaxationBlogs } from '../data/blogs-automation-taxation';

export const metadata = {
  title: 'Insights — Automation, Taxation & Chemical Supply',
  description:
    'Practical insights from Hindustan Organics on chemical manufacturing automation, GST, quality control, and industrial solvent supply in India.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Hindustan Organics Insights | Chemicals, Automation & Trade',
    description:
      'Articles on quality, automation, taxation, and chemical manufacturing from Hindustan Organics.',
    url: 'https://www.hindorg.com/blog',
  },
};

export default function BlogListing() {
  const posts = automationTaxationBlogs;

  return (
    <div
      style={{
        backgroundColor: '#F6F4EF',
        color: '#1A1F26',
        minHeight: '100vh',
      }}
    >
      <header
        style={{
          background: '#0B1D36',
          padding: '18px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/" style={{ color: '#fff', fontWeight: 600, fontSize: '15px' }}>
            ← Hindustan Organics
          </Link>
          <Link
            href="/#inquiry"
            style={{
              color: '#0B1D36',
              background: '#D4AF37',
              padding: '10px 16px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
            }}
          >
            Get a Quote
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px 100px' }}>
        <div style={{ marginBottom: '48px', maxWidth: '680px' }}>
          <div
            style={{
              color: '#B8912A',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '12px',
            }}
          >
            Knowledge & Perspective
          </div>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              marginBottom: '16px',
              color: '#0B1D36',
              fontFamily: 'var(--font-playfair), Georgia, serif',
              lineHeight: 1.15,
            }}
          >
            Automation, Taxation & Chemical Supply Insights
          </h1>
          <p
            style={{
              fontSize: '17px',
              color: '#3D4654',
              lineHeight: 1.7,
            }}
          >
            Practical perspectives from Hindustan Organics on high-purity solvent supply, quality
            systems, compliance, and chemical manufacturing in India.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #D8DDE5',
                  padding: '28px 24px',
                  height: '100%',
                  transition: 'all 200ms ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    color: '#B8912A',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  {post.category} · {post.readTime}
                </div>
                <h2
                  style={{
                    fontSize: '19px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#0B1D36',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: '14.5px',
                    color: '#3D4654',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    marginTop: '20px',
                    fontSize: '13px',
                    color: '#0B1D36',
                    fontWeight: 600,
                  }}
                >
                  Read article →
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div
          style={{
            marginTop: '72px',
            padding: '36px 28px',
            background: '#0B1D36',
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
            fontSize: '15px',
            lineHeight: 1.7,
          }}
        >
          Need high-purity solvents for your manufacturing operations in India?
          <br />
          <Link
            href="/#inquiry"
            style={{
              color: '#D4AF37',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-block',
              marginTop: '12px',
            }}
          >
            Talk to Hindustan Organics →
          </Link>
        </div>
      </div>
    </div>
  );
}
