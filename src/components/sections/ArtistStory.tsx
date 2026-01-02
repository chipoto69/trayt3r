"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn.client";

interface ArtistStoryProps {
  artist?: {
    name?: string;
    title?: string;
    shortBio?: string;
  } | null;
}

export function ArtistStory({ artist }: ArtistStoryProps) {
  const name = artist?.name || "Jakub Trajter";
  const title = artist?.title || "Sculptor & Designer";
  const bio =
    artist?.shortBio ||
    "Born in Slovakia, Jakub Trajter has spent over two decades mastering the art of sculptural form. His work bridges the gap between fine art and functional design, creating pieces that challenge conventional notions of what furniture can be. Known for the November 1989 Memorial in Bratislava, Trajter now brings his sculptural vision to the domestic sphere.";

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <p className="text-sm uppercase tracking-widest text-foreground-muted">
                The Artist
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl italic">
                {name}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-2 text-lg text-accent">{title}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-foreground-muted text-lg leading-relaxed">
                {bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="secondary">Read Full Story</Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="aspect-[3/4] relative bg-background-elevated rounded-sm overflow-hidden">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
