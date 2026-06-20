"use client";

import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";



export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((r) => setTimeout(r, 1200));

      setSuccess(true);
      setFormData({ nom: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 bg-[#0b1220] overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#cc4b4b]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-[#cc4b4b] uppercase font-semibold">
            SALIMTECH SOLUTIONS
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Contactez une agence digitale à Abidjan
          </h1>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm">
            Besoin d’un développement web, d’une création site web professionnel ou d’une identité visuelle ? Écrivez-nous : SALIMTECH Solutions à Abidjan (Côte d’Ivoire).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">
              Informations
            </h2>

            <div className="space-y-5 text-white/70 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#cc4b4b]" />
                Abidjan, Côte d’Ivoire
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#cc4b4b]" />
                radjimohamed013@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-[#cc4b4b]" />
                +225 07 58 91 38 73
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Lien social"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#cc4b4b]/40 transition cursor-pointer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">
              Envoyer un message
            </h2>

            {success ? (
              <div className="text-center text-white/80 py-10">
                <p className="text-green-400">Message envoyé ✔</p>
                <p className="text-sm text-white/60 mt-2">
                  Nous vous répondons rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  aria-label="Votre nom"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#cc4b4b]"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  aria-label="Votre email"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#cc4b4b]"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={5}
                  aria-label="Votre message"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#cc4b4b]"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#cc4b4b] hover:bg-[#d95454] text-white text-sm font-medium py-3 rounded-xl transition"
                  aria-label="Envoyer le message"
                >
                  <FaPaperPlane size={12} />
                  {isSubmitting ? "Envoi..." : "Envoyer"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

