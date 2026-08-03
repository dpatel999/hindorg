'use client';
import Image from 'next/legacy/image';
import Styles from './Footer.module.css';

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  const go = (id) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={Styles.mainwrapper}>
      <div className={Styles.childwqrapper}>
        <div className={Styles.topGrid}>
          <div className={Styles.brandCol}>
            <div className={Styles.brandsvg}>
              <Image
                src="/Assets/footer_brand.png"
                alt="Hindustan Organics"
                width={188}
                height={48}
                objectFit="contain"
              />
            </div>
            <div className={Styles.brandsvgm}>
              <Image
                src="/Assets/foot_mbrand.png"
                alt="Hindustan Organics"
                width={148}
                height={38}
                objectFit="contain"
              />
            </div>
            <p className={Styles.brandText}>
              High-purity industrial solvents and specialty chemicals from Naroda GIDC, Ahmedabad —
              serving manufacturers across India since 1995.
            </p>
            <div className={Styles.contactMini}>
              <a href="tel:+919427050266" className={Styles.footerCall}>
                Call Haresh Patel · +91-9427050266
              </a>
              <a href="mailto:hindorg@gmail.com">hindorg@gmail.com</a>
            </div>
          </div>

          <div>
            <h3 className={Styles.colTitle}>Navigate</h3>
            <nav className={Styles.navlinks} aria-label="Footer">
              <ul>
                <li onClick={() => go('home')}>Home</li>
                <li onClick={() => go('about')}>About</li>
                <li onClick={() => go('industries')}>Industries</li>
                <li onClick={() => go('services')}>Products</li>
                <li onClick={() => go('quality')}>Quality</li>
                <li onClick={() => go('contact')}>Contact</li>
                <li>
                  <a href="/blog">Insights</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className={Styles.colTitle}>Key Products</h3>
            <ul className={Styles.productLinks}>
              <li onClick={() => go('services')}>Methylene Dichloride (MDC)</li>
              <li onClick={() => go('services')}>Isopropyl Alcohol (IPA)</li>
              <li onClick={() => go('services')}>Toluene</li>
              <li onClick={() => go('services')}>Acetonitrile</li>
              <li onClick={() => go('services')}>Ethyl Acetate</li>
              <li onClick={() => go('services')}>THF & Specialty Blends</li>
            </ul>
          </div>

          <div>
            <h3 className={Styles.colTitle}>Location</h3>
            <address className={Styles.address}>
              Plot No C-1, 1114/C,
              <br />
              Phase 4, GIDC Estate, Naroda,
              <br />
              Ahmedabad, Gujarat 382330
              <br />
              India
            </address>
            <a
              className={Styles.mapLink}
              href="https://www.google.com/maps/dir/?api=1&destination=23.099333,72.677923&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions on Google Maps →
            </a>
          </div>
        </div>

        <div className={Styles.centerde} />

        <div className={Styles.botttom}>
          <span>© {year} Hindustan Organics. All rights reserved.</span>
          <div className={Styles.socialwrapper}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <div className={Styles.socialimg}>
                <Image src="/Assets/fb.png" alt="" width={9} height={16} />
              </div>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <div className={Styles.socialimg}>
                <Image src="/Assets/insta.png" alt="" width={15} height={15} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
