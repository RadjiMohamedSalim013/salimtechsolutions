"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0e1b2f] pt-24 pb-16 overflow-hidden selection:bg-[#cc4b4b]/30">

      {/* BACKGROUND IMAGE TECH (DIGITAL) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
          alt="digital technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#0e1b2f]/80" />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-[#cc4b4b]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/80 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#cc4b4b] animate-pulse"></span>
          Agence spécialisée en développement digital
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 leading-tight">
          Nous créons des solutions digitales modernes, performantes et sur mesure
        </h1>

        {/* TEXT */}
        <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Nous accompagnons les entreprises dans leur transformation digitale à travers la conception de sites web, applications et expériences numériques innovantes.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Link
            href="/services"
            className="
              inline-flex items-center gap-2
              bg-[#cc4b4b] text-white px-6 py-3 rounded-full text-xs font-medium
              shadow-[0_4px_20px_rgba(204,75,75,0.25)]
              hover:bg-[#d95454] transition-all duration-300
              hover:-translate-y-0.5
            "
          >
            Voir nos services
            <FaArrowRight className="text-[10px]" />
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex items-center
              px-6 py-3 rounded-full text-xs font-medium
              bg-white/[0.02] border border-white/10
              text-white/80 hover:text-white hover:bg-white/[0.06]
              transition-all duration-200
            "
          >
            Demander un devis
          </Link>

        </div>

      </div>
    </section>
  );
}