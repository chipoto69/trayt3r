import { client } from "./client";

export async function getProducts() {
  return client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      tagline,
      shortDescription,
      basePrice,
      images,
      modelUrl,
      tiers,
      featured
    }
  `);
}

export async function getFeaturedProduct() {
  return client.fetch(`
    *[_type == "product" && featured == true][0] {
      _id,
      name,
      slug,
      tagline,
      shortDescription,
      description,
      basePrice,
      images,
      modelUrl,
      dimensions,
      materials,
      tiers,
      featured
    }
  `);
}

export async function getProductBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      tagline,
      shortDescription,
      description,
      basePrice,
      images,
      modelUrl,
      dimensions,
      materials,
      tiers,
      featured
    }
  `,
    { slug }
  );
}

export async function getArtist() {
  return client.fetch(`
    *[_type == "artist"][0] {
      _id,
      name,
      title,
      portrait,
      bio,
      shortBio,
      website,
      notableWorks
    }
  `);
}

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      heroHeadline,
      heroSubheadline,
      launchDate,
      isPreSaleLive,
      showWaitlistOnly,
      announcementBar,
      discountTiers
    }
  `);
}
