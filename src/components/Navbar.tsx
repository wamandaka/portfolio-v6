import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import { supportedLanguages } from "../i18n/translations";
import { profile } from "../data/profile";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div role="group" aria-label={t.nav.language} className="flex items-center text-sm font-semibold">
      {supportedLanguages.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="text-line px-1">
              /
            </span>
          )}
          <button
            type="button"
            lang={code}
            aria-pressed={language === code}
            onClick={() => setLanguage(code)}
            className={`cursor-pointer px-1 py-1 uppercase transition-colors ${
              language === code ? "text-ink" : "text-muted hover:text-accent-ink"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const links = [
    { label: t.nav.work, href: "#project" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t.nav.skip}
      </a>
      <div className="page-container flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-extrabold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label={t.nav.label} className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <nav id={menuId} aria-label={t.nav.label} hidden={!isOpen} className="border-t border-line bg-paper md:hidden">
        <ul className="page-container py-4">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line last:border-0">
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 font-display text-2xl font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
