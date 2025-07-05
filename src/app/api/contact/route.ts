import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, cell, message } = data;

  if (!name || !email || !cell) {
    console.warn("❌ Missing required form fields");
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("🚀 Attempting to send email with:");
  console.log("  ➤ SMTP USER:", process.env.EMAIL_USER);
  console.log("  ➤ SMTP TO:", process.env.EMAIL_TO);

  const transporter = nodemailer.createTransport({
    host: "smtp.migadu.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  try {
    console.log("🔍 Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified.");
  } catch (verifyErr) {
    console.error("❌ SMTP verification failed:", verifyErr);
    return NextResponse.json(
      { error: "SMTP verification failed" },
      { status: 500 }
    );
  }

  try {
    console.log("📤 Sending email...");

    const info = await transporter.sendMail({
      from: `"Dietitian Lufuno Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO!,
      cc: process.env.EMAIL_CC || undefined,
      subject: `📩 New Message from ${name} via Contact Form`,
      replyTo: email,
      text: `
Hi there,

You've received a new message from the contact form on your website.

👤 Name: ${name}
📧 Email: ${email}
📱 Cell: ${cell}

📝 Message:
${message || "No message provided."}

Please reply directly to this email to respond.

Kind regards,  
Dietitian Lufuno Website  
https://dietitianlufuno.co.za
      `,
      html: `
<div style="font-family: sans-serif; line-height: 1.6; font-size: 16px; color: #333;">
  <p>Hi there,</p>
  <p>You've received a new message from the contact form on your website.</p>
  <p><strong>👤 Name:</strong> ${name}</p>
  <p><strong>📧 Email:</strong> ${email}</p>
  <p><strong>📱 Cell:</strong> ${cell}</p>
  <p><strong>📝 Message:</strong><br/>${
    message || "<em>No message provided.</em>"
  }</p>
  <p>Please reply directly to this email to respond.</p>
  <br/>
  <p>Kind regards,<br/>Dietitian Lufuno Website<br/>
  <a href="https://dietitianlufuno.co.za">dietitianlufuno.co.za</a></p>
</div>
      `,
    });

    console.log("✅ Email sent:", info.messageId);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Email send failed:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
