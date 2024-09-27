import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { promisify } from 'util';

dotenv.config();

const sleep = promisify(setTimeout);

async function sendEmailWithRetry(transporter, mailOptions, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
            return info;
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error);
            if (attempt === maxRetries) throw error;
            await sleep(1000 * attempt); // Wait before retrying
        }
    }
}

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { name, email, number, message } = req.body;

            // Check if credentials are set
            if (!process.env.EMAIL_PASSWORD) {
                console.error('Email password is not set in environment variables');
                return res.status(500).json({ message: 'Server configuration error: Missing email password' });
            }

            // Create transporter
            let transporter = nodemailer.createTransport({
                host: 'mail.acmekenya.org',
                port: 465,
                secure: true, // Use SSL
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
                debug: true, // Enable debug logs
                logger: true, // Enable logger
                connectionTimeout: 60000, // 60 seconds
                socketTimeout: 60000, // 60 seconds
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: 'New Mail From ACME Website',
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
            };

            try {
                // Verify connection configuration
                await transporter.verify();
                console.log('SMTP connection verified successfully');

                const info = await sendEmailWithRetry(transporter, mailOptions);
                console.log('Email sent successfully:', info);
                return res.status(200).json({ message: 'Email sent successfully' });
            } catch (error) {
                console.error('Error details:', error);
                if (error.response) {
                    console.error('SMTP response:', error.response);
                }
                return res.status(500).json({ message: `Server error: ${error.message}` });
            }
        } else {
            return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
        }
    } catch (error) {
        console.error('Unexpected error in API route:', error);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
}
