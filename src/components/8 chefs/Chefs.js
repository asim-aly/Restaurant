import React from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import './Chefs.css'
import { FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"


function Chefs() {
    return (
        <div className='chefs'>
            <div className='chefs-dark-div'>
                <div className="chef-heading">
                    <h2>Our Proffesional<span>Chefs</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit fugit,quae deserunt quas ad iure,<br /> sequi consequuntur voluptatum saepe eligendi corrupti
                    </p>
                </div>
                <div className="chef-content">
                    <div className="chef1" data-aos="fade-down">
                        <div className="chef1-desc">
                            <h3 className='chef1-desc-heading'>Walter White</h3>
                            <hr />
                            <h4>Master Chef</h4>
                            <p>
                                <FaTwitter />
                                <FaFacebookF />
                                <BsInstagram />
                                <FaLinkedin />
                            </p>
                        </div>
                    </div>
                    <div className="chef2" data-aos="fade-down">
                        <div className="chef1-desc">
                            <h3 className='chef1-desc-heading'>Sarah Jhonson</h3>
                            <hr />
                            <h4>Patissier</h4>
                            <p>
                                <FaTwitter />
                                <FaFacebookF />
                                <BsInstagram />
                                <FaLinkedin />
                            </p>
                        </div>
                    </div>
                    <div className="chef3" data-aos="fade-down">
                        <div className="chef1-desc">
                            <h3 className='chef1-desc-heading'>Willian Anderson</h3>
                            <hr />
                            <h4>Cook</h4>
                            <p>
                                <FaTwitter />
                                <FaFacebookF />
                                <BsInstagram />
                                <FaLinkedin />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chefs