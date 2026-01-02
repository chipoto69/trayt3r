import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection",
  description: "Explore our collection of sculptor-designed tables.",
};

const placeholderProducts = [
  {
    id: "1",
    name: "The Foundation Table",
    slug: "foundation-table",
    tagline: "Where form meets function",
    basePrice: 350000,
    featured: true,
  },
  {
    id: "2",
    name: "The Pressure Console",
    slug: "pressure-console",
    tagline: "Strength in lightness",
    basePrice: 420000,
    featured: false,
  },
  {
    id: "3",
    name: "The Memory Side Table",
    slug: "memory-side-table",
    tagline: "A study in contradiction",
    basePrice: 280000,
    featured: false,
  },
];

export default function CollectionPage() {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl italic">
            The Collection
          </h1>
          <p className="mt-6 text-lg text-foreground-muted">
            Each piece is handcrafted by sculptor Jakub Trajter using our proprietary
            glazed foam technique. Limited production ensures exclusivity and attention
            to detail.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {placeholderProducts.map((product) => (
            <Link
              key={product.id}
              href={`/collection/${product.slug}`}
              className="group"
            >
              <Card hover>
                <div className="aspect-[4/3] bg-background relative">
                  <div className="absolute inset-0 flex items-center justify-center text-foreground-muted">
                    <svg
                      className="w-16 h-16 opacity-20 group-hover:opacity-30 transition-opacity"
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
                  {product.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="accent">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent>
                  <h2 className="text-xl font-medium group-hover:text-accent transition-colors">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-foreground-muted">{product.tagline}</p>
                  <p className="mt-4 text-lg">
                    Starting at {formatPrice(product.basePrice)}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
