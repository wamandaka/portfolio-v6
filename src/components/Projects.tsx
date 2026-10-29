import { FiExternalLink, FiFolder } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { currentProject, featuredProjects, otherProjects } from "../data/projects";

const formatCleanUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <div className="resume-container">
      <section id="project" aria-labelledby="work-title" className="resume-section">
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
                <span className="text-xs text-[#cbd5e1] sm:text-sm">
                  — {currentProject.client} ({t.work.viaLabel} {currentProject.via})
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#7733ff]/40 bg-[#7733ff]/15 px-2 py-0.5 text-[11px] font-medium text-[#e2e8f0]">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
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

            <p className="text-xs leading-relaxed text-[#e2e8f0] sm:text-[13px]">
              {currentProject.description[language]}{" "}
              <span className="text-[#64748b]">({t.work.privateNote})</span>
            </p>
          </article>

          {/* Featured Public Projects (Exact Figma SPKJS project layout) */}
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

              <p className="text-xs leading-relaxed text-[#e2e8f0] sm:text-[13px]">
                {project.description[language]}
                {project.demo && (
                  <>
                    {" "}
                    {t.work.moreDetailsAt}{" "}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="figma-link ml-0.5 inline-flex items-center gap-1"
                    >
                      <FiExternalLink aria-hidden="true" className="h-3 w-3 text-[#e2e8f0]" />
                      <span className="figma-link-text">{formatCleanUrl(project.demo)}</span>
                    </a>
                  </>
                )}
              </p>
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
              <p className="text-xs leading-relaxed text-[#e2e8f0] sm:text-[13px]">
                {project.description[language]}
              </p>
            </article>
          ))}

          {/* Figma "more" footer link: see all of my projects on my portfolio/GitHub */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-[#e2e8f0] sm:text-[13px]">
            <FiFolder aria-hidden="true" className="h-3.5 w-3.5 text-[#e2e8f0]" />
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
      </section>
    </div>
  );
};

export default Projects;
