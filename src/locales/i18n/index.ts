import { createI18n } from 'vue-i18n'
import { messages } from './messages'

export type LanguageCode = 'en'

export const i18n = createI18n({
  legacy: false,
  // globalInjection: true,
  locale: 'en',
  messages,
})

export function setLanguage(langCode: string): string | undefined {
  const availableLocales = i18n.global.availableLocales as string[]

  if (availableLocales.includes(langCode)) {
    i18n.global.locale.value = langCode as LanguageCode
    console.log(`Set language as ${langCode}`)
    return langCode
  }

  const shortCode = langCode.split('-')[0]
  if (availableLocales.includes(shortCode)) {
    i18n.global.locale.value = shortCode as LanguageCode
    console.log(`Set language as ${langCode}`)
    return langCode
  }

  console.error(`${langCode} is not available in i18n, valid options: ${i18n.global.availableLocales.join(', ')}`)
}
