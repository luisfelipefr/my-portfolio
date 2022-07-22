import { useTranslation } from "react-i18next";

function useI18nProvider() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: Record<string, unknown>) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language
  };
  return i18nProvider;
}

export { useI18nProvider };