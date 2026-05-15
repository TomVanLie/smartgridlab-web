import type { Metadata } from 'next'
import cs from '@/i18n/cs'

export const metadata: Metadata = {
  title: cs.meta.title,
  description: cs.meta.description,
  alternates: {
    canonical: 'https://smartgridlab.cz/cs/',
    languages: {
      'cs': 'https://smartgridlab.cz/cs/',
      'en': 'https://smartgridlab.cz/en/',
    },
  },
  openGraph: {
    title: cs.meta.title,
    description: cs.meta.description,
    url: 'https://smartgridlab.cz/cs/',
    siteName: 'SmartGridLab',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export default function CsLayout({ children }: { children: React.ReactNode }) {
  return <html lang="cs"><body>{children}</body></html>
}
