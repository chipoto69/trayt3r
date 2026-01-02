import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ArtistStory } from "@/components/sections/ArtistStory";
import { MaterialScience } from "@/components/sections/MaterialScience";
import { PreSaleCTA } from "@/components/sections/PreSaleCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <ArtistStory />
      <MaterialScience />
      <PreSaleCTA />
    </>
  );
}
