'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { automationTaxationBlogs } from '../../data/blogs-automation-taxation';

export default function BlogPost({ params }) {
  const post = automationTaxationBlogs.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{
      backgroundColor: '#0A0A0A',
      color: '#F5F5F5',
      minHeight: '100vh',
      padding: '60px 20px 100px'
    }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <Link 
          href="/blog" 
          style={{ 
            color: '#00D4FF', 
            fontSize: '14px', 
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '32px'
          }}
        >
          ← Back to all articles
        </Link>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            fontSize: '12px', 
            color: '#00D4FF', 
            letterSpacing: '1.5px',
            marginBottom: '12px' 
          }}>
            {post.category} • {post.readTime} • {post.date}
          </div>
          <h1 style={{ 
            fontSize: '38px', 
            fontWeight: 700, 
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            color: '#fff'
          }}>
            {post.title}
          </h1>
          <div style={{ 
            marginTop: '20px', 
            fontSize: '15px', 
            color: '#A3A3A3' 
          }}>
            By {post.author} — Hindustan Organics & X9Elysium
          </div>
        </div>

        <div style={{ 
          fontSize: '17px', 
          lineHeight: 1.75, 
          color: '#EAEAEA',
          whiteSpace: 'pre-wrap'
        }}>
          {post.content}
        </div>

        <div style={{
          marginTop: '80px',
          padding: '40px',
          backgroundColor: '#161616',
          border: '1px solid #2A2A2A',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '15px', color: '#A3A3A3', marginBottom: '16px' }}>
            Need high-purity solvents or specialty chemicals for your operations in Canada or the USA?
          </div>
          <a 
            href="https://www.hindorg.com#contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#00D4FF',
              color: '#0A0A0A',
              padding: '14px 36px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px'
            }}
          >
            Talk to X9Elysium
          </a>
        </div>
      </div>
    </div>
  );
}
