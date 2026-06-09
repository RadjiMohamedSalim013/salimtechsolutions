'use client'

import { motion } from 'framer-motion'

const initiatives = [
  {
    title: 'EspritTIC',
    description: 'Promotion des technologies de l\'information et structuration de communautés technologiques locales.',
    link: 'https://www.facebook.com/profile.php?id=61567946667611'
  },
  {
    title: 'EspritEntrepreneurial',
    description: 'Incubation, mentorat et mise en relation des entrepreneurs pour le développement économique.',
    link: 'https://www.facebook.com/profile.php?id=61568523742249'
  }
]

export default function InitiativesSection() {
  return (
    <section className="py-32 px-6 bg-white text-[#0e1b2f]">
      <div className="max-w-4xl mx-auto">
        
        {/* TITRE DE SECTION MINIMALISTE */}
        <div className="mb-24">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#cc4b4b] mb-4">
            Projets & Engagements
          </h2>
          <p className="text-4xl md:text-5xl font-light tracking-tight text-[#0e1b2f]">
            Développement d'écosystèmes <br />
            <span className="font-bold">collaboratifs.</span>
          </p>
        </div>

        {/* LISTE TYPOGRAPHIQUE (Zéro bordure, zéro carte) */}
        <div className="space-y-16">
          {initiatives.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-start gap-8"
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-500 mb-4 leading-relaxed max-w-md">
                  {item.description}
                </p>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc4b4b] text-sm font-bold uppercase tracking-widest hover:underline underline-offset-8"
                >
                  Accéder au projet
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER CTA MINIMALISTE */}
        <div className="mt-32 pt-16 border-t border-slate-100 text-center">
          <a 
            href="/contact" 
            className="text-sm font-bold uppercase tracking-widest hover:text-[#cc4b4b] transition-colors"
          >
            Collaborer avec nous →
          </a>
        </div>

      </div>
    </section>
  )
}