'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Translations } from '@/i18n/cs'

const DEVICE_LIST = [
  { label: 'Smart Meter (AMM)', type: 'METER', protocol: 'DLMS/COSEM', status: 'TEST' },
  { label: 'Smart Meter (PLC)', type: 'METER', protocol: 'PLC PRIME/G3', status: 'TEST' },
  { label: 'Data Concentrator', type: 'DCU', protocol: 'DLMS/WAN', status: 'ACTIVE' },
  { label: 'Industrial Switch', type: 'SWITCH', protocol: 'IEC 61850', status: 'ACTIVE' },
  { label: 'SDR Frontend', type: 'SDR', protocol: 'RF / 868 MHz', status: 'ACTIVE' },
  { label: 'Protocol Analyzer', type: 'ANALYZER', protocol: 'Multi-bus', status: 'ACTIVE' },
  { label: 'NB-IoT / LTE-M Tester', type: 'TESTER', protocol: 'NB-IoT / LTE-M', status: 'ACTIVE' },
  { label: 'IDS Sensor Node', type: 'IDS', protocol: 'Ethernet', status: 'MONITOR' },
]

const STATUS_CLASS: Record<string, string> = {
  ACTIVE:  'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
  TEST:    'text-amber-500 bg-amber-500/10 border-amber-500/30',
  MONITOR: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
}

interface Props { t: Translations }

export default function Infrastructure({ t }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const infra = t.infrastructure

  return (
    <section id="infrastructure" className="py-24 relative bg-page">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent uppercase mb-4">{infra.sectionLabel}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-hi mb-4">{infra.title}</h2>
          <p className="text-mid max-w-2xl leading-relaxed">{infra.subtitle}</p>
        </motion.div>

        {/* SCADA-style device registry */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14 border border-dim bg-surface relative"
        >
          <div className="absolute top-0 left-0 w-8 h-px bg-accent" />
          <div className="absolute top-0 left-0 w-px h-8 bg-accent" />
          <div className="absolute bottom-0 right-0 w-8 h-px bg-accent" />
          <div className="absolute bottom-0 right-0 w-px h-8 bg-accent" />

          <div className="px-6 py-3 border-b border-dim flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-accent animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-widest text-accent uppercase">
              LAB DEVICE REGISTRY — LIVE
            </span>
            <span className="font-mono text-[0.6rem] tracking-widest text-lo ml-auto">
              {DEVICE_LIST.length} DEVICES REGISTERED
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dim/50">
                  {['#', 'DEVICE', 'TYPE', 'PROTOCOL', 'STATUS'].map(h => (
                    <th key={h} className="font-mono text-[0.55rem] tracking-widest text-lo uppercase px-6 py-3 text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEVICE_LIST.map((d, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="border-b border-dim/30 hover:bg-raised/50 transition-colors"
                  >
                    <td className="font-mono text-[0.6rem] text-lo px-6 py-3">{String(i+1).padStart(2,'0')}</td>
                    <td className="font-mono text-[0.7rem] text-hi px-6 py-3">{d.label}</td>
                    <td className="font-mono text-[0.6rem] text-mid px-6 py-3">{d.type}</td>
                    <td className="font-mono text-[0.6rem] text-accent/70 px-6 py-3">{d.protocol}</td>
                    <td className="px-6 py-3">
                      <span className={`font-mono text-[0.55rem] tracking-widest px-2 py-0.5 border ${STATUS_CLASS[d.status] ?? ''}`}>
                        {d.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-px bg-dim">
          {infra.categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + ci * 0.1 }}
              className="bg-surface p-7 hover:bg-raised transition-colors"
            >
              <h3 className="font-mono text-[0.75rem] font-semibold text-hi tracking-wide mb-5 uppercase">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 bg-accent/40 flex-shrink-0 block" />
                    <span className="text-sm text-mid leading-snug">{item}</span>
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
