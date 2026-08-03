'use client';
import Styles from './About.module.css';
import Image from 'next/legacy/image';

export default function About() {
  return (
    <div className={Styles.aboutwrapper}>
      <div className={Styles.childwrapper}>
        <div className={Styles.left}>
          <span className="section-subtitle">Our Heritage</span>
          <h2 className={Styles.about_title}>
            Nearly Three Decades of Reliable Chemistry from Gujarat
          </h2>
          <div className="section-divider" />
          <p className={Styles.about_text}>
            Hindustan Organics is a trusted manufacturer and supplier of high-purity industrial
            solvents and specialty chemicals based in Naroda GIDC, Ahmedabad. Since 1995, we have
            partnered with pharmaceutical, paint & coatings, adhesive, rubber, and manufacturing
            companies across India — delivering consistent quality, technical clarity, and dependable
            supply.
          </p>
          <p className={Styles.about_text}>
            Our family-led values of discipline, precision, and long-term relationships guide every
            batch we release. Those same values, strengthened by the blessings and prayers of the
            revered SMVS Gurudev, have shaped Haresh Kanubhai Patel into a source of strength and
            inspiration for our family and our business.
          </p>

          <div className={Styles.exportBlock}>
            <div className={Styles.exportBadge}>How We Work</div>
            <h3 className={Styles.exportTitle}>Specification-Driven Supply Across India</h3>
            <p className={Styles.about_text}>
              From Naroda GIDC in Ahmedabad, we serve manufacturers across Gujarat, Maharashtra,
              Rajasthan, Delhi-NCR, and beyond — with clear grades, dependable packing options, and
              logistics partners who understand industrial timelines.
            </p>
            <p className={Styles.about_text}>
              Unlike pure traders, we combine refining capability, in-house QC, and specification-driven
              supply — the model industrial buyers prefer when uptime and batch consistency matter.
            </p>
          </div>
        </div>

        <div className={Styles.right}>
          <div className={Styles.vision_mission}>
            <div className={Styles.vm_card}>
              <div className={Styles.vm_label}>Vision</div>
              <p className={Styles.vm_text}>
                To be the most respected and reliable name in industrial solvents — recognized for
                uncompromising quality, integrity, and global readiness.
              </p>
            </div>
            <div className={Styles.vm_card}>
              <div className={Styles.vm_label}>Mission</div>
              <p className={Styles.vm_text}>
                To deliver superior chemical products through rigorous quality processes, technical
                excellence, and lasting client relationships.
              </p>
            </div>
          </div>

          <div className={Styles.factsGrid}>
            <div className={Styles.fact}>
              <strong>1995</strong>
              <span>Established</span>
            </div>
            <div className={Styles.fact}>
              <strong>Ahmedabad</strong>
              <span>Naroda GIDC HQ</span>
            </div>
            <div className={Styles.fact}>
              <strong>500+</strong>
              <span>Active Customers</span>
            </div>
            <div className={Styles.fact}>
              <strong>40+</strong>
              <span>Product Grades</span>
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
            <p>High-purity solvents · Specialty chemicals · Specification-driven supply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
