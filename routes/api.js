const express = require("express");
const nodemailer = require("nodemailer"); //use sending emails
const SMTPTransport = require("nodemailer/lib/smtp-transport");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send(
    `I received the mail data:${{
      email: req.body.replyTo,
      message: req.body.text,
    }}`
  );
});

router.post("/api/email", (req, res) => {
  let data = req.body;
  res.send(data);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for others,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: "sinazobogicevic@gmail.com",
    to: "snoqhamza@yahoo.com",
    subject: "Dev blog",
    replyTo: `${data.replyTo}`,
    text: `${data.text}`,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      return console.log("email sent");
    }
    SMTPTransport.close();
  });
});

module.exports = router;
