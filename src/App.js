import React from 'react'
import './App.css'
import Navbar from './components/1 navbar/navbar'
import Filters from './components/4 filters/filters'
import Slider from './components/2 slider/slider'
import Video_box from './components/3 video_box/video_box'
import Slider2 from './components/5 Slider2/Slider2'
import Booktable from './components/6 table/Book-a-table'
import Gallery from './components/7 gallery/Gallery'
import Chefs from './components/8 chefs/Chefs'
import Contect from './components/10 contact/contect'
import Footer from './components/11 footer/Footer'
import Slider3 from './components/Slider3/Slider3'
function App() {
  return (<>
    <Navbar />
    <Slider />
    <Video_box />
    <Filters />
    <Slider2 />
    <Booktable />
    <Gallery />
    <Chefs />
    {/* <Slider3 /> */}
    <Contect />
    <Footer />
  </>
  )
}

export default App