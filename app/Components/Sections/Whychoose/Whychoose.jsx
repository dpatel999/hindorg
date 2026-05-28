'use client';
import Image from 'next/legacy/image';
import Styles from './Whychoose.module.css';

const reasons = [
  { icon: '/Assets/trust.png', label: 'Trust & Integrity' },
  { icon: '/Assets/larg.png', label: 'Continuous Innovation' },
  { icon: '/Assets/perfec.png', label: 'Commitment to Quality' },
  { icon: '/Assets/time.png', label: 'Experienced Team' },
  { icon: '/Assets/grow.png', label: 'Operational Excellence' },
];

export default function Whychoose() {
  return (
    <div className={Styles.mainwcuwrapper}>
      <div className={Styles.wcuchild}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Our Strength</span>
          <h2 className="section-title">Why Choose Us</h2>
        </div>
        <div className="section-divider" style={{ margin: '0 auto 28px' }} />

        <p className={Styles.contentwcu}>
          We understand that every industry has unique requirements. Our team combines deep technical expertise with a commitment to consistent quality and reliable supply — delivering tailored chemical solutions that help our clients operate with confidence.
        </p>

        <div className={Styles.cardwrapper}>
          {reasons.map((reason, index) => (
            <div key={index} className={Styles.card}>
              <div style={{ height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src={reason.icon}
                  alt={reason.label + ' icon'}
                  width={38}
                  height={38}
                  objectFit="contain"
                />
              </div>
              <span>{reason.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
