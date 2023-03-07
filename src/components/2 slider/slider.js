import { useState, useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import './slider.css'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi"
import { Sliderdata } from './Sliderdata'


function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = Sliderdata.length;

    const autoScroll = true;
    let slideInterval;
    let intervelTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervelTime)
    }

    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide -1); 
    // };

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    useEffect (( ) => {
        Aos.init({duration : 1000})
      })

    return (
        <div className='slider'>
            <BiChevronLeftCircle className='arrow prev' onClick={prevSlide} />
            <BiChevronRightCircle className='arrow next' onClick={nextSlide} />

            {Sliderdata.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide" />
                                <div className="content" >
                                    <h2 data-aos="fade-down">{slide.heading}</h2>
                                    <p data-aos="fade-up">{slide.para}</p>
                                    <button className="slider_btn">OUR MANU </button>
                                    <button className="slider_btn">BOOK A TABLE </button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default Slider