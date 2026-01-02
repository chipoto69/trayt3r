import { Container } from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about sculptor Jakub Trajter and the vision behind Trajter furniture.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <Container size="narrow">
        <div className="aspect-[3/2] bg-background-elevated mb-12 flex items-center justify-center text-foreground-muted">
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

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl italic">
          Jakub Trajter
        </h1>
        <p className="mt-4 text-xl text-accent">Sculptor & Designer</p>

        <div className="mt-12 space-y-8 text-lg text-foreground-muted leading-relaxed">
          <p>
            Born in 1975 in Bratislava, Slovakia, Jakub Trajter discovered his
            passion for sculptural form while studying at the Academy of Fine Arts
            in Vienna. His early work in bronze casting and steel welding
            established him as a formidable presence in the European art scene.
          </p>

          <p>
            Trajter is perhaps best known for the November 1989 Memorial in
            Bratislava, a monument commemorating the Velvet Revolution that freed
            Czechoslovakia from communist rule. The memorial&apos;s powerful
            combination of delicacy and strength—hands reaching upward through
            heavy bronze—exemplifies his artistic philosophy.
          </p>

          <p>
            &ldquo;Memory of Pressure&rdquo; began as an exploration of contradictions: how
            can something appear heavy yet feel light? How can industrial
            materials evoke organic warmth? These questions led to the development
            of the glazed foam technique that defines Trajter furniture.
          </p>

          <p>
            Each piece in the collection represents months of refinement. The
            forms are sculpted by hand, then translated into production molds that
            preserve every nuance of the original. The result is furniture that
            carries the spirit of sculpture into everyday life.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <h2 className="font-display text-3xl italic">Notable Works</h2>
          <div className="mt-8 space-y-8">
            <div>
              <p className="text-sm text-foreground-muted">2009</p>
              <h3 className="mt-1 text-xl">November 1989 Memorial</h3>
              <p className="mt-2 text-foreground-muted">
                Bratislava, Slovakia. Bronze and steel installation commemorating
                the Velvet Revolution.
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground-muted">2015</p>
              <h3 className="mt-1 text-xl">Pressure Series</h3>
              <p className="mt-2 text-foreground-muted">
                Gallery installation exploring material tension. Exhibited at
                Vienna Kunsthalle.
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground-muted">2024</p>
              <h3 className="mt-1 text-xl">Memory of Pressure (Furniture)</h3>
              <p className="mt-2 text-foreground-muted">
                First furniture collection applying sculptural techniques to
                functional design.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-background-elevated border border-border">
          <p className="text-sm uppercase tracking-widest text-foreground-muted">
            Learn More
          </p>
          <h3 className="mt-2 text-xl">Visit the Artist&apos;s Website</h3>
          <p className="mt-2 text-foreground-muted">
            Explore Jakub Trajter&apos;s complete portfolio of sculptural works.
          </p>
          <a
            href="https://jakubtrajter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-accent hover:underline"
          >
            jakubtrajter.com
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </Container>
    </div>
  );
}
