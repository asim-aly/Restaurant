import { useState, useEffect } from 'react'
import './Slider3.css'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import { FiCircle } from "react-icons/fi"
// import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { Slider3data } from './Slider3data'

function Slider3() {
    const [currentSlide, setCurrentSlide] = useState(1);
    // const slideLength = Slider3data.length;

    // const autoScroll = true;
    // let slideInterval;
    // let intervelTime = 5000;

    // const nextSlide = () => {
    //     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    // };

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
    const movedot = () => {
        ( setCurrentSlide =Slider3data[0].heading)
    }

    return (
        <div className='Slider3'>

            {/* <img src="./1.png" alt="1.png" /> */}
            <div className='dark-div'>
                {/* <div className='Slider3-heading'> */}
                {/* <h2>Organize Your<span className='Slider3-heading-span'>Events</span> in our Restaurant</h2> */}
                {/* </div> */}
                <div className='Slider3-div'>
                    {/* <FaArrowCircleLeft className='arrow-prev' onClick={prevSlide} /> */}
                    {/* <FaArrowCircleRight className='arrow-next' onClick={nextSlide} /> */}
                    {/* <div className="circle-icon">
                    <FiCircle  />
                    <FiCircle  />
                    <FiCircle  />
                    <FiCircle  />
                    </div> */}
                    {Slider3data.map((slide, index) => {
                        return (
                            <>

                                <div className={index === currentSlide ? "slide-current" : "slide"} key={index}>
                                    {index === currentSlide && (
                                        <>

                                            <div className="Slider3-div_content">
                                                <div className='Slider3-div_content-img'>
                                                    <img src={slide.image} alt="slide" />
                                                </div>
                                                <div className='Slider3-div_content-txt'>
                                                    <h2>{slide.heading}</h2>
                                                    <p >{slide.price}</p>
                                                    <p>{slide.para}</p>
                                                </div>
                                            </div>
                                            <div className='slider3-dot'>
                                                <FiCircle onClick={movedot} />
                                                <FiCircle />
                                                <FiCircle />
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

export default Slider3