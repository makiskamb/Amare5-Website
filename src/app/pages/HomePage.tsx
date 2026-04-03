import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { AccommodationSection } from "../components/AccommodationSection";
import { ArchitectureSection } from "../components/MonumentSection";
import { DiningSection } from "../components/DiningSection";
import { ExperiencesSection } from "../components/ExperiencesSection";
import { GallerySlider } from "../components/GallerySlider";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AccommodationSection />
      <ArchitectureSection />
      <DiningSection />
      <ExperiencesSection />
      <GallerySlider />
    </>
  );
}
