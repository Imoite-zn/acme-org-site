/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    BREVO_SMTP_PASSWORD: process.env.BREVO_SMTP_PASSWORD,
  },
}

module.exports = nextConfig
