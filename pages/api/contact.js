import nodemailer from 'nodemailer';

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

async function sendEmailWithRetry(transporter, mailOptions, retries = 0) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    if (retries < MAX_RETRIES) {
      console.log(`Retry attempt ${retries + 1}`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return sendEmailWithRetry(transporter, mailOptions, retries + 1);
    } else {
      throw error;
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, number, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail.acmekenya.org',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    connectionTimeout: 60000, // 60 seconds
    socketTimeout: 60000, // 60 seconds
    debug: true, // Enable debug logs
    logger: true // Enable logger
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@acmekenya.org', // Make sure this is the correct recipient email
    subject: 'New Mail From ACME Website',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nMessage: ${message}`,
    html: `<h2>New Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${number}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const info = await sendEmailWithRetry(transporter, mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error details:', error);
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
}
