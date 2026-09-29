import React, { useState } from "react";
import * as motion from "motion/react-client";
import { FiExternalLink, FiLock } from "react-icons/fi";

import BniMoveHubImg from "../assets/projects/bnimove-hub.jpg";
import WeatherApp from "../assets/projects/weather-app.png";
import DashboardIuran from "../assets/projects/dashboard-jakmen.png";
import viptiket from "../assets/projects/viptiket.png";
import MovieApp from "../assets/projects/movie-app.png";

interface ProjectItem {
  name: string;
  category: "Enterprise" | "Web App" | "Dashboard" | "Utility";
  badge?: string;
  isEnterprise?: boolean;
  description: string;
  features: string[];
  imageUrl: string;
  tags: string[];
  link?: string;
  github?: string;
  client?: string;
}

const listProjects: ProjectItem[] = [
  {
    name: "BNIMove HUB - Enterprise Mobility Platform",
    category: "Enterprise",
    badge: "Enterprise Banking",
    isEnterprise: true,
    client: "PT Bank Negara Indonesia (Persero) Tbk (via NTT DATA Indonesia)",
    description:
      "Enterprise-grade workforce mobility and internal operations platform engineered for nationwide banking operational efficiency, high reliability, and streamlined employee administration.",
    features: [
      "Modular dashboard architecture with role-based access control (RBAC)",
      "High-reliability enterprise REST microservices integration & caching",
      "Adheres strictly to enterprise digital banking design standards and governance",
    ],
    imageUrl: BniMoveHubImg,
    tags: ["React", "TypeScript", "TailwindCSS", "REST APIs", "Micro-frontend", "Enterprise Security"],
  },
  {
    name: "VIP Tiket - Online Event Ticketing",
    category: "Web App",
    badge: "Commercial Platform",
    description:
      "Full-featured event ticketing web application offering seamless event browsing, seat selection, checkout workflows, and administrative event control.",
    features: [
      "Dynamic ticket purchasing & booking flow",
      "Responsive event showcase and discovery system",
      "Optimized server-side and client rendering via Next.js",
    ],
    imageUrl: viptiket,
    tags: ["Next.js", "React", "TailwindCSS", "RESTful API", "Axios"],
  },
  {
    name: "Cinema Explorer - TMDB Movie Discovery",
    category: "Web App",
    badge: "Entertainment API",
    description:
      "Interactive movie streaming and discovery web app powered by TMDB API with real-time search, category filters, and rich media details.",
    features: [
      "Real-time search and filter with instant feedback",
      "Detailed synopsis, cast, ratings, and video preview modals",
      "Responsive dark aesthetic interface with smooth micro-interactions",
    ],
    imageUrl: MovieApp,
    tags: ["ReactJS", "TMDB API", "TailwindCSS", "Axios", "Responsive UI"],
    link: "https://seryu-movie-app.netlify.app/",
  },
  {
    name: "Dashboard Iuran Warga",
    category: "Dashboard",
    badge: "Finance & Analytics",
    description:
      "Interactive community dues management and finance monitoring dashboard featuring real-time revenue analytics, member tracking, and payment status filters.",
    features: [
      "Revenue trend graphs and member payment breakdown charts",
      "Quick filter and search across community resident records",
      "Modern clean administrative layout and financial summaries",
    ],
    imageUrl: DashboardIuran,
    tags: ["ReactJS", "Data Visualization", "TailwindCSS", "State Management"],
    link: "https://iuran-warga.netlify.app/",
  },
  {
    name: "Weather Radar & Forecast App",
    category: "Utility",
    badge: "Real-time API",
    description:
      "Dynamic meteorological application delivering real-time weather forecasts, humidity, wind conditions, and atmospheric data by city.",
    features: [
      "Instant city search with OpenWeather API integration",
      "Dynamic visual atmospheric backgrounds based on conditions",
      "High-speed data retrieval with cached responses",
    ],
    imageUrl: WeatherApp,
    tags: ["ReactJS", "OpenWeather API", "Axios", "TailwindCSS"],
    link: "https://wamandaka.github.io/react-app-weatherapp",
  },
];

const categories = ["All", "Enterprise", "Web App", "Dashboard", "Utility"] as const;

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? listProjects
      : listProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="project" className="py-20 relative">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Portfolio & Selected Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-accent">Projects & Systems</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            From large-scale enterprise banking platforms to performant consumer web applications and interactive dashboards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25"
                  : "glass-panel text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                project.isEnterprise
                  ? "border-cyan-500/40 md:col-span-2 shadow-xl shadow-cyan-950/20 bg-slate-900/85"
                  : "border-slate-800 hover:border-cyan-500/30 hover:-translate-y-1 shadow-lg hover:shadow-cyan-950/20"
              }`}
            >
              {/* Card Image Banner */}
              <div
                className={`relative overflow-hidden bg-slate-950 ${
                  project.isEnterprise ? "h-64 sm:h-80 md:h-96" : "h-56 sm:h-64"
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-md ${
                      project.isEnterprise
                        ? "bg-cyan-500/90 text-slate-950 font-bold"
                        : "bg-slate-900/80 text-cyan-300 border border-slate-700/60"
                    }`}
                  >
                    {project.badge || project.category}
                  </span>

                  {project.isEnterprise && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/85 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      <FiLock size={11} />
                      <span>Enterprise Platform</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-5">
                <div>
                  {project.client && (
                    <p className="text-xs font-mono text-cyan-400 mb-1.5">
                      Client: {project.client}
                    </p>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights/Features */}
                  {project.features && (
                    <div className="space-y-1.5 mb-4">
                      {project.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer with Tags & Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-2 shrink-0">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                      >
                        <span>Live Preview</span>
                        <FiExternalLink size={13} />
                      </a>
                    ) : project.isEnterprise ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-400 bg-slate-800/80 border border-slate-700">
                        <FiLock size={12} className="text-cyan-400" />
                        <span>Internal Banking System</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-400 bg-slate-800/80 border border-slate-700">
                        <span>Production Release</span>
                      </span>
                    )}
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

export default Projects;
