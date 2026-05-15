'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import type { Translations } from '@/i18n/cs'
import { useTheme } from './ThemeProvider'

const GridAnimation = dynamic(() => import('./GridAnimation'), { ssr: false })

interface Props { t: Translations }

export default function Hero({ t }: Props) {
  const { theme } = useTheme()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-page">
      <GridAnimation theme={theme} />

      {/* Radial fade to page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--page) 100%)' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Status bar */}
      <div className="absolute top-20 left-6 right-6 flex items-center justify-between pointer-events-none">
        <div className="hidden lg:flex items-center gap-6">
          {t.hero.statusItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-accent animate-pulse-slow block" />
              <span className="font-mono text-[0.6rem] text-lo tracking-widest uppercase">{item.label}</span>
              <span className="font-mono text-[0.6rem] text-accent tracking-widest">{item.value}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:block font-mono text-[0.6rem] text-lo tracking-widest"
        >
          SYS://AMI.SECURITY.RESEARCH/v2.4.1
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="w-4 h-px bg-accent" />
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase">
            {t.hero.label}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-hi leading-[1.1] tracking-tight max-w-4xl mb-6"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base md:text-lg text-mid max-w-2xl leading-relaxed mb-12"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo('research')}
            className="px-7 py-3 bg-accent text-accent-on font-mono text-xs tracking-widest uppercase font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
          >
            {t.hero.ctaResearch}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3 border border-dim hover:border-accent/50 text-mid hover:text-hi font-mono text-xs tracking-widest uppercase transition-all"
          >
            {t.hero.ctaContact}
          </button>
        </motion.div>

        {/* Protocol tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 flex flex-wrap gap-x-6 gap-y-2"
        >
          {['IEC 61850', 'DLMS/COSEM', 'DNP3', 'Modbus TCP', 'IEC 62351', 'M-Bus', 'NB-IoT', 'PLC (PRIME/G3)', 'LTE-M'].map(p => (
            <span key={p} className="font-mono text-[0.55rem] tracking-widest text-lo uppercase">{p}</span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--page), transparent)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.55rem] tracking-widest text-lo uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
