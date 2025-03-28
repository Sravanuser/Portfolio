import React from 'react'
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { useRef } from 'react';


export default function Navbar({ scrollToSection }) {
    const navRef = useRef();
    function showNavbar() {
        navRef.current.classList.toggle("responsive-nav");
    }
    const handleContactClick = () => {
        window.location.href = 'mailto:sravanpatel0017@gmail.com?subject=Contact%20from%20Portfolio';
      };
    return (
        <header>
            <h1 className='navbar-logo'>Sravan Kumar</h1>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#skills">Skills</a>
                <a href="#about">About</a>
                <a href="#projects">Project</a>
                <button className='nav-btn close-btn' onClick={showNavbar}>
                    <GiCrossMark size={30} color='black' />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}><GiHamburgerMenu size={30} color='black' /></button>
            <button className='contact-btn' onClick={handleContactClick}>Contact me</button>
        </header>
    )
}
