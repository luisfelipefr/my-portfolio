import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// const resources = {
//   "pt-br": translation,
//   "en-US": translationU,
// };

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    supportedLngs: ['en', 'pt-br'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/src/i18n/locales/{{lng}}/translation.json',
    },
  })

export default i18n;