import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ENtranslation from './recourses/en/translation.json'
import zhHanstranslation from './recourses/zh/translation.json'

const resources = {
  zh: {
    translation: zhHanstranslation,
  },
  en: {
    translation: ENtranslation,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
  })

export default i18n

export const supportedLanguagesMap = new Map([
  ['zh', '简体中文'],
  ['en', 'English'],
])
