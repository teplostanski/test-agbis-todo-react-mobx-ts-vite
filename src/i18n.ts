import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from '../public/locales/en/translation.json'
import ru from '../public/locales/ru/translation.json'

const resources = {
  en: {
    common: en,
  },
  ru: {
    common: ru,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    resources,
    defaultNS: 'common',
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
