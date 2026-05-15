'use client'

import type { Translations } from '@/i18n/cs'

interface Props { t: Translations }

export default function Footer({ t }: Props) {
  return (
    <footer className="border-t border-dim bg-page">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border border-accent/30 flex items-center justify-center">
            <div className="w-2 h-2 bg-accent/40" />
          </div>
          <span className="font-mono text-[0.6rem] tracking-widest text-lo uppercase">
            SMART<span className="text-accent/60">GRID</span>LAB
          </span>
        </div>

        <div className="text-center">
          <p className="font-mono text-[0.6rem] text-lo tracking-wider">{t.footer.copy}</p>
          <p className="font-mono text-[0.55rem] text-lo/60 tracking-wider mt-0.5">{t.footer.tagline}</p>
        </div>

        <div className="font-mono text-[0.55rem] text-lo tracking-widest">smartgridlab.cz</div>
      </div>
    </footer>
  )
}
