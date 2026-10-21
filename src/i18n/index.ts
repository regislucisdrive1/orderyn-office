// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import id from '@/locales/id.json'

export type MessageSchema = typeof id
export const SUPPORTED_LOCALES = ['en', 'id'] as const
export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

const STORAGE_KEY = 'locale'

function detectLocale(): AppLocale {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && (SUPPORTED_LOCALES as readonly string[]).includes(saved)) {
    return saved as AppLocale
  }
  return navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export const i18n = createI18n<[MessageSchema], AppLocale, false>({
  legacy: false,          // Composition API mode
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, id },
  datetimeFormats: {
    en: { short: { year: 'numeric', month: 'short', day: 'numeric' } },
    id: { short: { year: 'numeric', month: 'short', day: 'numeric' } },
  },
  numberFormats: {
    en: { currency: { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 } },
    id: { currency: { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 } },
  },
})

export function setLocale(locale: AppLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.lang = locale
}

document.documentElement.lang = i18n.global.locale.value
