import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Profile from "../assets/icon.png";
import ParallaxTicker from "./ui/ParallaxTicker";
import { Parallax } from "./ui/Parallax";
import { sound } from "./ui/AudioHelper";
import { useSmoothScroll } from "./ui/SmoothScrollContext";

export const Hero: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleJump = (id: string) => {
    sound.playTick();
    const el = document.getElementById(id);
    if (el) {
      scrollTo(el, { offset: -80, duration: 1.2 });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-28 sm:pt-36 pb-12 flex flex-col justify-between relative overflow-hidden scroll-mt-28"
    >
      {/* Monumental Background Watermark with Parallax Float */}
      <Parallax
        speed={-90}
        className="absolute top-10 right-[-4%] select-none pointer-events-none z-0"
      >
        <span
          className="font-display font-black text-[120px] sm:text-[200px] md:text-[280px] text-white/[0.02] leading-none block"
          aria-hidden="true"
        >
          DAKA
        </span>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex-grow flex flex-col justify-center my-auto relative z-10">
        {/* Top Spec Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-400 border-b border-white/5 pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">●</span>
            <span className="text-neutral-300">DOSSIER // 2025.26</span>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-400">DISCIPLINE: FRONTEND & ENTERPRISE WEB</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-neutral-400">
            <span>LOC: JAKARTA, ID</span>
            <span>//</span>
            <span>FLUID LENIS PARALLAX</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left / Monumental Typography */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>CURRENTLY DEPLOYED AT BNI (VIA NTT DATA)</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-[0.92] mb-6">
              WAMAN DAKA <br />
              <span className="text-stroke-subtle hover:text-white transition-colors duration-500">
                WARDANI
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed mb-8">
              Frontend Engineer specializing in modular web architecture and resilient user interfaces.
              Currently assigned as an outsourced specialist at <strong className="text-white font-semibold">Bank Negara Indonesia (BNI)</strong> via <strong className="text-amber-300 font-semibold">NTT DATA Indonesia</strong> for the <strong className="text-white font-semibold">BNIMove HUB</strong> platform.
            </p>

            {/* Tactical Jump Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleJump("experience")}
                className="px-6 py-3.5 rounded bg-white text-neutral-950 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-amber-400 transition-all duration-300 flex items-center gap-2 group shadow-xl cursor-pointer"
              >
                <span>[01] Enterprise Dossier</span>
                <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => handleJump("project")}
                className="px-6 py-3.5 rounded border border-white/15 hover:border-white/40 text-neutral-200 font-mono text-xs sm:text-sm font-medium uppercase tracking-wider hover:bg-white/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>[02] Inspect Projects</span>
              </button>
            </div>
          </div>

          {/* Right / Industrial ID Specimen Card with Parallax Depth */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Parallax speed={-40} className="w-full max-w-sm">
              <div className="editorial-card p-5 sm:p-6 rounded-2xl w-full border border-white/10 relative group shadow-2xl">
                {/* Technical corner notches */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-neutral-400">
                  SPEC: PARALLAX DEPTH
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400">
                  ID: WDW-BNI
                </div>

                {/* Portrait Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-5 mt-4">
                  <img
                    src={Profile}
                    alt="Waman Daka Wardani"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-400 border border-amber-400/30">
                    SECURE BADGE: TAD
                  </div>
                </div>

                {/* Spec Attributes */}
                <div className="space-y-2 font-mono text-xs border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>VENDOR:</span>
                    <span className="text-neutral-200 font-medium">NTT DATA INDONESIA</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>CLIENT:</span>
                    <span className="text-amber-400 font-medium">BNI (BANK NEGARA INDONESIA)</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>PLATFORM:</span>
                    <span className="text-white font-medium">BNIMove HUB</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>CORE:</span>
                    <span className="text-neutral-300">REACT 19 • TS • REST</span>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>

      {/* Controlled Smooth Infinite Marquee Ticker */}
      <div className="w-full border-y border-white/5 bg-[#0b0d14] mt-12 py-3 relative z-10">
        <ParallaxTicker speed={28}>
          <div className="flex items-center gap-8 font-mono text-xs sm:text-sm uppercase tracking-widest text-neutral-400">
            <span className="text-white font-bold">BNI ENTERPRISE PLATFORMS</span>
            <span className="text-amber-400">/</span>
            <span>NTT DATA INDONESIA</span>
            <span className="text-amber-400">/</span>
            <span>MODULAR FRONTEND ARCHITECTURE</span>
            <span className="text-amber-400">/</span>
            <span className="text-white font-bold">BNIMOVE HUB</span>
            <span className="text-amber-400">/</span>
            <span>REACT 19 & TYPESCRIPT</span>
            <span className="text-amber-400">/</span>
            <span>FLUID LENIS INERTIA</span>
            <span className="text-amber-400">/</span>
          </div>
        </ParallaxTicker>
      </div>
    </section>
  );
};

export default Hero;
