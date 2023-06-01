'use client';
import Styles from './Form.module.css'
import { sendMail } from '../../../http/index'

export default function Form() {
  const cid = 155455552;
  const name = "Aaykush";
  const email = "oooyush.1509@gmail.com";
  const phone = 7383211295;
  const subject = "new automated email 3";



  async function sumbitform() {
    const startTime = new Date();
    try {

        const { data } = await sendMail({ cid, name, email, phone, subject })
        console.log(data)

    } catch (error) {
      console.log(error)
    }
    const endTime = new Date();

    console.log('Response Time:', endTime - startTime, 'milliseconds');
  }

  return (
    <div className={Styles.mainwrapper}>
        <div className={Styles.chidwrapper}>
            <div className={Styles.contF}>
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_I1uSzUjvgCMVRQy907RaeTP_LMk_GnNwNjskDABFQ5MAGg/viewform?embedded=true" width="100%" height="950px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */}
                <button onClick={sumbitform}> ABC </button>
            </div>
            <div className={Styles.contM}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_I1uSzUjvgCMVRQy907RaeTP_LMk_GnNwNjskDABFQ5MAGg/viewform?embedded=true" width="100%" height="1000px" frameBorder="0" marginHeight="0" marginWidth="0" >Loading…</iframe>
            </div>
        </div>
    </div>
  )
}
