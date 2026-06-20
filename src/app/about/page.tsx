import type { Metadata } from "next";

import HeroSection from "@/components/about/HeroSection";
import TimelineSection from "@/components/about/TimelineSection";
import SkillsSection from "@/components/about/SkillsSection";
import InitiativesSection from "@/components/about/InitiativesSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import ProcessSection from "@/components/about/ProcessSection";
import ValuesSection from "@/components/about/ValuesSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "À propos | SALIMTECH Solutions | Agence digitale Abidjan",
  description:
    "Découvrez SALIMTECH Solutions : agence digitale à Abidjan. Développement web, création site web professionnel, identité visuelle et communication digitale.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <WhoWeAre />
      <ProcessSection />
      <ValuesSection />
      <CTASection />
    </main>
  );
}

