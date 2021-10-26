import React from 'react'
import { Link } from "react-scroll";
import { Link as Rlink } from 'react-router-dom'
import './Navbar.css'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Button, IconButton, MenuIcon } from '@material-ui/core'



function Navbar() {
    return (

        <div className="navbar">
            <div className="navbar-container container">
                <li className="nav-item">
                    <Rlink to='/' className='nav-links'>
                        UnikCorn
                    </Rlink>
                </li>
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <Link className='nav-links'
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Home
                        </Link>
                    </li>
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
                    <li className="nav-item">
                        <Rlink to='discord' className='nav-links'>
                            Discord
                        </Rlink>
                    </li>
                    <li className="nav-item">
                        <Rlink to='twitter' className='nav-links'>
                            Twitter
                        </Rlink>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar
