"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

export default function TimelineSection() {
  const steps = [
    {
      year: "2026",
      status: "En cours",
      title: "Master 1 en Blockchain",
      institution: "Université Virtuelle de Côte d’Ivoire",
      type: "university",
      icon: <FiBookOpen size={20} />,
      tag: "Cursus Majeur",
      borderHover: "hover:border-[#cc4b4b]/40 hover:shadow-[0_15px_30px_rgba(204,75,75,0.04)]"
    },
    {
      year: "2026",
      status: "En cours",
      title: "Programme SATI du Jeune Idéal",
      institution: "Cohorte 2",
      type: "certification",
      icon: <FiAward size={20} />,
      tag: "Spécialisation",
      borderHover: "hover:border-amber-500/40 hover:shadow-[0_15px_30px_rgba(245,158,11,0.04)]"
    },
    {
      year: "2025",
      status: "Diplômé",
      title: "Licence en Développement d’Applications et E-services",
      institution: "Université Virtuelle de Côte d’Ivoire",
      type: "university",
      icon: <FiBookOpen size={20} />,
      tag: "Cursus Majeur",
      borderHover: "hover:border-[#cc4b4b]/40 hover:shadow-[0_15px_30px_rgba(204,75,75,0.04)]"
    },
    {
      year: "2025",
      status: "Certifié",
      title: "Certification en Développement d’Applications",
      institution: "Direction de l’Apprentissage et de l’Insertion Professionnelle (DAIP)",
      type: "certification",
      icon: <FiAward size={20} />,
      tag: "Spécialisation",
      borderHover: "hover:border-slate-400/50 hover:shadow-[0_15px_30px_rgba(14,27,47,0.04)]"
    },
    {
      year: "2025",
      status: "Certifié",
      title: "Certification Software Developer / Fullstack",
      institution: "GOYMACODE",
      type: "certification",
      icon: <FiAward size={20} />,
      tag: "Spécialisation",
      borderHover: "hover:border-slate-400/50 hover:shadow-[0_15px_30px_rgba(14,27,47,0.04)]"
    },
    {
      year: "2022",
      status: "Obtenu",
      title: "Baccalauréat Série D",
      institution: "Lycée Moderne de Port-Bouët",
      type: "university",
      icon: <FiBookOpen size={20} />,
      tag: "Fondations",
      borderHover: "hover:border-slate-900/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)]"
    }
  ];

  return (
    <section className="relative py-16 px-6 bg-[#f8fafc] text-slate-700 overflow-hidden">
      
      {/* ARRIÈRE-PLAN DESIGN ARCHITECTURAL CLAIR */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Grille technique gris très clair */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />
        
        {/* Voiles de lumière discrets pour donner de la profondeur */}
        <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#cc4b4b]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-slate-300/30 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* EN-TÊTE TYPOGRAPHIQUE PRO */}
        <div className="mb- flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#cc4b4b] uppercase block mb-2">
              // TRAJECTOIRE ACADÉMIQUE
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0e1b2f] tracking-tight uppercase leading-none">
              Parcours <span className="text-slate-400 font-light">&</span> Certifications
            </h2>
          </div>
          <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed uppercase tracking-wider font-mono md:text-right">
            Validation des compétences d'ingénierie et de leadership.
          </p>
        </div>

        {/* COMPOSANTS DE TRAJECTOIRE */}
        <div className="flex flex-col gap-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.03 }}
              viewport={{ once: true, margin: "-40px" }}
              className={`
                group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-6 rounded-xl
                bg-white/80 border border-slate-200/60 backdrop-blur-sm shadow-sm
                transition-all duration-400 ease-out ${step.borderHover}
                hover:-translate-y-0.5
              `}
            >
              
              {/* DATE / STATUT (Colonne gauche stable) */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <span className="text-xl font-black text-[#0e1b2f] tracking-tight group-hover:text-[#cc4b4b] transition-colors duration-200">
                  {step.year}
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  {step.status}
                </span>
              </div>

              {/* CORPUS DES DONNÉES PROFESSIONNELLES */}
              <div className="md:col-span-8 flex flex-col justify-center space-y-1.5 md:pl-6 md:border-l border-slate-100">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${step.type === "university" ? "bg-[#0e1b2f]" : "bg-amber-500"}`} />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {step.tag}
                  </span>
                </div>
                
                {/* TITRE MAJEUR VISIBLE */}
                <h3 className="text-lg font-black text-[#0e1b2f] tracking-tight leading-snug group-hover:text-[#cc4b4b] transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-xs text-slate-400 font-medium">
                  {step.institution}
                </p>
              </div>

              {/* LOGIQUE D'ICÔNE SYSTEMATIQUE */}
              <div className="md:col-span-1 flex items-center md:justify-end">
                <div className={`
                  w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-out
                  ${step.type === "university" 
                    ? "bg-[#0e1b2f] text-white group-hover:bg-[#cc4b4b]" 
                    : "bg-slate-50 text-slate-600 border border-slate-100 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-200"}
                `}>
                  {step.icon}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}