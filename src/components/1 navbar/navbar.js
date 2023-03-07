import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                {/* <div className='logo'> */}
                {/* </div> */}

                {/* <div className="navbarTogglerDemo02"> */}
                    < a className='logo_a' href="" >DELICIOUS</a>

                   <ul>
                   <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">about</a>
                    <a class="nav-link" href="#">Menu</a>
                    <a class="nav-link" href="#">Special</a>
                    <a class="nav-link" href="#">events</a>
                    <a class="nav-link" href="#">chefs</a>
                    <a class="nav-link" href="#">gallery</a>
                    <a class="nav-link" href="#">Contect</a>
                    {/* <div class="dropdown">
                                <button >
                                    Dropdown
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button>Action</button></li>
                                    <li><button>Another action</button></li>
                                    <li><button>Something else here</button></li>
                                </ul>
                            </div> */}
                    <button className='navbar_btn'>Book a Table</button>

                   </ul>

                {/* </div> */}

            </nav>
        </>
    )
}

export default Navbar