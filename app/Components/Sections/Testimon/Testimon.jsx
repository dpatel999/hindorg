'use client';
import { useRef } from 'react';
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import Styles from './Testimon.module.css';

const testimonials = [
  {
    quote: "Hindustan Organics has been our most reliable chemical supplier for over six years. Their consistency in quality and on-time deliveries have been instrumental in our production reliability.",
    name: "Procurement Head",
    company: "Zydus Lifesciences",
  },
  {
    quote: "Their technical team understands our exact solvent requirements. We have never had a quality rejection in the last three years — a level of reliability that is rare in this industry.",
    name: "Plant Manager",
    company: "Gujarat Fluorochemicals",
  },
  {
    quote: "Professional, responsive, and transparent. Hindustan Organics stands out not just for product quality but for the way they conduct business. They have become a true long-term partner.",
    name: "Director – Operations",
    company: "Atul Ltd.",
  },
];

export default function Testimon() {
  const swiperRef = useRef(null);

  return (
    <div className={Styles.testimonwrapper}>
      <div className={Styles.tstchild}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Client Voices</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className={Styles.testcont}>
          <div className={Styles.left}>
            <div className={Styles.leftcont}>
              <span>Trusted by industry leaders for consistent quality and service.</span>
            </div>
            <div className={Styles.leftslidtap}>
              <div onClick={() => swiperRef.current?.swiper.slidePrev()} className={Styles.lefttic}>
                <Image src="/Assets/lefts.png" alt="Previous" width={18} height={12} />
              </div>
              <div onClick={() => swiperRef.current?.swiper.slideNext()} className={Styles.righttic}>
                <Image src="/Assets/rights.png" alt="Next" width={18} height={12} />
              </div>
            </div>
          </div>

          <div className={Styles.right}>
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4800, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className={Styles.slidercard}>
                    <div className={Styles.cardtop}>
                      <p>“{t.quote}”</p>
                    </div>
                    <div className={Styles.cardbottom}>
                      <div className={Styles.botimg}>
                        <Image src="/Assets/client1.png" alt={t.name + ' at ' + t.company} width={54} height={54} />
                      </div>
                      <div className={Styles.clientname}>
                        <span>{t.name}</span>
                        <p>{t.company}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
