'use client';
import Styles from './Featured.module.css';
import Image from 'next/legacy/image';

export default function Featured() {
  return (
    <div className={Styles.mainwrapper}>
        <div className={Styles.childwrapper}>
            <div className={Styles.titlewrapper}>
                <span className={Styles.Title}>Featured in</span>
                <div className={Styles.Titlede}></div>
            </div>
            <div className={Styles.botwrapper}>
            <div className={Styles.bottomcont}>
                <div className={Styles.left}>
                    <div className={Styles.topimgs}>
                        <div className={Styles.imgcard}>
                            <Image
                                src="/Assets/Feat/feat1.png"
                                alt="Customer Count"
                                width={160}
                                height={63}
                                objectFit='contain'
                            />
                        </div>
                        <div className={Styles.imgcard}>
                            <Image
                                src="/Assets/Feat/feat2.png"
                                alt="Customer Count"
                                width={211}
                                height={20}
                                objectFit='contain'
                            />
                        </div>
                    </div>
                    <div className={Styles.botomimgs}>
                        <div className={Styles.imgcard}>
                            <Image
                                src="/Assets/Feat/feat3.png"
                                alt="Customer Count"
                                width={156}
                                height={70}
                                objectFit='contain'
                            />
                        </div>
                        <div className={Styles.imgcard}>
                            <Image
                                src="/Assets/Feat/feat4.png"
                                alt="Customer Count"
                                width={218}
                                height={121}
                                objectFit='contain'
                            />
                        </div>
                    </div>
                </div>
                <div className={Styles.right}>
                    <div className={Styles.righttitlebar}>
                        <div className={Styles.titleleft}>
                            <div className={Styles.imgcardrighttop}>
                                <Image
                                    src="/Assets/Feat/feat1.png"
                                    alt="Customer Count"
                                    width={160}
                                    height={63}
                                    objectFit='contain'
                                />
                            </div>
                            <div className={Styles.speretor}></div>
                            <span>Divya Bhaskar</span>
                        </div>
                        <div className={Styles.titlerightslid}>
                            <div className={Styles.lefttic}>
                                <Image
                                    src="/Assets/lefts.png"
                                    alt="Customer Count"
                                    width={40}
                                    height={27}
                                    objectFit='contain'
                                />
                            </div>
                            <div className={Styles.righttic}>
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
                    <div className={Styles.newsimg}>
                        <Image
                            src="/Assets/Feat/feat_main.png"
                            alt="Customer Count"
                            width={548}
                            height={456}
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
