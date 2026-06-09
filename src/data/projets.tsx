export type Projet = {
  id: number;
  titre: string;
  description: string;
  image: string;
  techno: string[];
  lien: string;
  categorie: "web" | "design" | "video" | "branding" | "event";
};

export const projets: Projet[] = [
  {
    id: 1,
    titre: "ProxiTalents",
    description:
      "Plateforme de mise en relation entre talents et entreprises avec un système de matching intelligent.",
    image: "/web/ProxiTalent.jpg",
    techno: ["MERN", "Tailwind", "MongoDB"],
    lien: "https://proxitalents-frontend.onrender.com",
    categorie: "web",
  },

  {
    id: 2,
    titre: "Affiche Rentrée Scolaire",
    description:
      "Création d’une affiche professionnelle pour une campagne de rentrée scolaire 2024-2025.",
    image: "/affiche/jfsiscolaire.png",
    techno: ["Canva", "Branding"],
    lien:
      "https://drive.google.com/file/d/1XzxQQdP9MoobpQMpZtelJtaVS64W0tvP/view?usp=sharing",
    categorie: "design",
  },

  {
    id: 3,
    titre: "TodoApp Business",
    description:
      "Application de gestion de tâches moderne avec interface fluide et réactive.",
    image: "/web/TodoApp.jpg",
    techno: ["React", "Node.js", "MongoDB"],
    lien: "https://todoappnext.onrender.com",
    categorie: "web",
  },

  {
    id: 4,
    titre: "HorairesApp",
    description:
      "Application web de gestion d’accès basée sur les horaires de travail.",
    image: "/web/HorrairesApp.jpg",
    techno: ["Node.js", "Express"],
    lien: "https://web-app-horaires.onrender.com/",
    categorie: "web",
  },

  {
    id: 5,
    titre: "Campagne Salubrité & Recyclage",
    description:
      "Conception d’une affiche de sensibilisation pour un projet de recyclage urbain.",
    image: "/affiche/psr.png",
    techno: ["Canva", "ChatGPT"],
    lien:
      "https://drive.google.com/file/d/1L7iu86HLRrIWgcoRoOyL00cZSpJoB4Gz/view?usp=sharing",
    categorie: "design",
  },

  {
    id: 6,
    titre: "Mini Calculatrice Web",
    description:
      "Application web simple de calcul avec interface intuitive et rapide.",
    image: "/web/MiniCalculatrice.jpg",
    techno: ["HTML", "Tailwind", "JavaScript"],
    lien: "https://mini-calculatrice.vercel.app/",
    categorie: "web",
  },

  // 🟦 NOUVEAUX PROJETS (AGENCE)

  {
    id: 7,
    titre: "Identité Visuelle SALIMTECH",
    description:
      "Création complète de l’identité visuelle de l’agence SALIMTECH SOLUTIONS.",
    image: "/branding/salimtech-brand.jpg",
    techno: ["Illustrator", "Figma", "Branding"],
    lien: "#",
    categorie: "branding",
  },

  {
    id: 8,
    titre: "Campagne Réseaux Sociaux - Launch",
    description:
      "Stratégie de communication digitale et contenus pour lancement de projet.",
    image: "/design/social-campaign.jpg",
    techno: ["Canva", "Social Media", "Content Strategy"],
    lien: "#",
    categorie: "design",
  },

  {
    id: 9,
    titre: "After Movie Événement Corporate",
    description:
      "Vidéo professionnelle de couverture événementielle avec montage dynamique.",
    image: "/video/event-cover.jpg",
    techno: ["Premiere Pro", "After Effects", "Filming"],
    lien: "#",
    categorie: "event",
  },

  {
    id: 10,
    titre: "After Movie Conférence Digitale",
    description:
      "Production vidéo complète d’un événement digital avec storytelling visuel.",
    image: "/video/conference-video.jpg",
    techno: ["Video Editing", "Motion Design"],
    lien: "#",
    categorie: "event",
  },

  {
    id: 11,
    titre: "Landing Page Startup SaaS",
    description:
      "Conception d’une landing page optimisée pour conversion client.",
    image: "/web/saas-landing.jpg",
    techno: ["Next.js", "Tailwind", "UI/UX"],
    lien: "#",
    categorie: "web",
  },
]; 