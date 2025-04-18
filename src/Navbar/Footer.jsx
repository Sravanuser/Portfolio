import React from 'react'
import { footerImage } from "/public/assets/image.js"

export default function Footer() {
    return (
        <div className='footer'>
            <div className='social-media'>
                {
                    footerImage.map((item, id) => {
                        return (
                            <SocialMedia source={item.src} link={item.link} key={id} />
                        )
                    })
                }
            </div>
            <h3>Made by Sravan Kumar</h3>
        </div>
    )
}


export const SocialMedia = ({ source, link }) => {
    return (
        <div className='social_media_images' onClick={() => window.location.href = link}>
            <img src={source} alt="social-image" className='social_images' />
        </div>
    )
}