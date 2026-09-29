import React, { useState } from "react";
import { sound } from "./ui/AudioHelper";
import { Parallax } from "./ui/Parallax";

const capabilities = [
  {
    code: "CAP_01",
    title: "Modern Frontend Core",
    tagline: "React 19 • TypeScript • Next.js • Tailwind",
    description:
      "Crafting deterministic, type-safe user interfaces with strict component contracts. Emphasizing clean state primitives, zero layout shifts, and rapid interactive response.",
    metrics: "Type-Safe Architecture",
  },
  {
    code: "CAP_02",
    title: "Enterprise Banking Governance",
    tagline: "RBAC Security • Privacy-First Data Flow",
    description:
      "Proven execution on Bank Negara Indonesia's BNIMove HUB platform. Implements rigorous role-based permission boundaries, input sanitization, and enterprise compliance protocols.",
    metrics: "Banking Grade RBAC",
  },
  {
    code: "CAP_03",
    title: "Asynchronous Data & Microservices",
    tagline: "RESTful Integration • Resilient Caching",
    description:
      "Orchestrating high-volume API data streams, proactive cache invalidation, graceful error boundaries, and optimistic UI transitions.",
    metrics: "Low Latency Sync",
  },
  {
    code: "CAP_04",
    title: "Enterprise Low-Code Systems",
    tagline: "Mendix Studio Pro • Relational Models",
    description:
      "Hands-on production proficiency in Mendix Studio Pro for automated corporate contract lifecycle monitoring, domain entity relationships, and transaction microflows.",
    metrics: "Rapid Workflow Prototyping",
  },
];

export const About: React.FC = () => {
  const [activeCap, setActiveCap] = useState<number>(0);

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/5 overflow-hidden scroll-mt-28">
      {/* Background Parallax Watermark */}
      <Parallax speed={-80} className="absolute top-10 left-[-4%] select-none pointer-events-none z-0">
        <span
          className="font-display font-black text-[130px] sm:text-[200px] md:text-[280px] text-white/[0.015] leading-none block"
          aria-hidden="true"
        >
          PROFILE
        </span>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 mb-4 uppercase tracking-widest">
          <span className="text-amber-400">02 //</span>
          <span>PROFILE & SYSTEM CAPABILITIES</span>
        </div>

        {/* Section Title */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase max-w-4xl leading-[1.05] mb-12">
          Bridging Precision Engineering with <span className="text-amber-400">Enterprise Reliability</span>.
        </h2>

        {/* Main Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 mb-16 items-start">
          <div className="lg:col-span-6 font-light text-base sm:text-lg text-neutral-300 leading-relaxed space-y-5">
            <p>
              I approach frontend development not merely as visual styling, but as the critical bridge between complex enterprise logic and human efficiency.
            </p>
            <p>
              Currently deployed as a specialized TAD (Contract Specialist) from <strong className="text-white">NTT DATA Indonesia</strong> to <strong className="text-white">PT Bank Negara Indonesia (Persero) Tbk</strong>, my focus is engineering the core frontend of <strong className="text-amber-300">BNIMove HUB</strong>. The mission: enabling friction-free mobility, operational transparency, and high reliability across thousands of banking users nationwide.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between font-mono text-xs text-neutral-400 border border-white/10 rounded-xl p-6 editorial-card shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-amber-400">// ENGINEERING DIRECTIVES</span>
              <span>INDEX: 2025.SPEC</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-neutral-300">
                <span className="text-amber-400 shrink-0 mt-0.5">›</span>
                <span>Deterministic React architecture with immutable state flows</span>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-300">
                <span className="text-amber-400 shrink-0 mt-0.5">›</span>
                <span>Design system consistency with scalable Tailwind token abstractions</span>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-300">
                <span className="text-amber-400 shrink-0 mt-0.5">›</span>
                <span>Zero tolerance for data leakages or unhandled error boundaries</span>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-300">
                <span className="text-amber-400 shrink-0 mt-0.5">›</span>
                <span>Fluid micro-interactions and high-fps rendering across viewports</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
              <span className="text-neutral-400">STACK PARADIGM:</span>
              <span className="text-white">MODULAR • TYPE-SAFE • ACCESSIBLE</span>
            </div>
          </div>
        </div>

        {/* Capability Registry / Spec Matrix */}
        <div className="border border-white/10 rounded-2xl overflow-hidden editorial-card shadow-2xl">
          <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between font-mono text-xs text-neutral-400">
            <span>[ ARCHITECTURAL CAPABILITY MATRIX ]</span>
            <span className="hidden sm:inline">SELECT ENTRY TO INSPECT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {capabilities.map((cap, idx) => (
              <div
                key={cap.code}
                onMouseEnter={() => {
                  sound.playTick();
                  setActiveCap(idx);
                }}
                onClick={() => {
                  sound.playTick();
                  setActiveCap(idx);
                }}
                className={`p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeCap === idx
                    ? "bg-white/[0.06] border-l-2 md:border-l-0 md:border-t-2 border-amber-400"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-3">
                    <span>{cap.code}</span>
                    <span className="text-amber-400">{cap.metrics}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="font-mono text-xs text-amber-300/90 mb-3">
                    {cap.tagline}
                  </p>
                  <p className="font-light text-xs text-neutral-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
