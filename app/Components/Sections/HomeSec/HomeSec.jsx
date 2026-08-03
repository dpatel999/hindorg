'use client';
import Styles from './HomeSec.module.css';
import Image from 'next/legacy/image';
import slideData from '../../../data/Homesliders.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const trustItems = [
  { value: 'Since 1995', label: 'Established' },
  { value: 'Naroda GIDC', label: 'Ahmedabad HQ' },
  { value: 'GC Tested', label: 'In-house QC' },
  { value: '500+ Clients', label: 'Across India' },
  { value: 'Ready Stock', label: 'Drums & tankers' },
];

export default function HomeSec({ onNavigate }) {
  return (
    <div className={Styles.homewrapper}>
      <div className={Styles.herosec}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1100}
          modules={[Autoplay, EffectFade, Pagination]}
          className={Styles.hero2}
        >
          {slideData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={Styles.slidinner}>
                <Image
                  src={item.img}
                  alt={item.alt || `${item.Title1} ${item.Title2}`}
                  layout="fill"
                  objectFit="cover"
                  className={Styles.imgmain}
                  priority={item.id === 1}
                />
                <div className={Styles.taxtimg}>
                  <span className={Styles.eyebrow}>
                    Industrial Chemicals · Ahmedabad · Since 1995
                  </span>
                  <h1 className={Styles.taxt1}>{item.Title1}</h1>
                  <p className={Styles.taxt2}>{item.Title2}</p>
                  <div className={Styles.ctaRow}>
                    <a
                      href="tel:+919427050266"
                      className={Styles.heroCall}
                      aria-label="Call Haresh Patel at +91-9427050266"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                      </svg>
                      <span className={Styles.heroCallText}>
                        <span>Call Haresh Patel</span>
                        <strong>+91-9427050266</strong>
                      </span>
                    </a>
                    <button
                      type="button"
                      className="btn btn-gold"
                      onClick={() => onNavigate?.('inquiry')}
                    >
                      Request a Quote
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => onNavigate?.('services')}
                    >
                      View Products
                    </button>
                  </div>
                  <ul className={Styles.trustRow} aria-label="Key facts">
                    <li>
                      <strong>30+</strong>
                      <span>Years</span>
                    </li>
                    <li>
                      <strong>500+</strong>
                      <span>Customers</span>
                    </li>
                    <li>
                      <strong>40+</strong>
                      <span>Products</span>
                    </li>
                    <li>
                      <strong>Pan-India</strong>
                      <span>Supply</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trust strip under hero */}
      <div className={Styles.trustStrip} aria-label="Why industrial buyers trust us">
        <div className={Styles.trustStripInner}>
          {trustItems.map((item) => (
            <div key={item.value} className={Styles.trustItem}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
