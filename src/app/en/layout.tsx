import type { Metadata } from 'next'
import en from '@/i18n/en'

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: 'https://smartgridlab.cz/en/',
    languages: {
      'cs': 'https://smartgridlab.cz/cs/',
      'en': 'https://smartgridlab.cz/en/',
    },
  },
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    url: 'https://smartgridlab.cz/en/',
    siteName: 'SmartGridLab',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
