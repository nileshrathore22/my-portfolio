import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    // Respond immediately so the frontend doesn't wait
    res.status(200).json({ success: true, message: 'Received!' });

    try {
        // 1. Beautiful HTML Email to HOST (Nilesh)
        const hostHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f0f0f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f5;padding:40px 0;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

        <!-- Hero Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#6C3FD6 0%,#915EFF 50%,#00D8FF 100%);padding:40px 32px;text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px;line-height:64px;">📬</div>
            <h1 style="color:#fff;margin:0;font-size:28px;font-weight:800;letter-spacing:-0.5px;">New Contact Message</h1>
            <p style="color:rgba(255,255,255,0.85);margin:10px 0 0;font-size:15px;">Someone reached out via your portfolio!</p>
          </td>
        </tr>

        <!-- Sender Card -->
        <tr>
          <td style="padding:28px 32px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7ff;border-radius:12px;border:1px solid #e8e0ff;overflow:hidden;">
              <tr>
                <td style="padding:20px 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="vertical-align:middle;">
                        <div style="width:48px;height:48px;background:linear-gradient(135deg,#915EFF,#00D8FF);border-radius:50%;display:inline-block;line-height:48px;text-align:center;font-size:20px;font-weight:700;color:#fff;">
                          ${name.charAt(0).toUpperCase()}
                        </div>
                      </td>
                      <td style="vertical-align:middle;padding-left:16px;">
                        <p style="margin:0;font-size:18px;font-weight:700;color:#222;">${name}</p>
                        <a href="mailto:${email}" style="color:#915EFF;font-size:14px;text-decoration:none;font-weight:500;">${email}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message Section -->
        <tr>
          <td style="padding:24px 32px;">
            <p style="margin:0 0 10px;color:#888;font-size:12px;text-transform:uppercase;font-weight:700;letter-spacing:1.2px;">Message</p>
            <div style="background:#fafafa;border-left:5px solid #915EFF;border-radius:0 10px 10px 0;padding:20px 24px;">
              <p style="margin:0;color:#333;font-size:16px;line-height:1.8;">${message}</p>
            </div>
          </td>
        </tr>

        <!-- CTA Buttons -->
        <tr>
          <td style="padding:8px 32px 32px;text-align:center;">
            <a href="mailto:${email}?subject=Re: Your Portfolio Message&body=Hi ${name}," style="display:inline-block;background:linear-gradient(135deg,#915EFF,#00D8FF);color:#fff;padding:14px 36px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;margin:0 6px;">↩ Reply Now</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f7ff;padding:18px 32px;border-top:1px solid #ede8ff;text-align:center;">
            <p style="margin:0;color:#bbb;font-size:12px;">Sent via Nilesh Rathore's Portfolio · <a href="https://localhost:5173" style="color:#915EFF;text-decoration:none;">nilesh-portfolio.dev</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

        await transporter.sendMail({
            from: '"Portfolio Contact" <sangamuniversity791@gmail.com>',
            to: 'sangamuniversity791@gmail.com',
            replyTo: email,
            subject: `📬 New Message from ${name} — Portfolio`,
            html: hostHtml
        });

        // 2. Beautiful Auto-Reply HTML to the Sender
        const userHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#915EFF,#00D8FF);padding:32px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:26px;font-weight:700;">✅ Message Received!</h1>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">Thank you for reaching out</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="color:#222;font-size:17px;font-weight:600;margin:0 0 12px;">Hi ${name},</p>
            <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 20px;">
              I've received your message and truly appreciate you reaching out! I'll review it carefully and get back to you as soon as possible.
            </p>
            <div style="background:#f8f7ff;border-left:4px solid #915EFF;border-radius:0 8px 8px 0;padding:16px;margin:20px 0;">
              <p style="margin:0 0 6px;color:#888;font-size:12px;text-transform:uppercase;font-weight:700;letter-spacing:1px;">Your Message</p>
              <p style="margin:0;color:#333;font-size:15px;font-style:italic;line-height:1.7;">"${message}"</p>
            </div>
            <p style="color:#555;font-size:15px;line-height:1.7;margin:20px 0 0;">
              In the meantime, feel free to explore more of my work!
            </p>
          </td>
        </tr>
        <!-- Signature -->
        <tr>
          <td style="background:#f8f7ff;padding:22px 32px;border-top:2px solid #e8e0ff;">
            <p style="margin:0;color:#555;font-size:14px;line-height:1.8;">
              Best regards,<br/>
              <strong style="color:#222;font-size:16px;">Nilesh Rathore</strong>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

        await transporter.sendMail({
            from: '"Nilesh Rathore" <sangamuniversity791@gmail.com>',
            to: email,
            subject: `✅ Got your message, ${name}!`,
            html: userHtml
        });

    } catch (error) {
        console.error('Email sending error:', error);
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
