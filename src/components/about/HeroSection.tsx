"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-24 bg-[#0e1b2f] overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#cc4b4b]/20 blur-[150px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* LABEL */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-[#cc4b4b]" />
          <span className="text-[#cc4b4b] text-xs tracking-[0.35em] uppercase font-semibold">
            SALIMTECH SOLUTIONS
          </span>
        </div>

        {/* MAIN TEXT */}
        <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight max-w-3xl">
          Nous créons des expériences digitales modernes, simples et impactantes.
        </h1>

        {/* SHORT DESCRIPTION */}
        <p className="text-white/60 mt-6 text-sm sm:text-base max-w-2xl leading-relaxed">
          Développement web, design et communication digitale pour accompagner les marques dans leur croissance.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-medium bg-[#cc4b4b] text-white hover:bg-[#d95454] transition shadow-lg"
          >
            Découvrir nos services
          </Link>
        </div>

      </div>
    </section>
  );
}