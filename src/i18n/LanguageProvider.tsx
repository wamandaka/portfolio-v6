import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./useLanguage";
import { translations, type Language } from "./translations";

const STORAGE_KEY = "portfolio-language";

/** Resolve the initial language: saved choice, then browser locale, then English. */
const getInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch {
    // Storage may be unavailable (private mode); fall through to the browser locale.
  }
  return navigator.language?.toLowerCase().startsWith("id") ? "id" : "en";
};

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting is best effort only.
    }
  }, []);

  useEffect(() => {
    const { meta } = translations[language];
    document.documentElement.lang = language;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
