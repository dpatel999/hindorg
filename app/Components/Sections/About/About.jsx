'use client';
import Styles from './About.module.css'
import Image from "next/legacy/image";

export default function About() {
  return (
    <div className={Styles.aboutwrapper}>
        <div className={Styles.childwrapper}>
            <div className={Styles.left}>
              <div className={Styles.Titlewrapper}>
                <span className={Styles.Title}>About us</span>
                <div className={Styles.Titlede}></div>
              </div>
              <div>
              <p>At Hindustan Organics, we offer a comprehensive range of high-quality chemicals and products designed to meet the needs of a variety of industries. From industrial-grade solvents and adhesives to specialized chemicals for the food and beverage industry, we have the expertise and experience to provide the right solution for your business. Our products are made from the finest materials and are backed by rigorous quality control processes, ensuring that they meet the highest standards of safety and performance.</p>
              </div>
            </div>
            <div className={Styles.right}>
                < div className={Styles.subLeft}>
                  <div className={Styles.mrgdicf}>
                    <div className={Styles.abtbrand}>
                  <Image 
                    src="/Assets/Layer_2.png"
                    alt="Picture of the author"
                    layout='fill'
                    objectFit='contain'
                    className={Styles.abdimg}
                  />
                  </div>
                  </div>
                  
                  <div className={Styles.abdvis}>
                  <Image 
                    src="/Assets/abt_vision.jpeg"
                    alt="Picture of the author"
                    layout='fill'
                    objectFit='cover'
                    className={Styles.abdvisimg}
                  />
                  <div>
                    <span>
                      Vision
                    </span>
                    <p>the Vision of Hindustan organic is to make the chemical industry at top at global.</p>
                  </div>
                  </div>
                </div>
                <div className={Styles.subRight}>
                <Image 
                    src="/Assets/abt_mission.jpeg"
                    alt="Picture of the author"
                    layout='fill'
                    objectFit='cover'
                    className={Styles.abdmisimg}
                  />
                  <div>
                    <span>
                      Mission
                    </span>
                    <p>the Vision of Hindustan organic is to make the chemical industry at topat global. the Vision of Hindustan organic is to make the chemical industry at top at global. </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
