import React, { useState } from 'react';

export default function ContactMe() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error sending message');
            }

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                topic: '',
                message: '',
            });

            setMessage('Successfully sent!');
        } catch (error) {
            setMessage('Error sending message.');
        }
    };

    return (
        <section id="Contact" className="contact--section">
            <div className="contact--me">
                <p className="sub--title"> Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md"> First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="firstName"
                            id="first-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md"> Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="lastName"
                            id="last-name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md"> Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md"> Phone Number</span>
                        <input
                            type="number"
                            className="contact--input text-md"
                            name="phoneNumber"
                            id="phone-number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md"> Choose a topic </span>
                    <select
                        id="choose-topic"
                        className="contact--input text-md"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                    >
                        <option value="">Select One...</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md"> Message </span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        name="message"
                        rows="9"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div>
                    <button type="submit" className="btn btn-primary contact--form--btn">
                        Submit
                    </button>
                </div>
                {message && <p>{message}</p>} {/* Display success/error message */}
            </form>
        </section>
    );
}
