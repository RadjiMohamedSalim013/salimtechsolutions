"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Nos Services" },
    { href: "/projects", label: "Réalisations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-4">
      {/* NAV CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 w-full">
        <nav
          className={`
            flex items-center justify-between
            rounded-full px-6 py-2.5
            border transition-all duration-300
            ${
              scrolled
                ? "bg-[#0e1b2f]/70 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                : "bg-[#0e1b2f]/30 border-white/[0.04] backdrop-blur-md"
            }
          `}
        >
          {/* LOGO SALIMTECH */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="
                w-8 h-8 rounded-lg
                bg-[#0e1b2f] border border-white/10
                flex items-center justify-center
                text-[#cc4b4b] text-base font-bold
                transition-all duration-300
                group-hover:border-[#cc4b4b]/40 group-hover:shadow-[0_0_12px_rgba(204,75,75,0.2)]
              "
            >
              S
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider text-white">
                SALIM<span className="text-white/50 font-normal">TECH</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-medium -mt-0.5">
                Solutions
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.04] rounded-full p-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      px-4 py-1.5 rounded-full text-xs font-medium tracking-wide
                      transition-all duration-200 block relative
                      ${
                        isActive
                          ? "text-white bg-white/10 shadow-[0_2px_8px_rgba(255,255,255,0.05)]"
                          : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT ACTION CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="
                text-xs font-medium px-4 py-2 rounded-full
                bg-[#cc4b4b] text-white
                hover:bg-[#d95454] transition-all duration-200
                shadow-[0_4px_12px_rgba(204,75,75,0.15)]
                hover:shadow-[0_4px_20px_rgba(204,75,75,0.3)]
                hover:scale-[1.02] active:scale-[0.98]
              "
            >
              Demander un devis
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="
              md:hidden flex flex-col justify-center items-center w-7 h-7 rounded-full
              bg-white/5 hover:bg-white/10 border border-white/10
              transition-all duration-200 text-white
            "
          >
            <span
              className={`h-0.5 w-3.5 bg-white rounded-full transition-transform duration-200 ${
                isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-0.5"
              }`}
            />
            <span
              className={`h-0.5 w-3.5 bg-white rounded-full transition-transform duration-200 ${
                isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"
              }`}
            />
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden px-4 mt-2 transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div
          className="
            bg-[#0e1b2f]/90 backdrop-blur-2xl
            border border-white/10
            rounded-2xl p-2
            shadow-[0_12px_40px_rgba(0,0,0,0.5)]
          "
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center justify-between
                  px-4 py-2.5 rounded-xl
                  text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-[#cc4b4b] shadow-[0_0_8px_#cc4b4b]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}