import React from "react";
import { FiCode, FiCpu, FiShield, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

const competencies = [
  {
    icon: <FiCode className="text-cyan-400" size={24} />,
    title: "Modern Web Engineering",
    description:
      "Crafting performant and scalable single-page and server-rendered web applications using React, Next.js, TypeScript, and modern CSS frameworks.",
  },
  {
    icon: <FiShield className="text-blue-400" size={24} />,
    title: "Enterprise Platform Standards",
    description:
      "Adhering to strict enterprise banking governance, high-availability architecture, role-based authorization (RBAC), and bulletproof error boundaries.",
  },
  {
    icon: <FiCpu className="text-teal-400" size={24} />,
    title: "API & Data Integration",
    description:
      "Seamless integration with RESTful microservices, asynchronous state orchestration, automated data caching, and resilient error recovery.",
  },
  {
    icon: <FiTrendingUp className="text-indigo-400" size={24} />,
    title: "Low-Code & Rapid Prototyping",
    description:
      "Hands-on expertise in Mendix Studio Pro for rapid enterprise application delivery, domain modeling, and automated business microflows.",
  },
];

const principles = [
  "Strict TypeScript type safety and maintainable architectural patterns",
  "Design system consistency, responsive layouts, and accessible UI (a11y)",
  "Agile/Scrum team collaboration with seamless Git workflows",
  "Continuous optimization for render speed, SEO, and smooth micro-interactions",
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Overview & Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Design Intuition with <span className="gradient-accent">Enterprise Reliability</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            I specialize in transforming intricate business and banking requirements into elegant, high-performance digital products that users love and enterprises rely upon.
          </p>
        </div>

        {/* Narrative & Principles Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Professional Story Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-5">
                <span>Enterprise Experience Spotlight</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Enterprise Contributor at Bank Negara Indonesia (BNI)
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                As a specialized TAD (Contract Specialist) deployed through <strong>NTT DATA Indonesia</strong>, I actively contribute to <strong>BNIMove HUB</strong>, a critical internal enterprise platform powering workforce mobility and banking operational workflows.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My daily work centers on delivering scalable, modular frontend interfaces, collaborating with system architects and cross-disciplinary squads, and integrating robust microservices while strictly upholding enterprise data safety and user accessibility.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                NTT DATA Indonesia
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                PT Bank Negara Indonesia (Persero) Tbk
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                BNIMove HUB Platform
              </span>
            </div>
          </div>

          {/* Right: Engineering Principles Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Engineering Principles
              </h3>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300 leading-snug">
                    <FiCheckCircle className="text-cyan-400 mt-0.5 shrink-0" size={16} />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="text-xs text-slate-400 italic">
                "Striving for clean code simplicity, predictable state management, and fluid user experiences across every viewport."
              </p>
            </div>
          </div>
        </div>

        {/* Competencies 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {competencies.map((comp, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {comp.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {comp.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
