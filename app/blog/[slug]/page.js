import { notFound } from 'next/navigation';
import Link from 'next/link';
import { automationTaxationBlogs } from '../../data/blogs-automation-taxation';

export function generateStaticParams() {
  return automationTaxationBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = automationTaxationBlogs.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://www.hindorg.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPost({ params }) {
  const post = automationTaxationBlogs.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Hindustan Organics',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hindustan Organics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.hindorg.com/Assets/Layer_2.png',
      },
    },
    mainEntityOfPage: `https://www.hindorg.com/blog/${post.slug}`,
  };

  return (
    <div
      style={{
        backgroundColor: '#F6F4EF',
        color: '#1A1F26',
        minHeight: '100vh',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <header
        style={{
          background: '#0B1D36',
          padding: '18px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/blog" style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>
            ← All insights
          </Link>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
            hindorg.com
          </Link>
        </div>
      </header>

      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '56px 20px 100px' }}>
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              fontSize: '12px',
              color: '#B8912A',
              letterSpacing: '1.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            {post.category} · {post.readTime}
            {post.date ? ` · ${post.date}` : ''}
          </div>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              color: '#0B1D36',
              fontFamily: 'var(--font-playfair), Georgia, serif',
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              marginTop: '18px',
              fontSize: '15px',
              color: '#6B7280',
            }}
          >
            By {post.author || 'Hindustan Organics'} — Hindustan Organics
          </div>
        </div>

        <div
          style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#1A1F26',
            whiteSpace: 'pre-wrap',
          }}
        >
          {post.content}
        </div>

        <div
          style={{
            marginTop: '72px',
            padding: '36px 28px',
            backgroundColor: '#0B1D36',
            border: '1px solid #132F54',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '18px' }}>
            Need high-purity solvents or specialty chemicals for your operations in India?
          </div>
          <Link
            href="/#inquiry"
            style={{
              display: 'inline-block',
              backgroundColor: '#D4AF37',
              color: '#0B1D36',
              padding: '14px 28px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Request a Quote
          </Link>
        </div>
      </article>
    </div>
  );
}
