import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Create a transporter object using SMTP
    let transporter = nodemailer.createTransport({
      service: "gmail", // Or any other service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `<${email}>`, // Sender address
      to: "abdulwasayofficial05@gmail.com", // Replace with your email address
      subject: `${subject}`,
      html: `
        <div>
          <h1><strong>New Message Received From ${name} at Film By A. Wasay</strong></h1>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject: ${subject}</strong></p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `, // HTML formatted body
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
}
