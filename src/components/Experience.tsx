import React from "react";
import * as motion from "motion/react-client";
import { FiBriefcase, FiCalendar, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { RiBuilding4Line, RiBankFill } from "react-icons/ri";

interface ExperienceItem {
  role: string;
  employmentType: string;
  company: string;
  client?: string;
  project?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  badge?: string;
  accentColor: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer (TAD / Vendor Contract)",
    employmentType: "Contract Specialist",
    company: "NTT DATA Indonesia",
    client: "PT Bank Negara Indonesia (Persero) Tbk (BNI)",
    project: "BNIMove HUB - Enterprise Mobility & Digital Workforce Ecosystem",
    location: "Jakarta, Indonesia",
    period: "May 2025 - Present",
    isCurrent: true,
    badge: "Current Enterprise Role",
    accentColor: "from-cyan-500 to-blue-600",
    description:
      "Assigned as an outsourced specialist (TAD) from NTT DATA Indonesia to Bank Negara Indonesia (BNI), contributing to the core enterprise frontend engineering for BNIMove HUB.",
    responsibilities: [
      "Architected and developed enterprise-grade, responsive web modules for BNIMove HUB, an internal workforce mobility and operational management ecosystem serving bank-wide departments.",
      "Engineered reusable, highly accessible UI components with React, TypeScript, and modern component design patterns to ensure strict design system consistency and rapid feature delivery.",
      "Integrated secure RESTful microservices and backend endpoints with robust client-side validation, error boundaries, and asynchronous data fetching.",
      "Implemented secure role-based access workflows (RBAC) and data confidentiality standards aligned with enterprise banking governance.",
      "Collaborated actively in an Agile/Scrum cross-functional squad including product owners, system architects, UI/UX designers, backend engineers, and QA for seamless sprint releases.",
      "Optimized rendering performance, reducing layout shifts and ensuring fast responsiveness across diverse enterprise devices.",
    ],
    skills: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "RESTful Microservices",
      "Enterprise Architecture",
      "RBAC Security",
      "Agile/Scrum",
      "Git",
    ],
  },
  {
    role: "Frontend Developer",
    employmentType: "Contract / Project",
    company: "PT Indosistem Teknologi Utama",
    location: "Jakarta, Indonesia",
    period: "Nov 2024 - Apr 2025",
    isCurrent: false,
    badge: "Web Applications",
    accentColor: "from-blue-500 to-indigo-600",
    description:
      "Delivered responsive web interfaces, interactive administrative dashboards, and customer-facing ticketing applications.",
    responsibilities: [
      "Developed responsive dashboard interfaces using ReactJS and Next.js, significantly improving data clarity and operational user experience.",
      "Engineered an online event ticketing web platform (VIP Tiket), simplifying ticket purchasing, seat reservation, and event management.",
      "Collaborated with cross-functional teams to ensure design consistency, component modularity, and rapid scalability using TailwindCSS.",
      "Integrated RESTful APIs using Axios to fetch real-time data with error boundary fallbacks and fast state updates.",
      "Coordinated with backend engineers for seamless continuous deployment and Git version control management.",
    ],
    skills: ["ReactJS", "Next.js", "TailwindCSS", "Axios", "RESTful APIs", "Git", "Responsive UI"],
  },
  {
    role: "Mendix Developer Internship",
    employmentType: "Internship",
    company: "PT Merkle Innovation Technology",
    location: "Jakarta, Indonesia",
    period: "Apr 2024 - Jul 2024",
    isCurrent: false,
    badge: "Low-Code Enterprise",
    accentColor: "from-teal-500 to-emerald-600",
    description:
      "Specialized in rapid enterprise application development, domain modeling, and automated business workflows using Mendix Studio Pro.",
    responsibilities: [
      "Engineered an automated Contract Monitoring System within Mendix Studio Pro low-code suite.",
      "Designed clean, user-centric interfaces tailored to corporate contract lifecycle management.",
      "Established relational domain models between business entities, fostering high data integrity and frictionless information flow.",
      "Utilized custom microflows to automate data validation, record processing, and status lifecycle triggers.",
    ],
    skills: ["Mendix Studio Pro", "Low-Code Development", "Domain Modeling", "Microflows", "UI Design"],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Career Journey & Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-accent">Work Experience</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering mission-critical enterprise banking platforms and performant web products with modern engineering standards.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-10 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 flex items-center justify-center transition-all duration-300 ${
                  exp.isCurrent
                    ? "border-cyan-400 shadow-lg shadow-cyan-500/50"
                    : "border-slate-700 group-hover:border-cyan-500/60"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    exp.isCurrent ? "bg-cyan-400 animate-ping" : "bg-slate-500"
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  exp.isCurrent
                    ? "border-cyan-500/40 shadow-xl shadow-cyan-950/20 bg-slate-900/80"
                    : "border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                {/* Glowing subtle gradient line on top */}
                {exp.isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
                )}

                {/* Top Row: Role, Company & Badges */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-cyan-300 border border-slate-700 flex items-center gap-1.5">
                        <FiBriefcase size={12} />
                        {exp.employmentType}
                      </span>
                      {exp.badge && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                            exp.isCurrent
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                              : "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          }`}
                        >
                          {exp.isCurrent && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-300">
                      <div className="flex items-center gap-1.5 font-semibold text-white">
                        <RiBuilding4Line className="text-cyan-400" size={16} />
                        <span>{exp.company}</span>
                      </div>
                      {exp.client && (
                        <div className="flex items-center gap-1.5 font-medium text-cyan-300">
                          <RiBankFill className="text-blue-400" size={16} />
                          <span>Client: {exp.client}</span>
                        </div>
                      )}
                    </div>

                    {exp.project && (
                      <div className="mt-2 text-xs sm:text-sm font-mono text-cyan-400/90 bg-cyan-950/30 border border-cyan-800/30 rounded-lg px-3 py-1.5 inline-block">
                        Project: {exp.project}
                      </div>
                    )}
                  </div>

                  {/* Period & Location Badge */}
                  <div className="flex lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate-400 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200">
                      <FiCalendar className="text-cyan-400" size={13} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <FiMapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                    Key Responsibilities & Contributions:
                  </p>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                      >
                        <FiCheckCircle className="text-cyan-400 mt-1 shrink-0" size={15} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-5 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-1">
                      Tech & Tools:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/70 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
