'use client';
import Image from 'next/legacy/image';
import Styles from './Contact.module.css';


export default function Contact() {
  return (
    <div className={Styles.mainwrapper}>
        <div className={Styles.childwrapper}>
            <div className={Styles.titlewrapper}>
                <span className={Styles.Title}>Contact us</span>
                <div className={Styles.Titlede}></div>
            </div>
            <div className={Styles.botmwrapper}>
            <div className={Styles.botmcont}>
                <div className={Styles.left}>
                    <a href="tel:+919427050266">
                    <div className={`${Styles.call} ${Styles.comancontdiv}`}>
                        <div className={`${Styles.callimg} ${Styles.comanconticon}`}>
                            <Image
                                src="/Assets/Contact/call.png"
                                alt="Customer Count"
                                width={21}
                                height={21}
                                objectFit='contain'
                            />
                        </div>
                        <span>+91 9427050266</span>
                    </div>
                    </a>
                    <a href="mailto:sales@hindorg.com">
                    <div className={`${Styles.mail} ${Styles.comancontdiv}`}>
                        <div className={`${Styles.mailing} ${Styles.comanconticon}`}>
                        <Image
                            src="/Assets/Contact/mail.png"
                            alt="Customer Count"
                            width={20}
                            height={18}
                            objectFit='contain'
                        />
                        </div>
                        <span>sales@hindorg.com</span>
                    </div>
                    </a>
                    <a href="https://goo.gl/maps/BPn3B2eEEfPuCiMCA" target='_blank'>
                    <div className={`${Styles.addr} ${Styles.comancontdiv}`}>
                        <div className={`${Styles.addring} ${Styles.comanconticon}`}>
                        <Image
                            src="/Assets/Contact/addr.png"
                            alt="Customer Count"
                            width={19}
                            height={23}
                            objectFit='contain'
                        />
                        </div>
                        <div>
                            <span>Hindustan Organics</span>
                            <p>Plot No C, 1, 1114/C, behind Gaytre Temple Road, Phase 4, GIDC Estate, Naroda, Ahmedabad, Gujarat 382330</p>
                        </div>
                    </div>
                    </a>
                    <div className={Styles.socwrapper}>
                    <div className={Styles.Social}>
                        <span>Follow us :</span>
                        <div className={Styles.socialimgwrapper}>
                            <a href="https://www.facebook.com" target='_blank'>
                            <div className={`${Styles.socialimg} ${Styles.fb}`}>
                                <Image
                                    src="/Assets/Contact/fb_drk.png"
                                    alt="Customer Count"
                                    width={11}
                                    height={20}
                                    objectFit='contain'
                                />
                            </div>
                            </a>
                            <a href="https://twitter.com/" target='_blank'>
                            <div className={`${Styles.socialimg} ${Styles.twt}`}>
                                <Image
                                    src="/Assets/Contact/twt_drk.png"
                                    alt="Customer Count"
                                    width={19}
                                    height={16}
                                    objectFit='contain'
                                />
                            </div>
                            </a>
                            <a href="https://www.instagram.com/" target='_blank'>
                            <div className={`${Styles.socialimg} ${Styles.insta}`}>
                                <Image
                                    src="/Assets/Contact/insta_drk.png"
                                    alt="Customer Count"
                                    width={19}
                                    height={19}
                                    objectFit='contain'
                                />
                            </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={Styles.right}>
                    <div className={Styles.mapimg}>
                    <iframe className={Styles.gmap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9388618129865!2d72.6779239742366!3d23.099333813461286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e899d21853647%3A0xcc3f86391e60cca6!2sHindustan%20Organics!5e0!3m2!1sen!2sin!4v1682104135925!5m2!1sen!2sin" width="555" height="320" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={Styles.mapimgm}>
                    <iframe className={Styles.gmap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9388618129865!2d72.6779239742366!3d23.099333813461286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e899d21853647%3A0xcc3f86391e60cca6!2sHindustan%20Organics!5e0!3m2!1sen!2sin!4v1682104135925!5m2!1sen!2sin" width="340" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
