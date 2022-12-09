import React, { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');  
    return (
        <div>
            <h3>Contact</h3>
            <form>
                <p>Name:</p>
                <input
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
                    name="message"
                    type="text"
                />
                <button type='button'>Submit</button>
            </form>
        </div>
    )
}