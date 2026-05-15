'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Translations } from '@/i18n/cs'

// Technical SVG icons per research area
const ICONS: Record<string, React.FC<{ className?: string }>> = {
  'meter-security': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="8" width="28" height="24" stroke="currentColor" strokeWidth="1" />
      <line x1="6" y1="16" x2="34" y2="16" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      <circle cx="20" cy="24" r="3" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="8" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 20 L17 24 L20 21 L23 26 L26 20" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  ),
  'ami-comm': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="14" width="32" height="12" stroke="currentColor" strokeWidth="0.8" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 2" />
      <rect x="8" y="16" width="4" height="4" fill="currentColor" fillOpacity="0.4" />
      <rect x="14" y="16" width="6" height="4" fill="currentColor" fillOpacity="0.2" />
      <rect x="22" y="16" width="3" height="4" fill="currentColor" fillOpacity="0.4" />
      <rect x="27" y="16" width="5" height="4" fill="currentColor" fillOpacity="0.2" />
      <circle cx="4" cy="20" r="1.5" fill="currentColor" />
      <circle cx="36" cy="20" r="1.5" fill="currentColor" />
      <path d="M20 6 Q26 10 26 14" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M20 6 Q14 10 14 14" stroke="currentColor" strokeWidth="0.6" fill="none" />
    </svg>
  ),
  'grid-security': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="32" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="32" r="2" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="8" x2="17" y2="17" stroke="currentColor" strokeWidth="0.7" />
      <line x1="30" y1="8" x2="23" y2="17" stroke="currentColor" strokeWidth="0.7" />
      <line x1="10" y1="32" x2="17" y2="23" stroke="currentColor" strokeWidth="0.7" />
      <line x1="30" y1="32" x2="23" y2="23" stroke="currentColor" strokeWidth="0.7" />
      <path d="M20 4 L23 10 L20 9 L17 10 Z" stroke="currentColor" strokeWidth="0.7" fill="none" />
    </svg>
  ),
  'dynamic-models': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="24" stroke="currentColor" strokeWidth="0.8" />
      <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="0.5" />
      <path d="M7 22 L11 18 L15 21 L19 16 L23 20 L27 17 L33 22" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="11" cy="18" r="1" fill="currentColor" />
      <circle cx="19" cy="16" r="1" fill="currentColor" />
      <circle cx="27" cy="17" r="1" fill="currentColor" />
      <rect x="7" y="10" width="4" height="2" fill="currentColor" fillOpacity="0.3" />
      <rect x="13" y="10" width="3" height="2" fill="currentColor" fillOpacity="0.6" />
    </svg>
  ),
  'energy-monitoring': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="10" width="28" height="20" stroke="currentColor" strokeWidth="0.8" />
      <line x1="6" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
      <path d="M10 26 L14 22 L18 24 L22 19 L26 23 L30 20" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <rect x="8" y="12" width="3" height="4" fill="currentColor" fillOpacity="0.5" />
      <rect x="13" y="13" width="3" height="3" fill="currentColor" fillOpacity="0.3" />
      <rect x="18" y="11" width="3" height="5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="30" cy="20" r="1.2" fill="currentColor" />
    </svg>
  ),
  'protocol-analysis': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="10" width="32" height="20" stroke="currentColor" strokeWidth="0.8" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
      <rect x="8" y="12" width="5" height="6" fill="currentColor" fillOpacity="0.35" />
      <rect x="15" y="14" width="3" height="4" fill="currentColor" fillOpacity="0.25" />
      <rect x="20" y="12" width="7" height="6" fill="currentColor" fillOpacity="0.4" />
      <rect x="8" y="22" width="3" height="5" fill="currentColor" fillOpacity="0.2" />
      <rect x="13" y="22" width="8" height="5" fill="currentColor" fillOpacity="0.35" />
      <rect x="23" y="22" width="4" height="5" fill="currentColor" fillOpacity="0.25" />
    </svg>
  ),
  'distributed-energy': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="32" cy="12" r="2.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="8" cy="28" r="2.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="32" cy="28" r="2.5" stroke="currentColor" strokeWidth="0.8" />
      <line x1="10.5" y1="13.5" x2="15" y2="16.5" stroke="currentColor" strokeWidth="0.8" />
      <line x1="29.5" y1="13.5" x2="25" y2="16.5" stroke="currentColor" strokeWidth="0.8" />
      <line x1="10.5" y1="26.5" x2="15" y2="23.5" stroke="currentColor" strokeWidth="0.8" />
      <line x1="29.5" y1="26.5" x2="25" y2="23.5" stroke="currentColor" strokeWidth="0.8" />
      <path d="M18 17 L21 20 L18 23" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  ),
  'comm-testing': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="12" y="14" width="16" height="12" stroke="currentColor" strokeWidth="0.8" />
      <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 1" />
      <path d="M20 8 Q26 11 26 14" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M20 8 Q14 11 14 14" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M20 5 Q29 9 29 14" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="1.5 1" />
      <path d="M20 5 Q11 9 11 14" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="1.5 1" />
      <line x1="20" y1="26" x2="20" y2="32" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
  'resilience': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M20 10 L30 15 L30 25 L20 30 L10 25 L10 15 Z" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 1" />
      <path d="M15 20 L18 23 L25 16" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  ),
}

interface Props { t: Translations }

export default function Research({ t }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const r = t.research

  return (
    <section id="research" className="py-24 relative bg-surface">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase mb-4">{r.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-hi mb-4">{r.title}</h2>
          <p className="text-mid max-w-2xl leading-relaxed">{r.subtitle}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dim">
          {r.areas.map((area, i) => {
            const Icon = ICONS[area.id]
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="group bg-surface p-7 relative hover:bg-raised transition-colors cursor-default"
              >
                {/* Corner accents on hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-accent group-hover:w-8 transition-all duration-300" />
                <div className="absolute top-0 left-0 w-px h-0 bg-accent group-hover:h-8 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-0 h-px bg-accent group-hover:w-8 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-px h-0 bg-accent group-hover:h-8 transition-all duration-300" />

                <div className="mb-5">
                  {Icon && <Icon className="w-10 h-10 text-accent/40 group-hover:text-accent/70 transition-colors" />}
                </div>
                <h3 className="font-mono text-[0.8rem] font-semibold text-hi tracking-wide mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-mid text-sm leading-relaxed mb-5">{area.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map(tag => (
                    <span key={tag} className="font-mono text-[0.55rem] tracking-wider text-lo border border-dim px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
