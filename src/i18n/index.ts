import cs from './cs'
import en from './en'
import type { Translations } from './cs'

export const translations: Record<string, Translations> = { cs, en }
export type Lang = 'cs' | 'en'
export { type Translations }

export function getT(lang: Lang): Translations {
  return translations[lang] ?? cs
}

export const LANGS: Lang[] = ['cs', 'en']
export const DEFAULT_LANG: Lang = 'cs'
