import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./assets/es.json";
import en from "./assets/en.json";

const resources = {
  en: en,
  es: es,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
