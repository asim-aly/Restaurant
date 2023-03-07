import React, { useState, useEffect } from 'react'
import './filters.css'
import "aos/dist/aos.css"
import Aos from 'aos'
import { F1data } from './filterdata'
import { F2data } from './filterdata'
import { F3data } from './filterdata'



function Filters(props) {
    const [array, setArray] = useState(F1data);
    const [items, setItems] = useState(F2data);
    const [item3, setItem3] = useState(F3data);

    const filterItem3 = (cateitem) => {
        const updateitem3 = F3data.filter((curelem) => {
            return curelem.but === cateitem;
        });
        setItem3(updateitem3);
    }

    const filterItem = (cateitem) => {
        const updateitems = F2data.filter((curelem) => {
            return curelem.cat === cateitem;
        });
        setItems(updateitems);
    }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <div className='main-div'>
            <div className='div1'>
                <h2 data-aos="fade-up">why choose <span>Our Restaurant</span></h2>
                <p >Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dicta, placeat. Minimax <br />
                    . Ex porro nemo quidem omnis qui perspiciatis?</p>
            </div>
            <div className='filter1'>

                {array.map((elements) => {
                    const { number, heading, para } = elements;
                    return (
                        <div className='filterdata' data-aos="fade-left">
                            <p className='filterdata-span'>{number}</p>
                            <h2>{heading}</h2>
                            <p>{para}</p>
                        </div>
                    )
                })}

            </div>

            <div className='filter2'>
                <div className='filter2-heading' data-aos="fade-up">
                    <h2>Check Our Tasty <span>Menu</span></h2>
                    <button className='filter2-btn' onClick={() => setItems(F2data)}>SHOW ALL</button>
                    <button className='filter2-btn' onClick={() => filterItem("starters")}>STARTERS</button>
                    <button className='filter2-btn' onClick={() => filterItem("salads")}>SALADS</button>
                    <button className='filter2-btn' onClick={() => filterItem("specially")}>SPECIALLY</button>
                </div>

                <div className='filter2-content'>
                    {items.map((elements1) => {
                        const { heading, price, desc } = elements1;
                        return (
                            <div className='filterdata2' data-aos="fade-up">
                                <h2>{heading}<span className='heading_span'>........................{price}</span></h2>
                                <p className='desc'>{desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='filter3'>
                <div className='filter3_div1'>
                    <h2>Check Our <span>Specials</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat quia earum pariatur temporibus aspernatur aliquam aperiam <br />
                        perspiciatis inventore maiores, accusamus eaque consequuntur.</p>
                </div>
                <div className='filter3_div2'>
                   <div className='filter3_div2_btn'>
                        <button onClick={() => filterItem3('btn1')}>laudantium vitaelibero</button>
                        <button onClick={() => filterItem3('btn2')}>voluptate in </button>
                        <button onClick={() => filterItem3('btn3')}> dolores ut</button>
                        <button onClick={() => filterItem3('btn4')}> dsvxvff dfdvt</button>
                        <button onClick={() => filterItem3('btn5')}> dfsfsd vsddvs s</button>
                        </div>
                    <div className='filter3_div2_content'>
                    {item3.map((element2) => {
                        const { heading, para, image } = element2;
                        return (
                            <>
                                <div className=' special-filter-div'>
                                    <div className='special-filter-child-div'>
                                        <div className='filter3_div2_desc'>
                                            <h2>{heading}</h2>
                                            <p>{para}</p>
                                        </div>
                                        <div className='filter3_div2_img'>
                                            <img src={image} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            </div>

        </div>
    )
}

export default Filters