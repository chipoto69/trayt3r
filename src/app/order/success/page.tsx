import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your order has been confirmed.",
};

export default function OrderSuccessPage() {
  return (
    <div className="pt-24 pb-16 min-h-[80vh] flex items-center">
      <Container size="narrow">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-success"
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
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl italic">
            Thank You
          </h1>
          <p className="mt-4 text-xl text-accent">
            Your reservation is confirmed
          </p>

          <div className="mt-8 p-6 bg-background-elevated border border-border text-left">
            <h2 className="text-sm uppercase tracking-widest text-foreground-muted">
              What Happens Next
            </h2>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-medium">
                  1
                </span>
                <div>
                  <p className="font-medium">Confirmation Email</p>
                  <p className="text-sm text-foreground-muted">
                    You&apos;ll receive an order confirmation within minutes.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-medium">
                  2
                </span>
                <div>
                  <p className="font-medium">Production Begins</p>
                  <p className="text-sm text-foreground-muted">
                    Your piece enters the production queue based on your tier.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-medium">
                  3
                </span>
                <div>
                  <p className="font-medium">Regular Updates</p>
                  <p className="text-sm text-foreground-muted">
                    Receive production updates and photos of your table in progress.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-background flex items-center justify-center text-sm font-medium">
                  4
                </span>
                <div>
                  <p className="font-medium">White-Glove Delivery</p>
                  <p className="text-sm text-foreground-muted">
                    Your table is delivered and installed by our team.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="secondary">Return Home</Button>
            </Link>
            <Link href="/collection">
              <Button>Explore Collection</Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-foreground-muted">
            Questions? Contact us at{" "}
            <a
              href="mailto:hello@trajter.com"
              className="text-accent hover:underline"
            >
              hello@trajter.com
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
