// In netlify/functions/send-email.js

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const { firstName, lastName, email, phoneNumber, topic, message } = JSON.parse(event.body);

    // Setup Nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for 587
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Setup email data
    let mailOptions = {
        from: `${firstName} ${lastName} <${email}>`, 
        to: 'lkresume9@gmail.com', 
        subject: `New contact form submission: ${topic}`, 
        text: `You have a new message from ${firstName} ${lastName}:\n\n
               Email: ${email}\n
               Phone: ${phoneNumber}\n
               Topic: ${topic}\n
               Message: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' })
        };
    }
};
