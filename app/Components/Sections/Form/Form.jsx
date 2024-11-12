'use client';
import Styles from './Form.module.css'
// import { sendMail } from '../../../http/index'
import { useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../../public/Assets/loading_6.json'

export default function Form() {



  const [name, setName] = useState('');
  const [bkname, setBKName] = useState();
  const [valname, setVALName] = useState();
  const nameRegex = /^[A-Za-z\s']{4,20}$/;

  const [email, setEmail] = useState('');
  const [bkemail, setBKEmail] = useState();
  const [valemail, setValemail] = useState();
  const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(?:\.[a-z]{2,8})?/;

  const [phone, setPhone] = useState('');
  const [bkphone, setBKPhone] = useState();
  const [valphone, setValphone] = useState();
  const regEXphone = /^\+?\d{1,3}(?:[-\s]?\d{7,9})$/;

  const [subject, setSubject] = useState('');
  const [bksubject, setBKSubject] = useState();
  const [valsubject, setValsubject] = useState();
  const regExSub = /^[a-zA-Z0-9\s]{5,40}$/
  
  const [message, setMessage] = useState('');
  const [redmsg, setRedmsg] = useState(false);
  const regExmsg = /^[a-zA-Z0-9\s]{4,150}$/

  const [bkbtn, setBKbtn] = useState(true);
  const [loading, setLoading] = useState(false)
  const [submited, setSubmited] = useState(false)

  const [resp, setResp] = useState()
  const [srver, setSrver] = useState()



  async function consoles() {
    setLoading(true);

    if ((bkbtn === false) && (name !== "" && email !== "" && phone !== "" && subject !== "" ) && (bkname === false && bkemail === false && bkphone === false && bksubject === false && redmsg === false) && (valname === true && valemail === true && valphone === true && valsubject === true)){
      try {
       const cid = 57283649;
      //  send form to email
        // const { data } = await sendMail({ cid, name, email, phone, subject, message})
        if (data.message === "Form Submitted"){
          setResp(true)
        }
  
      } catch (error) {
        if (error !== ""){
            if(error.response.data.message === "Not valid Data"){
              setResp(false)
            }
            else if (error.response.data.message === "Error sending email"){
              setSrver(true)
            }
        }
      }
    }
    else{
      setResp(false)
    }

    // const endTime = new Date();
    // console.log('Response Time:', endTime - startTime, 'milliseconds');

    setName("")
    setBKName(true)
    setVALName(false)

    setEmail("")
    setBKEmail(true)
    setValemail(false)

    setPhone("")
    setBKPhone(true)
    setValphone(false)

    setSubject("")
    setBKSubject(true)
    setValsubject(false)

    setMessage("")
    setRedmsg(true)
    
    
    setSubmited(true)
    setBKbtn(true)
    setLoading(false);
  }


  // async function sumbitform() {
  //   const startTime = new Date();
  //   try {
  //       const cid = 57283649;
  //       const { data } = await sendMail({ cid, name, email, phone, subject })
  //       console.log(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  //   const endTime = new Date();
  //   console.log('Response Time:', endTime - startTime, 'milliseconds');
  // }

  return (
    <div className={Styles.mainwrapper}>
        <div className={Styles.chidwrapper}>
            <div className={Styles.subchidwrapper}>
            <div className={Styles.titleing}>
              <div className={Styles.titlewrapper}>
                  <span className={Styles.Title}>Inquiry form</span>
                  <div className={Styles.Titlede}></div>
              </div>
              <div className={Styles.description}>
                <p>Fill the inquiry form, we will get back to you soon!</p>
              </div>
            </div>
            
            <div className={Styles.formmain}>
                <div className={Styles.Hormtitle}>
                  <span>Inquiry Form</span>
                  <p>* Marked fields are required </p>
                </div>
                <div className={Styles.inpfldgrp}>
                <div className={Styles.InpFrame}>
                    <input value={name} className={`${Styles.inpbox} ${submited === true ? Styles.inpboxAFsubmit : ''} ${bkname === true ? Styles.inpblank : ''} ${valname === false ? Styles.inpblank : ''} `}
                    type="text" 
                    placeholder=" " 
                    onChange={(e) =>{
                      setSubmited(false)
                      setName(e.target.value);
                      setBKName(e.target.value.length === 0);
                      if (nameRegex.test(e.target.value)) {setVALName(true);}
                      else if (!nameRegex.test(e.target.value)) {setVALName(false);}
                      if (e.target.value.length === 0 || !nameRegex.test(e.target.value)) {setBKbtn(true)}
                      else if (e.target.value.length !== 0 && nameRegex.test(e.target.value) && bkemail === false && valemail === true && bkphone === false && valphone === true && bksubject === false && valsubject === true && redmsg === false ) {setBKbtn(false)}
                    }}
                    />
                    <span className={`${Styles.INPplace} ${submited === true ? Styles.INPplaceAFsubmit : ''} ${bkname === true ? Styles.placeblank : ''} ${valname === false ? Styles.placeblank : ''}`}>Fullname *</span>
                </div>
                <div className={Styles.InpFrame}>
                    <input value={email} className={`${Styles.inpbox} ${submited === true ? Styles.inpboxAFsubmit : ''} ${bkemail === true ? Styles.inpblank : ''} ${valemail === false ? Styles.inpblank : ''}`}
                    type="text" 
                    placeholder=" " 
                    onChange={(e) =>{
                      setEmail(e.target.value);
                      setBKEmail(e.target.value.length === 0);
                      if (regExEmail.test(e.target.value)) {setValemail(true);}
                      else if (!regExEmail.test(e.target.value)) {setValemail(false);}
                      if (e.target.value.length === 0 || !regExEmail.test(e.target.value)) {setBKbtn(true)}
                      else if (e.target.value.length !== 0 && regExEmail.test(e.target.value) && bkname === false && valname === true && bkphone === false && valphone === true && bksubject === false && valsubject === true && redmsg === false) {setBKbtn(false)}
                    }}
                    />
                    <span className={`${Styles.INPplace} ${submited === true ? Styles.INPplaceAFsubmit : ''} ${bkemail === true ? Styles.placeblank : ''} ${valemail === false ? Styles.placeblank : ''}`}>Email *</span>
                </div>
                <div className={Styles.InpFrame}>
                    <input value={phone} className={`${Styles.inpbox} ${submited === true ? Styles.inpboxAFsubmit : ''} ${bkphone ? Styles.inpblank : ''} ${valphone === false ? Styles.inpblank : ''}`}
                    type="text"
                    placeholder=" "
                    onChange={(e) =>{
                      setPhone(e.target.value);
                      setBKPhone(e.target.value.length === 0);
                      if (regEXphone.test(e.target.value)) {setValphone(true);}
                      else if (!regEXphone.test(e.target.value)) {setValphone(false);}
                      if (e.target.value.length === 0 || !regEXphone.test(e.target.value)) {setBKbtn(true)}
                      else if (e.target.value.length !== 0 && regEXphone.test(e.target.value) && bkname === false && valname === true && bkemail === false && valemail === true && bksubject === false && valsubject === true && redmsg === false) {setBKbtn(false)}
                    }}
                    />
                    <span className={`${Styles.INPplace} ${submited === true ? Styles.INPplaceAFsubmit : ''} ${bkphone ? Styles.placeblank : ''} ${valphone === false ? Styles.placeblank : ''}`}>Phone *</span>
                </div>
                <div className={Styles.InpFrame}>
                    <input value={subject} className={`${Styles.inpbox} ${submited === true ? Styles.inpboxAFsubmit : ''} ${bksubject ? Styles.inpblank : ''} ${valsubject === false ? Styles.inpblank : ''}`} 
                    type="text" 
                    placeholder=" " 
                    onChange={(e) =>{
                      setSubject(e.target.value);
                      setBKSubject(e.target.value.length === 0);
                      if (regExSub.test(e.target.value)) {setValsubject(true);}
                      else if (!regExSub.test(e.target.value)) {setValsubject(false);}
                      if (e.target.value.length === 0 || !regExSub.test(e.target.value)) {setBKbtn(true)}
                      else if (e.target.value.length !== 0 && regExSub.test(e.target.value) && bkname === false && valname === true && bkemail === false && valemail === true && bkphone === false && valphone === true && redmsg === false) {setBKbtn(false)}
                    }}
                    />
                    <span className={`${Styles.INPplace} ${submited === true ? Styles.INPplaceAFsubmit : ''} ${bksubject ? Styles.placeblank : ''} ${valsubject === false ? Styles.placeblank : ''}`}>Subject *</span>
                </div>
                <div className={Styles.InpFrame}>
                    <textarea value={message} className={`${Styles.inpbox} ${submited === true ? Styles.inpboxAFsubmit : ''} ${Styles.inpmsg} ${redmsg === true ? Styles.inpblank : ''}`} 
                    type="text" 
                    placeholder=" " 
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (regExmsg.test(e.target.value) || e.target.value.length === 0) {setRedmsg(false);}
                      else if (!regExmsg.test(e.target.value) || e.target.value.length === 0) {setRedmsg(true);}
                      if (e.target.value.length !== 0)
                      {
                        if(regExmsg.test(e.target.value) === false) {setBKbtn(true)}
                      }
                      if ((e.target.value.length === 0 || regExmsg.test(e.target.value)) && bkname === false && valname === true && bkemail === false && valemail === true && bkphone === false && valphone === true && bksubject === false && valsubject === true ) {setBKbtn(false)}
                    }}
                    />
                    <span className={`${Styles.INPplace} ${submited === true ? Styles.INPplaceAFsubmit : ''} ${redmsg === true ? Styles.placeblank : ''}  `}>Message</span>
                </div>
                </div>
                <div className={Styles.btnHolder}>
                <div className={`${Styles.submitbtn} ${loading ? Styles.loadbtn : ''} ${bkbtn ? Styles.nonbtn : ''} ${bkname && !valname ? Styles.nonbtn : ''} ${bkemail && !valemail ? Styles.nonbtn : ''} ${bkphone && !valphone ? Styles.nonbtn : ''} ${bksubject && !valsubject ? Styles.nonbtn : ''} `} onClick={consoles}>
                  Submit
                  
                  {loading && 
                  <div className={Styles.loadingdiv}>
                    <Lottie animationData={animationData} />
                  </div>  }
                </div>
                  {resp === true && 
                    <div className={Styles.donesubmit}>
                      ☑️ Response Recorded
                    </div>
                  }
                
                  {resp === false &&   
                    <div className={Styles.errsubmit}>
                      ❌ Enter Valid values
                    </div>
                  }
               
                  {srver === true && 
                    <div className={Styles.srverrsubmit}>
                      ⚠️ Server Error
                    </div>
                  }
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}
