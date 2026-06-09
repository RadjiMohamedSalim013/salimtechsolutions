"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      titre: "ProxiTalents",
      description:
        "Une plateforme intelligente de mise en relation entre talents et entreprises, pensée pour optimiser le recrutement et la visibilité des profils.",
      image: "/web/ProxiTalent.jpg",
      techno: ["MERN", "Tailwind", "MongoDB"],
      lien: "https://proxitalents-frontend.onrender.com",
      categorie: "Web Application",
    },
    {
      id: 2,
      titre: "Campagne Visuelle – Rentrée Scolaire",
      description:
        "Conception d’une identité visuelle et d’un support de communication pour une campagne à fort impact.",
      image: "/affiche/jfsiscolaire.png",
      techno: ["Canva", "Branding"],
      lien: "https://drive.google.com/file/d/1XzxQQdP9MoobpQMpZtelJtaVS64W0tvP/view?usp=sharing",
      categorie: "Brand Design",
    },
    {
      id: 3,
      titre: "TodoApp Business",
      description:
        "Application de gestion de tâches performante conçue pour améliorer la productivité et la gestion quotidienne.",
      image: "/web/TodoApp.jpg",
      techno: ["React", "Node.js", "MongoDB"],
      lien: "https://todoappnext.onrender.com",
      categorie: "Web Tools",
    },
  ];

  return (
    <section className="relative py-28 bg-[#0e1b2f] overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1b2f] via-[#0f1f36] to-[#0e1b2f]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#cc4b4b]/15 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-[#cc4b4b] text-xs tracking-[0.3em] uppercase font-semibold">
            Nos Réalisations
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Des projets concrets qui reflètent notre expertise digitale
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Nous concevons des solutions digitales modernes, performantes et adaptées aux besoins réels des entreprises.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {projects.map((project) => (
            <a
              key={project.id}
              href={project.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                rounded-2xl bg-white/5 backdrop-blur-md
                border border-white/10
                hover:border-[#cc4b4b]/40
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                transition-all duration-300
              "
            >

              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition" />

                {/* CATEGORY */}
                <span className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-[9px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                  {project.categorie}
                </span>

                {/* ARROW */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#cc4b4b] group-hover:border-[#cc4b4b] transition-all">
                  <FiArrowUpRight size={13} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#cc4b4b] transition">
                  {project.titre}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.techno.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="
              inline-flex items-center gap-2
              bg-[#cc4b4b] text-white px-7 py-3 rounded-full text-xs font-medium
              shadow-[0_10px_30px_rgba(204,75,75,0.25)]
              hover:bg-[#d95454]
              transition-all duration-300 hover:-translate-y-0.5
            "
          >
            Voir toutes nos réalisations
            <FiArrowRight className="text-[10px]" />
          </Link>
        </div>

      </div>
    </section>
  );
}