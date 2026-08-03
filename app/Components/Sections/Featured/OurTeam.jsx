'use client';
import Image from 'next/legacy/image';
import Styles from './OurTeam.module.css';

const partners = [
  {
    name: 'Haresh Patel',
    role: 'Director',
    focus: 'Leadership · Operations · Governance',
    image: '/Assets/team/Haresh.jpeg',
    bio: 'Partner & Director at Hindustan Organics. Leads strategy, governance, and long-term client relationships — building a trusted high-purity solvents partnership for manufacturers across India.',
    highlights: ['Leadership', 'Operations', 'Governance'],
    email: 'hindorg@gmail.com',
    phone: '+91-9427050266',
    primaryCall: true,
  },
  {
    name: 'Pankaj Patel',
    role: 'Manager',
    focus: 'Operations · Customer Fulfilment',
    image: '/Assets/team/3.webp',
    bio: 'Partner & Manager at Hindustan Organics. Owns day-to-day operations, order fulfilment, and plant-side coordination so every dispatch meets grade, pack, and timeline commitments.',
    highlights: ['Operations', 'Customer Fulfilment', 'Dispatch coordination'],
    email: 'hindorg@gmail.com',
    phone: '+91-9427050266',
  },
];

const facts = [
  { value: '1995', label: 'Established' },
  { value: '500+', label: 'Customers' },
  { value: '40+', label: 'Product grades' },
  { value: '30+', label: 'Years experience' },
];

export default function OurTeam() {
  return (
    <div className={Styles.mainwrapper}>
      <div className={Styles.childwrapper}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Partners</span>
          <h2 className="section-title">Our Partners</h2>
          <div className="section-divider" style={{ margin: '0 auto 14px' }} />
          <p>
            Hindustan Organics is led by its partners — with clear ownership of leadership,
            operations, and customer fulfilment behind every reliable delivery.
          </p>
        </div>

        <div className={Styles.partnersGrid}>
          {partners.map((member) => (
            <article key={member.name} className={Styles.partnerCard}>
              <div className={Styles.photoCol}>
                <div className={Styles.imgWrap}>
                  <Image
                    src={member.image}
                    alt={`${member.name}, Partner & ${member.role} at Hindustan Organics`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center"
                    className={Styles.mainImg}
                  />
                  <span className={Styles.partnerBadge}>Partner</span>
                </div>
              </div>

              <div className={Styles.infoCol}>
                <span className={Styles.roleBadge}>{member.role}</span>
                <h3 className={Styles.name}>{member.name}</h3>
                <p className={Styles.focus}>{member.focus}</p>
                <p className={Styles.bio}>{member.bio}</p>

                <ul className={Styles.highlights}>
                  {member.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className={Styles.contactRow}>
                  {member.primaryCall ? (
                    <a
                      href={`tel:${member.phone.replace(/[\s-]/g, '')}`}
                      className={Styles.callNowBtn}
                      aria-label={`Call ${member.name} at ${member.phone}`}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                      </svg>
                      Call {member.name} · {member.phone}
                    </a>
                  ) : (
                    <a
                      href={`tel:${member.phone.replace(/[\s-]/g, '')}`}
                      className={Styles.contactLink}
                    >
                      {member.phone}
                    </a>
                  )}
                  <a href={`mailto:${member.email}`} className={Styles.contactLink}>
                    {member.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={Styles.factsBar}>
          {facts.map((f) => (
            <div key={f.label} className={Styles.fact}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
