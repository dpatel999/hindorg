'use client';
import dynamic from 'next/dynamic';
import Image from "next/legacy/image";
import { useState, useEffect } from 'react';
import Styles from './page.module.css';
import BackToTop from './Components/BackToTop';

const FAQ = dynamic(() => import('./Components/Sections/FAQ/FAQ'), { ssr: false });

const HomeSec = dynamic(() => import('./Components/Sections/HomeSec/HomeSec'), { ssr: false });
const About = dynamic(() => import('./Components/Sections/About/About'), { ssr: false });
const Services = dynamic(() => import('./Components/Sections/Serivces/Services'), { ssr: false });
const Whychoose = dynamic(() => import('./Components/Sections/Whychoose/Whychoose'), { ssr: false });
const Testimon = dynamic(() => import('./Components/Sections/Testimon/Testimon'), { ssr: false });
const Clientsec = dynamic(() => import('./Components/Sections/Clientsec/Clientsec'), { ssr: false });
const OurTeam = dynamic(() => import('./Components/Sections/Featured/OurTeam'), { ssr: false });
const Contact = dynamic(() => import('./Components/Sections/Contact/Contact'), { ssr: false });
const Form = dynamic(() => import('./Components/Sections/Form/Form'), { ssr: false });
const Footer = dynamic(() => import('./Components/Footer/Footer'), { ssr: false });

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Products' },
    { id: 'testimon', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  // Active section detection on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* ========== CLASSIC PROFESSIONAL HEADER ========== */}
      <header className={Styles.headwrapper}>
        <div className={Styles.maxwidth}>
          <div className={Styles.main}>
            {/* Logo */}
            <a href="/" className={Styles.brand}>
              <Image
                src="/Assets/Layer_2.png"
                alt="Hindustan Organics - Industrial Chemicals & Solvents Manufacturer"
                width={168}
                height={42}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className={Styles.navlink}>
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Button (Desktop) */}
            <button
              className={Styles.calltoact}
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>

            {/* Mobile Hamburger */}
            <div
              className={`${Styles.hamburger} ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${Styles.navlinkm} ${isMobileMenuOpen ? Styles.open : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
            <li onClick={() => scrollToSection('contact')}>Contact Us</li>
          </ul>
        </nav>
      </header>

      {/* ========== WHATSAPP FLOATING BUTTON ========== */}
      <a
        href="https://wa.me/919427050266"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div className={Styles.whatsapp}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.206-.242-.592-.487-.51-.67-.51-.173 0-.372.025-.57.298-.198.298-.767.942-.767 2.293 0 1.35.787 2.66 1.04 2.86.254.2 1.78 2.71 4.3 3.79.603.26 1.073.416 1.44.532.605.192 1.157.165 1.592.1.486-.073 1.49-.61 1.7-1.2.21-.59.21-1.096.148-1.2-.062-.105-.23-.168-.48-.297z"/>
            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.762.46 3.47 1.334 4.96L2 22l5.102-1.312c1.45.79 3.08 1.21 4.9 1.21 5.522 0 9.999-4.477 9.999-9.999s-4.477-9.998-9.999-9.998zm0 18.267c-1.61 0-3.18-.42-4.55-1.22l-.33-.19-3.03.78.79-2.96-.21-.32c-.86-1.41-1.32-3.03-1.32-4.71 0-4.58 3.73-8.31 8.32-8.31 4.58 0 8.31 3.73 8.31 8.31-.01 4.59-3.74 8.32-8.32 8.32z"/>
          </svg>
        </div>
      </a>

      <a
        href="https://wa.me/919427050266"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div className={Styles.whatsappmob}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.206-.242-.592-.487-.51-.67-.51-.173 0-.372.025-.57.298-.198.298-.767.942-.767 2.293 0 1.35.787 2.66 1.04 2.86.254.2 1.78 2.71 4.3 3.79.603.26 1.073.416 1.44.532.605.192 1.157.165 1.592.1.486-.073 1.49-.61 1.7-1.2.21-.59.21-1.096.148-1.2-.062-.105-.23-.168-.48-.297z"/>
            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.762.46 3.47 1.334 4.96L2 22l5.102-1.312c1.45.79 3.08 1.21 4.9 1.21 5.522 0 9.999-4.477 9.999-9.999s-4.477-9.998-9.999-9.998zm0 18.267c-1.61 0-3.18-.42-4.55-1.22l-.33-.19-3.03.78.79-2.96-.21-.32c-.86-1.41-1.32-3.03-1.32-4.71 0-4.58 3.73-8.31 8.32-8.31 4.58 0 8.31 3.73 8.31 8.31-.01 4.59-3.74 8.32-8.32 8.32z"/>
          </svg>
        </div>
      </a>

      {/* ========== PAGE SECTIONS ========== */}
      <main>
        <section id="home"><HomeSec /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <Whychoose />
        <FAQ />
        <section id="testimon"><Testimon /></section>
        <Clientsec />
        <OurTeam />
        <section id="contact"><Contact /></section>
        <Form />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
