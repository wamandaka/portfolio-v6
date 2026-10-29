import { useLanguage } from "../i18n/useLanguage";
import { supportedLanguages } from "../i18n/translations";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.work, href: "#project" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="relative z-40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#334155] focus:px-3 focus:py-1.5 focus:text-xs focus:font-semibold focus:text-[#e2e8f0]"
      >
        {t.nav.skip}
      </a>
      <div className="resume-container flex items-center justify-between pt-4 text-xs">
        <nav aria-label={t.nav.label} className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#cbd5e1]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium transition-colors hover:text-[#e2e8f0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          role="group"
          aria-label={t.nav.language}
          className="inline-flex items-center rounded-[4px] border border-[#334155] bg-[#0f172a]/70 px-1.5 py-0.5 text-[11px] font-medium backdrop-blur-sm"
        >
          {supportedLanguages.map((code, index) => (
            <span key={code} className="inline-flex items-center">
              {index > 0 && (
                <span aria-hidden="true" className="px-1 text-[#64748b]">
                  /
                </span>
              )}
              <button
                type="button"
                lang={code}
                aria-pressed={language === code}
                onClick={() => setLanguage(code)}
                className={`cursor-pointer px-1 uppercase transition-colors ${
                  language === code
                    ? "font-bold text-[#e2e8f0]"
                    : "text-[#64748b] hover:text-[#cbd5e1]"
                }`}
              >
                {code}
              </button>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
