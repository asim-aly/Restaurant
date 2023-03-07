import React from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import './contect.css'
import { VscLocation } from "react-icons/vsc"
import { BsClock } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"
import { AiOutlineMobile } from "react-icons/ai"


function Contect() {
    return (
        <div className='contect-main-div'>
            <div className='contect-heading'>
                <h2><span>Contact   </span>    Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit fugit,quae deserunt quas ad iure,<br /> sequi consequuntur voluptatum saepe eligendi corrupti
                </p>
            </div>
            <div className='contect-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12923.771689424882!2d74.3000874!3d35.9238971!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1645814522021!5m2!1sen!2s" width="100%"
                    height="350px"
                    loading="lazy">

                </iframe>
            </div>
            <div className='contect-form'>
                <div className="icon-div">
               <div><VscLocation   className="icon"/></div>  <div className='icon-heading'>
                        <h3> Location:</h3>
                        <p>A108 Adam Street<br />
                            New York, NY 535022</p>
                    </div>
                    <div><BsClock  className="icon"/> </div> <div className='icon-heading'>
                        <h3> Open Hours::</h3>
                        <p>Monday-Saturday:<br />
                            11:00 AM - 2300 PM</p>
                    </div>
                    <div><MdOutlineMail className="icon" /></div><div className='icon-heading'>
                        <h3> Email::</h3>
                        <p>info@example.com<br />
                            contact@example.com</p>
                    </div>
                    <div><AiOutlineMobile  className="icon" /></div><div className='icon-heading'>
                        <h3>Call:</h3>
                        <p>+1 5589 55488 51 <br />
                            +1 5589 22475 14</p>
                    </div>
                </div>
                <div className="form" data-aos="fade-up">
                    <input className='fip1' type="text" placeholder='Your name' />
                    <input className='fip1' type="email" placeholder='Your email' />
                    <input className='fip2' type="text" placeholder='Subject' />
                    <input className='fip3' type="text" placeholder='massage' />
                    <button>Send Massage</button>
                </div>
            </div>
        </div>
    )
}

export default Contect