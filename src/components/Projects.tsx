import React, { useState } from "react";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { sound } from "./ui/AudioHelper";
import { Parallax, ParallaxImage } from "./ui/Parallax";

import BniMoveHubImg from "../assets/projects/bnimove-hub.jpg";
import WeatherApp from "../assets/projects/weather-app.png";
import DashboardIuran from "../assets/projects/dashboard-jakmen.png";
import viptiket from "../assets/projects/viptiket.png";
import MovieApp from "../assets/projects/movie-app.png";

interface ProjectEntry {
  id: string;
  name: string;
  category: "Enterprise" | "Web App" | "Dashboard" | "Utility";
  isEnterprise?: boolean;
  client?: string;
  summary: string;
  highlights: string[];
  image: string;
  tags: string[];
  link?: string;
}

const projects: ProjectEntry[] = [
  {
    id: "01",
    name: "BNIMove HUB — Enterprise Mobility Platform",
    category: "Enterprise",
    isEnterprise: true,
    client: "PT Bank Negara Indonesia (Persero) Tbk (via NTT DATA Indonesia)",
    summary:
      "Enterprise digital mobility platform enabling bank-wide internal operations, workforce task orchestration, and departmental analytics with strict banking security compliance.",
    highlights: [
      "Modular dashboard architecture with Role-Based Access Control (RBAC)",
      "High-reliability enterprise REST microservices integration & caching",
      "Strict compliance with national banking IT digital governance",
    ],
    image: BniMoveHubImg,
    tags: ["React 19", "TypeScript", "TailwindCSS", "REST APIs", "Microservices", "Enterprise Security"],
  },
  {
    id: "02",
    name: "VIP Tiket — Online Event Ticketing",
    category: "Web App",
    summary:
      "Commercial ticketing web application featuring rapid event catalog browsing, seat reservation, checkout pipelines, and organizer dashboard.",
    highlights: [
      "Dynamic purchasing & seat reservation pipeline",
      "SSR / SSG performance rendering with Next.js",
      "Responsive event catalog with live filtering",
    ],
    image: viptiket,
    tags: ["Next.js", "React", "TailwindCSS", "RESTful API", "Axios"],
  },
  {
    id: "03",
    name: "Cinema Explorer — TMDB Discovery Engine",
    category: "Web App",
    summary:
      "High-speed cinematic discovery and media streaming interface integrated with TMDB API, featuring instant search, detail modals, and trailer feeds.",
    highlights: [
      "Real-time debounced search & category discovery",
      "Video modal popouts and cast relationship views",
      "Fluid responsive dark mode layout",
    ],
    image: MovieApp,
    tags: ["ReactJS", "TMDB API", "TailwindCSS", "Axios"],
    link: "https://seryu-movie-app.netlify.app/",
  },
  {
    id: "04",
    name: "Dashboard Iuran Warga — Community Dues Tracker",
    category: "Dashboard",
    summary:
      "Interactive administrative finance portal for community housing dues management, revenue timeline visualization, and resident payment status tracking.",
    highlights: [
      "Revenue trend analytics and payment breakdowns",
      "Instant resident filter and status verification",
      "Minimalist data-dense administrative UI",
    ],
    image: DashboardIuran,
    tags: ["ReactJS", "Data Visualization", "TailwindCSS", "State Management"],
    link: "https://iuran-warga.netlify.app/",
  },
  {
    id: "05",
    name: "Weather Radar & Forecast Radar",
    category: "Utility",
    summary:
      "Meteorological utility providing real-time local weather observations, atmospheric pressure, wind telemetry, and multi-day forecast curves.",
    highlights: [
      "Instant city search with OpenWeather API integration",
      "Dynamic meteorological cards and condition icons",
      "Optimized client caching for zero redundant calls",
    ],
    image: WeatherApp,
    tags: ["ReactJS", "OpenWeather API", "Axios", "TailwindCSS"],
    link: "https://wamandaka.github.io/react-app-weatherapp",
  },
];

const categories = ["ALL", "ENTERPRISE", "WEB APP", "DASHBOARD", "UTILITY"] as const;

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("ALL");

  const filtered =
    filter === "ALL"
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === filter);

  const enterpriseProject = filtered.find((p) => p.isEnterprise);
  const otherProjects = filtered.filter((p) => !p.isEnterprise);

  return (
    <section id="project" className="py-24 sm:py-32 relative border-t border-white/5 overflow-hidden scroll-mt-28">
      {/* Background Parallax Watermark */}
      <Parallax speed={-100} className="absolute top-16 left-[-4%] select-none pointer-events-none z-0">
        <span
          className="font-display font-black text-[130px] sm:text-[220px] md:text-[320px] text-white/[0.015] leading-none block"
          aria-hidden="true"
        >
          WORKS
        </span>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 mb-4 uppercase tracking-widest">
          <span className="text-amber-400">04 //</span>
          <span>SELECTED WORKS & EXHIBITION</span>
        </div>

        {/* Header with Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase max-w-2xl leading-[1.05]">
            Engineered for <span className="text-amber-400">Impact</span> & Scale.
          </h2>

          {/* Tactical Filters */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playTick();
                  setFilter(cat);
                }}
                className={`px-3 py-1.5 rounded transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Enterprise Card: BNIMove HUB with Parallax Window */}
        {enterpriseProject && (
          <div className="mb-14">
            <div className="editorial-card rounded-3xl border border-amber-400/40 overflow-hidden shadow-2xl shadow-amber-950/20 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Image Frame with Parallax Image Shift */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-neutral-950">
                  <ParallaxImage
                    src={enterpriseProject.image}
                    alt={enterpriseProject.name}
                    speed={35}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md font-mono text-xs text-amber-400 border border-amber-400/30 flex items-center gap-1.5 z-10">
                    <FiLock size={12} />
                    <span>ENTERPRISE BANKING PLATFORM</span>
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-xs text-neutral-400 mb-2">
                      [{enterpriseProject.id}] // ENTERPRISE FLAGSHIP
                    </div>

                    {enterpriseProject.client && (
                      <p className="font-mono text-xs text-amber-400 mb-2 font-medium">
                        CLIENT: {enterpriseProject.client}
                      </p>
                    )}

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4 group-hover:text-amber-300 transition-colors">
                      {enterpriseProject.name}
                    </h3>

                    <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                      {enterpriseProject.summary}
                    </p>

                    <div className="space-y-2 mb-6 font-mono text-xs text-neutral-400">
                      {enterpriseProject.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <span className="text-amber-400">›</span>
                          <span className="text-neutral-300">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex flex-wrap gap-1.5">
                    {enterpriseProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-neutral-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Asymmetric 2-Column Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {otherProjects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Parallax key={proj.id} speed={isEven ? 25 : -25} className="w-full">
                <div className="editorial-card rounded-2xl border border-white/10 hover:border-white/20 overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl">
                  {/* Image Frame with Parallax Image Shift */}
                  <div className="relative h-60 sm:h-72 overflow-hidden bg-neutral-950">
                    <ParallaxImage
                      src={proj.image}
                      alt={proj.name}
                      speed={25}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md font-mono text-[10px] text-neutral-300 border border-white/10 z-10">
                      [{proj.id}] // {proj.category.toUpperCase()}
                    </div>

                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playTick()}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10"
                        aria-label="Open live preview"
                      >
                        <FiArrowUpRight size={16} />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4 flex flex-wrap gap-1.5 font-mono">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-neutral-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Parallax>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
