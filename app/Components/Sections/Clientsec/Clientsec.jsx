'use client';
import Image from 'next/legacy/image';
import Styles from './Clientsec.module.css';

const clients = [
  { src: '/Assets/Clients/client1.png', alt: 'Hindustan Organics industrial client partner' },
  { src: '/Assets/Clients/client2.png', alt: 'Hindustan Organics manufacturing client' },
  { src: '/Assets/Clients/client3.png', alt: 'Hindustan Organics chemical industry partner' },
  { src: '/Assets/Clients/client4.png', alt: 'Hindustan Organics coatings sector client' },
  { src: '/Assets/Clients/client5.png', alt: 'Hindustan Organics pharma sector client' },
];

export default function Clientsec() {
  return (
    <div className={Styles.clientmain}>
      <div className={Styles.childwrapper}>
        <div className={Styles.header}>
          <span className="section-subtitle">Trusted Network</span>
          <h2 className="section-title">Partners Across Manufacturing India</h2>
          <p>
            A sample of the industrial relationships built over decades of consistent supply.
          </p>
        </div>

        <div className={Styles.marqueeWrap}>
          <div className={Styles.clientimgwrapper}>
            {[...clients, ...clients].map((item, index) => (
              <div key={index} className={Styles.clientimgcard}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={128}
                  height={48}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.clientimgwrapperm}>
          {clients.map((item, index) => (
            <div key={index} className={Styles.whitebgm}>
              <Image
                src={item.src}
                alt={item.alt}
                width={118}
                height={44}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
