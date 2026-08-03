'use client';
import Image from 'next/legacy/image';
import Styles from './Whychoose.module.css';

const reasons = [
  {
    icon: '/Assets/trust.png',
    label: 'Trust & Integrity',
    desc: 'Transparent commercial practices and long-term relationships over one-time transactions.',
  },
  {
    icon: '/Assets/perfec.png',
    label: 'Batch Consistency',
    desc: 'GC, moisture, and visual checks so every drum matches the grade you approved.',
  },
  {
    icon: '/Assets/time.png',
    label: 'Supply Reliability',
    desc: 'Ready stock, flexible packs, and tanker capability with dependable pan-India logistics.',
  },
  {
    icon: '/Assets/larg.png',
    label: 'Technical Fit',
    desc: 'Low-moisture and high-purity options tailored for pharma, coatings, and specialty uses.',
  },
  {
    icon: '/Assets/grow.png',
    label: 'Pan-India Reach',
    desc: 'Reliable logistics across major industrial hubs with flexible drum and tanker options.',
  },
];

export default function Whychoose() {
  return (
    <div className={Styles.mainwcuwrapper}>
      <div className={Styles.wcuchild}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Competitive Edge</span>
          <h2 className="section-title">Why Industrial Buyers Choose Us</h2>
        </div>
        <div className="section-divider" style={{ margin: '0 auto 20px' }} />

        <p className={Styles.contentwcu}>
          Large listed chemical companies win on scale. Commodity traders win on price alone. We
          compete where mid-to-large industrial buyers actually feel risk — quality consistency,
          specification flexibility, and people who pick up the phone when a plant needs material.
        </p>

        <div className={Styles.cardwrapper}>
          {reasons.map((reason) => (
            <div key={reason.label} className={Styles.card}>
              <div className={Styles.iconWrap}>
                <Image
                  src={reason.icon}
                  alt=""
                  width={38}
                  height={38}
                  objectFit="contain"
                  aria-hidden="true"
                />
              </div>
              <h3>{reason.label}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
