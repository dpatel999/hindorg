'use client';
import Image from 'next/legacy/image'
import Styles from './Whychoose.module.css'


export default function Whychoose() {
  return (
    <div className={Styles.mainwcuwrapper}>
        <div className={Styles.wcuchild}>
            <div className={Styles.titlewrapper}>
                <span className={Styles.Title}>Why Choose us</span>
                <div className={Styles.Titlede}></div>
            </div>
            <div className={Styles.contentwcu}>
                <p>We understand that each industry has its own unique requirements and that's why we offer a range of customized solutions to meet your specific needs. Whether you're looking for a standard product or a specialized solution, we have the experience and expertise to help you find the right product for your business. Our team of experts is always available to help you choose the right solution for your needs, and to provide the support you need to succeed.</p>
            </div>
            <div className={Styles.cardwrapper}>
                <div className={Styles.card}>
                    <div className={`${Styles.cardimg} ${Styles.trusted}`}>
                        <Image
                        src="/Assets/trust.png"
                        alt="Customer Count"
                        width={36}
                        height={44}
                        objectFit='contain'
                        />
                    </div>
                    <span>Trust</span>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardimg}>
                        <Image
                        src="/Assets/larg.png"
                        alt="Customer Count"
                        width={50}
                        height={45}
                        objectFit='contain'
                        />
                    </div>
                    <span>Innovation</span>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardimg}>
                    <Image
                        src="/Assets/perfec.png"
                        alt="Customer Count"
                        width={44}
                        height={44}
                        objectFit='contain'
                        />
                    </div>
                    <span>Commitment to quality</span>
                </div >
                <div className={Styles.card}>
                    <div className={`${Styles.cardimg} ${Styles.trusted}`}>
                        <Image
                        src="/Assets/time.png"
                        alt="Customer Count"
                        width={41}
                        height={48}
                        objectFit='contain'
                        />
                    </div>
                    <span>Experienced team</span>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardimg}>
                        <Image
                        src="/Assets/grow.png"
                        alt="Customer Count"
                        width={46}
                        height={41}
                        objectFit='contain'
                        />
                    </div>
                    <span>Excellence</span>
                    </div>
            </div>
        </div>
    </div>
  )
}
