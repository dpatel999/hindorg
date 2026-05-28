'use client';
import Image from 'next/legacy/image';
import Styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={Styles.mainwrapper}>
      <div className={Styles.childwrapper}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className={Styles.botmcont}>
          {/* Contact Details */}
          <div className={Styles.left}>
            <a href="tel:+919427050266">
              <div className={Styles.comancontdiv}>
                <div className={Styles.comanconticon}>
                  <Image src="/Assets/Contact/call.png" alt="Phone icon" width={18} height={18} />
                </div>
                <span>+91 94270 50266</span>
              </div>
            </a>

            <a href="mailto:sales@hindorg.com">
              <div className={Styles.comancontdiv}>
                <div className={Styles.comanconticon}>
                  <Image src="/Assets/Contact/mail.png" alt="Email icon" width={18} height={16} />
                </div>
                <span>sales@hindorg.com</span>
              </div>
            </a>

            <a href="https://goo.gl/maps/BPn3B2eEEfPuCiMCA" target="_blank" rel="noopener noreferrer">
              <div className={Styles.comancontdiv}>
                <div className={Styles.comanconticon}>
                  <Image src="/Assets/Contact/addr.png" alt="Location icon" width={17} height={21} />
                </div>
                <div>
                  <span>Hindustan Organics</span>
                  <p>
                    Plot No C-1, 1114/C, Behind Gayatri Temple Road,<br />
                    Phase 4, GIDC Estate, Naroda,<br />
                    Ahmedabad, Gujarat 382330
                  </p>
                </div>
              </div>
            </a>

            <div className={Styles.Social}>
              <span>Follow Us</span>
              <div className={Styles.socialimgwrapper}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <div className={Styles.socialimg}>
                    <Image src="/Assets/Contact/fb_drk.png" alt="Facebook" width={10} height={18} />
                  </div>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <div className={Styles.socialimg}>
                    <Image src="/Assets/Contact/insta_drk.png" alt="Instagram" width={17} height={17} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={Styles.right}>
            <div className={Styles.mapimg}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9388618129865!2d72.6779239742366!3d23.099333813461286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e899d21853647%3A0xcc3f86391e60cca6!2sHindustan%20Organics!5e0!3m2!1sen!2sin!4v1682104135925!5m2!1sen!2sin"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className={Styles.mapimgm}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9388618129865!2d72.6779239742366!3d23.099333813461286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e899d21853647%3A0xcc3f86391e60cca6!2sHindustan%20Organics!5e0!3m2!1sen!2sin!4v1682104135925!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
