"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#f7f8fc] to-white overflow-hidden">

      {/* BACKGROUND SHAPES */}
      <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#cc4b4b]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-blue-200/20 blur-[160px] rounded-full" />

      {/* SOFT GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        {/* BADGE */}
        <span className="text-[#cc4b4b] text-xs tracking-[0.3em] uppercase font-semibold">
          Parlons de votre projet
        </span>

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1b2f] mt-4 leading-tight">
          Transformons vos idées en solutions digitales concrètes
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Nous accompagnons les entreprises et les porteurs de projets dans la création de solutions digitales modernes, efficaces et adaptées à leurs objectifs.
          Notre mission est de transformer vos besoins en résultats visibles.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              bg-[#cc4b4b] text-white px-7 py-3 rounded-full text-xs font-medium
              shadow-md hover:bg-[#d95454]
              transition-all duration-300 hover:-translate-y-0.5
            "
          >
            Demander un devis
            <FiArrowRight className="text-[10px]" />
          </Link>

          <Link
            href="/services"
            className="
              inline-flex items-center gap-2
              bg-white text-[#0e1b2f]
              px-7 py-3 rounded-full text-xs font-medium
              border border-gray-200
              hover:bg-gray-50 hover:border-gray-300
              transition-all duration-300
            "
          >
            Découvrir nos services
          </Link>

        </div>

      </div>
    </section>
  );
}