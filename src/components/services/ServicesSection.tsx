"use client";

import { useEffect, useState } from "react";
import {
  Globe,
  PenTool,
  Megaphone,
  Palette,
  Share2,
  Camera,
  X,
} from "lucide-react";

export default function ServicesSection() {
  const services = [

    {
      icon: Globe,
      title: "Développement Web",
      description:
        "Création de sites et applications performants, rapides et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Sites vitrines & e-commerce",
        "Applications web sur mesure",
        "Performance & SEO",
        "UX moderne responsive",
      ],
    },
    {
      icon: PenTool,
      title: "Identité Visuelle",
      description:
        "Construction d’une identité forte qui donne une vraie personnalité et crédibilité à votre marque.",
      features: [
        "Logo professionnel",
        "Charte graphique",
        "Direction artistique",
        "Positionnement de marque",
      ],
    },
    {
      icon: Megaphone,
      title: "Communication Digitale",
      description:
        "Stratégies digitales pour augmenter votre visibilité et attirer une audience qualifiée.",
      features: [
        "Stratégie contenu",
        "Plan marketing",
        "Croissance audience",
        "Acquisition clients",
      ],
    },
    {
      icon: Palette,
      title: "Design Graphique",
      description:
        "Création de visuels modernes et impactants pour vos campagnes et votre branding.",
      features: [
        "Affiches pro",
        "Contenus réseaux sociaux",
        "Branding visuel",
        "Supports marketing",
      ],
    },
    {
      icon: Share2,
      title: "Réseaux Sociaux",
      description:
        "Gestion et animation de vos réseaux pour développer une communauté engagée.",
      features: [
        "Gestion de pages",
        "Création contenu",
        "Stratégie engagement",
        "Croissance audience",
      ],
    },
    {
      icon: Camera,
      title: "Couverture Événementielle",
      description:
        "Capture photo et vidéo professionnelle pour valoriser vos événements.",
      features: [
        "Photo professionnelle",
        "Vidéo événementielle",
        "Montage",
        "Diffusion digitale",
      ],
    },
  ];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Développement Web",
      description:
        "Création de sites et applications performants, rapides et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Sites vitrines & e-commerce",
        "Applications web sur mesure",
        "Performance & SEO",
        "UX moderne responsive",
      ],
    },
    {
      icon: PenTool,
      title: "Identité Visuelle",
      description:
        "Construction d’une identité forte qui donne une vraie personnalité et crédibilité à votre marque.",
      features: [
        "Logo professionnel",
        "Charte graphique",
        "Direction artistique",
        "Positionnement de marque",
      ],
    },
    {
      icon: Megaphone,
      title: "Communication Digitale",
      description:
        "Stratégies digitales pour augmenter votre visibilité et attirer une audience qualifiée.",
      features: [
        "Stratégie contenu",
        "Plan marketing",
        "Croissance audience",
        "Acquisition clients",
      ],
    },
    {
      icon: Palette,
      title: "Design Graphique",
      description:
        "Création de visuels modernes et impactants pour vos campagnes et votre branding.",
      features: [
        "Affiches pro",
        "Contenus réseaux sociaux",
        "Branding visuel",
        "Supports marketing",
      ],
    },
    {
      icon: Share2,
      title: "Réseaux Sociaux",
      description:
        "Gestion et animation de vos réseaux pour développer une communauté engagée.",
      features: [
        "Gestion de pages",
        "Création contenu",
        "Stratégie engagement",
        "Croissance audience",
      ],
    },
    {
      icon: Camera,
      title: "Couverture Événementielle",
      description:
        "Capture photo et vidéo professionnelle pour valoriser vos événements.",
      features: [
        "Photo professionnelle",
        "Vidéo événementielle",
        "Montage",
        "Diffusion digitale",
      ],
    },
  ];

  return (
    <section className="relative py-28 bg-[#f7f8fc] overflow-hidden">

      {/* BACKGROUND PRO */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0e1b2f_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1b2f]">
            Nos services
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl">
            Des solutions digitales complètes conçues pour la performance, l’image et la croissance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={i}
                onClick={() => setSelected(s)}
                className="
                  group relative cursor-pointer
                  rounded-2xl p-6
                  bg-gradient-to-b from-white to-slate-50
                  border border-slate-200
                  shadow-sm
                  hover:shadow-[0_20px_50px_rgba(14,27,47,0.12)]
                  hover:-translate-y-2
                  transition-all duration-300
                  overflow-hidden
                "
              >

                {/* TOP GLOW LINE */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#cc4b4b] to-transparent opacity-40" />

                {/* ICON BADGE */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-[#cc4b4b]/30 transition">
                    <Icon size={18} className="text-[#0e1b2f] group-hover:text-[#cc4b4b]" />
                  </div>

                  <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                    service
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-[#0e1b2f]">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {s.description}
                </p>

                {/* CTA INDICATOR */}
                <div className="mt-6 flex items-center text-xs text-slate-400 group-hover:text-[#cc4b4b] transition">
                  Voir les détails
                  <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* MODAL PREMIUM */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-6"
          onClick={() => setSelected(null)}
        >

          <div
            className="bg-white max-w-2xl w-full rounded-2xl p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-black"
            >
              <X size={18} />
            </button>

            {/* HEADER MODAL */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#cc4b4b]/10 flex items-center justify-center">
                <selected.icon className="text-[#cc4b4b]" size={20} />
              </div>

              <h3 className="text-2xl font-bold text-[#0e1b2f]">
                {selected.title}
              </h3>
            </div>

            {/* TEXT */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selected.description}
            </p>

            {/* FEATURES */}
            <div className="space-y-3">
              {selected.features.map((f: string, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#cc4b4b]" />
                  <p className="text-sm text-slate-600">{f}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="mt-8 inline-flex w-full justify-center py-3 rounded-xl bg-[#cc4b4b] text-white text-sm font-medium hover:bg-[#d95454] transition"
            >
              Demander un devis
            </a>

          </div>
        </div>
      )}
    </section>
  );
}