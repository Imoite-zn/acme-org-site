import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    console.log('Environment variables Present');
    console.log('EMAIL_USER: present');
    console.log('EMAIL_APP_PASSWORD exists');

    if (req.method === 'POST') {
        const { name, email, number, message } = req.body;

        // Check if credentials are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
            console.error('Email credentials are not set in environment variables');
            return res.status(500).json({ message: 'Server configuration error: Missing email credentials' });
        }

        // console.log('Email User:' xffft); // Log email user
        // console.log('App Password exists:', reedawald ); // Check if password exists

        // Create a transporter using SMTP
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Or your domain's SMTP server
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        try {
            // Verify SMTP connection configuration
            await transporter.verify();
            console.log('SMTP connection verified successfully');

            // Send email
            await transporter.sendMail({
                from: `"Your Name" <${process.env.EMAIL_USER}>`, // Replace with your name and email
                to: process.env.RECIPIENT_EMAIL, // The email address where you want to receive inquiries
                subject: "New Mail From ACME Website",
                text: `
                    Name: ${name}
                    Email: ${email}
                    Phone: ${number}
                    Message: ${message}
                `,
                html: `
                    <h2>New Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${number}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `,
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error encountered');
            return res.status(500).json({ message: `Server configuration error: ${error.message}` });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
