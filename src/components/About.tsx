'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Translations } from '@/i18n/cs'

interface Props { t: Translations }

export default function About({ t }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const a = t.about

  return (
    <section id="about" className="py-24 relative bg-page">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase mb-4">{a.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-hi max-w-3xl leading-tight">{a.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-mid leading-relaxed mb-6"
            >
              {a.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-mid leading-relaxed"
            >
              {a.description2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-px bg-dim"
            >
              {a.stats.map((s, i) => (
                <div key={i} className="bg-surface p-5">
                  <div className="font-mono text-xl font-bold text-accent mb-1">{s.value}</div>
                  <div className="font-mono text-[0.6rem] text-lo tracking-widest uppercase leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-mono text-[0.6rem] tracking-widest text-lo uppercase mb-5">RESEARCH FOCUS</p>
            <div className="flex flex-wrap gap-2">
              {a.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="font-mono text-[0.65rem] tracking-wider border border-dim hover:border-accent/40 text-mid hover:text-accent px-3 py-1.5 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 p-5 border border-dim relative bg-surface">
              <div className="absolute top-0 left-0 w-3 h-px bg-accent" />
              <div className="absolute top-0 left-0 w-px h-3 bg-accent" />
              <div className="absolute bottom-0 right-0 w-3 h-px bg-accent" />
              <div className="absolute bottom-0 right-0 w-px h-3 bg-accent" />
              <p className="font-mono text-[0.6rem] text-lo tracking-widest uppercase mb-3">AFFILIATION</p>
              <p className="font-mono text-[0.75rem] text-hi leading-relaxed">
                Vysoké učení technické v Brně<br />
                <span className="text-mid">Fakulta elektrotechniky a komunikačních technologií</span><br />
                <span className="text-accent">Ústav telekomunikací</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
