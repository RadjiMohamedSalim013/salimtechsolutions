import type { Metadata } from "next";

import CTASection from "@/components/home/CTASection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSection from "@/components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Services | Développement web & Identité visuelle à Abidjan",
  description:
    "Services de SALIMTECH Solutions : développement web, création site web professionnel, identité visuelle et communication digitale en Côte d’Ivoire.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ServicesHero />
      <ServicesSection />
      <CTASection />
    </main>
  );
}

