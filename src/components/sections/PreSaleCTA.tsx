"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn.client";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, calculateDiscountedPrice } from "@/lib/utils";

interface PreSaleCTAProps {
  product?: {
    basePrice?: number;
    tiers?: Array<{
      name?: string;
      discountPercent?: number;
      remaining?: number;
      totalSlots?: number;
    }>;
  } | null;
}

export function PreSaleCTA({ product }: PreSaleCTAProps) {
  const basePrice = product?.basePrice || 350000;
  const tiers = product?.tiers || [
    {
      name: "Collector's Edition",
      discountPercent: 40,
      remaining: 12,
      totalSlots: 25,
    },
    {
      name: "Early Supporter",
      discountPercent: 25,
      remaining: 45,
      totalSlots: 75,
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Badge variant="accent">Limited Availability</Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl italic">
              Secure Your Piece
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-foreground-muted text-lg max-w-2xl mx-auto">
              Join our pre-sale for exclusive pricing and priority production. Each
              tier offers limited slots at progressively better discounts.
            </p>
          </FadeIn>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {tiers.slice(0, 2).map((tier, i) => (
              <FadeIn key={tier.name} delay={0.3 + i * 0.1}>
                <div className="p-6 border border-border bg-background-elevated rounded-sm text-left">
                  <p className="text-sm uppercase tracking-widest text-foreground-muted">
                    {tier.name}
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-medium">
                      {formatPrice(
                        calculateDiscountedPrice(basePrice, tier.discountPercent || 0)
                      )}
                    </span>
                    <span className="text-foreground-muted line-through">
                      {formatPrice(basePrice)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-accent">
                    Save {tier.discountPercent}%
                  </p>
                  <p className="mt-4 text-sm text-foreground-muted">
                    {tier.remaining} of {tier.totalSlots} remaining
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-12">
              <Link href="/pre-sale">
                <Button size="lg">View All Tiers</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
