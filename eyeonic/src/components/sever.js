const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'EyeonicBest@gmail.com', 
      pass: '@#eyeonic44', 
    },
  });

  const mailOptions = {
    from: 'EyeonicBest@gmail.com',
    to: email,
    subject: 'Chào mừng bạn!',
    text: 'Xin chào! Cảm ơn bạn đã đăng ký.',
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});