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
            At Hindustan Organics, we deliver a comprehensive range of high-quality chemicals and specialized products for diverse industries. From industrial-grade solvents and refined hydrocarbons to precision chemicals for food, beverage, and manufacturing applications, we provide reliable solutions backed by decades of expertise and uncompromising quality control.
          </p>
          <p className={Styles.about_text} style={{ marginTop: '18px' }}>
            Our commitment to purity, consistency, and customer partnership has established us as a trusted supplier across India and beyond.
          </p>
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
