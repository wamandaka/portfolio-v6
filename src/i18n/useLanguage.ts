import { createContext, useContext } from "react";
import { translations, type Dictionary, type Language } from "./translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => undefined,
  t: translations.en,
});

/** Access the active language, its dictionary, and a setter. */
export const useLanguage = () => useContext(LanguageContext);
