"use client";

export default function WhoWeAre() {
  return (
    <section className="relative py-24 bg-[#f7f8fc] overflow-hidden">

      {/* BACKGROUND DESIGN SYSTEM */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0e1b2f_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#cc4b4b]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-200/30 blur-[160px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-[2px] bg-[#cc4b4b]" />
          <h2 className="text-xs tracking-[0.35em] uppercase font-bold text-[#0e1b2f]">
            Qui nous sommes
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-12 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="md:col-span-7">

            <h3 className="text-2xl sm:text-4xl font-bold text-[#0e1b2f] leading-snug">
              SALIMTECH SOLUTIONS, une agence digitale orientée innovation et performance.
            </h3>

            <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
              Nous sommes une structure spécialisée dans la création de solutions digitales complètes :
              développement web, design, branding et communication digitale.
            </p>

            <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
              Notre objectif est simple : accompagner les entreprises et les entrepreneurs dans leur croissance
              en construisant des expériences digitales modernes, efficaces et durables.
            </p>

            {/* SMALL HIGHLIGHT */}
            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#cc4b4b] rounded-full" />
              <p className="text-xs text-[#0e1b2f] font-medium tracking-wide">
                Une approche centrée sur le résultat et l’impact
              </p>
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="md:col-span-5">

            <div className="bg-[#0e1b2f] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">

              {/* DECOR */}
              <div className="absolute top-[-60px] right-[-60px] w-[160px] h-[160px] bg-[#cc4b4b]/20 blur-2xl rounded-full" />

              {/* VISION */}
              <div className="mb-6 relative z-10">
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">
                  Notre vision
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Devenir un partenaire digital de référence en Afrique et à l’international,
                  reconnu pour la qualité et l’impact de ses solutions.
                </p>
              </div>

              {/* MISSION */}
              <div className="relative z-10">
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">
                  Notre mission
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Concevoir des solutions digitales performantes, accessibles et adaptées aux besoins réels des entreprises modernes.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}