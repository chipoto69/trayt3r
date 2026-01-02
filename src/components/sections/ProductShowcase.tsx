"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn.client";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

interface ProductShowcaseProps {
  product?: {
    name?: string;
    tagline?: string;
    shortDescription?: string;
    basePrice?: number;
    slug?: { current?: string };
  } | null;
}

export function ProductShowcase({ product }: ProductShowcaseProps) {
  const name = product?.name || "The Foundation Table";
  const tagline = product?.tagline || "Where form meets function";
  const description =
    product?.shortDescription ||
    "Each piece is individually crafted using our proprietary glazed foam technique, creating a ceramic-like surface that defies expectations.";
  const price = product?.basePrice || 350000;
  const slug = product?.slug?.current || "foundation-table";

  return (
    <section className="py-24 lg:py-32 bg-background-elevated">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div className="aspect-square relative bg-background rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-foreground-muted">
                <svg
                  className="w-24 h-24 opacity-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <Badge variant="accent">Featured</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl italic">
                {name}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-2 text-xl text-accent">{tagline}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-foreground-muted text-lg leading-relaxed">
                {description}
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-3xl font-medium">{formatPrice(price)}</span>
                <span className="text-foreground-muted text-sm">
                  Pre-sale pricing available
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <Link href={`/collection/${slug}`}>
                  <Button size="lg">Explore Details</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
