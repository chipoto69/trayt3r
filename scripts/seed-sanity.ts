/**
 * Sanity Seed Script
 * Run: npx sanity exec scripts/seed-sanity.ts --with-user-token
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
});

const artistData = {
  _id: "artist-jakub-trajter",
  _type: "artist",
  name: "Jakub Trajter",
  slug: { _type: "slug", current: "jakub-trajter" },
  title: "Sculptor & Designer",
  bio: [
    {
      _type: "block",
      _key: "bio1",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "span1",
          text: "Born in 1975 in Bratislava, Slovakia, Jakub Trajter discovered his passion for sculptural form while studying at the Academy of Fine Arts in Vienna. His early work in bronze casting and steel welding established him as a formidable presence in the European art scene.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "bio2",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "span2",
          text: "Trajter is perhaps best known for the November 1989 Memorial in Bratislava, a monument commemorating the Velvet Revolution that freed Czechoslovakia from communist rule. The memorial's powerful combination of delicacy and strength—hands reaching upward through heavy bronze—exemplifies his artistic philosophy.",
          marks: [],
        },
      ],
    },
  ],
  website: "https://jakubtrajter.com",
};

const siteSettingsData = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteTitle: "Trajter",
  tagline: "Sculptor-Designed Furniture",
  description:
    "Functional sculpture for those who refuse ordinary. Handcrafted tables by sculptor Jakub Trajter.",
  socialLinks: {
    instagram: "https://instagram.com/trajter",
  },
  preSaleEnabled: true,
  announcement:
    "Pre-sale now open! Limited slots available at exclusive pricing.",
};

const productsData = [
  {
    _id: "product-foundation-table",
    _type: "product",
    name: "The Foundation Table",
    slug: { _type: "slug", current: "foundation-table" },
    tagline: "Where form meets function",
    description: [
      {
        _type: "block",
        _key: "desc1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "The Foundation Table represents the culmination of years of experimentation with sculptural form and functional design. Its clean lines and substantial presence make it a statement piece that anchors any room.",
            marks: [],
          },
        ],
      },
    ],
    basePriceCents: 350000,
    dimensions: {
      width: 180,
      depth: 90,
      height: 75,
      weight: 25,
    },
    materials: [
      "Glazed foam core",
      "Ceramic-like surface finish",
      "Steel reinforcement frame",
    ],
    tiers: [
      {
        _key: "tier-collector",
        name: "Collector's Edition",
        stripePriceId: "price_collector_foundation",
        discountPercent: 40,
        totalSlots: 25,
        remaining: 25,
        perks: [
          "40% off retail price",
          "Priority production (first in queue)",
          "Signed certificate of authenticity",
          "Private studio visit with Jakub Trajter",
          "Exclusive colorway options",
        ],
      },
      {
        _key: "tier-early",
        name: "Early Supporter",
        stripePriceId: "price_early_foundation",
        discountPercent: 25,
        totalSlots: 75,
        remaining: 75,
        perks: [
          "25% off retail price",
          "Early production slot",
          "Signed certificate of authenticity",
          "Production updates",
        ],
      },
      {
        _key: "tier-presale",
        name: "Pre-Sale",
        stripePriceId: "price_presale_foundation",
        discountPercent: 10,
        totalSlots: 100,
        remaining: 100,
        perks: [
          "10% off retail price",
          "Guaranteed allocation",
          "Production updates",
        ],
      },
    ],
    featured: true,
    status: "presale",
    sortOrder: 1,
  },
  {
    _id: "product-pressure-console",
    _type: "product",
    name: "The Pressure Console",
    slug: { _type: "slug", current: "pressure-console" },
    tagline: "Strength in lightness",
    description: [
      {
        _type: "block",
        _key: "desc1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "The Pressure Console defies expectations with its cantilever design. What appears to be a massive slab of stone is actually our lightweight glazed foam construction, creating an impossible-looking piece that brings drama to any entryway.",
            marks: [],
          },
        ],
      },
    ],
    basePriceCents: 420000,
    dimensions: {
      width: 150,
      depth: 45,
      height: 85,
      weight: 18,
    },
    materials: [
      "Glazed foam core",
      "Ceramic-like surface finish",
      "Hidden steel mounting system",
    ],
    tiers: [
      {
        _key: "tier-collector",
        name: "Collector's Edition",
        stripePriceId: "price_collector_console",
        discountPercent: 40,
        totalSlots: 15,
        remaining: 15,
        perks: [
          "40% off retail price",
          "Priority production",
          "Signed certificate of authenticity",
          "Private studio visit",
        ],
      },
      {
        _key: "tier-early",
        name: "Early Supporter",
        stripePriceId: "price_early_console",
        discountPercent: 25,
        totalSlots: 50,
        remaining: 50,
        perks: [
          "25% off retail price",
          "Early production slot",
          "Signed certificate of authenticity",
        ],
      },
      {
        _key: "tier-presale",
        name: "Pre-Sale",
        stripePriceId: "price_presale_console",
        discountPercent: 10,
        totalSlots: 75,
        remaining: 75,
        perks: ["10% off retail price", "Guaranteed allocation"],
      },
    ],
    featured: false,
    status: "presale",
    sortOrder: 2,
  },
  {
    _id: "product-memory-side-table",
    _type: "product",
    name: "The Memory Side Table",
    slug: { _type: "slug", current: "memory-side-table" },
    tagline: "A study in contradiction",
    description: [
      {
        _type: "block",
        _key: "desc1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "The Memory Side Table captures the essence of the collection in a compact form. Perfect as a bedside companion or accent piece, it brings sculptural presence to intimate spaces without overwhelming them.",
            marks: [],
          },
        ],
      },
    ],
    basePriceCents: 280000,
    dimensions: {
      width: 50,
      depth: 50,
      height: 55,
      weight: 8,
    },
    materials: ["Glazed foam core", "Ceramic-like surface finish"],
    tiers: [
      {
        _key: "tier-collector",
        name: "Collector's Edition",
        stripePriceId: "price_collector_side",
        discountPercent: 40,
        totalSlots: 30,
        remaining: 30,
        perks: [
          "40% off retail price",
          "Priority production",
          "Signed certificate",
        ],
      },
      {
        _key: "tier-early",
        name: "Early Supporter",
        stripePriceId: "price_early_side",
        discountPercent: 25,
        totalSlots: 100,
        remaining: 100,
        perks: ["25% off retail price", "Early production slot"],
      },
      {
        _key: "tier-presale",
        name: "Pre-Sale",
        stripePriceId: "price_presale_side",
        discountPercent: 10,
        totalSlots: 150,
        remaining: 150,
        perks: ["10% off retail price", "Guaranteed allocation"],
      },
    ],
    featured: false,
    status: "presale",
    sortOrder: 3,
  },
];

async function seed() {
  console.log("Seeding Sanity dataset...\n");

  try {
    console.log("Creating artist...");
    await client.createOrReplace(artistData);
    console.log("  Created: Jakub Trajter");

    console.log("\nCreating site settings...");
    await client.createOrReplace(siteSettingsData);
    console.log("  Created: Site Settings");

    console.log("\nCreating products...");
    for (const product of productsData) {
      await client.createOrReplace(product);
      console.log(`  Created: ${product.name}`);
    }

    console.log("\nSeeding complete!");
    console.log(
      "\nNext steps:\n  1. Upload product images in Sanity Studio\n  2. Create Stripe prices and update stripePriceId values"
    );
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seed();
