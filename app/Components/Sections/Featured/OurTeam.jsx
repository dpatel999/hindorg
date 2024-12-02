'use client';
import Styles from './OurTeam.module.css';
import Image from 'next/legacy/image';

export default function OurTeam() {
  return (
    <div className={Styles.mainwrapper}>
        <div className={Styles.childwrapper}>
            <div className={Styles.titlewrapper}>
                <span className={Styles.Title}>Our Team</span>
                <div className={Styles.Titlede}></div>
            </div>
            <div className={Styles.IMGsbottomWrap}>
                <div className={Styles.IMGwrp}>
                    <div className={Styles.imgcard}>
                        <Image
                            className={Styles.mainImg}
                            src="/Assets/team/Haresh.jpeg"
                            alt="Haresh Patel"
                            width={768}
                            height={1024}
                            objectFit='cover'
                        />
                        <div className={Styles.contentTeam}>
                            <span>Haresh Patel</span>
                            <p>diretor</p>
                        </div>
                    </div>
                </div>
                
                {/* <div className={Styles.IMGwrp}>
                    <div className={Styles.imgcard}>
                        <Image
                            src="/Assets/team/2.webp"
                            alt="Meghanshi Sevak"
                            width={768}
                            height={1024}
                            objectFit='cover'
                        />
                        <div className={Styles.contentTeam}>
                            <span>Meghanshi Sevak</span>
                            <p>senior manager</p>
                        </div>
                    </div>
                </div> */}
                <div className={Styles.IMGwrp}>
                    <div className={Styles.imgcard}>
                        <Image
                            src="/Assets/team/3.webp"
                            alt="Haresh Patel"
                            width={768}
                            height={1024}
                            objectFit='cover'
                        />
                        <div className={Styles.contentTeam}>
                            <span>Pankaj Patel</span>
                            <p>manager</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.IMGwrp}>
                    <div className={Styles.imgcard}>
                        <Image
                            src="/Assets/team/4.webp"
                            alt="Haresh Patel"
                            width={768}
                            height={1024}
                            objectFit='cover'
                        />
                        <div className={Styles.contentTeam}>
                            <span>Darshan Patel</span>
                            <p>engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
