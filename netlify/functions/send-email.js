const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const { firstName, lastName, email, phoneNumber, topic, message } = JSON.parse(event.body);

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });

    const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`, // The sender's email
        to: process.env.RECEIVER_EMAIL, // Your email where you want to receive messages
        subject: 'New Contact Form Submission',
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
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' }),
        };
    }
};
