'use client';
import Styles from './Industries.module.css';

const industries = [
  {
    title: 'Pharmaceuticals',
    desc: 'High-purity, low-moisture solvents for synthesis, cleaning, and process applications where batch consistency is non-negotiable.',
    icon: '💊',
  },
  {
    title: 'Paints & Coatings',
    desc: 'Solvents and thinners engineered for better spraying, spreading, drying behaviour, and covering capacity.',
    icon: '🎨',
  },
  {
    title: 'Adhesives & Sealants',
    desc: 'Reliable solvent systems that support formulation stability, viscosity control, and production uptime.',
    icon: '🔗',
  },
  {
    title: 'Rubber & Polymers',
    desc: 'Rubber reducers and process solvents for compounding, cleaning, and specialty polymer applications.',
    icon: '⚙️',
  },
  {
    title: 'Agrochemicals',
    desc: 'Industrial solvents for formulation and intermediate chemistry with dependable logistics across India.',
    icon: '🌱',
  },
  {
    title: 'Industrial Cleaning',
    desc: 'Degreasers and multi-purpose solvent blends for machinery, metal, and surface cleaning operations.',
    icon: '✨',
  },
];

export default function Industries() {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.inner}>
        <div className={Styles.header}>
          <span className="section-subtitle">Who We Serve</span>
          <h2 className="section-title">Industries That Depend on Our Chemistry</h2>
          <div className="section-divider" style={{ margin: '0 auto 18px' }} />
          <p className={Styles.lead}>
            Leading specialty chemical manufacturers structure their websites around industries —
            because buyers search by application first. We supply specification-driven solvents across
            the sectors where purity, moisture, and delivery reliability matter most.
          </p>
        </div>

        <div className={Styles.grid}>
          {industries.map((item) => (
            <article key={item.title} className={Styles.card}>
              <div className={Styles.icon} aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
