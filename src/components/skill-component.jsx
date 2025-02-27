import React from 'react'

export default function SkillComponent({ source, name, text }) {
    return (
        <div className='skill-component center'>
            <div className='skill-component-section flex-column'>
            <img src={source} alt="skill-image" className='skill-image' />
            <p className='skill-name'>{name}</p>
            <p className='skill-text'>{text}</p>
            </div>
        </div>
    )
}
