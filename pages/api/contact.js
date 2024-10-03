import brevo from '@getbrevo/brevo';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, number, message } = req.body;

  let defaultClient = brevo.ApiClient.instance;
  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY; // Make sure to set this in your Vercel environment variables

  let apiInstance = new brevo.TransactionalEmailsApi();
  let sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = "New Contact Form Submission - ACME WEBSITE";
  sendSmtpEmail.htmlContent = `
    <html>
      <body>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Message:</strong> ${message}</p>
      </body>
    </html>
  `;
  sendSmtpEmail.sender = { "name": "ACME Website", "email": "info@acmekenya.org" };
  sendSmtpEmail.to = [
    { "email": "info@acmekenya.org", "name": "ACME Kenya" }
  ];
  sendSmtpEmail.replyTo = { "email": email, "name": name };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}