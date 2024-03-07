const express = require('express');
const app = express();
require('dotenv').config();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS
    }
})

const mailMessage = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: 'Nodemailer test',
    text: 'You have received test mail successfully'
}

transporter.sendMail(mailMessage, (err, info) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Email has sent")
    }
});
