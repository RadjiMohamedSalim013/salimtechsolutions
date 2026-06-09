"use client";

export default function ProcessSection() {
  const steps = [
    {
      title: "Analyse stratégique",
      desc: "Nous étudions votre activité, votre cible et vos objectifs afin de définir une direction claire et efficace.",
    },
    {
      title: "Conception & identité",
      desc: "Nous construisons l’univers visuel et la structure du projet : branding, UX et stratégie digitale.",
    },
    {
      title: "Production digitale",
      desc: "Nous réalisons vos solutions : sites web, contenus visuels et supports de communication modernes.",
    },
    {
      title: "Suivi & évolution",
      desc: "Nous assurons l’optimisation continue et l’accompagnement pour garantir des résultats durables.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0e1b2f] overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#cc4b4b]/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-blue-500/10 blur-[160px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-[2px] bg-[#cc4b4b]" />
          <h2 className="text-xs tracking-[0.35em] uppercase font-bold text-white/70">
            Notre approche
          </h2>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl leading-snug mb-12">
          Une méthode structurée pour transformer vos idées en solutions digitales concrètes
        </h3>

        {/* STEPS GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="
                relative p-6 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-md
                hover:bg-white/10 transition-all duration-300
                group
              "
            >

              {/* BIG NUMBER BACKGROUND */}
              <span className="absolute top-4 right-5 text-5xl font-bold text-white/5 group-hover:text-white/10 transition">
                {index + 1}
              </span>

              {/* SMALL NUMBER */}
              <span className="text-[#cc4b4b] text-xs font-bold tracking-widest">
                STEP 0{index + 1}
              </span>

              {/* TITLE */}
              <h4 className="text-lg font-bold text-white mt-2">
                {step.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}