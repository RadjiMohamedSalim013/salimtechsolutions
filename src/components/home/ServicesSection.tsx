"use client";

import Link from "next/link";
import {
  FaCode,
  FaPalette,
  FaBullhorn,
} from "react-icons/fa";

export default function ServicesPreview() {
  const services = [
    {
      icon: <FaCode />,
      title: "Développement Web",
      desc: "Des sites modernes, rapides et optimisés pour offrir une expérience professionnelle.",
    },
    {
      icon: <FaPalette />,
      title: "Identité Visuelle",
      desc: "Création d’une image de marque forte et cohérente pour vous démarquer.",
    },
    {
      icon: <FaBullhorn />,
      title: "Communication Digitale",
      desc: "Stratégies digitales pour améliorer votre visibilité et votre impact.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-[#f4f6f9] overflow-hidden">

      {/* BACKGROUND SHAPES (DIFFERENT STYLE) */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#cc4b4b]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-300/20 blur-[160px] rounded-full" />

      {/* SOFT DOT GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-[#cc4b4b] text-xs tracking-[0.3em] uppercase font-semibold">
            Nos Services
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1b2f] mt-4">
            Des solutions digitales adaptées à vos besoins
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Nous accompagnons les entreprises dans leur transformation digitale avec des solutions modernes et efficaces.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group p-6 rounded-2xl
                bg-white border border-gray-200/60
                hover:border-[#cc4b4b]/30
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="text-[#cc4b4b] text-xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <h3 className="text-[#0e1b2f] text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="
              inline-flex items-center
              bg-[#cc4b4b] text-white px-7 py-3 rounded-full text-xs font-medium
              hover:bg-[#d95454]
              transition-all duration-300
            "
          >
            Voir tous nos services
          </Link>
        </div>

      </div>
    </section>
  );
}