import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiCopy, FiCheck, FiArrowUpRight, FiCornerRightUp } from "react-icons/fi";
import { sound } from "./ui/AudioHelper";
import { useSmoothScroll } from "./ui/SmoothScrollContext";
import { Parallax } from "./ui/Parallax";

const channels = [
  {
    name: "LinkedIn",
    handle: "in/wamandaka",
    url: "https://www.linkedin.com/in/wamandaka/",
    icon: <FaLinkedin size={18} />,
  },
  {
    name: "GitHub",
    handle: "github.com/wamandaka",
    url: "https://github.com/wamandaka",
    icon: <FaGithub size={18} />,
  },
  {
    name: "Instagram",
    handle: "@kang_piscokk",
    url: "https://www.instagram.com/kang_piscokk/",
    icon: <FaInstagram size={18} />,
  },
];

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const email = "wamandaka122@gmail.com";
  const { scrollTo } = useSmoothScroll();

  const handleCopy = () => {
    sound.playDeep();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTop = () => {
    sound.playTick();
    const heroEl = document.getElementById("home");
    if (heroEl) {
      scrollTo(heroEl, { offset: 0, duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="py-24 sm:py-36 relative border-t border-white/5 bg-[#06070a] overflow-hidden scroll-mt-20">
      {/* Background Parallax Watermark */}
      <Parallax speed={-80} className="absolute top-10 right-[-3%] select-none pointer-events-none z-0">
        <span
          className="font-display font-black text-[120px] sm:text-[200px] md:text-[280px] text-white/[0.015] leading-none block"
          aria-hidden="true"
        >
          TRANSMIT
        </span>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 mb-4 uppercase tracking-widest">
          <span className="text-amber-400">05 //</span>
          <span>TRANSMIT & INITIATE CONTACT</span>
        </div>

        {/* Monumental Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
            Let's Engineer <br />
            <span className="text-stroke-subtle hover:text-white transition-colors duration-500">
              Something Lasting
            </span>
            <span className="text-amber-400">.</span>
          </h2>
          <p className="font-light text-base sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
            Open for technical dialogues, high-scale enterprise engineering, or bespoke modern web inquiries.
          </p>
        </div>

        {/* Transmission Terminal Card */}
        <div className="editorial-card rounded-2xl p-6 sm:p-10 border border-white/10 mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-xs text-neutral-400 mb-1 uppercase tracking-wider">
                DIRECT ELECTRONIC MAIL:
              </div>
              <a
                href={`mailto:${email}`}
                className="font-mono text-xl sm:text-3xl font-bold text-white hover:text-amber-400 transition-colors"
              >
                {email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <button
                onClick={handleCopy}
                className="px-5 py-3 rounded bg-amber-400 text-neutral-950 font-bold uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
              >
                {copied ? (
                  <>
                    <FiCheck size={14} />
                    <span>BUFFER COPIED</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={14} />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                onClick={() => sound.playTick()}
                className="px-5 py-3 rounded border border-white/20 hover:border-white/50 text-white font-medium uppercase tracking-wider hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <span>OPEN CLIENT</span>
                <FiArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Social Channels Strip */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            {channels.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playTick()}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-neutral-400 group-hover:text-amber-400 transition-colors">
                    {ch.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{ch.name}</p>
                    <p className="text-[11px] text-neutral-400">{ch.handle}</p>
                  </div>
                </div>
                <FiArrowUpRight className="text-neutral-400 group-hover:text-amber-400 transition-colors" size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Colophon / Metadata Rail */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-400 border-t border-white/5 pt-8">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} WAMAN DAKA WARDANI</span>
            <span>//</span>
            <span>JAKARTA, ID</span>
          </div>

          <div className="flex items-center gap-6">
            <span>ENGINE: FLUID LENIS PARALLAX • REACT 19</span>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>RETURN TO TOP</span>
              <FiCornerRightUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
