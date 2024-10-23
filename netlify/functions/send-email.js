const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    // Ensure we are dealing with a POST request
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    // Parse the incoming request body safely
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON format' }),
      };
    }

    const { firstName, lastName, email, phoneNumber, topic, message } = body;

    // Ensure all fields are present
    if (!firstName || !lastName || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create a transporter for nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // or your email provider's SMTP server
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `${firstName} ${lastName} <${email}>`, // sender's email
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form Submission: ${topic}`,
      text: `You have a new message from ${firstName} ${lastName}:\n\n
             Email: ${email}\n
             Phone: ${phoneNumber}\n
             Topic: ${topic}\n
             Message: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
