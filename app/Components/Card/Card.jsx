'use client';
import { useState, useEffect } from 'react';
import Styles from './Card.module.css';

export default function Card({ datasr }) {
  const [isOpen, setIsOpen] = useState(false);

  // ESC key support for modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <>
      <div
        className={Styles.cardwrapper}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${datasr.name}`}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
      >
        <span>{datasr.name}</span>
        <span className={Styles.arrow}>→</span>
      </div>

      {isOpen && (
        <div
          className={Styles.fullback}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Product details: ${datasr.name}`}
        >
          <div className={Styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={Styles.titlewsvg}>
              <span>{datasr.name}</span>
            </div>
            <div className={Styles.uline} />
            <div className={Styles.descinner}>
              {datasr.description.map((item, index) => (
                <p key={index}>• {item}</p>
              ))}
            </div>
            <div
              className={Styles.close}
              onClick={() => setIsOpen(false)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </>
  );
}

