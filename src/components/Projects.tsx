import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiFolder, FiImage, FiX } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import {
  currentProject,
  featuredProjects,
  otherProjects,
  type FeaturedProject,
} from "../data/projects";

const formatCleanUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const Projects = () => {
  const { language, t } = useLanguage();
  const [previewProject, setPreviewProject] = useState<FeaturedProject | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewProject(null);
    };
    if (previewProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewProject]);

  return (
    <>
      <motion.section
        id="project"
        aria-labelledby="work-title"
        className="resume-section"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div>
          <h2 id="work-title" className="resume-section-title">
            {t.work.sectionTitle}
          </h2>
        </div>

        <div className="space-y-6">
          {/* Ongoing Enterprise Project */}
          <article className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex flex-wrap items-baseline gap-x-1.5">
                <h3 className="resume-content-title">{currentProject.title[language]}</h3>
                <span className="text-xs text-[#94a3b8] sm:text-[13px]">
                  — {currentProject.client} ({t.work.viaLabel} {currentProject.via})
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#7733ff]/40 bg-[#7733ff]/15 px-2 py-0.5 text-[11px] font-medium text-[#e2e8f0]">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
                {t.work.currentLabel}
              </span>
            </div>

            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
              {currentProject.tags.map((tag) => (
                <li key={tag} className="figma-badge">
                  {tag}
                </li>
              ))}
            </ul>

            <p className="text-xs leading-relaxed text-[#cbd5e1] sm:text-[13px]">
              {currentProject.description[language]}{" "}
              <span className="text-[#64748b]">({t.work.privateNote})</span>
            </p>
          </article>

          {/* Featured Public Projects (Exact Figma SPKJS project layout + interactive preview) */}
          {featuredProjects.map((project) => (
            <article key={project.name} className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="resume-content-title">{project.name}</h3>
              </div>

              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="figma-badge">
                    {tag}
                  </li>
                ))}
              </ul>

              <p className="text-xs leading-relaxed text-[#cbd5e1] sm:text-[13px]">
                {project.description[language]}
              </p>

              {/* Action Links: Live demo + Screenshot Preview */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5 text-xs sm:text-[13px]">
                {project.demo && (
                  <span className="inline-flex items-center gap-1 text-[#cbd5e1]">
                    <span>{t.work.moreDetailsAt}</span>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="figma-link inline-flex items-center gap-1"
                    >
                      <FiExternalLink aria-hidden="true" className="h-3 w-3 text-[#e2e8f0]" />
                      <span className="figma-link-text">{formatCleanUrl(project.demo)}</span>
                    </a>
                  </span>
                )}

                {project.image && (
                  <button
                    type="button"
                    onClick={() => setPreviewProject(project)}
                    className="figma-badge cursor-pointer gap-1.5 transition-colors hover:bg-[#475569] hover:text-[#f1f5f9]"
                  >
                    <FiImage aria-hidden="true" className="h-3 w-3 text-[#a78bfa]" />
                    <span>{t.work.preview}</span>
                  </button>
                )}
              </div>
            </article>
          ))}

          {/* Other Projects */}
          {otherProjects.map((project) => (
            <article key={project.name.en} className="space-y-2">
              <h3 className="resume-content-title">{project.name[language]}</h3>
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="figma-badge">
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="text-xs leading-relaxed text-[#cbd5e1] sm:text-[13px]">
                {project.description[language]}
              </p>
            </article>
          ))}

          {/* Figma "more" footer link: see all of my projects on my portfolio/GitHub */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-[#cbd5e1] sm:text-[13px]">
            <FiFolder aria-hidden="true" className="h-3.5 w-3.5 text-[#cbd5e1]" />
            <span>{t.work.seeAllPrefix}</span>
            <a
              href="https://github.com/wamandaka"
              target="_blank"
              rel="noopener noreferrer"
              className="figma-link inline-flex items-center gap-1"
            >
              <FiExternalLink aria-hidden="true" className="h-3 w-3 text-[#e2e8f0]" />
              <span className="figma-link-text">github.com/wamandaka</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Lightbox Screenshot Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewProject(null)}
              className="absolute inset-0 bg-[#090d16]/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-[#334155] bg-[#0f172a] shadow-2xl"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-[#334155] px-4 py-3 sm:px-5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 id="preview-title" className="resume-content-title">
                    {previewProject.name}
                  </h3>
                  <div className="hidden sm:flex flex-wrap gap-1">
                    {previewProject.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="figma-badge text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  aria-label={t.work.close}
                  className="rounded p-1 text-[#94a3b8] transition-colors hover:bg-[#334155] hover:text-[#f1f5f9]"
                >
                  <FiX aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>

              {/* High-Resolution Screenshot Image */}
              <div className="bg-[#090d16] p-2 sm:p-4">
                <img
                  src={previewProject.image}
                  alt={previewProject.imageAlt[language]}
                  className="w-full rounded border border-[#334155]/60 object-cover shadow-inner"
                  loading="lazy"
                />
              </div>

              {/* Footer with Demo Link & Close Button */}
              <div className="flex items-center justify-between border-t border-[#334155] px-4 py-2.5 sm:px-5 text-xs">
                {previewProject.demo ? (
                  <a
                    href={previewProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="figma-link inline-flex items-center gap-1.5"
                  >
                    <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5 text-[#e2e8f0]" />
                    <span className="figma-link-text">{t.work.demo}</span>
                  </a>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="figma-badge cursor-pointer px-3 py-1 font-medium transition-colors hover:bg-[#475569] hover:text-white"
                >
                  {t.work.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
