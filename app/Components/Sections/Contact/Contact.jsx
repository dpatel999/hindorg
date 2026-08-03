'use client';
import Image from 'next/legacy/image';
import Styles from './Contact.module.css';

const MAPS_PLACE = 'https://goo.gl/maps/BPn3B2eEEfPuCiMCA';
const MAPS_DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=23.099333,72.677923&destination_place_id=ChIJRzblIJmJXjkRpsxeHjmGP8w&travelmode=driving';

export default function Contact() {
  return (
    <div className={Styles.mainwrapper}>
      <div className={Styles.childwrapper}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Location & Reach</span>
          <h2 className="section-title">Contact Hindustan Organics</h2>
          <p className={Styles.lead}>
            Visit our Naroda GIDC facility in Ahmedabad or reach our sales desk for quotes, samples,
            and technical discussions.
          </p>
        </div>

        {/* Prominent directions banner */}
        <a
          href={MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.directionsBanner}
          aria-label="Get Google Maps directions to Hindustan Organics, Naroda GIDC Ahmedabad"
        >
          <div className={Styles.directionsBannerIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
            </svg>
          </div>
          <div className={Styles.directionsBannerText}>
            <strong>Get Directions on Google Maps</strong>
            <span>
              Plot No C-1, 1114/C, Phase 4, GIDC Estate, Naroda, Ahmedabad 382330
            </span>
          </div>
          <span className={Styles.directionsBannerCta}>
            Open Maps
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
            </svg>
          </span>
        </a>

        <div className={Styles.botmcont}>
          <div className={Styles.left}>
            <div className={Styles.card}>
              <a
                href="tel:+919427050266"
                className={Styles.callHighlight}
                aria-label="Call Haresh Patel at +91-9427050266"
              >
                <div className={Styles.callHighlightIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className={Styles.callHighlightText}>
                  <span className={Styles.callHighlightLabel}>Call Haresh Patel — Director</span>
                  <span className={Styles.callHighlightNumber}>+91-9427050266</span>
                  <span className={Styles.callHighlightHint}>Tap to call · Also on WhatsApp</span>
                </div>
              </a>

              <a href="mailto:hindorg@gmail.com" className={Styles.comancontdiv}>
                <div className={Styles.comanconticon}>
                  <Image src="/Assets/Contact/mail.png" alt="" width={18} height={16} />
                </div>
                <div>
                  <span className={Styles.label}>Sales Email</span>
                  <span className={Styles.value}>hindorg@gmail.com</span>
                </div>
              </a>

              <div className={Styles.addressBlock}>
                <div className={Styles.comancontdiv} style={{ marginBottom: 14 }}>
                  <div className={Styles.comanconticon}>
                    <Image src="/Assets/Contact/addr.png" alt="" width={17} height={21} />
                  </div>
                  <div>
                    <span className={Styles.label}>Registered Address</span>
                    <span className={Styles.value}>Hindustan Organics</span>
                    <p className={Styles.address}>
                      Plot No C-1, 1114/C, Behind Gayatri Temple Road,
                      <br />
                      Phase 4, GIDC Estate, Naroda,
                      <br />
                      Ahmedabad, Gujarat 382330, India
                    </p>
                  </div>
                </div>

                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.directionsBtn}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                  </svg>
                  Get Directions
                </a>
              </div>

              <div className={Styles.hours}>
                <span className={Styles.label}>Business Hours</span>
                <p>Monday – Saturday · 09:00 – 18:00 IST</p>
              </div>
            </div>

            <div className={Styles.Social}>
              <span>Follow Us</span>
              <div className={Styles.socialimgwrapper}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <div className={Styles.socialimg}>
                    <Image src="/Assets/Contact/fb_drk.png" alt="" width={10} height={18} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <div className={Styles.socialimg}>
                    <Image src="/Assets/Contact/insta_drk.png" alt="" width={17} height={17} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className={Styles.right}>
            <div className={Styles.mapWrap}>
              <div className={Styles.mapimg}>
                <iframe
                  title="Hindustan Organics location map — Naroda GIDC Ahmedabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9388618129865!2d72.6779239742366!3d23.099333813461286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e899d21853647%3A0xcc3f86391e60cca6!2sHindustan%20Organics!5e0!3m2!1sen!2sin!4v1682104135925!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className={Styles.mapOverlayBar}>
                <div className={Styles.mapOverlayInfo}>
                  <strong>Hindustan Organics</strong>
                  <span>Naroda GIDC · Ahmedabad, Gujarat</span>
                </div>
                <div className={Styles.mapOverlayActions}>
                  <a
                    href={MAPS_DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.mapDirectionsBtn}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                    </svg>
                    Get Directions
                  </a>
                  <a
                    href={MAPS_PLACE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.mapViewBtn}
                  >
                    View on Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
