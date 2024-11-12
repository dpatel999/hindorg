'use client';
import Styles from './Services.module.css'
import Image from 'next/legacy/image'
import data from '../../../data/database.json'
import Card from '../../Card/Card';

export default function Services() {
    const aayeladata = data;
  return (
    <div className={Styles.SerWrapper}>
        <div className={Styles.childwrapper}>
            <div className={Styles.fixwrapper}>
            <div className={Styles.fixedbar}>
                <div className={Styles.cust}>
                    <div className={Styles.custimg}>
                        <Image
                        src="/Assets/cust.png"
                        alt="Customer Count"
                        width={43}
                        height={50}
                        layout='fixed'
                        />
                    </div>
                    <div className={Styles.custimgm}>
                        <Image
                        src="/Assets/cust.png"
                        alt="Customer Count"
                        width={43}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>500+</span>
                    <p>CUSTOMERS</p>
                </div>
                <div className={Styles.loca}>
                    <div className={Styles.locaimg}>
                        <Image
                        src="/Assets/loca.png"
                        alt="Customer Count"
                        width={42}
                        height={50}
                        layout='fixed'
                        />
                    </div>
                    <div className={Styles.locaimgm}>
                        <Image
                        src="/Assets/loca.png"
                        alt="Customer Count"
                        width={42}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>50+</span>
                    <p>LOCATIONS</p>
                </div>
                <div className={Styles.ship}>
                    <div className={Styles.shipimg}>
                        <Image
                        src="/Assets/ship.png"
                        alt="Customer Count"
                        width={69}
                        height={50}
                        layout='fixed'
                        />
                    </div>
                    <div className={Styles.shipimgm}>
                        <Image
                        src="/Assets/ship.png"
                        alt="Customer Count"
                        width={69}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>50+</span>
                    <p>SUPPLIERS</p>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boximg}>
                        <Image
                        src="/Assets/box.png"
                        alt="Customer Count"
                        width={44}
                        height={50}
                        layout='fixed'
                        />
                    </div>
                    <div className={Styles.boximgm}>
                        <Image
                        src="/Assets/box.png"
                        alt="Customer Count"
                        width={44}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>40+</span>
                    <p>PRODUCTS</p>
                </div>
            </div>
            {/* asdasdasd */}
            <div className={Styles.fixedbarm}>
                <div className={Styles.fixtop}>
                <div className={Styles.cust}>
                    <div className={Styles.custimgm}>
                        <Image
                        src="/Assets/cust.png"
                        alt="Customer Count"
                        width={43}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>500+</span>
                    <p>CUSTOMERS</p>
                </div>
                <div className={Styles.loca}>
                    <div className={Styles.locaimgm}>
                        <Image
                        src="/Assets/loca.png"
                        alt="Customer Count"
                        width={42}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>50+</span>
                    <p>LOCATIONS</p>
                </div>
                </div>
                <div className={Styles.fixbot}>
                <div className={Styles.ship}>
                    <div className={Styles.shipimgm}>
                        <Image
                        src="/Assets/ship.png"
                        alt="Customer Count"
                        width={69}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>50+</span>
                    <p>SUPPLIERS</p>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boximgm}>
                        <Image
                        src="/Assets/box.png"
                        alt="Customer Count"
                        width={44}
                        height={50}
                        layout='responsive'
                        />
                    </div>
                    <span>40+</span>
                    <p>PRODUCTS</p>
                </div>
                </div>
            </div>
            </div>
            <div className={Styles.subwrapper}>
                    <div className={Styles.titlewrapper}>
                        <span className={Styles.Title}>Products</span>
                        <div className={Styles.Titlede}></div>
                    </div>
                    <div className={Styles.bottom}>
                       {
                        aayeladata.map(items => 
                            <Card key={items.id} datasr={items} />
                            )
                       }
                    </div>
        </div>
    </div>
    </div>
  )
}
