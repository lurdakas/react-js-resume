const nodemailer = require('nodemailer');

// Netlify function handler
exports.handler = async function(event, context) {
  // Parse the form submission data
  const formData = JSON.parse(event.body);

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // You can also use other email services like SMTP, SendGrid, etc.
    auth: {
      user: process.env.EMAIL_USER, // Email username from environment variables
      pass: process.env.EMAIL_PASS  // Email password from environment variables
    }
  });

  // Email options
  let mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Sender address
    to: 'lkresume9@gmail.com',  // Replace with your email address
    subject: `New Contact Form Submission from ${formData['first-name']} ${formData['last-name']}`, // Subject
    text: `You received a new message from your website contact form:\n\n
           Name: ${formData['first-name']} ${formData['last-name']}\n
           Email: ${formData.email}\n
           Phone: ${formData['phone-number']}\n
           Topic: ${formData.topic}\n
           Message: ${formData.message}`
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
