import nodemailer from 'nodemailer';
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, number, message } = req.body;
  console.log('Received form data:', { name, email, number, message });

  if (!process.env.EMAIL_PASSWORD) {
    console.error('EMAIL_PASSWORD is not set');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "mail.acmekenya.org",
    port: 465,
    secure: true,
    auth: {
      user: "info@acmekenya.org",
      pass: process.env.EMAIL_PASSWORD,
    },
    logger: true, // Enable logging
    debug: true, // Enable debug output
  });

  // Setup email data
  let mailOptions = {
    from: '"ACME Website" <info@acmekenya.org>', // Changed from address
    to: "info@acmekenya.org", // Added a backup email
    subject: "New Contact Form Submission - ACME WEBSITE",
    // html: `
    //   <html>
    //     <body>
    //       <h1>New Contact Form Submission</h1>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Phone:</strong> ${number}</p>
    //       <p><strong>Message:</strong> ${message}</p>
    //     </body>
    //   </html>
    // `,
    text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${number}\nMessage: ${message}`, // Added plain text version
  };

  try {
    console.log('Attempting to send email...');
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
