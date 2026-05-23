import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "thezerobug.pk@gmail.com",
      subject: `New Newsletter Subscription`,
      html: `
        <h3>New Newsletter Subscription</h3>
        <p>You have a new subscriber!</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Failed to subscribe:", error);
    return res.status(500).json({ error: "Failed to subscribe. Please try again." });
  }
}
