import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Agence digitale Abidjan | SALIMTECH Solutions",
  description:
    "Agence digitale à Abidjan (Côte d’Ivoire). Création site web professionnel, développement web, identité visuelle et communication digitale sur mesure.",
};

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </div>
  );
}

