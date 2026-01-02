"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn.client";

const features = [
  {
    title: "Lightweight",
    description:
      "Despite its substantial appearance, each table weighs a fraction of traditional materials.",
  },
  {
    title: "Durable",
    description:
      "The glazed surface resists scratches, stains, and everyday wear with remarkable resilience.",
  },
  {
    title: "Unique",
    description:
      "No two pieces are identical. Each carries subtle variations that mark it as one-of-a-kind.",
  },
];

export function MaterialScience() {
  return (
    <section className="py-24 lg:py-32 bg-background-elevated">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-foreground-muted">
              Material Innovation
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl italic">
              The Science of Form
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-foreground-muted text-lg leading-relaxed">
              Our proprietary glazed foam technique creates a ceramic-like surface
              over a lightweight core. The result is furniture that looks and feels
              like carved stone but weighs a fraction and will never crack or
              shatter.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={0.3 + i * 0.1}>
              <div className="text-center p-8 border border-border bg-background rounded-sm">
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="mt-3 text-foreground-muted">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
