import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { Link as Rlink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [navbar, setNavbar] = useState(false)
    const changeBakground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBakground);

    return (

        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar-container container">
                <li className="nav-logo">
                    <Link to='home' className='nav-links'
                        activeClass="active"
                        to="roadmap"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        UnikCorn
                    </Link>
                </li>
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <Link className='nav-links'
                            activeClass="active"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Roadmap
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links'
                            activeClass="active"
                            to="faq"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            F.A.Q
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links'
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Team
                        </Link>
                    </li>
                    <li className="nav-logo">
                        <Rlink to={{ pathname: "https://discord.gg/CKPgdNcqRM" }} className="nav-links" target="_blank" >
                            <img src="images/icon_discord.png" loading="lazy" alt="" className="nav-img" />
                        </Rlink>
                    </li>
                    <li className="nav-logo">
                        <Rlink to={{ pathname: "https://twitter.com/UnikCornNFT" }} className="nav-links" target="_blank" >
                            <img src="images/icon_twitter.png" loading="lazy" alt="" className="nav-img" />
                        </Rlink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar
