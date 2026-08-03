'use client';
import { useState, useEffect } from 'react';
import Styles from './Card.module.css';

function buildWhatsAppUrl(product) {
  const cas = product.cas ? ` (CAS ${product.cas})` : '';
  const msg = `Hello Haresh Patel, I would like to inquire about ${product.name}${cas}. Please share availability, grade options, MOQ, and pricing.`;
  return `https://wa.me/919427050266?text=${encodeURIComponent(msg)}`;
}

export default function Card({ datasr }) {
  const [isOpen, setIsOpen] = useState(false);
  const waUrl = buildWhatsAppUrl(datasr);

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
        <div className={Styles.cardActions} onClick={(e) => e.stopPropagation()}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.waChip}
            aria-label={`WhatsApp inquiry for ${datasr.name}`}
            title="WhatsApp inquiry"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.206-.242-.592-.487-.51-.67-.51-.173 0-.372.025-.57.298-.198.298-.767.942-.767 2.293 0 1.35.787 2.66 1.04 2.86.254.2 1.78 2.71 4.3 3.79.603.26 1.073.416 1.44.532.605.192 1.157.165 1.592.1.486-.073 1.49-.61 1.7-1.2.21-.59.21-1.096.148-1.2-.062-.105-.23-.168-.48-.297z" />
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.762.46 3.47 1.334 4.96L2 22l5.102-1.312c1.45.79 3.08 1.21 4.9 1.21 5.522 0 9.999-4.477 9.999-9.999s-4.477-9.998-9.999-9.998zm0 18.267c-1.61 0-3.18-.42-4.55-1.22l-.33-.19-3.03.78.79-2.96-.21-.32c-.86-1.41-1.32-3.03-1.32-4.71 0-4.58 3.73-8.31 8.32-8.31 4.58 0 8.31 3.73 8.31 8.31-.01 4.59-3.74 8.32-8.32 8.32z" />
            </svg>
          </a>
          <span className={Styles.arrow} aria-hidden="true">
            →
          </span>
        </div>
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
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.waBtn}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.206-.242-.592-.487-.51-.67-.51-.173 0-.372.025-.57.298-.198.298-.767.942-.767 2.293 0 1.35.787 2.66 1.04 2.86.254.2 1.78 2.71 4.3 3.79.603.26 1.073.416 1.44.532.605.192 1.157.165 1.592.1.486-.073 1.49-.61 1.7-1.2.21-.59.21-1.096.148-1.2-.062-.105-.23-.168-.48-.297z" />
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.762.46 3.47 1.334 4.96L2 22l5.102-1.312c1.45.79 3.08 1.21 4.9 1.21 5.522 0 9.999-4.477 9.999-9.999s-4.477-9.998-9.999-9.998zm0 18.267c-1.61 0-3.18-.42-4.55-1.22l-.33-.19-3.03.78.79-2.96-.21-.32c-.86-1.41-1.32-3.03-1.32-4.71 0-4.58 3.73-8.31 8.32-8.31 4.58 0 8.31 3.73 8.31 8.31-.01 4.59-3.74 8.32-8.32 8.32z" />
                </svg>
                WhatsApp Inquiry
              </a>
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
