import React from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import './Footer.css'
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { SiSkypeforbusiness } from "react-icons/si"
import { BsLinkedin } from "react-icons/bs"


function Footer() {
  return (
    <div className='footer' data-aos="fade-down">
        <h2>DELICIOUS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet elit. Id, ipsum.</p>
        <div className="footer-icons">
          <AiFillTwitterCircle className='footer-icon' />
          <BsFacebook className='footer-icon'/>
          <BsInstagram className='footer-icon'/>
          <SiSkypeforbusiness className='footer-icon'/>
          <BsLinkedin className='footer-icon'/>
        </div>
    </div>
  )
}

export default Footer