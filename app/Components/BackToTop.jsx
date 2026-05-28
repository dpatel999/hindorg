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
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '28px',
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
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--navy)')}
    >
      ↑
    </button>
  );
}
