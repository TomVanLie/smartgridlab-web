'use client'

import type { Translations } from '@/i18n/cs'
import type { Lang } from '@/i18n'
import { ThemeProvider } from './ThemeProvider'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Research from './Research'
import Infrastructure from './Infrastructure'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'

interface Props {
  t: Translations
  lang: Lang
}

export default function HomePage({ t, lang }: Props) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-page">
        <div className="scanline" aria-hidden="true" />
        <Navigation t={t} lang={lang} />
        <main>
          <Hero t={t} />
          <About t={t} />
          <Research t={t} />
          <Infrastructure t={t} />
          <Projects t={t} />
          <Education t={t} />
          <Contact t={t} />
        </main>
        <Footer t={t} />
      </div>
    </ThemeProvider>
  )
}
