import React from 'react'
import Footer from "../../Components/Footer";

import "./index.css"

function Contact() {
    return (
        <>
            <main className='main'>
                <header className='header'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>

                <form className='form'>
                    <div>
                        <div className='input_container'>
                            <label htmlfor="first_name">Firstname</label>
                            <input type="text" id='first_name' placeholder="Enter your first name" />
                        </div>
                        <div className='input_container'>
                            <label htmlFor="last_name">Lastname</label>
                            <input type="text" id='last_name' placeholder='Enter your last name' />
                        </div>
                    </div>

                    <div className='input_container'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='yourname@email.com' />
                    </div>
                    <div className='input_container'>
                        <label htmlFor="message">Message</label>
                        <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>You agree to providing your data to who may contact you.</span>
                    </div>

                    <button id='btn__submit'>Send message</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact; 