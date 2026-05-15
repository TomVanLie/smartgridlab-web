import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware semantic colors (backed by CSS variables)
        page:    'var(--page)',
        surface: 'var(--surface)',
        raised:  'var(--raised)',
        dim:     'var(--dim)',
        bright:  'var(--bright)',
        accent:  'var(--accent)',
        'accent-on': 'var(--accent-on)',
        hi:  'var(--hi)',
        mid: 'var(--mid)',
        lo:  'var(--lo)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'accent-sm': '0 0 8px var(--accent-glow)',
        'accent-md': '0 0 20px var(--accent-glow)',
      },
    },
  },
  plugins: [],
}

export default config
