import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, projectDetails, items } = body;

    if (!name || !email || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const itemRows = items
      .map(
        (item: { name: string; category: string; quantity: number; notes?: string }) =>
          `<tr>
            <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${item.name}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${item.category}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;text-align:center;">${item.quantity}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;">${item.notes || "—"}</td>
          </tr>`
      )
      .join("");

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1e293b;margin:0;padding:0;background:#f8fafc;">
  <div style="max-width:640px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:linear-gradient(135deg,#0f172a,#1e3a8a);padding:32px 40px;">
      <h1 style="margin:0;font-size:24px;color:#fff;">New Quote Request</h1>
      <p style="margin:8px 0 0;color:#94a3b8;font-size:14px;">Submitted via downwaste.co.uk</p>
    </div>

    <div style="padding:32px 40px;">
      <h2 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;margin:0 0 16px;">Contact Details</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:4px 0;color:#64748b;width:120px;">Name</td><td style="padding:4px 0;font-weight:600;">${name}</td></tr>
        ${company ? `<tr><td style="padding:4px 0;color:#64748b;">Company</td><td style="padding:4px 0;font-weight:600;">${company}</td></tr>` : ""}
        <tr><td style="padding:4px 0;color:#64748b;">Email</td><td style="padding:4px 0;"><a href="mailto:${email}" style="color:#0ea5e9;">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding:4px 0;color:#64748b;">Phone</td><td style="padding:4px 0;">${phone}</td></tr>` : ""}
      </table>

      ${
        projectDetails
          ? `<div style="margin-top:24px;">
              <h2 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;margin:0 0 8px;">Project Details</h2>
              <p style="margin:0;font-size:14px;line-height:1.6;background:#f1f5f9;border-radius:8px;padding:12px 16px;">${projectDetails}</p>
            </div>`
          : ""
      }

      <div style="margin-top:24px;">
        <h2 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;margin:0 0 12px;">Requested Equipment</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="background:#f1f5f9;">
              <th style="padding:8px 12px;text-align:left;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;">Product</th>
              <th style="padding:8px 12px;text-align:left;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;">Category</th>
              <th style="padding:8px 12px;text-align:center;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;">Qty</th>
              <th style="padding:8px 12px;text-align:left;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;">Notes</th>
            </tr>
          </thead>
          <tbody>${itemRows}</tbody>
        </table>
      </div>
    </div>

    <div style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;">
      <p style="margin:0;font-size:12px;color:#94a3b8;">Reply directly to this email to respond to the enquiry.</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Downwaste UK Website" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: "info@downwaste.com",
      replyTo: email,
      subject: `Quote Request — ${name}${company ? ` (${company})` : ""}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote email error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
