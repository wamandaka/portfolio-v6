import * as motion from "motion/react-client";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FiArrowRight, FiBriefcase, FiLayers, FiShield } from "react-icons/fi";
import Profile from "../assets/icon.png";

const techIcons = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" size={28} />, level: "Core Stack" },
  { name: "TypeScript", icon: <BiLogoTypescript className="text-[#3178C6]" size={30} />, level: "Typed Safety" },
  { name: "Next.js", icon: <RiNextjsFill className="text-white" size={28} />, level: "SSR / SSG" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-[#38BDF8]" size={28} />, level: "Design System" },
  { name: "Git & CI/CD", icon: <FaGitAlt className="text-[#F05032]" size={28} />, level: "Version Control" },
];

const highlights = [
  {
    icon: <FiBriefcase className="text-cyan-400" size={20} />,
    title: "Enterprise Banking Experience",
    desc: "BNI (via NTT DATA Indonesia)",
  },
  {
    icon: <FiLayers className="text-blue-400" size={20} />,
    title: "Modular Frontend Architecture",
    desc: "Scalable React & TypeScript",
  },
  {
    icon: <FiShield className="text-teal-400" size={20} />,
    title: "Secure Enterprise Workflows",
    desc: "RBAC & Banking Standards",
  },
];

const Hero = () => {
  return (
    <section id="home" className="pt-32 sm:pt-40 pb-16 md:pb-24 relative">
      <div className="flex flex-col items-center text-center">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-500/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Enterprise Frontend Specialist • NTT DATA Indonesia (BNI)</span>
        </motion.div>

        {/* Avatar with Animated Glow Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-8 group"
        >
          {/* Subtle Outer Glow Rings */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
          
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-slate-900 ring-2 ring-white/10 overflow-hidden shadow-2xl">
            <img
              src={Profile}
              alt="Waman Daka Wardani"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Floating Pill Badge on Avatar */}
          <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[11px] font-mono font-medium text-cyan-300 shadow-xl backdrop-blur-md">
            ⚡ Web & Mobile Hub
          </div>
        </motion.div>

        {/* Name and Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-sm sm:text-base font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-2">
            Hi, I'm Waman Daka Wardani
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Engineering <span className="gradient-accent">Scalable Enterprise</span> & Modern Web Platforms.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Frontend Developer experienced in architecting resilient, accessible digital solutions.
            Currently dedicated to enterprise banking mobility platforms at <strong className="text-white font-semibold">BNI</strong> via <strong className="text-cyan-300 font-semibold">NTT DATA Indonesia</strong> using modern React, TypeScript, and micro-service integrations.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#experience"
            className="px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <span>View Enterprise Experience</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="#project"
            className="px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-200 glass-panel hover:bg-slate-800/80 border border-slate-700 hover:border-slate-500 shadow-xl transition-all duration-300 hover:scale-105"
          >
            Featured Projects
          </a>
        </motion.div>

        {/* Key Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-14"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-800/50"
            >
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-100">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-4xl"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Core Technologies & Tools
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl glass-panel border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 shadow-md group"
              >
                {tech.icon}
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-slate-400">{tech.level}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
