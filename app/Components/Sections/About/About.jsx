'use client';
import Styles from './About.module.css';
import Image from 'next/legacy/image';

export default function About() {
  return (
    <div className={Styles.aboutwrapper}>
      <div className={Styles.childwrapper}>
        {/* Left: Text Content */}
        <div className={Styles.left}>
          <span className="section-subtitle">Our Heritage</span>
          <h2 className={Styles.about_title}>About Hindustan Organics</h2>
          <div className="section-divider" />
          <p className={Styles.about_text}>
            For nearly three decades, Hindustan Organics has been a trusted partner to India's leading manufacturers — supplying high-purity solvents and specialty chemicals with uncompromising consistency and integrity.
          </p>
          <p className={Styles.about_text} style={{ marginTop: '18px' }}>
            Our family’s values of discipline, precision, and long-term relationships guide every decision we make. These same values, strengthened by the blessings and prayers of the revered SMVS Gurudev, have shaped our son Haresh Kanubhai Patel into a source of immense strength and inspiration for our family and our business.
          </p>

          {/* Canada Import & Export Section - Highlighting X9Elysium + Darshan Patel */}
          <div style={{ 
            marginTop: '42px', 
            paddingTop: '28px', 
            borderTop: '1px solid var(--border)' 
          }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', color: 'var(--navy)', marginBottom: '12px' }}>
              Building Bridges to Canada
            </div>
            <p className={Styles.about_text} style={{ maxWidth: '100%' }}>
              In our ongoing pursuit of excellence and global reach, Hindustan Organics has established reliable import and export channels to Canada. This important expansion has been made possible through our valued partnership with <strong>X9Elysium</strong> and the dedicated technical leadership and vision of <strong>Darshan Patel</strong>.
            </p>
            <p className={Styles.about_text} style={{ maxWidth: '100%', marginTop: '14px' }}>
              Darshan Patel has played a pivotal role in developing these international operations — ensuring seamless logistics, strict quality compliance, and the creation of sustainable trade relationships that allow us to serve North American customers while bringing advanced materials and technologies back to India.
            </p>
          </div>
        </div>

        {/* Right: Vision & Mission + Brand */}
        <div className={Styles.right}>
          <div className={Styles.vision_mission}>
            <div className={Styles.vm_card}>
              <div className={Styles.vm_label}>Vision</div>
              <p className={Styles.vm_text}>
                To be the most respected and reliable name in industrial chemicals, recognized for uncompromising quality and integrity.
              </p>
            </div>
            <div className={Styles.vm_card}>
              <div className={Styles.vm_label}>Mission</div>
              <p className={Styles.vm_text}>
                To consistently deliver superior chemical products through rigorous quality processes, technical excellence, and lasting client relationships.
              </p>
            </div>
          </div>

          <div className={Styles.brand_block}>
            <Image
              src="/Assets/Layer_2.png"
              alt="Hindustan Organics corporate logo"
              width={220}
              height={56}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
