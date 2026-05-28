'use client';
import { useState } from 'react';
import Styles from './FAQ.module.css';

const faqs = [
  {
    q: "What industrial chemicals and solvents do you supply?",
    a: "We offer over 40 high-purity industrial solvents and specialty chemicals including Methylene Dichloride (MDC), Isopropyl Alcohol (IPA), Toluene, Acetonitrile, Ethyl Acetate, Ethylene Dichloride (EDC), n-Hexane, Cyclohexane, Tetrahydrofuran (THF), and custom solvent blends.",
  },
  {
    q: "Do you provide high-purity or low-moisture grades?",
    a: "Yes. We routinely supply water-white, high-purity (up to 99%+ by GC) and low-moisture grades (<0.5% or <0.2% moisture) tailored to pharmaceutical, electronics, and specialty chemical applications.",
  },
  {
    q: "Which industries do you primarily serve?",
    a: "Our clients include pharmaceutical manufacturers, paint & coatings companies, adhesive & sealant producers, rubber & polymer processors, agrochemical formulators, and industrial cleaning chemical manufacturers.",
  },
  {
    q: "Are you a manufacturer or a trading company?",
    a: "We are an established chemical processing and refining company with our own distillation and quality control infrastructure in Naroda GIDC, Ahmedabad, combined with strong long-term sourcing partnerships.",
  },
  {
    q: "What is your typical lead time and minimum order quantity?",
    a: "Standard products are usually available ex-stock or within 3–7 days. MOQ varies by product — common pack sizes start from 200 litres / 160–180 kg drums. Tanker loads are also available for bulk buyers.",
  },
  {
    q: "Do you offer custom blending, drumming, or private labelling?",
    a: "Yes. We regularly produce custom solvent blends, offer drumming in customer-specified packaging, and can support private label requirements for qualified buyers.",
  },
  {
    q: "How do you ensure consistent product quality?",
    a: "Every batch undergoes in-house GC, moisture, and visual testing. We maintain strict incoming raw material checks and final release protocols aligned with customer specifications and industry standards.",
  },
  {
    q: "Which regions across India do you supply?",
    a: "We regularly supply across Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Delhi-NCR, Uttar Pradesh, Telangana, Karnataka, and Tamil Nadu, with reliable logistics partners for pan-India delivery.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={Styles.faqwrapper}>
      <div className={Styles.faqchild}>
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <span className="section-subtitle">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="section-divider" style={{ margin: '0 auto 20px' }} />

        <div className={Styles.faqgrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={Styles.faqitem}>
              <div
                className={Styles.faqq}
                onClick={() => toggle(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(index)}
              >
                {faq.q}
                <span style={{ fontSize: '20px', lineHeight: 1, color: 'var(--gold)' }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && <div className={Styles.faqa}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* FAQPage Structured Data for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
