"use client";

import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative py-28 bg-[#0e1b2f] overflow-hidden">

      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-150px] right-[-150px] w-[450px] h-[450px] bg-[#cc4b4b]/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[450px] h-[450px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* LABEL */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-[#cc4b4b]" />
          <span className="text-[#cc4b4b] text-xs tracking-[0.35em] uppercase font-semibold">
            Services
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight max-w-3xl">
          Des solutions digitales pensées pour faire grandir votre activité
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/60 mt-6 max-w-2xl text-sm sm:text-base leading-relaxed">
          Développement web, identité visuelle et communication digitale.
          Nous créons des expériences modernes, efficaces et orientées résultats.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="#services"
            className="px-6 py-3 rounded-xl bg-[#cc4b4b] text-white text-xs font-medium hover:bg-[#d95454] transition shadow-lg hover:shadow-[#cc4b4b]/30"
          >
            Découvrir nos services
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition"
          >
            Demander un devis
          </Link>

        </div>

      </div>
    </section>
  );
}