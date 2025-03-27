import React from 'react'
import { motion } from 'framer-motion'

export default function SkillComponent({ source, name, text, skills }) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Move to original position and become visible
            transition={{
                type: "spring", // You can try "tween" or "spring"
                stiffness: 100,
                damping: 20,
                duration: 0.5,
            }}
            viewport={{ once: true }}
            className='skill-component'>
            <div className='skill-component-section'>
                <div className='front-card'>
                    <img src={source} alt="skill-image" className='skill-image' />
                    <p className='skill-name'>{name}</p>
                    <p className='skill-text'>{text}</p>
                </div>
                <div className='back-card'>
                    {
                        Array.isArray(skills) && skills.map((item, id) => {
                            return (
                                <img src={item.src} alt="image" key={id} className='skill-images' />
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}
