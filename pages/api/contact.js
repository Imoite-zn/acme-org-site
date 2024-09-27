import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'mail.acmekenya.org',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  connectionTimeout: 5000, // 5 seconds
  socketTimeout: 5000, // 5 seconds
});

async function sendEmail(mailOptions) {
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number, message } = req.body;

    if (!process.env.EMAIL_PASSWORD) {
      console.error('Email password is not set in environment variables');
      return res.status(500).json({ message: 'Server configuration error: Missing email password' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Mail From ACME Website',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nMessage: ${message}`,
      html: `<h2>New Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${number}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    // Send response immediately
    res.status(200).json({ message: 'Form submission received. Email will be sent shortly.' });

    // Send email asynchronously
    try {
      await transporter.verify();
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
