'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { projets, Projet } from '@/data/projets'
import FilterButtons from '@/components/projects/FilterButtons'

export default function Projects() {
  const [filter, setFilter] =
    useState<'all' | 'web' | 'design' | 'video' | 'branding' | 'event'>('all')

  const [selectedProject, setSelectedProject] = useState<Projet | null>(null)

  const filteredProjects =
    filter === 'all'
      ? projets
      : projets.filter(p => p.categorie === filter)

  return (
    <main className="min-h-screen relative text-white overflow-hidden bg-[#0b1220]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 py-20 px-4 max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Nos <span className="text-[#cc4b4b]">réalisations</span>
        </h1>

        {/* FILTER */}
        <div className="flex justify-center mb-12">
          <FilterButtons filter={filter} setFilter={setFilter} />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((p: Projet) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedProject(p)}
            >

              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">

                <Image
                  src={p.image}
                  alt={p.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <div className="flex flex-col items-center gap-2">

                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                      Cliquer pour voir
                    </span>

                    <span className="text-[10px] text-white/60">
                      Vue immersive
                    </span>

                  </div>
                </div>

                {/* BADGE */}
                <div className="absolute top-3 left-3 text-[10px] bg-black/60 px-2 py-1 rounded">
                  {p.categorie}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="font-bold">{p.titre}</h2>
                <p className="text-white/60 text-sm mt-2">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.techno.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-white/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl h-[85vh] bg-[#0e1b2f] rounded-2xl overflow-hidden"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-black/40 z-10">

                <h3 className="text-sm font-semibold">
                  {selectedProject.titre}
                </h3>

                <div className="flex items-center gap-2">

                  {/* OPEN NEW TAB */}
                  {selectedProject.categorie === 'web' && (
                    <a
                      href={selectedProject.lien}
                      target="_blank"
                      className="text-xs px-3 py-1 bg-white text-black rounded"
                    >
                      Ouvrir
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs px-3 py-1 bg-white/10 rounded"
                  >
                    Fermer
                  </button>

                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full h-full pt-12">

                {/* VIDEO */}
                {(selectedProject.categorie === 'video' ||
                  selectedProject.categorie === 'event') ? (
                  <video
                    src={selectedProject.lien}
                    controls
                    className="w-full h-full"
                  />
                ) : (
                  <iframe
                    src={selectedProject.lien}
                    className="w-full h-full"
                  />
                )}

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}