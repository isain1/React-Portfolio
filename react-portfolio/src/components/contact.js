import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {

        }
    }

    return (
        <div className='contactpage'>
            <h3>Contact Me</h3>
            <div className='coontactportion'>
                <form className='form'>
                    <p>Name:</p>
                    <input
                        value={name}
                        name="name"
                        type="text"
                    />
                    <p>Email:</p>
                    <input
                        value={email}
                        name="email"
                        type="email"
                    />
                    <p>Message:</p>
                    <input
                        value={message}
                        name="message"
                        type="text"
                    />
                    <br></br>
                    <button type='button' className='submitbutton'>Submit</button>
                </form>
            </div>
        </div>
    )
}