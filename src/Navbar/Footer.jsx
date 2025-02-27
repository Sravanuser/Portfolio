import React from 'react'
import Logo from "../assets/logo.png"
import Linkedin from "../assets/LinkedIn.svg";
import Instagram from "../assets/Facebook.svg";
import Facebook from "../assets/Instagram.svg";

export default function Footer() {
    return (
        <footer className='flex-column'>
            <div className='footer-section flexbox'>
                <img src={Logo} alt="logo" className='footer-logo' />
                <div className='social-media'>
                    <SocialMedia source={Linkedin} />
                    <SocialMedia source={Instagram} />
                    <SocialMedia source={Facebook} />
                </div>
            </div>
            <hr />
            <div className='footer-section flexbox'>
                <p className=''>Made by Sravan kumar</p>
                <div className='permissions flexbox'>
                    <p className=''>Privacy Policy</p>
                    <p className=''>Terms of Service</p>
                    <p className=''>Cookie Setting</p>
                </div>
            </div>
        </footer>
    )
}


export const SocialMedia = ({ source }) => {
    return (
        <img src={source} alt="social-images" className='' />
    )
}