'use client';
import { useState } from 'react';
import Styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What industrial chemicals and solvents do you supply?',
    a: 'We offer 40+ high-purity industrial solvents and specialty chemicals including Methylene Dichloride (MDC, CAS 75-09-2), Isopropyl Alcohol (IPA), Toluene, Acetonitrile, Ethyl Acetate, Ethylene Dichloride (EDC), n-Hexane, Cyclohexane, Tetrahydrofuran (THF), DMF, DIPE, and custom solvent blends for paint, rubber, and industrial cleaning.',
  },
  {
    q: 'Do you provide high-purity or low-moisture grades?',
    a: 'Yes. We routinely supply water-white, high-purity (up to 99%+ by GC) and low-moisture grades (<0.5% or <0.2% moisture where applicable) tailored to pharmaceutical, coatings, and specialty chemical applications.',
  },
  {
    q: 'Which industries does Hindustan Organics primarily serve?',
    a: 'Our clients include pharmaceutical manufacturers, paint & coatings companies, adhesive & sealant producers, rubber & polymer processors, agrochemical formulators, and industrial cleaning chemical manufacturers across India.',
  },
  {
    q: 'Are you a manufacturer or only a trading company?',
    a: 'We are an established chemical processing and refining company with distillation and quality-control infrastructure in Naroda GIDC, Ahmedabad, combined with strong long-term sourcing partnerships — not a pure trading desk.',
  },
  {
    q: 'What is your typical lead time and minimum order quantity?',
    a: 'Standard products are usually available ex-stock or within 3–7 days. MOQ varies by product — common pack sizes start from 200 litres / 160–180 kg drums. Tanker loads are available for bulk buyers.',
  },
  {
    q: 'Do you offer custom blending, drumming, or private labelling?',
    a: 'Yes. We regularly produce custom solvent blends, offer drumming in customer-specified packaging, and can support private-label requirements for qualified industrial buyers.',
  },
  {
    q: 'How do you ensure consistent product quality?',
    a: 'Every batch undergoes in-house GC, moisture, and visual testing. We maintain incoming raw material checks and final release protocols aligned with customer specifications and industry standards.',
  },
  {
    q: 'Which regions across India do you supply?',
    a: 'We regularly supply across Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Delhi-NCR, Uttar Pradesh, Telangana, Karnataka, and Tamil Nadu, with reliable logistics partners for pan-India delivery.',
  },
  {
    q: 'Where is Hindustan Organics located?',
    a: 'Our facility is at Plot No C-1, 1114/C, Behind Gayatri Temple Road, Phase 4, GIDC Estate, Naroda, Ahmedabad, Gujarat 382330, India. Contact: +91 94270 50266 | hindorg@gmail.com.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={Styles.faqwrapper}>
      <div className={Styles.faqchild}>
        <div className={Styles.header}>
          <span className="section-subtitle">Knowledge Base</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="section-divider" style={{ margin: '0 auto 14px' }} />
          <p>
            Clear answers for procurement, plant, and quality teams — structured for search engines
            and AI assistants that surface supplier FAQs.
          </p>
        </div>

        <div className={Styles.faqgrid}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${Styles.faqitem} ${openIndex === index ? Styles.open : ''}`}
            >
              <button
                type="button"
                className={Styles.faqq}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.q}</span>
                <span className={Styles.icon} aria-hidden="true">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && <div className={Styles.faqa}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
