'use client';
import Styles from './HomeSec.module.css';
import Image from 'next/legacy/image';
import slideData from '../../../data/Homesliders.json'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";



export default function HomeSec() {
  return (
    <div className={Styles.homewrapper}>
    <div className={Styles.herosec}>
    {/* <Image 
    src="/Assets/Slider/slide1.jpeg"
    alt="Hindustan Organics slide 1"
    layout="fill" 
    objectFit="cover" 
    className={Styles.imgmain}
    />
    <div className={Styles.taxtimg}>
      <span className={Styles.taxt1}>The chemistry of success.</span>
      <span className={Styles.taxt2}>Hindustan Organics</span>
    </div> */}


        <Swiper
          
          spaceBetween={100}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          effect={"fade"}
          loop={true}
          modules={[Autoplay, EffectFade, Pagination]}
          className={Styles.hero2}
        >
      {
        slideData.map(item => 
           <SwiperSlide key={item.id}>
            <div className={Styles.slidinner}>
              <Image 
              src={item.img} 
              alt={item.alt} 
              layout="fill" 
              objectFit="cover" 
              className={Styles.imgmain}
              />
              <div className={Styles.taxtimg}>
                <span className={Styles.taxt1}>{item.Title1}</span>
                <span className={Styles.taxt2}>{item.Title2}</span>
              </div>
            </div>
           </SwiperSlide>
        )
      }
      
      </Swiper>
    </div>
  </div>
  )
}