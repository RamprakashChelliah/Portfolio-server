const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(subject, fullName, email, text) {
    const msg = {
        from: 'ramprakashc.job@gmail.com',
        to: 'ramprakashc.job@gmail.com',
        subject,
        text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${text}`,
    };

    try {
        sgMail.send(msg);
    } catch (error) {
    }
}

module.exports = { sendEmail }