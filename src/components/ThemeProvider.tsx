'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'dark' | 'light'

interface ThemeCtxValue {
  theme: Theme
  toggle: () => void
}

const ThemeCtx = createContext<ThemeCtxValue>({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('sgl-theme') as Theme | null
    if (stored === 'dark' || stored === 'light') {
      apply(stored)
      setTheme(stored)
      return
    }
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial: Theme = prefersDark ? 'dark' : 'light'
    apply(initial)
    setTheme(initial)

    // Watch for system changes (only when user hasn't set manual preference)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('sgl-theme')) {
        const t: Theme = e.matches ? 'dark' : 'light'
        apply(t)
        setTheme(t)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('sgl-theme', next)
      apply(next)
      return next
    })
  }, [])

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
}

export const useTheme = () => useContext(ThemeCtx)

function apply(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
}
