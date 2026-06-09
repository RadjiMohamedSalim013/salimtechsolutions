'use client'
import { motion } from 'framer-motion'
import skillsCategories, { SkillCategory } from '@/data/skillsData'

export default function SkillsSection() {
  return (
    <section className="relative py-12 px-6 bg-[#0e1b2f] text-slate-400 overflow-hidden font-sans">
      
      {/* STRUCTURE D'ARRIÈRE-PLAN : INGÉNIERIE & GÉOMÉTRIE TECHNIQUE */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        {/* Grille technique fine de couleur ardoise claire */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Repères angulaires de visée aux quatre coins du conteneur principal */}
        <div className="absolute top-12 left-12 w-6 h-6 border-t-2 border-l-2 border-slate-500/30" />
        <div className="absolute top-12 right-12 w-6 h-6 border-t-2 border-r-2 border-slate-500/30" />
        <div className="absolute bottom-12 left-12 w-6 h-6 border-b-2 border-l-2 border-slate-500/30" />
        <div className="absolute bottom-12 right-12 w-6 h-6 border-b-2 border-r-2 border-slate-500/30" />

        {/* Halo de fusion très discret en périphérie */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cc4b4b]/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* EN-TÊTE CONSOLE DE CONCEPTION */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-800 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#cc4b4b] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-slate-500 uppercase">
                [ SYSTEM_CORE_STACK ]
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Compétences <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cc4b4b] to-rose-400 font-serif lowercase italic font-light">Matière.</span>
            </h2>
          </div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 space-y-1 md:text-right">
            <div>// LANGAGES & PROTOCOLES : OK</div>
            <div>// ARCHITECTURE DE SÉCURITÉ : OK</div>
          </div>
        </div>

        {/* LOGIQUE DE GRILLE DE MODULES EN VERRE SOMBRE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category: SkillCategory, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
              className="
                group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80
                backdrop-blur-md transition-all duration-500 ease-out
                hover:bg-slate-900/80 hover:border-[#cc4b4b]/30
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.3),0_0_30px_rgba(204,75,75,0.02)]
                hover:-translate-y-1
              "
            >
              {/* VOYANT TECH DISCRET SUR CHAQUE MODULE */}
              <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-600 group-hover:text-[#cc4b4b] transition-colors duration-300">
                // MOD_{index + 1}
              </div>

              {/* COMMUTATEUR D'ICÔNE (Lumière Interne au survol) */}
              <div className="flex items-center mb-8">
                <div className="
                  w-12 h-12 rounded-xl bg-slate-950 text-slate-400 border border-slate-800/80
                  flex items-center justify-center transition-all duration-500 ease-out
                  group-hover:bg-[#cc4b4b] group-hover:text-white group-hover:border-[#cc4b4b]
                  group-hover:shadow-[0_0_20px_rgba(204,75,75,0.3)] group-hover:-rotate-6
                ">
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-black text-white tracking-tight ml-4 group-hover:text-[#cc4b4b] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* ALIGNEMENT DES COMMUTATEURS DE COMPÉTENCES (Badges) */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="
                      bg-slate-950/60 text-slate-400 px-3 py-1.5 rounded-xl text-xs font-bold tracking-tight
                      border border-slate-900 shadow-inner transition-all duration-300 ease-out
                      group-hover:border-slate-800 group-hover:text-slate-200
                      hover:!bg-[#0e1b2f] hover:!text-white hover:!border-[#cc4b4b]/40
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}