import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FeaturesStrip } from "@/components/home/FeaturesStrip";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesStrip />
      <ServicesPreview />
      <FeaturedProducts />
    </>
  );
}
