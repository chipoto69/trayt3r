"use server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function createCheckoutSession(formData: FormData) {
  const priceId = formData.get("priceId") as string;
  const productId = formData.get("productId") as string;
  const tierName = formData.get("tierName") as string;

  if (!priceId) {
    throw new Error("Price ID is required");
  }

  const headersList = await headers();
  const origin = headersList.get("origin") || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pre-sale`,
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "DE", "FR", "AT", "CH", "NL", "BE"],
    },
    metadata: {
      productId: productId || "",
      tierName: tierName || "",
    },
  });

  if (!session.url) {
    throw new Error("Could not create checkout session");
  }

  redirect(session.url);
}
