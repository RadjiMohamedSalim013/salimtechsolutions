"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      id: "linkedin",
      icon: <FaLinkedinIn size={14} />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      id: "facebook",
      icon: <FaFacebookF size={14} />,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      id: "tiktok",
      icon: <FaTiktok size={14} />,
      url: "https://tiktok.com",
      label: "TikTok",
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-slate-800 bg-[#0e1b2f] text-slate-400 overflow-hidden">

      {/* STRUCTURE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[10%] top-0 w-px h-full bg-slate-700" />
        <div className="absolute right-[12%] top-0 w-px h-full bg-slate-700" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* BRAND */}
          <div className="flex flex-col max-w-sm">

            {/* LOGO AREA (NEW) */}
            <div className="flex items-center gap-3 mb-3">

              {/* LOGO PLACEHOLDER */}
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">
                S
              </div>

              <div>
                <p className="text-white text-sm font-semibold tracking-wide">
                  SALIM<span className="text-white/50">TECH</span>
                </p>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">
                  Agence digitale
                </p>
              </div>
            </div>

            {/* DESCRIPTION (COPYWRITING AGENCE) */}
            <p className="text-[11px] text-slate-500 leading-relaxed mb-5">
              Nous concevons des solutions digitales modernes et performantes :
              sites web, identité visuelle et communication digitale.
              Notre objectif est d’aider les marques à grandir et à se démarquer en ligne.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    w-8 h-8 rounded-lg bg-slate-800/40 border border-slate-800
                    flex items-center justify-center text-slate-400
                    transition-all duration-200
                    hover:text-white hover:border-[#cc4b4b]/40 hover:bg-[#cc4b4b]/10
                    hover:-translate-y-0.5
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider">

            <Link href="/" className="hover:text-white transition">
              Accueil
            </Link>

            <Link href="/about" className="hover:text-white transition">
              À propos
            </Link>

            <Link href="/projects" className="hover:text-white transition">
              Réalisations
            </Link>

            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>

          </nav>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-slate-800" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[10px] tracking-wider text-slate-500">

          <p>
            © {new Date().getFullYear()} SALIMTECH. Tous droits réservés.
          </p>

          <p className="flex items-center gap-2 sm:justify-end">
            <span>Agence digitale</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <span>Création web & branding</span>
          </p>

        </div>
      </div>

      {/* TOP ACCENT */}
      <div className="absolute top-0 left-[10%] w-16 h-[2px] bg-[#cc4b4b]" />
    </footer>
  );
}