"use client";

export default function ValuesSection() {
  const values = [
    {
      title: "Qualité",
      desc: "Des solutions propres, stables et pensées dans les moindres détails.",
    },
    {
      title: "Innovation",
      desc: "Des approches modernes pour construire des expériences digitales évolutives.",
    },
    {
      title: "Créativité",
      desc: "Des idées uniques pour donner une identité forte à chaque projet.",
    },
    {
      title: "Impact",
      desc: "Des résultats concrets qui améliorent la visibilité et la croissance.",
    },
    {
      title: "Engagement",
      desc: "Un accompagnement sérieux et durable pour chaque client.",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0e1b2f_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] bg-[#cc4b4b]/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-[2px] bg-[#cc4b4b]" />
          <h2 className="text-xs tracking-[0.35em] uppercase font-bold text-[#0e1b2f]">
            Nos valeurs
          </h2>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl sm:text-4xl font-bold text-[#0e1b2f] mb-12 max-w-2xl leading-snug">
          Ce qui guide chaque projet chez SALIMTECH SOLUTIONS
        </h3>

        {/* GRID NEW STYLE */}
        <div className="grid md:grid-cols-2 gap-6">

          {values.map((value, index) => (
            <div
              key={index}
              className="
                relative flex gap-4 items-start
                p-6 rounded-2xl
                border border-slate-200
                bg-gradient-to-br from-white to-slate-50
                hover:shadow-md hover:border-slate-300
                transition-all duration-300
              "
            >

              {/* NUMBER STICK */}
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#cc4b4b]/10 text-[#cc4b4b] font-bold text-sm">
                  {index + 1}
                </span>
              </div>

              {/* CONTENT */}
              <div>
                <h4 className="text-lg font-bold text-[#0e1b2f] mb-1">
                  {value.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}