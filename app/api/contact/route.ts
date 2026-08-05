import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, phone } = await req.json();

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    console.log("Resend Result:", result);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Resend Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error,
      },
      { status: 500 },
    );
  }
}
