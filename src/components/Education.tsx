'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Translations } from '@/i18n/cs'

interface Props { t: Translations }

export default function Education({ t }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const e = t.education

  return (
    <section id="education" className="py-24 relative bg-page">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase mb-4">{e.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-hi mb-4">{e.title}</h2>
          <p className="text-mid max-w-2xl leading-relaxed">{e.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-dim">
          {e.pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-surface p-8 relative group hover:bg-raised transition-colors"
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />

              <div className="mb-4 font-mono text-[0.6rem] tracking-widest text-accent uppercase">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-mono text-[0.75rem] font-semibold text-hi tracking-wide uppercase mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-mid leading-relaxed mb-6">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3">
                    <span className="font-mono text-[0.55rem] text-accent/60 mt-0.5 flex-shrink-0">›</span>
                    <span className="text-sm text-mid">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
