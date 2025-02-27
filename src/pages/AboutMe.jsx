import React from 'react'
import Aboutme from "../assets/aboutMe.jpg"

export default function AboutMe() {
    return (
        <div className='about-container center'>
            <div className='about-section'>
                <img src={Aboutme} alt="about me" className='aboutMe' />
            </div>
            <div className='about-details-container center flex-column'>
                <p className='about-heading'>About Me</p>
                <div className='about-details-section flex-column'>
                    <p className='about-details-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
                    <p>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </div>
        </div >
    )
}
