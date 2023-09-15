import i18n from 'i18next'
//import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from '../public/locales/en/translation.json'
import ru from '../public/locales/ru/translation.json'

const resources = {
  en: {
    // Namspaces
    common: en,
  },
  ru: {
    // Namspaces
    common: ru,
  },
}

i18n
  //.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    //detection: {
    //  //order: ['queryString', 'cookie'],
    //  //cache: ['cookie'],
    //},
    resources,

    // Set default namespace
    defaultNS: 'common',

    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
