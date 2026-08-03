'use client';
import dynamic from 'next/dynamic';
import Image from 'next/legacy/image';
import { useState, useEffect } from 'react';
import Styles from './page.module.css';
import BackToTop from './Components/BackToTop';

const FAQ = dynamic(() => import('./Components/Sections/FAQ/FAQ'), { ssr: false });
const HomeSec = dynamic(() => import('./Components/Sections/HomeSec/HomeSec'), { ssr: false });
const About = dynamic(() => import('./Components/Sections/About/About'), { ssr: false });
const Industries = dynamic(() => import('./Components/Sections/Industries/Industries'), { ssr: false });
const Services = dynamic(() => import('./Components/Sections/Serivces/Services'), { ssr: false });
const Whychoose = dynamic(() => import('./Components/Sections/Whychoose/Whychoose'), { ssr: false });
const Quality = dynamic(() => import('./Components/Sections/Quality/Quality'), { ssr: false });
const Testimon = dynamic(() => import('./Components/Sections/Testimon/Testimon'), { ssr: false });
const Clientsec = dynamic(() => import('./Components/Sections/Clientsec/Clientsec'), { ssr: false });
const OurTeam = dynamic(() => import('./Components/Sections/Featured/OurTeam'), { ssr: false });
const Contact = dynamic(() => import('./Components/Sections/Contact/Contact'), { ssr: false });
const Form = dynamic(() => import('./Components/Sections/Form/Form'), { ssr: false });
const Footer = dynamic(() => import('./Components/Footer/Footer'), { ssr: false });

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'industries', label: 'Industries' },
    { id: 'services', label: 'Products' },
    { id: 'quality', label: 'Quality' },
    { id: 'testimon', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 78;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -45% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`${Styles.headwrapper} ${scrolled ? Styles.scrolled : ''}`}>
        <div className={Styles.maxwidth}>
          <div className={Styles.main}>
            <a href="/" className={Styles.brand} aria-label="Hindustan Organics Home">
              <Image
                src="/Assets/Layer_2.png"
                alt="Hindustan Organics — Industrial Chemicals & Solvents Manufacturer Ahmedabad"
                width={168}
                height={42}
                priority
              />
            </a>

            <nav className={Styles.navlink} aria-label="Primary">
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={activeSection === item.id ? Styles.active : ''}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
                <li>
                  <a href="/blog" className={Styles.blogLink}>
                    Insights
                  </a>
                </li>
              </ul>
            </nav>

            <div className={Styles.headerActions}>
              <a
                href="tel:+919427050266"
                className={Styles.callBtn}
                aria-label="Call Haresh Patel at +91-9427050266"
              >
                <span className={Styles.callIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span className={Styles.callText}>
                  <span className={Styles.callName}>Call Haresh Patel</span>
                  <span className={Styles.callNumber}>+91-9427050266</span>
                </span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=23.099333,72.677923&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.directionsBtn}
                aria-label="Get Google Maps directions to Hindustan Organics"
              >
                <span className={Styles.directionsIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <span className={Styles.directionsText}>
                  <span className={Styles.directionsLabel}>Directions</span>
                  <span className={Styles.directionsSub}>Google Maps</span>
                </span>
              </a>
            </div>

            <button
              type="button"
              className={`${Styles.hamburger} ${isMobileMenuOpen ? Styles.open : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          className={`${Styles.navlinkm} ${isMobileMenuOpen ? Styles.open : ''}`}
          aria-label="Mobile"
        >
          <ul>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={activeSection === item.id ? Styles.active : ''}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
            <li>
              <a href="/blog">Insights</a>
            </li>
            <li className={Styles.mobileCall}>
              <a href="tel:+919427050266" aria-label="Call Haresh Patel">
                <strong>Call Haresh Patel</strong>
                <span>+91-9427050266</span>
              </a>
            </li>
            <li className={Styles.mobileDirections}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=23.099333,72.677923&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Get Directions</strong>
                <span>Open Google Maps</span>
              </a>
            </li>
            <li className={Styles.mobileCta} onClick={() => scrollToSection('inquiry')}>
              Get a Quote
            </li>
          </ul>
        </nav>
      </header>

      {/* Floating Call + WhatsApp */}
      <div className={Styles.floatStack}>
        <a
          href="tel:+919427050266"
          className={Styles.floatCall}
          aria-label="Call Haresh Patel at +91-9427050266"
        >
          <span className={Styles.floatCallIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <span className={Styles.floatCallLabel}>
            <span>Call Haresh Patel</span>
            <strong>+91-9427050266</strong>
          </span>
        </a>
        <a
          href="https://wa.me/919427050266?text=Hello%20Haresh%20Patel%2C%20I%20would%20like%20to%20inquire%20about%20Hindustan%20Organics%20products."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Haresh Patel"
          className={Styles.whatsappLink}
        >
          <div className={Styles.whatsapp}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.206-.242-.592-.487-.51-.67-.51-.173 0-.372.025-.57.298-.198.298-.767.942-.767 2.293 0 1.35.787 2.66 1.04 2.86.254.2 1.78 2.71 4.3 3.79.603.26 1.073.416 1.44.532.605.192 1.157.165 1.592.1.486-.073 1.49-.61 1.7-1.2.21-.59.21-1.096.148-1.2-.062-.105-.23-.168-.48-.297z" fill="#fff" />
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.762.46 3.47 1.334 4.96L2 22l5.102-1.312c1.45.79 3.08 1.21 4.9 1.21 5.522 0 9.999-4.477 9.999-9.999s-4.477-9.998-9.999-9.998zm0 18.267c-1.61 0-3.18-.42-4.55-1.22l-.33-.19-3.03.78.79-2.96-.21-.32c-.86-1.41-1.32-3.03-1.32-4.71 0-4.58 3.73-8.31 8.32-8.31 4.58 0 8.31 3.73 8.31 8.31-.01 4.59-3.74 8.32-8.32 8.32z" fill="#fff" />
            </svg>
          </div>
        </a>
      </div>

      <main>
        <section id="home" aria-label="Hero">
          <HomeSec onNavigate={scrollToSection} />
        </section>
        <section id="about" aria-label="About Hindustan Organics">
          <About />
        </section>
        <section id="industries" aria-label="Industries we serve">
          <Industries />
        </section>
        <section id="services" aria-label="Products and solvents">
          <Services />
        </section>
        <section id="why-us" aria-label="Why choose Hindustan Organics">
          <Whychoose />
        </section>
        <section id="quality" aria-label="Quality and process">
          <Quality />
        </section>
        <section id="faq" aria-label="Frequently asked questions">
          <FAQ />
        </section>
        <section id="testimon" aria-label="Client testimonials">
          <Testimon />
        </section>
        <Clientsec />
        <section id="team" aria-label="Our partners">
          <OurTeam />
        </section>
        <section id="contact" aria-label="Contact details and location">
          <Contact />
        </section>
        <section id="inquiry" aria-label="Inquiry form">
          <Form />
        </section>
        <Footer onNavigate={scrollToSection} />
        <BackToTop />
      </main>
    </>
  );
}
