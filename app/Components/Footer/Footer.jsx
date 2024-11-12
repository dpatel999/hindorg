'use client';
import Styles from './Footer.module.css';
import Image from 'next/legacy/image';

export default function Footer() {
  return (
    <div className={Styles.mainwrapper}>
        <div className={Styles.childwqrapper}>
            <div className={Styles.contchildwrapper}>
                <div className={Styles.top}>
                    <div className={Styles.brandsvg}>
                        <a href="/">
                        <Image
                            src="/Assets/footer_brand.png"
                            alt="Customer Count"
                            width={264}
                            height={67}
                            objectFit='contain'
                        />
                        </a>
                    </div>
                    <div className={Styles.brandsvgm}>
                        <Image
                            src="/Assets/foot_mbrand.png"
                            alt="Customer Count"
                            width={205}
                            height={52}
                            objectFit='contain'
                        />
                    </div>
                    <div className={Styles.navlinks}>
                        <ul>
                            <a href="#home"><li>Home</li></a>
                            <a href="#about"><li>About</li></a>
                            <a href="#services"><li>Products</li></a>
                            <a href="#testimon"><li>Testimonial</li></a>
                            <a href="#contact"><li>Contact us</li></a>
                        </ul>
                    </div>
                </div>
                <div className={Styles.centerde}></div>
                <div className={Styles.botttom}>
                    <span>© 2023 Hindustan Organics | Designed by Weblom </span>
                    <div className={Styles.socialwrapper}>
                    <div className={Styles.socialimg}>
                                <Image
                                    src="/Assets/fb.png"
                                    alt="Customer Count"
                                    width={11}
                                    height={20}
                                    objectFit='contain'
                                />
                            </div>
                            <div className={Styles.socialimg}>
                                <Image
                                    src="/Assets/twt.png"
                                    alt="Customer Count"
                                    width={19}
                                    height={16}
                                    objectFit='contain'
                                />
                            </div>
                            <div className={Styles.socialimg}>
                                <Image
                                    src="/Assets/insta.png"
                                    alt="Customer Count"
                                    width={19}
                                    height={19}
                                    objectFit='contain'
                                />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
