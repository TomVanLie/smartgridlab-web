'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Translations } from '@/i18n/cs'

interface Props { t: Translations }

export default function Contact({ t }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = t.contact
  const emailDetail = c.details.find(d => d.label === 'Email' || d.label === 'E-mail')

  return (
    <section id="contact" className="py-24 relative bg-surface">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase mb-4">{c.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-hi mb-4">{c.title}</h2>
          <p className="text-mid max-w-2xl leading-relaxed">{c.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="border border-dim bg-page relative p-8">
              <div className="absolute top-0 left-0 w-8 h-px bg-accent" />
              <div className="absolute top-0 left-0 w-px h-8 bg-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-accent" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-accent" />

              {/* Person */}
              <div className="mb-7 pb-6 border-b border-dim">
                <p className="font-mono text-[0.6rem] tracking-widest text-lo uppercase mb-2">{c.person.role}</p>
                <p className="text-hi font-semibold text-lg">{c.person.name}</p>
              </div>

              {/* Details */}
              <div className="space-y-5">
                {c.details.map((d, i) => (
                  <div key={i} className="grid grid-cols-[110px_1fr] gap-4 items-start">
                    <span className="font-mono text-[0.6rem] tracking-widest text-lo uppercase pt-0.5">{d.label}</span>
                    {d.label === 'Email' || d.label === 'E-mail' ? (
                      <a href={`mailto:${d.value}`} className="font-mono text-[0.8rem] text-accent hover:text-hi transition-colors">
                        {d.value}
                      </a>
                    ) : d.label === 'Telefon' || d.label === 'Phone' ? (
                      <a href={`tel:${d.value.replace(/\s/g,'')}`} className="font-mono text-[0.8rem] text-mid hover:text-accent transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <span className="text-sm text-hi leading-relaxed">{d.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-dim">
                <a
                  href={`mailto:${emailDetail?.value ?? 'mlynek@vut.cz'}`}
                  className="group inline-flex items-center gap-3 px-7 py-3 bg-accent text-accent-on font-mono text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
                >
                  {c.cta}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Invitation + network graphic */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col justify-center"
          >
            <p className="font-mono text-[0.6rem] tracking-widest text-lo uppercase mb-4">
              COLLABORATION INVITATION
            </p>
            <p className="text-mid leading-relaxed mb-8">{c.invitation}</p>

            {/* Decorative topology */}
            <svg viewBox="0 0 300 150" fill="none" className="w-full max-w-sm opacity-25">
              <circle cx="150" cy="75" r="14" stroke="currentColor" strokeWidth="1" className="text-accent" />
              <circle cx="50" cy="35" r="7" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
              <circle cx="250" cy="35" r="7" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
              <circle cx="50" cy="115" r="7" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
              <circle cx="250" cy="115" r="7" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
              <circle cx="150" cy="20" r="4" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
              <circle cx="150" cy="130" r="4" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
              <line x1="57" y1="38" x2="136" y2="68" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <line x1="243" y1="38" x2="164" y2="68" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <line x1="57" y1="112" x2="136" y2="82" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <line x1="243" y1="112" x2="164" y2="82" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <line x1="150" y1="24" x2="150" y2="61" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <line x1="150" y1="89" x2="150" y2="126" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <circle cx="150" cy="75" r="24" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" className="text-accent" />
            </svg>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Energetické společnosti', 'Výrobci AMI', 'Výzkumné instituce', 'Studenti', 'Průmysloví partneři'].map(tag => (
                <span key={tag} className="font-mono text-[0.6rem] tracking-wider border border-dim text-lo px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
