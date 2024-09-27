import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
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

            // Send email
            let info = await transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error details:', error);
            if (error.response) {
                console.error('SMTP response:', error.response);
            }
            return res.status(500).json({ message: `Server error: ${error.message}` });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
