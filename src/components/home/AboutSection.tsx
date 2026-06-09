"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section className="relative py-28 bg-[#f6f7fb] overflow-hidden">

      {/* LARGE DIAGONAL BACKGROUND SHAPE */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(204,75,75,0.08)_0%,transparent_40%)]" />

      {/* FLOATING BLUR ELEMENTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#cc4b4b]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-300/20 blur-[140px] rounded-full" />

      {/* SOFT DOT GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* LEFT VISUAL BLOCK */}
          <div className="md:col-span-5">
            <div className="relative">

              {/* MAIN CARD */}
              <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-6 relative overflow-hidden">

                {/* mini design accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#cc4b4b]/10 rounded-full blur-2xl" />

                <div className="text-xs text-[#cc4b4b] font-semibold tracking-[0.3em] uppercase">
                  Agence digitale
                </div>

                <h3 className="text-2xl font-bold text-[#0e1b2f] mt-4 leading-snug">
                  Nous créons des expériences digitales modernes et impactantes
                </h3>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  Sites web, branding, communication digitale : nous construisons des solutions pensées pour la performance et la visibilité.
                </p>

                {/* small stats style */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-[#cc4b4b] font-bold text-lg">100%</p>
                    <p className="text-xs text-gray-500">Solutions sur mesure</p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-[#cc4b4b] font-bold text-lg">+3</p>
                    <p className="text-xs text-gray-500">Domaines d’expertise</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-7">

            <span className="text-[#cc4b4b] text-xs tracking-[0.3em] uppercase font-semibold">
              À propos
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1b2f] mt-4 leading-tight">
              Une équipe passionnée par le digital et la création de solutions utiles
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed text-base">
              Nous accompagnons les entreprises dans leur transformation digitale en combinant design, technologie et stratégie de communication.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed text-base">
              Notre approche est simple : comprendre vos besoins, créer des solutions efficaces et vous aider à grandir dans un environnement numérique compétitif.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/about"
                className="
                  inline-flex items-center gap-2
                  bg-[#cc4b4b] text-white px-7 py-3 rounded-full text-xs font-medium
                  shadow-md
                  hover:bg-[#d95454]
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                En savoir plus sur nous
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}