import { useState, useEffect } from 'react'
import './Slider2.css'
import "aos/dist/aos.css"
import Aos from 'aos'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { Slider2data } from './Slider2data'

function Slider2() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = Slider2data.length;

    // const autoScroll = true;
    // let slideInterval;
    // let intervelTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    // function auto() {
    //     slideInterval = setInterval(nextSlide, intervelTime)
    // }

    // useEffect(() => {
    //     setCurrentSlide(0)
    // }, [])

    // useEffect(() => {
    //     if (autoScroll) {
    //         auto();
    //     }
    //     return () => clearInterval(slideInterval)
    // }, [currentSlide])

    return (
        <div className='slider2'>

            {/* <img src="./1.png" alt="1.png" /> */}
            <div className='dark-div1'>
                <div className='slider2-heading'>
                    <h2>Organize Your<span className='slider2-heading-span'>Events</span> in our Restaurant</h2>
                </div>
                <div className='slider2-div'>
                    <FaArrowCircleLeft className='arrow-prev' onClick={prevSlide} />
                    <FaArrowCircleRight className='arrow-next' onClick={nextSlide} />

                    {Slider2data.map((slide, index) => {
                        return (
                            <>

                                <div className={index === currentSlide ? "slide2 current" : "slide"} key={index}>
                                    {index === currentSlide && (
                                        <>

                                            <div className="slider2-div_content">
                                                <div className='slider2-div_content-img' data-aos="fade-right">
                                                    <img src={slide.image} alt="slide" />
                                                </div>
                                                <div className='slider2-div_content-txt' data-aos="fade-left">
                                                    <h2>{slide.heading}</h2>
                                                    <p className='price'>$103</p>
                                                    <p>{slide.para}</p>
                                                    <p> <IoIosCheckmarkCircleOutline className='slider2-div_content-txt-icon'/> {slide.li1}</p>
                                                    <p> <IoIosCheckmarkCircleOutline className='slider2-div_content-txt-icon'/> {slide.li2}</p>
                                                    <p> <IoIosCheckmarkCircleOutline className='slider2-div_content-txt-icon'/>{slide.li3}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </div>

    )
}

export default Slider2