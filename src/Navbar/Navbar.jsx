import React from 'react'
import Logo from "../assets/logo.png"

export default function Navbar() {
    return (
        <header className='center'>
            <nav className='navbar center'>
                <img src={Logo} className='navbar-logo' alt="logo" />
                <ul className='navbar-list flexbox'>
                    <li className='navbar-items'>
                        <a href='#' className='navbar-links'>Home</a>
                    </li>
                    <li className='navbar-items'>
                        <a href='#' className='navbar-links'>About Me</a>
                    </li>
                    <li className='navbar-items'>
                        <a href='#' className='navbar-links'>Skills</a>
                    </li>
                    <li className='navbar-items'>
                        <a href='#' className='navbar-links'>Projects</a>
                    </li>
                    <li className='navbar-items'>
                        <a href='#' className='navbar-links'>Testimonals</a>
                    </li>
                </ul>
                <button className='navbar-btn'>Contact Me</button>
            </nav>
        </header>
    )
}
