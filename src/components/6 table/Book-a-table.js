import React from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import './Book-a-table.css'

function Booktable() {
  return (
    <div className='booktable'>
      <div className="booktable-heading">
        <h2>Book a <span>Table</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odit fugit,quae deserunt quas ad iure,<br /> sequi consequuntur voluptatum saepe eligendi corrupti
        </p>
      </div>
      <div className="booktable-form" data-aos="fade-down">
        <input className='ip1' type="text" placeholder='Your name' />
        <input className='ip2' type="email" placeholder='Your email' />
        <input className='ip3' type="number" placeholder='your phone' />
        <input className='ip4' type="date" placeholder='Date' />
        <input className='ip5' type="time" placeholder='Time' />
        <input className='ip6' type="number" placeholder='# of people' />
        <input className='ip7' type="text" placeholder='massage' />
        <button>Send Massage</button>
      </div>
    </div>
  )
}

export default Booktable
