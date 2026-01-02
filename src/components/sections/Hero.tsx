"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn.client";
import { ThreeViewer } from "@/components/three/ThreeViewer";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  modelUrl?: string | null;
}

export function Hero({
  headline = "Memory of Pressure",
  subheadline = "Functional sculpture for those who refuse ordinary. Handcrafted tables by sculptor Jakub Trajter.",
  modelUrl,
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl italic tracking-tight leading-none">
                {headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-lg">
                {subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/collection">
                  <Button size="lg">View Collection</Button>
                </Link>
                <Link href="/pre-sale">
                  <Button size="lg" variant="secondary">
                    Pre-Sale
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn delay={0.3} direction="none">
              <ThreeViewer modelUrl={modelUrl} />
            </FadeIn>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center gap-2 text-foreground-muted">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-border animate-pulse" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
