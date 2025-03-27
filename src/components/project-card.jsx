import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function ProjectCard({ name, source, text }) {
    return (
        <Tilt className='tilt-section'>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.5,
                }}
                viewport={{ once: false, amount: 0.1 }} className='card-container'>
                <div className='card-image-section'>
                    <img src={source} alt="image" className='card-image' />
                </div>
                <div className='card-details'>
                    <p className='card-name'>{name}</p>
                    <p className='card-text'>{text}</p>
                    <p className='card-text' style={{ "cursor": "pointer" }}>
                        <span className='card-view'>view in Github</span>
                    </p>
                </div>
            </motion.div>
        </Tilt>

    )
}
