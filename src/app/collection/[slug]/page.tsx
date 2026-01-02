import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ThreeViewer } from "@/components/three/ThreeViewer";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { formatPrice, calculateDiscountedPrice } from "@/lib/utils";
import Link from "next/link";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const placeholderProduct = {
  name: "The Foundation Table",
  slug: "foundation-table",
  tagline: "Where form meets function",
  description:
    "The Foundation Table represents the culmination of years of experimentation with sculptural form and functional design. Its clean lines and substantial presence make it a statement piece that anchors any room.",
  basePrice: 350000,
  dimensions: {
    width: 180,
    depth: 90,
    height: 75,
    weight: 25,
  },
  materials: ["Glazed foam core", "Ceramic-like surface", "Steel reinforcement"],
  tiers: [
    {
      name: "Collector's Edition",
      stripePriceId: "price_collector",
      displayPrice: 210000,
      discountPercent: 40,
      totalSlots: 25,
      remaining: 12,
      perks: [
        "40% off retail",
        "Priority production",
        "Signed certificate",
        "Studio visit",
      ],
    },
    {
      name: "Early Supporter",
      stripePriceId: "price_early",
      displayPrice: 262500,
      discountPercent: 25,
      totalSlots: 75,
      remaining: 45,
      perks: ["25% off retail", "Early production slot", "Signed certificate"],
    },
    {
      name: "Pre-Sale",
      stripePriceId: "price_presale",
      displayPrice: 315000,
      discountPercent: 10,
      totalSlots: 100,
      remaining: 100,
      perks: ["10% off retail", "Guaranteed allocation"],
    },
  ],
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: placeholderProduct.name,
    description: placeholderProduct.tagline,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  if (slug !== "foundation-table" && slug !== "pressure-console" && slug !== "memory-side-table") {
    notFound();
  }

  const product = placeholderProduct;

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <ThreeViewer modelUrl={null} />
          </div>

          <div>
            <Badge variant="accent">Pre-Sale Open</Badge>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl italic">
              {product.name}
            </h1>
            <p className="mt-2 text-xl text-accent">{product.tagline}</p>
            <p className="mt-6 text-foreground-muted leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 p-6 border border-border bg-background-elevated">
              <h3 className="text-sm uppercase tracking-widest text-foreground-muted">
                Select Tier
              </h3>
              <div className="mt-4 space-y-3">
                {product.tiers.map((tier) => (
                  <label
                    key={tier.name}
                    className="flex items-center gap-4 p-4 border border-border bg-background cursor-pointer hover:border-accent transition-colors"
                  >
                    <input
                      type="radio"
                      name="tier"
                      value={tier.stripePriceId}
                      className="w-4 h-4 text-accent"
                      defaultChecked={tier.name === "Collector's Edition"}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{tier.name}</span>
                        <span>{formatPrice(tier.displayPrice)}</span>
                      </div>
                      <div className="flex justify-between mt-1 text-sm text-foreground-muted">
                        <span>Save {tier.discountPercent}%</span>
                        <span>
                          {tier.remaining} of {tier.totalSlots} left
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/pre-sale">
                  <Button size="lg" className="w-full">
                    Reserve Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Accordion>
                <AccordionItem title="Specifications" defaultOpen>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-foreground-muted">Width</p>
                      <p>{product.dimensions.width} cm</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Depth</p>
                      <p>{product.dimensions.depth} cm</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Height</p>
                      <p>{product.dimensions.height} cm</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Weight</p>
                      <p>{product.dimensions.weight} kg</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem title="Materials">
                  <ul className="space-y-2 text-sm">
                    {product.materials.map((material) => (
                      <li key={material}>{material}</li>
                    ))}
                  </ul>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <div className="text-sm space-y-3">
                    <p>
                      White-glove delivery included for all orders within the
                      continental US.
                    </p>
                    <p>
                      Production time: 8-12 weeks from order confirmation.
                    </p>
                    <p>
                      Returns accepted within 14 days of delivery for items in
                      original condition.
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
