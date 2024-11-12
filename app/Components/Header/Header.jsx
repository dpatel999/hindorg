'use client';

import { useState, useEffect, useContext, useRef } from "react";
import Styles from "./Header.module.css";
import Image from "next/legacy/image";
import ElementContex from "../context/scroll/ElementContex";



export default function Header() {
  const {state} = useContext(ElementContex)
  const sec = state;
  const [menu,setMenu] = useState("Home")


  useEffect(() => {
    // window.addEventListener("afterprint", (event) => {
    //   console.log(sec);
    // });
    window.addEventListener("scroll", ()=>{
      let currentH = '';
      sec.forEach( section => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop){
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
      "color" : menu == "Home" ? "#971B1E" : "#1B3E1C",
      "textDecoration": menu == "Home" ? "underline" : "none"
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
    "color" : menu == "Testimon" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "Testimon" ? "underline" : "none"
  }

  const contm = {
    "color" : menu == "Contact" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "Contact" ? "underline" : "none"
  }

  const Conststylebtn = {
    "borderColor" : menu == "Contact" ? "#1B3E1C" : "transparent",
    "color" : menu == "Contact" ? "#1B3E1C" : "#EFFFEF",
    "backgroundColor" : menu == "Contact" ? "#EFFFEF" : "#1B3E1C",
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
      <>
      <div className={Styles.main} style={mainbx}>
      <div className={Styles.brand}>
        <Image 
        src="/Assets/layer_2.png"
        alt="Picture of the author"
          width={698}
          height={177}
          className={Styles.img}
        />
      </div>
      
      <div className={Styles.navlink}>
          <ul>
          <a href="#Home"><li style={homestyle} id="linksd" className={Styles.active}> Home </li></a>
          <a href="#about"><li style={Aboutstyle} id="linksd" >About</li></a>
          <a href="#services"><li style={Servsstyle} id="linksd" >Services</li></a>
          <a href="#Testimon"> <li style={Teststyle} id="linksd" >Testimonial</li></a>
          </ul>
      </div>
      
      <div className={Styles.hamburger} onClick={clicking}>
        <span style={style0}></span>
        <span style={style1}></span>
        <span style={style2}></span>
      </div>
      <div onClick={callgoto} style={Conststylebtn} className={Styles.calltoact}>
        Contact us
      </div>
    </div>
  <div className={`${Styles.navlinkm} ${isOpen ? Styles.open : ""}`}>
  <ul>
   <li style={homestyle} onClick={() => {clsmenu();}}> Home</li>
    <li style={Aboutstyle} onClick={clsmenu}>About</li>
    <li style={Servsstyle} onClick={clsmenu}>Services</li>
    <li style={Teststyle} onClick={clsmenu}>Testimonial</li>
    <li style={contm} onClick={clsmenu}>Contact us</li>
  </ul>
</div>
</>
  );
}
