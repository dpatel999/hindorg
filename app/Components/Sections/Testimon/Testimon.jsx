'use client';
import Styles from './Testimon.module.css';
import Image from 'next/legacy/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";


export default function Testimon() {
const swiperRef = useRef(null);
  return (
    
    <div className={Styles.testimonwrapper}>
        <div className={Styles.tstchild}>
          <div className={Styles.titlewrapper}>
            <span className={Styles.Title}>Testimonials</span>
            <div className={Styles.Titlede}></div>
          </div>
          <div className={Styles.testcont}>
          
            <div className={Styles.left}>
              <div className={Styles.leftcont}>
                <span>What our customers say about us.</span>
              </div>
              <div className={Styles.leftslidtap}>
                <div onClick={() => swiperRef.current.swiper.slidePrev()} className={Styles.lefttic}>
                  <Image
                    src="/Assets/lefts.png"
                    alt="Customer Count"
                    width={40}
                    height={27}
                    objectFit='contain'
                  />
                </div>
                <div onClick={() => swiperRef.current.swiper.slideNext()} className={Styles.righttic}>
                <Image
                  src="/Assets/rights.png"
                  alt="Customer Count"
                  width={40}
                  height={27}
                  objectFit='contain'
                />
                </div>
              </div>
            </div>
            <div className={Styles.right}>
            <Swiper 
                ref={swiperRef}
                spaceBetween={100}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay]}
                className={Styles.hero2}
              >
              <SwiperSlide>
              <div className={Styles.slidercard}>
                <div className={Styles.cardtop}>
                  <p>"Love a to-do list! And everyone was very friendly and patient. Love the chat feature - it feels like someone was always there night or day to answer my questions!"</p>
                </div>
                <div className={Styles.cardbottom}>
                  <div className={Styles.botimg}>
                    <Image
                      src="/Assets/client1.png"
                      alt="Customer Count"
                      width={67}
                      height={67}
                      objectFit='contain'
                    />
                  </div>
                  <div className={Styles.clientname}>
                    <span>Zydus Hospital</span>
                    <p>Abc Sairesa</p>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className={Styles.slidercard}>
                <div className={Styles.cardtop}>
                  <p>"asdasdawer asdawr aw rfaw raw3tqt3 af asf - it feels like someone was always there night or day to answer my questions!"</p>
                </div>
                <div className={Styles.cardbottom}>
                  <div className={Styles.botimg}>
                    <Image
                      src="/Assets/client1.png"
                      alt="Customer Count"
                      width={67}
                      height={67}
                      objectFit='contain'
                    />
                  </div>
                  <div className={Styles.clientname}>
                    <span>Zydus Hospital</span>
                    <p>asd Sairesa</p>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className={Styles.slidercard}>
                <div className={Styles.cardtop}>
                  <p>"asdasdawer asdawr aw rfaw raw3tqt3 af asf - it feels like someone was always there night or day to answer my questions!"</p>
                </div>
                <div className={Styles.cardbottom}>
                  <div className={Styles.botimg}>
                    <Image
                      src="/Assets/client1.png"
                      alt="Customer Count"
                      width={67}
                      height={67}
                      objectFit='contain'
                    />
                  </div>
                  <div className={Styles.clientname}>
                    <span>Zydus Hospital</span>
                    <p>aasdas Sairesa</p>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              </Swiper>
            </div>
           
          </div>
        </div>
    </div>
  )
}
