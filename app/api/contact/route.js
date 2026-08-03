import { Resend } from 'resend';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !subject) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Resend only when needed (inside the handler)
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return Response.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Send email to Hindustan Organics
    const { error } = await resend.emails.send({
      from: 'Hindustan Organics Website <onboarding@resend.dev>',
      to: ['hindorg@gmail.com'],
      reply_to: email,
      subject: `New Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 20px; background: #f8f5f0;">
          <h2 style="color: #0B1D36; border-bottom: 2px solid #B89B5E; padding-bottom: 12px;">
            New Website Inquiry
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0; background: white; border: 1px solid #d1cfc6;">
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6; font-weight: 600; color: #0B1D36; width: 140px;">Name</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6; font-weight: 600; color: #0B1D36;">Email</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6;">
                <a href="mailto:${email}" style="color: #B89B5E;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6; font-weight: 600; color: #0B1D36;">Phone</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6;">
                <a href="tel:${phone}" style="color: #B89B5E;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6; font-weight: 600; color: #0B1D36;">Subject</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #d1cfc6; font-weight: 500;">${subject}</td>
            </tr>
            ${
              message
                ? `<tr>
                    <td style="padding: 12px 16px; vertical-align: top; font-weight: 600; color: #0B1D36;">Message</td>
                    <td style="padding: 12px 16px; white-space: pre-wrap; line-height: 1.6;">${message}</td>
                  </tr>`
                : ''
            }
          </table>

          <p style="font-size: 13px; color: #666; margin-top: 24px;">
            This inquiry was submitted via the website contact form at <strong>hindorg.com</strong>.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation to the customer
    await resend.emails.send({
      from: 'Hindustan Organics <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Hindustan Organics',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0B1D36;">Thank you, ${name.split(' ')[0]}.</h2>
          <p style="font-size: 15px; line-height: 1.6; color: #333;">
            We have received your inquiry regarding <strong>"${subject}"</strong>.
          </p>
          <p style="font-size: 15px; line-height: 1.6; color: #333;">
            Our team will review your requirements and get back to you within 24 hours.
          </p>
          <p style="margin-top: 32px; font-size: 14px; color: #0B1D36;">
            Best regards,<br />
            <strong>Hindustan Organics</strong><br />
            +91 94270 50266 | hindorg@gmail.com
          </p>
        </div>
      `,
    });

    return Response.json({ success: true, message: 'Inquiry sent successfully' });

  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
