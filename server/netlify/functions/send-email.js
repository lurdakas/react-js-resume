const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    const { firstName, lastName, email, phoneNumber, topic, message } = data;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,  // Your email
            pass: process.env.EMAIL_PASS,  // Your email password or app-specific password
        },
    });

    // Setup email data
    const mailOptions = {
        from: email,  // Sender email from form
        to: process.env.RECEIVER_EMAIL,  // Your email to receive form submissions
        subject: `New Contact Form Submission: ${topic}`,
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
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};
