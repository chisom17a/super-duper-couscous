const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST requests allowed');
  }

  const { name, email, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chiboy21a@gmail.com',
      pass: 'rgwnrzhbvawnqmum' // Your Gmail App Password (no spaces)
    }
  });

  try {
    await transporter.sendMail({
      from: 'Chiboy Web <chiboy21a@gmail.com>',
      to: 'chiboy21a@gmail.com',
      subject: 'New Chiboy Database Registration',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`
    });
    res.status(200).send('Registration successful!');
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.toString());
  }
}

