'use client';
import Styles from './Quality.module.css';

const steps = [
  {
    num: '01',
    title: 'Incoming Material Control',
    desc: 'Sourced inputs are screened against grade requirements before entering refining and blending workflows.',
  },
  {
    num: '02',
    title: 'Process & Refining Discipline',
    desc: 'Controlled distillation and blending practices focused on colour, purity, and moisture targets.',
  },
  {
    num: '03',
    title: 'In-House QC Release',
    desc: 'Every batch undergoes GC, moisture, and visual testing aligned to customer specifications.',
  },
  {
    num: '04',
    title: 'Pack, Document & Dispatch',
    desc: 'Drums, bulk, or tanker loads with clear documentation and logistics coordination for on-time arrival.',
  },
];

export default function Quality() {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.inner}>
        <div className={Styles.top}>
          <div className={Styles.copy}>
            <span className="section-subtitle">Quality System</span>
            <h2 className="section-title">From Spec to Shipment — Controlled Every Step</h2>
            <div className="section-divider" />
            <p>
              Top chemical manufacturers showcase process transparency because procurement teams audit
              suppliers on more than price. Our quality story is practical: measurable purity, low
              moisture options, and a release mindset that protects your plant uptime.
            </p>
            <ul className={Styles.bullets}>
              <li>High purity grades up to 99%+ by GC</li>
              <li>Low-moisture options (&lt;0.5% / &lt;0.2% where applicable)</li>
              <li>Water-white / colourless industrial appearance standards</li>
              <li>Custom blends, drumming, and private-label support</li>
            </ul>
          </div>
          <div className={Styles.highlight}>
            <div className={Styles.hlItem}>
              <strong>GC</strong>
              <span>Gas chromatography purity checks</span>
            </div>
            <div className={Styles.hlItem}>
              <strong>H₂O</strong>
              <span>Moisture control for critical applications</span>
            </div>
            <div className={Styles.hlItem}>
              <strong>VIS</strong>
              <span>Visual / colour grade consistency</span>
            </div>
            <div className={Styles.hlItem}>
              <strong>DOC</strong>
              <span>Clear commercial & technical paperwork</span>
            </div>
          </div>
        </div>

        <div className={Styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={Styles.step}>
              <span className={Styles.num}>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
