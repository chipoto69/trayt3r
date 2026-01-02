"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { formatPrice, calculateDiscountedPrice } from "@/lib/utils";

const tiers = [
  {
    id: "collectors",
    name: "Collector's Edition",
    stripePriceId: "price_collector",
    discountPercent: 40,
    totalSlots: 25,
    remaining: 12,
    perks: [
      "40% off retail price",
      "Priority production (first in queue)",
      "Signed certificate of authenticity",
      "Private studio visit with Jakub Trajter",
      "Exclusive colorway options",
    ],
    recommended: true,
  },
  {
    id: "early",
    name: "Early Supporter",
    stripePriceId: "price_early",
    discountPercent: 25,
    totalSlots: 75,
    remaining: 45,
    perks: [
      "25% off retail price",
      "Early production slot",
      "Signed certificate of authenticity",
      "Production updates",
    ],
    recommended: false,
  },
  {
    id: "presale",
    name: "Pre-Sale",
    stripePriceId: "price_presale",
    discountPercent: 10,
    totalSlots: 100,
    remaining: 100,
    perks: ["10% off retail price", "Guaranteed allocation", "Production updates"],
    recommended: false,
  },
];

const basePrice = 350000;

const faqs = [
  {
    question: "When will I receive my table?",
    answer:
      "Production times vary by tier. Collector's Edition orders ship in 8-10 weeks. Early Supporter orders ship in 10-12 weeks. Pre-Sale orders ship in 12-14 weeks. All timelines begin from campaign completion.",
  },
  {
    question: "Can I customize my table?",
    answer:
      "Collector's Edition buyers have access to exclusive colorway options. Standard finishes are available for all tiers. Custom dimensions are not available at this time.",
  },
  {
    question: "What if I need to cancel my order?",
    answer:
      "Full refunds are available up to 14 days after purchase. After 14 days, a 10% restocking fee applies. Once production begins, orders cannot be cancelled.",
  },
  {
    question: "How is shipping handled?",
    answer:
      "White-glove delivery is included for all orders within the continental US. International shipping is available at additional cost. We'll coordinate delivery timing directly with you.",
  },
  {
    question: "Is the table really as light as claimed?",
    answer:
      "Yes. Despite its substantial appearance, the Foundation Table weighs approximately 25kg (55 lbs), compared to 100+ kg for a comparable stone table. The glazed foam core technology makes this possible.",
  },
];

export default function PreSalePage() {
  const [selectedTier, setSelectedTier] = useState("collectors");

  const handleCheckout = async () => {
    const tier = tiers.find((t) => t.id === selectedTier);
    if (!tier) return;
    alert(`Checkout with ${tier.name} - ${tier.stripePriceId}\n\nIn production, this would redirect to Stripe Checkout.`);
  };

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="accent">Limited Availability</Badge>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl italic">
            Secure Your Piece
          </h1>
          <p className="mt-6 text-lg text-foreground-muted">
            Join our pre-sale for exclusive pricing and priority production. Each
            tier offers limited slots at progressively better discounts.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative ${
                selectedTier === tier.id ? "border-accent" : ""
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">Most Popular</Badge>
                </div>
              )}
              <CardContent className="pt-8">
                <h3 className="text-xl font-medium">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-medium">
                    {formatPrice(
                      calculateDiscountedPrice(basePrice, tier.discountPercent)
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-foreground-muted line-through text-sm">
                    {formatPrice(basePrice)}
                  </span>
                  <Badge variant="success">Save {tier.discountPercent}%</Badge>
                </div>
                <p className="mt-4 text-sm text-foreground-muted">
                  {tier.remaining} of {tier.totalSlots} remaining
                </p>
                <div className="mt-2 h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all"
                    style={{
                      width: `${(tier.remaining / tier.totalSlots) * 100}%`,
                    }}
                  />
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-6"
                  variant={selectedTier === tier.id ? "primary" : "secondary"}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {selectedTier === tier.id ? "Selected" : "Select"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-md mx-auto">
          <Button size="lg" className="w-full" onClick={handleCheckout}>
            Continue to Checkout
          </Button>
          <p className="mt-4 text-center text-sm text-foreground-muted">
            Secure payment via Stripe. 256-bit encryption.
          </p>
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl italic text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <Accordion>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} title={faq.question}>
                  <p className="text-sm">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}
