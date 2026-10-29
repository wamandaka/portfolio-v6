import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import { supportedLanguages } from "../i18n/translations";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "experience", label: t.nav.experience, href: "#experience" },
    { id: "project", label: t.nav.work, href: "#project" },
    { id: "skills", label: t.nav.skills, href: "#skills" },
    { id: "services", label: t.nav.services, href: "#services" },
    { id: "contact", label: t.nav.contact, href: "#contact" },
  ];

  // Active section spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Close on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Auto close on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      window.history.pushState(null, "", href);
    }
  };

  const activeLink = links.find((l) => l.id === activeSection) || links[0];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-[#334155] focus:px-3 focus:py-1.5 focus:text-xs focus:font-semibold focus:text-[#e2e8f0]"
      >
        {t.nav.skip}
      </a>

      {/* Subtle Mobile Backdrop when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Floating Navigation Dock */}
      <header
        ref={menuRef}
        className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-3 md:w-auto md:max-w-none md:px-0"
      >
        {/* ======================================================== */}
        {/* DESKTOP NAV (>= md): Horizontal Pill Dock                */}
        {/* ======================================================== */}
        <nav
          aria-label={t.nav.label}
          className="hidden md:flex items-center gap-1 p-1 rounded-full backdrop-blur-md bg-[#0f172a]/85 border border-[#334155]/80 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
        >
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
                className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  isActive ? "text-white" : "text-[#94a3b8] hover:text-[#e2e8f0]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicatorDesktop"
                    className="absolute inset-0 rounded-full bg-[#334155] -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}

          {/* Desktop Divider */}
          <div aria-hidden="true" className="h-3.5 w-[1px] bg-[#334155] mx-1 shrink-0" />

          {/* Desktop Language Switcher */}
          <div
            role="group"
            aria-label={t.nav.language}
            className="flex items-center gap-0.5 shrink-0 pr-0.5"
          >
            {supportedLanguages.map((code) => {
              const isCurrent = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  aria-pressed={isCurrent}
                  onClick={() => setLanguage(code)}
                  className={`cursor-pointer px-1.5 py-0.5 text-[11px] font-bold rounded uppercase transition-colors ${
                    isCurrent
                      ? "text-white bg-[#7733ff]/30 text-[#e2e8f0]"
                      : "text-[#64748b] hover:text-[#cbd5e1]"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </nav>

        {/* ======================================================== */}
        {/* MOBILE NAV (< md): Dynamic Capsule HUD with Morph Button */}
        {/* ======================================================== */}
        <div className="md:hidden flex flex-col">
          {/* Top Floating Control Capsule */}
          <div className="flex items-center justify-between p-1 pl-3 rounded-full backdrop-blur-md bg-[#0f172a]/90 border border-[#334155]/90 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
            {/* Active Section Tracker Badge */}
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
              <span className="text-[#64748b]">#</span>
              <span className="font-semibold text-[#f1f5f9] tracking-tight">
                {activeLink.label}
              </span>
            </div>

            {/* Right Controls: Language Switcher + Morphing Hamburger */}
            <div className="flex items-center gap-1.5">
              {/* Mobile Language Switcher */}
              <div
                role="group"
                aria-label={t.nav.language}
                className="flex items-center gap-0.5 rounded-full bg-[#1e293b]/70 border border-[#334155]/60 px-1 py-0.5"
              >
                {supportedLanguages.map((code) => {
                  const isCurrent = language === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      lang={code}
                      aria-pressed={isCurrent}
                      onClick={() => setLanguage(code)}
                      className={`cursor-pointer px-1.5 py-0.5 text-[10px] font-bold rounded-full uppercase transition-colors ${
                        isCurrent
                          ? "text-white bg-[#7733ff]/40 shadow-xs"
                          : "text-[#64748b] hover:text-[#cbd5e1]"
                      }`}
                    >
                      {code}
                    </button>
                  );
                })}
              </div>

              {/* Custom Morphing Hamburger Icon Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1e293b]/80 border border-[#334155] text-[#e2e8f0] transition-colors hover:bg-[#334155] active:scale-95"
              >
                <div className="relative h-3.5 w-3.5 flex flex-col justify-between">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="h-[1.75px] w-full rounded-full bg-[#e2e8f0] origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.15 }}
                    className="h-[1.75px] w-2.5 rounded-full bg-[#a78bfa] origin-left"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="h-[1.75px] w-full rounded-full bg-[#e2e8f0] origin-center"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Morphing Capsule Palette (Drawer) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-2 overflow-hidden rounded-2xl backdrop-blur-xl bg-[#0f172a]/95 border border-[#334155] p-2 shadow-[0_16px_36px_rgba(0,0,0,0.65)]"
              >
                {/* 2-Column Command Grid of Sections */}
                <div className="grid grid-cols-2 gap-1.5">
                  {links.map((link, idx) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        type="button"
                        onClick={() => handleNavClick(link.href, link.id)}
                        className={`group flex cursor-pointer items-center gap-2 rounded-xl p-2.5 text-left transition-all ${
                          isActive
                            ? "border border-[#7733ff]/50 bg-[#7733ff]/15 text-white"
                            : "border border-transparent bg-[#1e293b]/40 text-[#94a3b8] hover:border-[#334155] hover:bg-[#1e293b] hover:text-[#e2e8f0]"
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] ${
                            isActive ? "text-[#a78bfa] font-bold" : "text-[#64748b]"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-semibold tracking-tight">
                          {link.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Navbar;
