'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Translations } from '@/i18n/cs'

const STATUS_STYLE: Record<string, string> = {
  'AKTIVNÍ':   'text-emerald-500 border-emerald-500/40 bg-emerald-500/8',
  'ACTIVE':    'text-emerald-500 border-emerald-500/40 bg-emerald-500/8',
  'PRŮBĚŽNÝ':  'text-amber-500 border-amber-500/40 bg-amber-500/8',
  'ONGOING':   'text-amber-500 border-amber-500/40 bg-amber-500/8',
  'DOKONČEN':  'text-mid border-dim bg-raised',
  'COMPLETED': 'text-mid border-dim bg-raised',
  'VÝZKUM':    'text-accent border-accent/30 bg-accent/8',
  'RESEARCH':  'text-accent border-accent/30 bg-accent/8',
}

interface Props { t: Translations }

export default function Projects({ t }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const p = t.projects

  return (
    <section id="projects" className="py-24 relative bg-surface">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase mb-4">{p.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-hi mb-4">{p.title}</h2>
          <p className="text-mid max-w-2xl leading-relaxed">{p.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-dim">
          {p.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-surface p-7 relative group hover:bg-raised transition-colors"
            >
              <div className="absolute top-0 left-0 w-5 h-px bg-accent/40 group-hover:bg-accent transition-colors" />
              <div className="absolute top-0 left-0 w-px h-5 bg-accent/40 group-hover:bg-accent transition-colors" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="font-mono text-[0.55rem] text-lo">{String(i+1).padStart(2,'0')}.</span>
                <span className={`font-mono text-[0.55rem] tracking-widest border px-2 py-0.5 ${STATUS_STYLE[item.status] ?? 'text-lo border-dim'}`}>
                  {item.status}
                </span>
              </div>

              <h3 className="font-mono text-[0.8rem] font-semibold text-hi leading-snug mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-mid leading-relaxed mb-5">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map(tag => (
                  <span key={tag} className="font-mono text-[0.55rem] tracking-wider border border-dim text-lo px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
