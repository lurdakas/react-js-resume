import React, { useState } from 'react';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/.netlify/functions/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message.');
        }
    };

    return (
        <section id="Contact" className="contact--section">
            <div className="contact--me">
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md" name="firstName" id="first-name" required onChange={handleChange} />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text-md" name="lastName" id="last-name" required onChange={handleChange} />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input text-md" name="email" id="email" required onChange={handleChange} />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="tel" className="contact--input text-md" name="phone" id="phone-number" required onChange={handleChange} />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-topic" name="topic" className="contact--input text-md" onChange={handleChange}>
                        <option>Select One...</option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea className="contact--input text-md" id="message" name="message" rows="9" placeholder="Type your message..." onChange={handleChange} />
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    );
}
