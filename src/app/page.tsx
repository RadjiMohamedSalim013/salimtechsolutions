import HeroSection from "@/components/home/HeroSection"
import AboutSection from '@/components/home/AboutSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import ServicesSection from "@/components/home/ServicesSection"
import CTASection from "@/components/home/CTASection"


export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <ProjectsSection />
      <CTASection />
    </div>
  )
}
