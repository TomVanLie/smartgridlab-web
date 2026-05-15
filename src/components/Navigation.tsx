'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Translations } from '@/i18n/cs'
import type { Lang } from '@/i18n'
import { useTheme } from './ThemeProvider'

interface Props {
  t: Translations
  lang: Lang
}

const SECTIONS = ['about', 'research', 'infrastructure', 'projects', 'education', 'contact'] as const

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="7" cy="7" r="2.5" />
      <line x1="7" y1="0.5" x2="7" y2="2" />
      <line x1="7" y1="12" x2="7" y2="13.5" />
      <line x1="0.5" y1="7" x2="2" y2="7" />
      <line x1="12" y1="7" x2="13.5" y2="7" />
      <line x1="2.4" y1="2.4" x2="3.4" y2="3.4" />
      <line x1="10.6" y1="10.6" x2="11.6" y2="11.6" />
      <line x1="11.6" y1="2.4" x2="10.6" y2="3.4" />
      <line x1="3.4" y1="10.6" x2="2.4" y2="11.6" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M11 7.5A5 5 0 0 1 5.5 2a5 5 0 1 0 5.5 5.5z" />
    </svg>
  )
}

export default function Navigation({ t, lang }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = () => {
    const next = lang === 'cs' ? 'en' : 'cs'
    localStorage.setItem('sgl-lang', next)
    window.location.href = `/${next}/`
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-page/95 backdrop-blur-md border-b border-dim' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-7 h-7 border border-accent/40 flex items-center justify-center group-hover:border-accent transition-colors">
                <div className="w-3 h-3 bg-accent/50 group-hover:bg-accent transition-colors" />
              </div>
              <div className="absolute -top-px -right-px w-1.5 h-1.5 bg-accent" />
            </div>
            <span className="font-mono text-sm font-semibold tracking-widest text-hi">
              SMART<span className="text-accent">GRID</span>LAB
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="font-mono text-[0.65rem] tracking-widest uppercase px-4 py-2 text-mid hover:text-accent transition-colors relative group"
              >
                {t.nav[s as keyof typeof t.nav]}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 flex items-center justify-center border border-dim hover:border-accent/50 text-mid hover:text-accent transition-all"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Language switcher */}
            <button
              onClick={switchLang}
              className="font-mono text-[0.65rem] tracking-widest border border-dim hover:border-accent/50 text-mid hover:text-accent transition-all px-3 py-1.5"
            >
              {lang === 'cs' ? 'EN' : 'CS'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`block w-5 h-px bg-mid transition-transform ${menuOpen ? 'rotate-45 translate-y-px' : ''}`} />
              <span className={`block w-5 h-px bg-mid transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-mid transition-transform ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-page/98 backdrop-blur-md border-b border-dim md:hidden"
          >
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="w-full text-left font-mono text-[0.7rem] tracking-widest uppercase px-6 py-4 border-b border-dim/50 text-mid hover:text-accent hover:bg-surface transition-colors"
              >
                {t.nav[s as keyof typeof t.nav]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
