'use client';
import Image from 'next/legacy/image';
import Styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={Styles.mainwrapper}>
      <div className={Styles.childwqrapper}>
        <div className={Styles.contchildwrapper}>
          {/* Brand */}
          <div>
            <div className={Styles.brandsvg}>
              <Image
                src="/Assets/footer_brand.png"
                alt="Hindustan Organics logo"
                width={188}
                height={48}
                objectFit="contain"
              />
            </div>
            <div className={Styles.brandsvgm}>
              <Image
                src="/Assets/foot_mbrand.png"
                alt="Hindustan Organics logo"
                width={148}
                height={38}
                objectFit="contain"
              />
            </div>
          </div>

          {/* Nav */}
          <nav className={Styles.navlinks}>
            <ul>
              <li onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</li>
              <li onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</li>
              <li onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Products</li>
              <li onClick={() => document.getElementById('testimon')?.scrollIntoView({ behavior: 'smooth' })}>Testimonials</li>
              <li onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
            </ul>
          </nav>
        </div>

        <div className={Styles.centerde} />

        <div className={Styles.botttom}>
          <span>© {year} Hindustan Organics. All rights reserved.</span>

          <div className={Styles.socialwrapper}>
            <div className={Styles.socialimg}>
              <Image src="/Assets/fb.png" alt="Facebook" width={9} height={16} />
            </div>
            <div className={Styles.socialimg}>
              <Image src="/Assets/insta.png" alt="Instagram" width={15} height={15} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
