import React from 'react'
import './video_box.css'
import "aos/dist/aos.css"
import Aos from 'aos'
import { BsCheck2All } from "react-icons/bs"
import ReactPlayer from 'react-player'

function Video_box() {
  return (
    <div className='video_div'>
      <div className='video'>
        <ReactPlayer
          width='100%'
          height='100%'
          controls url='https://youtu.be/72HHKIsLZlw' />
      </div>
      <div className='txt' data-aos="fade-up">
        <h1>Eum ipsam laborum deleniti velit pariatur architecto aut nihil</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          {/* <br /> */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias odio laborum minus
          nostrunam ad sint consequatur qui? Nemo, ipsam. <br /> <br />
          <BsCheck2All className='check_icon' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
          <BsCheck2All className='check_icon' />Duis aute irure dolor in reprehenderit in voluptate velit. <br />
          <BsCheck2All className='check_icon' /> Lorem ipsum dolor sit amet consectetur adipisicing. <br /> <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias odio laborum minus
          nostrum laudantium itaque dolor odit laboriosam, expedita dolorem nesciunt esse dolores
          nam ad sint consequatur qui? Nemo, ipsam.</p>
      </div>
    </div>
  )
}

export default Video_box