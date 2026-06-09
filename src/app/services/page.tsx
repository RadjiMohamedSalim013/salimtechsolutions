'use client'

import CTASection from "@/components/home/CTASection"
import ServicesHero from "@/components/services/ServicesHero"
import ServicesSection from "@/components/services/ServicesSection"

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ServicesHero/>
      <ServicesSection/>
      <CTASection/>
    </main>
  )
}