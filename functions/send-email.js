const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail', // or your email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: data.email,
        to: process.env.EMAIL_USER, // or your target email
        subject: `Contact Form Submission from ${data.firstName} ${data.lastName}`,
        text: `You have received a new message:\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nTopic: ${data.topic}\nMessage:\n${data.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email' }),
        };
    }
};
