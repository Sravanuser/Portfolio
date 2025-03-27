import React from 'react'
import { motion } from "framer-motion"

export default function Home() {
    return (
        <div className='home-section' id="home">
            <motion.div
                initial={{ x: -50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.5,
                }} className='profile-info'>
                <h1 className='profile-name'>Hi, I am <span className='profession'>Sravan Kumar</span></h1>
                <p className='profile-summary'>I'm a passionate MERN stack developer with expertise in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. I’m also familiar with state management using hooks, responsive design with CSS frameworks like Tailwind, and improving performance with modern development tools.</p>
                <button className='hireme-btn'>Contact Me</button>
            </motion.div>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                style={{ mixBlendMode: "darken" }}
                transition={{
                    type: "spring", 
                    stiffness: 100,
                    damping: 20,
                    duration: 0.5,
                }} className='profile-image-section'>
                <img src={"../assets/portfolio_person-Photoroom.jpg"} alt="profile image" className='profile-image' />
            </motion.div>
        </div>
    )
}
