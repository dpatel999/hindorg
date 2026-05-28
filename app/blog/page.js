'use client';
import Link from 'next/link';
import { automationTaxationBlogs } from '../data/blogs-automation-taxation';

export default function BlogListing() {
  const posts = automationTaxationBlogs;

  return (
    <div style={{
      backgroundColor: '#0A0A0A',
      color: '#F5F5F5',
      minHeight: '100vh',
      padding: '60px 20px 100px'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ color: '#00D4FF', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Knowledge & Perspective
          </div>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700, 
            letterSpacing: '-0.025em',
            marginBottom: '16px',
            color: '#fff'
          }}>
            Automation & Taxation in Indian Chemical Manufacturing
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#A3A3A3', 
            maxWidth: '620px',
            lineHeight: 1.6 
          }}>
            Practical insights from Hindustan Organics and X9Elysium on scaling chemical supply to Canada and the United States.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
          gap: '24px' 
        }}>
          {posts.map((post, index) => (
            <Link 
              key={index} 
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                backgroundColor: '#161616',
                border: '1px solid #2A2A2A',
                padding: '32px 28px',
                height: '100%',
                transition: 'all 200ms ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00D4FF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2A2A2A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{ 
                  fontSize: '12px', 
                  color: '#00D4FF', 
                  letterSpacing: '1px',
                  marginBottom: '12px' 
                }}>
                  {post.category} • {post.readTime}
                </div>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  lineHeight: 1.3,
                  color: '#fff',
                  marginBottom: '14px'
                }}>
                  {post.title}
                </h2>
                <p style={{ 
                  fontSize: '14.5px', 
                  color: '#A3A3A3', 
                  lineHeight: 1.6 
                }}>
                  {post.excerpt}
                </p>
                <div style={{ 
                  marginTop: '24px', 
                  fontSize: '13px', 
                  color: '#00D4FF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  Read article <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ 
          marginTop: '80px', 
          paddingTop: '40px',
          borderTop: '1px solid #2A2A2A',
          textAlign: 'center',
          color: '#A3A3A3',
          fontSize: '15px'
        }}>
          These perspectives are drawn from real operations at Hindustan Organics and our North American expansion through X9Elysium.
          <br /><br />
          <a 
            href="https://www.hindorg.com#contact" 
            style={{ color: '#00D4FF', textDecoration: 'none' }}
          >
            Talk to us about your chemical requirements in Canada or the USA →
          </a>
        </div>
      </div>
    </div>
  );
}
