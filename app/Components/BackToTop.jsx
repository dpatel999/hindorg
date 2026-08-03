'use client';
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="back-to-top-btn"
      style={{
        position: 'fixed',
        bottom: 'max(16px, env(safe-area-inset-bottom, 16px))',
        left: 'max(14px, env(safe-area-inset-left, 14px))',
        zIndex: 99998,
        width: '44px',
        height: '44px',
        backgroundColor: 'var(--navy)',
        color: '#fff',
        border: 'none',
        borderRadius: '2px',
        fontSize: '18px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'all 200ms ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--gold)';
        e.currentTarget.style.color = 'var(--navy-dark)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--navy)';
        e.currentTarget.style.color = '#fff';
      }}
    >
      ↑
    </button>
  );
}
