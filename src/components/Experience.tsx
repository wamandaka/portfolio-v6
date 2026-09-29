import React, { useState } from "react";
import { FiLayers, FiShield, FiCpu, FiTerminal } from "react-icons/fi";
import { sound } from "./ui/AudioHelper";
import { Parallax } from "./ui/Parallax";

interface ExperienceDossier {
  index: string;
  role: string;
  type: string;
  company: string;
  client?: string;
  project?: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  parallaxSpeed: number;
  leadSummary: string;
  deepDiveTabs: {
    label: string;
    icon: React.ReactNode;
    title: string;
    points: string[];
  }[];
  techStack: string[];
}

const dossiers: ExperienceDossier[] = [
  {
    index: "01",
    role: "Frontend Developer (TAD / Vendor Contract)",
    type: "Contract Specialist",
    company: "NTT DATA Indonesia",
    client: "PT Bank Negara Indonesia (Persero) Tbk (BNI)",
    project: "BNIMove HUB — Enterprise Mobility & Digital Workforce Ecosystem",
    period: "2025 — PRESENT",
    location: "Jakarta, Indonesia",
    isCurrent: true,
    parallaxSpeed: 30,
    leadSummary:
      "Assigned as an outsourced specialist (TAD) from NTT DATA Indonesia to Bank Negara Indonesia (BNI) to engineer the frontend infrastructure of BNIMove HUB, an enterprise mobility platform driving bank-wide workforce operations.",
    deepDiveTabs: [
      {
        label: "Architecture & Scale",
        icon: <FiLayers size={14} />,
        title: "Modular Frontend Component System",
        points: [
          "Architected responsive, enterprise-grade web modules for BNIMove HUB, supporting daily operations across banking divisions.",
          "Constructed reusable, highly accessible UI component primitives with React and TypeScript, eliminating regression and enforcing design consistency.",
          "Designed multi-module dashboard navigation ensuring zero unhandled states and fluid desktop/mobile viewport adaptability.",
        ],
      },
      {
        label: "Security & RBAC",
        icon: <FiShield size={14} />,
        title: "Role-Based Governance & Data Isolation",
        points: [
          "Implemented strict Role-Based Access Control (RBAC) across views, securing sensitive workflow actions by authorization tier.",
          "Enforced privacy-safe data sanitization and memory management compliant with national banking IT digital governance.",
          "Prevented client-side credential and state leakage through hardened authentication lifecycle hooks.",
        ],
      },
      {
        label: "Data & Microservices",
        icon: <FiCpu size={14} />,
        title: "Resilient Microservices Integration",
        points: [
          "Integrated secure RESTful microservice endpoints with client-side caching, input validation, and graceful fallback boundaries.",
          "Eliminated unnecessary re-renders through targeted state slices, achieving smooth 60fps data interaction during heavy operations.",
          "Collaborated in Agile/Scrum cross-functional squads alongside system architects, backend teams, UI/UX designers, and QA.",
        ],
      },
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "RESTful Microservices",
      "RBAC Security",
      "Enterprise UI System",
      "Agile/Scrum",
      "Git",
    ],
  },
  {
    index: "02",
    role: "Frontend Developer",
    type: "Project Contract",
    company: "PT Indosistem Teknologi Utama",
    period: "NOV 2024 — APR 2025",
    location: "Jakarta, Indonesia",
    isCurrent: false,
    parallaxSpeed: -20,
    leadSummary:
      "Engineered customer-facing event ticketing portals and administrative analytics dashboards with ReactJS and Next.js.",
    deepDiveTabs: [
      {
        label: "Ticketing & Dashboards",
        icon: <FiLayers size={14} />,
        title: "VIP Tiket & Operational Dashboards",
        points: [
          "Developed responsive dashboard interfaces for data tracking, significantly optimizing transaction review speed.",
          "Built customer-facing VIP Tiket platform with smooth ticketing, event scheduling, and dynamic checkout workflows.",
          "Leveraged Axios with unified interceptors for centralized error handling and real-time state synchronization.",
        ],
      },
    ],
    techStack: ["Next.js", "ReactJS", "TailwindCSS", "Axios", "RESTful API", "Git"],
  },
  {
    index: "03",
    role: "Mendix Developer Internship",
    type: "Internship",
    company: "PT Merkle Innovation Technology",
    period: "APR 2024 — JUL 2024",
    location: "Jakarta, Indonesia",
    isCurrent: false,
    parallaxSpeed: 20,
    leadSummary:
      "Specialized in rapid enterprise application development, domain modeling, and automated business workflows using Mendix Studio Pro.",
    deepDiveTabs: [
      {
        label: "Low-Code Systems",
        icon: <FiTerminal size={14} />,
        title: "Contract Monitoring System",
        points: [
          "Engineered an automated Contract Monitoring System utilizing Mendix Studio Pro low-code suite.",
          "Configured complex relational domain models to safeguard transaction integrity across contract lifecycles.",
          "Built custom microflows to automate validation, data transfers, and notification triggers.",
        ],
      },
    ],
    techStack: ["Mendix Studio Pro", "Low-Code", "Domain Modeling", "Microflows", "UI Design"],
  },
];

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="experience" className="py-24 sm:py-32 relative border-t border-white/5 overflow-hidden scroll-mt-28">
      {/* Background Parallax Watermark */}
      <Parallax speed={-90} className="absolute top-20 right-[-4%] select-none pointer-events-none z-0">
        <span
          className="font-display font-black text-[140px] sm:text-[220px] md:text-[300px] text-white/[0.015] leading-none block"
          aria-hidden="true"
        >
          BNI
        </span>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 mb-4 uppercase tracking-widest">
          <span className="text-amber-400">03 //</span>
          <span>ENTERPRISE DOSSIER & WORK HISTORY</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase max-w-4xl leading-[1.05] mb-12">
          Proven Track Record in <span className="text-amber-400">Mission-Critical</span> Environments.
        </h2>

        {/* Dossier List with Parallax Staggering */}
        <div className="space-y-12">
          {dossiers.map((item) => (
            <Parallax key={item.index} speed={item.parallaxSpeed}>
              <div
                className={`editorial-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  item.isCurrent
                    ? "border-amber-400/40 shadow-2xl shadow-amber-950/20 bg-neutral-900/80"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Card Header Strip */}
                <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-amber-400/80 shrink-0">
                      [{item.index}]
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                        {item.isCurrent ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            ACTIVE ASSIGNMENT
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10">
                            {item.type}
                          </span>
                        )}
                        <span className="text-neutral-400">•</span>
                        <span className="text-neutral-300">{item.period}</span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {item.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm font-mono">
                        <span className="text-neutral-200">{item.company}</span>
                        {item.client && (
                          <>
                            <span className="text-neutral-400">→</span>
                            <span className="text-amber-400 font-medium">{item.client}</span>
                          </>
                        )}
                      </div>

                      {item.project && (
                        <p className="mt-2 text-xs font-mono text-neutral-400">
                          PLATFORM: <strong className="text-white">{item.project}</strong>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-neutral-400 shrink-0 lg:text-right">
                    <span>LOCATION: {item.location}</span>
                  </div>
                </div>

                {/* Lead Summary */}
                <div className="p-6 sm:p-8 pb-4">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                    {item.leadSummary}
                  </p>
                </div>

                {/* Deep Dive Tabs for BNI / NTT DATA role */}
                {item.deepDiveTabs.length > 1 ? (
                  <div className="px-6 sm:px-8 pb-6">
                    {/* Tab Selectors */}
                    <div className="flex flex-wrap gap-2 mb-4 border-b border-white/10 pb-3">
                      {item.deepDiveTabs.map((tab, tIdx) => (
                        <button
                          key={tab.label}
                          onClick={() => {
                            sound.playTick();
                            setActiveTab(tIdx);
                          }}
                          className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                            activeTab === tIdx
                              ? "bg-amber-400 text-neutral-950 font-bold"
                              : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {tab.icon}
                          <span>{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Active Tab Content */}
                    <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10">
                      <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
                        // {item.deepDiveTabs[activeTab].title}
                      </h4>
                      <ul className="space-y-2.5">
                        {item.deepDiveTabs[activeTab].points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            <span className="text-amber-400 mt-1 shrink-0">›</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 sm:px-8 pb-6">
                    <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10">
                      <ul className="space-y-2">
                        {item.deepDiveTabs[0].points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            <span className="text-amber-400 mt-1 shrink-0">›</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Card Footer Stack Badges */}
                <div className="px-6 sm:px-8 py-4 bg-white/[0.02] border-t border-white/10 flex flex-wrap gap-2 items-center font-mono text-xs">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-wider mr-2">
                    TOOLCHAIN:
                  </span>
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5 text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
