import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "thezerobug.pk@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD || "fjyshfzrspxfjxta",
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER || "thezerobug.pk@gmail.com",
      to: "thezerobug.pk@gmail.com",
      subject: `New Newsletter Subscription`,
      html: `
        <h3>New Newsletter Subscription</h3>
        <p>You have a new subscriber to the newsletter!</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Failed to subscribe:", error);
    res.status(500).json({ error: "Failed to subscribe. Please try again." });
  }
});

export default router;
