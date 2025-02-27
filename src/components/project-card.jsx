import React from 'react'

export default function ProjectCard({ name, source, text }) {
    return (
        <div className='card-container'>
            <div className='card-image-section center'>
                <img src={source} alt="image" className='card-image' />
            </div>
            <div className='card-details flex-column'>
                <p className='card-name'>{name}</p>
                <p className='card-text'>{text}</p>
                <p className='card-text'>
                    <span className='card-view'>view in Github</span>
                </p>
            </div>
        </div>
    )
}
