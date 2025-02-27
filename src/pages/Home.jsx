import React from 'react'
import ProfileImage from "../assets/portfolio_person-Photoroom.jpg"

export default function Home() {
    return (
        <div className='home-container flexbox'>
            <div className='home-section flexbox'>
                <div className='profile-info flex-column center'>
                    <p className='profile-name'>Hi, I am Sravan Kumar</p>
                    <p className='profile-profession'>I create <span className='profession'>Web Development</span> and <span className='profession'>Full Stack Applications</span></p>
                    <p className='profile-data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='hireme-btn'>Hire me</button>
                </div>
                <div className='profile-image-container center'>
                    <div className='profile-image-section center'>
                        <img src={ProfileImage} alt="profile image" className='profile-image' />
                    </div>
                </div>
            </div>
        </div>
    )
}
