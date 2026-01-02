import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "launchDate",
      title: "Launch Date",
      type: "datetime",
    }),
    defineField({
      name: "isPreSaleLive",
      title: "Pre-Sale Live",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "showWaitlistOnly",
      title: "Show Waitlist Only",
      type: "boolean",
      initialValue: true,
      description: "If true, shows waitlist form instead of checkout",
    }),
    defineField({
      name: "announcementBar",
      title: "Announcement Bar Text",
      type: "string",
    }),
    defineField({
      name: "discountTiers",
      title: "Discount Tiers",
      type: "object",
      fields: [
        {
          name: "collectors",
          type: "number",
          title: "Collector's Edition Discount",
          description: "Decimal (e.g., 0.40 for 40%)",
        },
        {
          name: "early",
          type: "number",
          title: "Early Supporter Discount",
        },
        {
          name: "general",
          type: "number",
          title: "General Pre-Sale Discount",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
