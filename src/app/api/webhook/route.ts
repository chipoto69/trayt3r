import { getStripe } from "@/lib/stripe";
import { getResend } from "@/lib/email";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  const stripe = getStripe();
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { tierName } = session.metadata || {};
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name;

    if (customerEmail) {
      try {
        const resend = getResend();
        await resend.emails.send({
          from: "Trajter <orders@trajter.com>",
          to: [customerEmail],
          subject: "Your Trajter Table is Reserved",
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="font-size: 24px; margin-bottom: 16px;">Thank You, ${customerName || "Collector"}</h1>
              <p style="color: #666; line-height: 1.6;">
                Your <strong style="color: #c9a962;">${tierName || "Pre-Sale"}</strong> reservation is confirmed.
              </p>
              <div style="background: #141414; padding: 20px; margin: 24px 0; border-radius: 4px;">
                <p style="color: #fafafa; font-size: 18px; margin: 0;">
                  Total: $${((session.amount_total || 0) / 100).toLocaleString()}
                </p>
              </div>
              <p style="color: #888; font-size: 14px;">
                We'll be in touch with production updates. Expected delivery: 8-12 weeks.
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }
    }
  }

  return NextResponse.json({ received: true });
}
