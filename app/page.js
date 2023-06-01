'use client';
import Image from "next/legacy/image";
import Styles from './page.module.css'
import HomeSec from './Components/Sections/HomeSec/HomeSec';
import About from './Components/Sections/About/About'
import Services from './Components/Sections/Serivces/Services';
import Whychoose from './Components/Sections/Whychoose/Whychoose';
import Testimon from './Components/Sections/Testimon/Testimon';
import Clientsec from './Components/Sections/Clientsec/Clientsec';
import Featured from './Components/Sections/Featured/Featured';
import Contact from './Components/Sections/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Form from './Components/Sections/Form/Form';
import {  useState, useEffect } from 'react';




export default function Home() {
  
  const [menu,setMenu] = useState("home")

  useEffect(() => {

    const moblink = document.querySelectorAll(".mobnavbtn");
    moblink.forEach( moblinks => {
      moblinks.addEventListener("click", ()=>{
        let elm = document.getElementById(moblinks.getAttribute("data-link"))
        console.log(elm.offsetTop)
        
        if (moblinks.getAttribute("data-link") == "home"){
          var offsetPosition = elm.getBoundingClientRect().top + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "about"){
          var offsetPosition = elm.getBoundingClientRect().top + (-20) + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "services"){
          var offsetPosition = elm.getBoundingClientRect().top + 170 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "testimon"){
          var offsetPosition = elm.getBoundingClientRect().top + 28 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "contact"){
          var offsetPosition = elm.getBoundingClientRect().top + 70 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      })
    })




    const links = document.querySelectorAll(".dsknavbtn")
    links.forEach( link => {
      link.addEventListener("click", ()=>{
        let el = document.getElementById(link.getAttribute("data-link"));
        
        if (link.getAttribute("data-link") == "home"){
          var offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "about"){
          var offsetPosition = el.getBoundingClientRect().top + 48 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "services"){
          var offsetPosition = el.getBoundingClientRect().top + 190 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "testimon"){
          var offsetPosition = el.getBoundingClientRect().top + 28 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "contact"){
          var offsetPosition = el.getBoundingClientRect().top + 10 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }



      })
    } )


    const sections = document.querySelectorAll("section")
    window.addEventListener("scroll", ()=>{
      let currentH = '';
      sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 2)){
          currentH = section.getAttribute('id')
          setMenu(currentH)
        }
      })
    });

  }, []);


  
  const [isOpen,setIsopen] = useState(false)
  function clicking(){
    if(isOpen){
      setIsopen(false)
    }else{
      setIsopen(true)
    }
  }
  function clsmenu(){
      setIsopen(false)
  }

  const homestyle = {
      "color" : menu == "home" ? "#971B1E" : "#1B3E1C",
      "textDecoration": menu == "home" ? "underline" : "none"
  }

  const Aboutstyle = {
    "color" : menu == "about" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "about" ? "underline" : "none"
  }

  const Servsstyle = {
    "color" : menu == "services" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "services" ? "underline" : "none"
  }

  const Teststyle = {
    "color" : menu == "testimon" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "testimon" ? "underline" : "none"
  }

  const contm = {
    "color" : menu == "contact" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "contact" ? "underline" : "none"
  }

  const Conststylebtn = {
    "borderColor" : menu == "contact" ? "#1B3E1C" : "transparent",
    "color" : menu == "contact" ? "#1B3E1C" : "#EFFFEF",
    "backgroundColor" : menu == "contact" ? "#EFFFEF" : "#1B3E1C",
  }



  const style0 = {
    "transform" : isOpen ? "rotate(44deg)" : "rotate(0deg)"
  }
  const style1 = {
    "opacity" : isOpen ? "0" : "1"
  }
  const style2 = {
    "transform" : isOpen ? "rotate(-44deg)" : "rotate(0deg)"
  }
  const mainbx = {
    boxShadow: isOpen ? "none" : "0px 5px 16px #0000001e inset"
  }


  

  return (
    // ----------------------------- head section -------------------------
    <>
    <div className={Styles.headwrapper}>
    <div className={Styles.maxwidth} style={mainbx} >
    <div className={Styles.main} >
    <a href="/">
    <div className={Styles.brand}>
      <Image 
      src="/Assets/Layer_2.png"
      alt="Picture of the author"
        width={698}
        height={177}
        className={Styles.img}
      />
    </div>
    </a>
    
    <div className={`${Styles.navlink} navlink`}>
        <ul>
        <a className="dsknavbtn" data-link="home"><li style={homestyle} id="linksd" > Home </li></a>
        <a className="dsknavbtn" data-link="about"><li style={Aboutstyle} id="linksd" >About</li></a>
        <a className="dsknavbtn" data-link="services"><li style={Servsstyle} id="linksd" >Products</li></a>
        <a className="dsknavbtn" data-link="testimon"> <li style={Teststyle} id="linksd" >Testimonial</li></a>
        </ul>
    </div>
    
    <div className={Styles.hamburger} onClick={clicking}>
      <span style={style0}></span>
      <span style={style1}></span>
      <span style={style2}></span>
    </div>
    <a className="dsknavbtn" data-link="contact">
    <div style={Conststylebtn} className={Styles.calltoact}>
      Contact us
    </div>
    </a>
  </div>
  </div>
<div className={`${Styles.navlinkm} ${isOpen ? Styles.open : ""}`}>
<ul>
  <a className="mobnavbtn" data-link="home"><li style={homestyle} onClick={clsmenu}>Home</li></a>
  <a className="mobnavbtn" data-link="about"><li style={Aboutstyle} onClick={clsmenu}>About</li></a>
  <a className="mobnavbtn" data-link="services"><li style={Servsstyle} onClick={clsmenu}>Products</li></a>
  <a className="mobnavbtn" data-link="testimon"><li style={Teststyle} onClick={clsmenu}>Testimonial</li></a>
  <a className="mobnavbtn" data-link="contact"><li style={contm} onClick={clsmenu}>Contact us</li></a>
</ul>
</div>
</div>

    {/* ----------------- Pages Sections -------------------- */}
    
    <div>

      <section id='home'><HomeSec /></section>

      <section id='about'><About /></section>
      <section id='services'><Services /></section>
      <Whychoose />
      <section id='testimon'><Testimon /></section>
      <Clientsec />
      <Featured />
      <section id='contact'><Contact /></section>
      <Form />
      <Footer />
    </div>
    </>
  )
}


