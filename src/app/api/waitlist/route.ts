import { NextResponse } from "next/server";
import { resend } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Trajter <hello@trajter.com>",
      to: [email],
      subject: "You're on the List",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; margin-bottom: 16px;">Welcome${name ? `, ${name}` : ""}</h1>
          <p style="color: #666; line-height: 1.6;">
            You've joined the Trajter waitlist. We'll notify you when pre-sale opens.
          </p>
          <p style="color: #666; line-height: 1.6; margin-top: 16px;">
            In the meantime, explore our collection at <a href="https://trajter.com" style="color: #c9a962;">trajter.com</a>.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
