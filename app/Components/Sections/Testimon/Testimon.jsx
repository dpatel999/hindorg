'use client';
import { useRef } from 'react';
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import Styles from './Testimon.module.css';

const testimonials = [
  {
    quote:
      'Hindustan Organics has been our most reliable solvent supplier for years. Batch consistency and on-time deliveries have directly improved our production reliability.',
    name: 'Procurement Head',
    company: 'Pharmaceutical Manufacturer, Gujarat',
    industry: 'Pharma',
  },
  {
    quote:
      'Their technical team understands exact moisture and purity requirements. We have seen far fewer quality surprises compared with previous suppliers.',
    name: 'Plant Manager',
    company: 'Specialty Chemicals Unit, West India',
    industry: 'Specialty Chem',
  },
  {
    quote:
      'Professional, responsive, and transparent. Hindustan Organics stands out not only for product quality but for how they conduct commercial follow-through.',
    name: 'Director – Operations',
    company: 'Coatings & Adhesives Company',
    industry: 'Coatings',
  },
];

export default function Testimon() {
  const swiperRef = useRef(null);

  return (
    <div className={Styles.testimonwrapper}>
      <div className={Styles.tstchild}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Social Proof</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className={Styles.testcont}>
          <div className={Styles.left}>
            <div className={Styles.leftcont}>
              <span>Trusted by manufacturers who cannot afford inconsistent chemistry.</span>
            </div>
            <p className={Styles.leftSub}>
              From pharma plants to coatings lines — buyers return for specification discipline and
              dependable people.
            </p>
            <div className={Styles.leftslidtap}>
              <button
                type="button"
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className={Styles.lefttic}
                aria-label="Previous testimonial"
              >
                <Image src="/Assets/lefts.png" alt="" width={18} height={12} />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className={Styles.righttic}
                aria-label="Next testimonial"
              >
                <Image src="/Assets/rights.png" alt="" width={18} height={12} />
              </button>
            </div>
          </div>

          <div className={Styles.right}>
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5200, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className={Styles.slidercard}>
                    <span className={Styles.industry}>{t.industry}</span>
                    <div className={Styles.cardtop}>
                      <p>“{t.quote}”</p>
                    </div>
                    <div className={Styles.cardbottom}>
                      <div className={Styles.botimg}>
                        <Image
                          src="/Assets/client1.png"
                          alt=""
                          width={54}
                          height={54}
                        />
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
