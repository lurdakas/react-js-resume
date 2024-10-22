import { useState } from 'react';

export default function ContactMe() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            firstName: event.target['first-name'].value,
            lastName: event.target['last-name'].value,
            email: event.target['email'].value,
            phoneNumber: event.target['phone-number'].value,
            topic: event.target['choose-topic'].value,
            message: event.target['message'].value,
        };

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Email sent successfully!');
            } else {
                setStatus('Failed to send email. Please try again later.');
            }
        } catch (error) {
            setStatus('Error submitting the form. Please try again later.');
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <section id="Contact" className="contact--section">
            <div className="contact--">
                <p className="sub--title"> Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md"> First Name</span>
                        <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md"> Last Name</span>
                        <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
                    </label>
                    <label htmlFor="email-name" className="contact--label">
                        <span className="text-md"> Email Name</span>
                        <input type="email" className="contact--input text-md" name="email" id="email" required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md"> Phone-number </span>
                        <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md"> Choose a topic </span>
                    <select id="choose-topic" className="contact--input text-md">
                        <option>Select One... </option>
                        <option>Front-End</option>
                        <option>Back-End</option>
                        <option>Embedded</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md"> Message </span>
                    <textarea className="contact--input text-md" id="message" rows="9" placeholder="Type your message..." />
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
                </div>
            </form>
            {status && <p>{status}</p>}
        </section>
    );
}
