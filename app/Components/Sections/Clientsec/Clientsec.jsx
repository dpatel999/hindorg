'use client';
import Image from 'next/legacy/image';
import Styles from './Clientsec.module.css';

const clients = [
  '/Assets/Clients/client1.png',
  '/Assets/Clients/client2.png',
  '/Assets/Clients/client3.png',
  '/Assets/Clients/client4.png',
  '/Assets/Clients/client5.png',
];

export default function Clientsec() {
  return (
    <div className={Styles.clientmain}>
      <div className={Styles.childwrapper}>
        <div style={{ textAlign: 'center', marginBottom: '42px' }}>
          <span className="section-subtitle">Our Partners</span>
          <h2 className="section-title" style={{ fontSize: '34px' }}>Trusted by Leading Manufacturers</h2>
        </div>

        {/* Desktop Marquee */}
        <div style={{ overflow: 'hidden' }}>
          <div className={Styles.clientimgwrapper}>
            {[...clients, ...clients].map((src, index) => (
              <div key={index} className={Styles.clientimgcard}>
                <Image src={src} alt="Hindustan Organics client" width={128} height={48} objectFit="contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className={Styles.clientimgwrapperm}>
          {clients.map((src, index) => (
            <div key={index} className={Styles.whitebgm}>
              <Image src={src} alt="Hindustan Organics client" width={118} height={44} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
