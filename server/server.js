const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email route
app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, topic, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // e.g. smtp.gmail.com
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });

    // Setup email data
    const mailOptions = {
        from: '"Your Name" <lkresume9@gmail.com>', // sender address
        to: 'lkresume9@gmail.com', // list of receivers
        subject: 'New Job Contact Form Submission', // Subject line
        text: `You have a new message from ${firstName} ${lastName}:\n\n
               Email: ${email}\n
               Phone: ${phoneNumber}\n
               Topic: ${topic}\n
               Message: ${message}`,
        replyTo: email
    };

    // Send mail
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
