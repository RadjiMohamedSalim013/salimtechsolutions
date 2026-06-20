import { FaFilter, FaCode, FaPalette, FaVideo, FaBullhorn } from 'react-icons/fa'

type FilterKey = 'all' | 'web' | 'design' | 'video' | 'branding' | 'event'

type FilterButtonsProps = {
  filter: FilterKey
  setFilter: (value: FilterKey) => void
}

const buttons = [
  { key: 'all', label: 'Tous', icon: FaFilter },
  { key: 'web', label: 'Web', icon: FaCode },
  { key: 'design', label: 'Design', icon: FaPalette },
  { key: 'video', label: 'Vidéo', icon: FaVideo },
  { key: 'branding', label: 'Branding', icon: FaBullhorn },
]

export default function FilterButtons({
  filter,
  setFilter,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">

      {buttons.map((btn) => {
        const Icon = btn.icon
        const active = filter === btn.key

        return (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            className={`
              group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-300 border
              ${
                active
                  ? 'bg-[#cc4b4b] text-white border-[#cc4b4b] shadow-lg scale-105'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }
            `}
          >
            <Icon
              className={`
                text-xs transition-transform duration-300
                ${active ? 'rotate-12' : 'group-hover:scale-110'}
              `}
            />

            {btn.label}
          </button>
        )
      })}
    </div>
  )
}