import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience", highlight: true },
  { label: "Projects", href: "#project" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ["home", "about", "experience", "project", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const toggleNav = () => setIsNav(!isOpen);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl transition-all duration-300 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <nav className="glass-panel rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl shadow-cyan-950/20 border border-slate-700/50 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/30">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Daka<span className="text-cyan-400">.</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {items.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative flex items-center gap-1.5 ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 shadow-sm shadow-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {item.highlight && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:wamandaka122@gmail.com"
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-md shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-1.5"
            >
              <FiMail className="text-sm" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="mailto:wamandaka122@gmail.com"
              className="p-2 rounded-full text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              aria-label="Email Waman Daka"
            >
              <FiMail size={16} />
            </a>
            <button
              onClick={toggleNav}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <AiOutlineClose size={22} /> : <HiOutlineMenuAlt3 size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-center px-8 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-mono">
            Navigation
          </div>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={toggleNav}
              className="text-2xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors flex items-center justify-between border-b border-slate-800/80 pb-3"
            >
              <span>{item.label}</span>
              <FiArrowUpRight className="text-slate-500 text-lg" />
            </a>
          ))}
          <a
            href="mailto:wamandaka122@gmail.com"
            onClick={toggleNav}
            className="mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-center shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
          >
            <FiMail />
            <span>Contact Me directly</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
