const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public")); // your portfolio files
app.use(bodyParser.json());

app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "princeyadav875791@gmail.com",
      pass: "YOUR_16_CHAR_APP_PASSWORD", // no spaces
    },
  });

  const mailOptions = {
    from: email,
    to: "princeyadav875791@gmail.com",
    subject: `Portfolio Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to send message." });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
