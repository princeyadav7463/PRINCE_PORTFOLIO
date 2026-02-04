const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "princeyadav875791@gmail.com",
    pass: "kdxozmzbglfewvzy", // your App Password without spaces
  },
});

const mailOptions = {
  from: "princeyadav875791@gmail.com",
  to: "princeyadav875791@gmail.com",
  subject: "Test Email from Node.js",
  text: "This is a test email from my portfolio backend!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Email sent:", info.response);
  }
});
