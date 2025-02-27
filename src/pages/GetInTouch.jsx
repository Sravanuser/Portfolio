import React from 'react'

export default function GetInTouch() {
    return (
        <div className='contact-container center flex-column'>
            <div className='contact-heading flex-column'>
                <p className='get-in-touch'>Get In Touch</p>
                <p className='contact-me'>Contact Me</p>
            </div>
            <div className='forms flex-column'>
                <div className='name-field flexbox'>
                    <div className='first-name flex-column'>
                        <label htmlFor="Firstname">First name:</label>
                        <input type="text" id="Firstname" />
                    </div>
                    <div className='last-name flex-column'>
                        <label htmlFor="Lastname">Last name:</label>
                        <input type="text" id="Lastname" />
                    </div>
                </div>
                <div className='name-field flexbox'>
                    <div className='email flex-column'>
                        <label htmlFor="Email">Email:</label>
                        <input type="email" id="Email" />
                    </div>
                    <div className='password flex-column'>
                        <label htmlFor="password">password:</label>
                        <input type="password" id="password" />
                    </div>
                </div>
                <div className='description flex-column'>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        className='textarea-box'
                        id="description"
                        rows="10"
                        cols="50"
                        style={{ resize: 'none' }}
                        placeholder='Type your message...'
                    />
                </div>
            </div>
                <button className='submit-btn'>Submit</button>
        </div>
    )
}
