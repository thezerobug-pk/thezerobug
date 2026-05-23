import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill in all required fields." });
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
      subject: `New Contact Request from ${name} (${company || "No Company"})`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service Needed:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

export default router;
