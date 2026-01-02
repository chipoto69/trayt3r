import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "basePrice",
      title: "Base Price (cents)",
      type: "number",
      description: "Retail price in cents (e.g., 350000 = $3,500)",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "modelUrl",
      title: "3D Model URL",
      type: "url",
      description: "CDN URL to .glb file",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        { name: "width", type: "number", title: "Width (cm)" },
        { name: "depth", type: "number", title: "Depth (cm)" },
        { name: "height", type: "number", title: "Height (cm)" },
        { name: "weight", type: "number", title: "Weight (kg)" },
      ],
    }),
    defineField({
      name: "materials",
      title: "Materials",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tiers",
      title: "Pre-sale Tiers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Tier Name" },
            { name: "stripePriceId", type: "string", title: "Stripe Price ID" },
            {
              name: "displayPrice",
              type: "number",
              title: "Display Price (cents)",
            },
            { name: "discountPercent", type: "number", title: "Discount %" },
            { name: "totalSlots", type: "number", title: "Total Available" },
            { name: "remaining", type: "number", title: "Remaining" },
            { name: "perks", type: "array", of: [{ type: "string" }] },
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0",
    },
  },
});
