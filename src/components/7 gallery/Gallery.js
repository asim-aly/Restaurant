import React ,{useState, useEffect} from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import './Gallery.css'
// import { useEffect } from 'react'

function Gallery() {
  useEffect (( ) => {
    Aos.init({duration : 2000})
  })
  return (
    <div className='gallery'>
        <div className="gallery-heading">
        <h2>Some Photos from<span>Our Restaurent</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit fugit,quae deserunt quas ad iure,<br /> sequi consequuntur voluptatum saepe eligendi corrupti
        </p>
        </div>
        <div className="gallery-imgs">
          <div><img src="./1.jpg" alt="image" /></div>
          <div><img src="./2.jpg" alt="image" /></div>
          <div><img src="./3.jpg" alt="image" /></div>
          <div><img src="./4.jpg" alt="image" /></div>
          <div><img src="./5.jpg" alt="image" /></div>
          <div><img src="./6.jpg" alt="image" /></div>
          <div><img src="./7.jpg" alt="image" /></div>
          <div><img src="./8.jpg" alt="image" /></div>
        </div>
    </div>
  )
}

export default Gallery