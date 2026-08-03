'use client';
import { useState, useEffect } from 'react';
import Styles from './Card.module.css';

export default function Card({ datasr }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={Styles.cardwrapper}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${datasr.name}${datasr.cas ? `, CAS ${datasr.cas}` : ''}`}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
      >
        <div className={Styles.cardBody}>
          {datasr.category && <span className={Styles.category}>{datasr.category}</span>}
          <span className={Styles.name}>{datasr.name}</span>
          {datasr.cas && <span className={Styles.cas}>CAS {datasr.cas}</span>}
        </div>
        <span className={Styles.arrow} aria-hidden="true">
          →
        </span>
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
              <div>
                {datasr.category && <span className={Styles.modalCat}>{datasr.category}</span>}
                <span className={Styles.modalTitle}>{datasr.name}</span>
                {datasr.cas && <span className={Styles.modalCas}>CAS Registry No. {datasr.cas}</span>}
              </div>
            </div>
            <div className={Styles.uline} />
            <div className={Styles.descinner}>
              {datasr.description.map((item, index) => (
                <p key={index}>
                  <span className={Styles.bullet}>•</span> {item}
                </p>
              ))}
            </div>
            <div className={Styles.modalActions}>
              <a href="#inquiry" className={Styles.quoteBtn} onClick={() => setIsOpen(false)}>
                Request Quote
              </a>
              <button
                type="button"
                className={Styles.close}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
