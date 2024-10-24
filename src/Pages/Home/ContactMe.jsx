import { useState } from 'react';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('Message sent successfully!');
            } else {
                setFormStatus('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
            setFormStatus('Failed to send message.');
        }
    };

    return (
        <section id="Contact" className="contact--section">
            <div className="contact--me">
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form onSubmit={handleSubmit} className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" name="firstName" id="first-name" onChange={handleChange} required />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" name="lastName" id="last-name" onChange={handleChange} required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" name="email" id="email" onChange={handleChange} required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="number" name="phoneNumber" id="phone-number" onChange={handleChange} required />
                    </label>
                    <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose a Topic</span>
                        <select name="topic" id="choose-topic" onChange={handleChange} required>
                            <option>Select One...</option>
                            <option>Front-End</option>
                            <option>Back-End</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea name="message" id="message" onChange={handleChange} rows="9" placeholder="Type your message..." required />
                    </label>
                    <div>
                        <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
                    </div>
                </div>
            </form>
            {formStatus && <p>{formStatus}</p>}
        </section>
    );
}
