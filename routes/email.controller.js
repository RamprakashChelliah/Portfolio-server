const { sendEmail } = require('../emailService.js');

function sendMail(req, res) {
  const { subject, fullName, email, text } = req.body;
  sendEmail(subject, fullName, email, text);
  res.status(200).send('Email send successfully');
}

module.exports = {
  sendMail
}