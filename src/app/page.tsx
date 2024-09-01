"use client";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/Home/HeroSection";
import StatSection from "@/components/Home/StatSection";
import AboutSection from "@/components/Home/AboutSection";
import OurTeamSection from "@/components/Home/OurTeamSection";
import TestimonySection from "@/components/Home/TestimonySection";
import GallerySection from "@/components/Home/GallerySection";
import ChangeLifeSection from "@/components/Home/ChangeLifeSection";
import FooterSection from "@/components/Home/FooterSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <StatSection />
      <AboutSection />
      <OurTeamSection />
      <TestimonySection />
      <GallerySection />
      <ChangeLifeSection />
      <FooterSection />
    </>
  );
}
