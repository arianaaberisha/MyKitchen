import Hero from "@/components/Hero";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedRecipes />
      <AboutSection />
      <CommunitySection />
      <CTASection />
    </>
  );
}
