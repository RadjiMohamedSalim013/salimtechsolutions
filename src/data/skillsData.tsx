import { ReactElement } from 'react'
import { FaCode, FaPalette, FaRobot, FaServer, FaFolderOpen } from 'react-icons/fa'

export type SkillCategory = {
  title: string
  icon: ReactElement
  skills: string[]
  type: 'dev' | 'design' | 'ia' | 'office' // On catégorise proprement pour le composant
}

const skillsCategories: SkillCategory[] = [
  { 
    title: 'Développement Frontend', 
    icon: <FaCode size={20} />,
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
    type: 'dev'
  },
  { 
    title: 'Développement Backend', 
    icon: <FaServer size={20} />, // Icône dédiée au serveur pour casser le doublon Frontend
    skills: ['Node.js', 'Express', 'Flask', 'MongoDB'],
    type: 'dev'
  },
  { 
    title: 'Design & UI', 
    icon: <FaPalette size={20} />,
    skills: ['Figma', 'Canva'],
    type: 'design'
  },
  { 
    title: 'Intelligence Artificielle', 
    icon: <FaRobot size={20} />,
    skills: ['ChatGPT', 'DeepSeek', 'Gemini', 'Prompt Engineering'],
    type: 'ia'
  },
  { 
    title: 'Bureautique', 
    icon: <FaFolderOpen size={20} />, // Plus pro que FaLightbulb pour de la bureautique
    skills: ['Word', 'Excel'],
    type: 'office'
  }
]

export default skillsCategories