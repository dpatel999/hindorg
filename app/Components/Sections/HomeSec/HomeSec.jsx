'use client';
import Styles from './HomeSec.module.css';
import Image from 'next/legacy/image';
import slideData from '../../../data/Homesliders.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeSec() {
  return (
    <div className={Styles.homewrapper}>
      <div className={Styles.herosec}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4200,
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
                  alt={item.Title1 + ' - ' + item.Title2 + ' | Hindustan Organics'}
                  layout="fill"
                  objectFit="cover"
                  className={Styles.imgmain}
                  priority={item.id === 1}
                />
                <div className={Styles.taxtimg}>
                  <span className={Styles.taxt1}>{item.Title1}</span>
                  <span className={Styles.taxt2}>{item.Title2}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}