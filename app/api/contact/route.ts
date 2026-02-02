import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.BREVO_API_KEY || !process.env.BREVO_FROM_EMAIL) {
      console.error('Missing Brevo credentials')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      )
    }

    // Send email to admin
    const adminResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        to: [
          {
            email: 'chinnasivakrishna2003@gmail.com',
            name: 'Chinna Siva Krishna Thota',
          },
        ],
        sender: {
          name: name,
          email: process.env.BREVO_FROM_EMAIL,
        },
        subject: `New Contact Form Message from ${name}`,
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto;">
                <h2 style="color: #5b6ef8;">New Contact Form Submission</h2>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong></p>
                  <p style="white-space: pre-wrap; background-color: #fff; padding: 15px; border-radius: 4px; border-left: 4px solid #5b6ef8;">
                    ${message}
                  </p>
                </div>

                <p style="color: #888; font-size: 12px; margin-top: 30px;">
                  This is an automated message from your portfolio contact form.
                </p>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!adminResponse.ok) {
      const error = await adminResponse.text()
      console.error('Brevo admin email error:', error)
      return NextResponse.json(
        { error: 'Failed to send email to admin' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    const userResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        to: [
          {
            email: email,
            name: name,
          },
        ],
        sender: {
          name: 'Chinna Siva Krishna Thota',
          email: process.env.BREVO_FROM_EMAIL,
        },
        subject: 'Thank you for contacting me',
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto;">
                <h2 style="color: #5b6ef8;">Thank You!</h2>
                
                <p>Hi ${name},</p>
                
                <p>Thank you for reaching out to me through my portfolio. I have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Your Message Summary:</strong></p>
                  <p style="white-space: pre-wrap; color: #666;">
                    ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}
                  </p>
                </div>

                <p>In the meantime, feel free to check out my projects and experience on my portfolio:</p>
                <p>
                  <a href="https://yourportfolio.com" style="color: #5b6ef8; text-decoration: none; font-weight: bold;">
                    Visit My Portfolio →
                  </a>
                </p>

                <p>Best regards,<br/>
                <strong>Chinna Siva Krishna Thota</strong><br/>
                Full Stack & Backend Developer</p>

                <p style="color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                  This is an automated confirmation email. Please do not reply to this email.
                </p>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!userResponse.ok) {
      console.error('Brevo user confirmation email error')
      // Don't fail if confirmation email fails, as the admin email was sent successfully
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully! I will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
