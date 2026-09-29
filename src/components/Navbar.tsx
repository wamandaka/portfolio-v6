import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiVolume2, FiVolumeX, FiCornerDownRight, FiSend } from "react-icons/fi";
import { sound } from "./ui/AudioHelper";
import { useSmoothScroll } from "./ui/SmoothScrollContext";

const navItems = [
  { label: "INDEX", id: "home", number: "01" },
  { label: "PROFILE", id: "about", number: "02" },
  { label: "ENTERPRISE", id: "experience", number: "03", highlight: true },
  { label: "SELECTED WORKS", id: "project", number: "04" },
  { label: "TRANSMIT", id: "contact", number: "05" },
];

export const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { scrollTo } = useSmoothScroll();

  // Real-time Jakarta WIB clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const str = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTime(`${str} WIB`);
      } catch {
        setTime("JAKARTA");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Robust scroll spy using getBoundingClientRect (immune to offsetTop transform bugs)
  useEffect(() => {
    const checkActiveSection = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page detection guarantees TRANSMIT lights up
      if (scrollBottom >= docHeight - 120) {
        setActiveSection("contact");
        return;
      }

      const sections = ["home", "about", "experience", "project", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", checkActiveSection, { passive: true });
    checkActiveSection();
    return () => window.removeEventListener("scroll", checkActiveSection);
  }, []);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      sound.playTick();
    }
  };

  const handleNavClick = (id: string) => {
    sound.playTick();
    setActiveSection(id);
    setMenuOpen(false);

    const el = document.getElementById(id);
    if (el) {
      scrollTo(el, {
        offset: id === "contact" ? 0 : -80,
        duration: 1.2,
      });
    }
  };

  return (
    <>
      {/* Top Header & Sticky Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090d]/90 backdrop-blur-xl border-b border-white/10 select-none">
        {/* Top Info Ribbon */}
        <div className="border-b border-white/5 py-1.5 px-4 sm:px-8 text-[11px] font-mono text-neutral-400">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-semibold tracking-wider">
                DAKA WARDANI
              </span>
              <span className="hidden sm:inline text-neutral-400">
                // FRONTEND SPECIALIST
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-neutral-400">
              <span className="text-neutral-400">[ DEPLOYMENT:</span>
              <span className="text-amber-400 font-medium">BNI × NTT DATA INDONESIA</span>
              <span className="text-neutral-400">]</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-neutral-400 hidden xs:inline">{time}</span>
              <button
                onClick={toggleSound}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/10 hover:border-amber-400/50 hover:text-amber-300 transition-colors cursor-pointer"
                title="Toggle tactile sound feedback"
              >
                {soundEnabled ? <FiVolume2 size={12} /> : <FiVolumeX size={12} />}
                <span className="text-[10px]">{soundEnabled ? "SND: ON" : "SND: OFF"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="flex items-center gap-2 font-display font-extrabold text-xl text-white hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>DAKA</span>
            <span className="text-amber-400">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? "text-neutral-800" : "text-neutral-400"}`}>
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                  {item.highlight && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("contact")}
              className={`px-4 py-1.5 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === "contact"
                  ? "bg-white text-neutral-950 shadow-lg"
                  : "bg-amber-400 text-neutral-950 hover:bg-amber-300 shadow-md shadow-amber-400/20"
              }`}
            >
              <FiSend size={12} />
              <span>TRANSMIT</span>
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-3 py-1 rounded bg-amber-400 text-neutral-950 font-mono text-[11px] font-bold uppercase"
            >
              TRANSMIT
            </button>
            <button
              onClick={() => {
                sound.playTick();
                setMenuOpen(!menuOpen);
              }}
              className="p-2 rounded border border-white/10 text-neutral-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <AiOutlineClose size={18} /> : <HiOutlineMenuAlt3 size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#08090d]/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-center px-8 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full font-mono">
          <div className="text-xs uppercase text-neutral-400 tracking-widest border-b border-white/10 pb-2 flex justify-between">
            <span>// INDEX REGISTRY</span>
            <button onClick={() => setMenuOpen(false)} className="text-neutral-400 hover:text-white">
              CLOSE [X]
            </button>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-xl font-display font-bold text-neutral-200 hover:text-amber-400 flex items-center justify-between border-b border-white/5 pb-3 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-400">{item.number}</span>
                <span>{item.label}</span>
              </div>
              <FiCornerDownRight className="text-neutral-400 text-base" />
            </button>
          ))}

          <div className="pt-4 text-xs font-mono text-neutral-400">
            DEPLOYED AT BNI // JAKARTA, INDONESIA
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
