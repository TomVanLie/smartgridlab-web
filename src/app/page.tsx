'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('sgl-lang')
    if (stored === 'en' || stored === 'cs') {
      router.replace(`/${stored}/`)
      return
    }
    const lang = navigator.language?.toLowerCase() ?? ''
    const isCsSk = lang.startsWith('cs') || lang.startsWith('sk')
    router.replace(isCsSk ? '/cs/' : '/en/')
  }, [router])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#040810',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.75rem',
          color: '#00c8ff',
          letterSpacing: '0.1em',
        }}
      >
        INITIALIZING...
      </div>
    </div>
  )
}
