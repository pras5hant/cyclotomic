const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { encryptedData, toEmail } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'prashant2580thakur@gmail.com', // Replace with your Gmail ID
        pass: 'ntto htpx oqzh jzhy', // Replace with your Google App Password
      },
    });

    const mailOptions = {
      from: 'tere.gmail.id@gmail.com',
      to: toEmail,
      subject: 'Visitor Data - Rakeshh Polynomial Calculator',
      text: `Encrypted Visitor Data:\n\n${encryptedData}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};