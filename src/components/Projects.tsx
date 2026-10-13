import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { currentProject, featuredProjects, otherProjects } from "../data/projects";

const Projects = () => {
  const { language, t } = useLanguage();
  const startDate = new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${currentProject.startDate}T00:00:00`));

  return (
    <section id="project" aria-labelledby="work-title" className="border-t border-line py-section">
      <div className="page-container">
        <p className="eyebrow mb-4">{t.work.eyebrow}</p>
        <h2 id="work-title" className="max-w-[20ch] text-4xl font-extrabold sm:text-5xl">
          {t.work.title}
        </h2>
        <p className="mt-5 max-w-[56ch] text-lg text-muted">{t.work.intro}</p>

        <article
          aria-labelledby="current-project-title"
          className="mt-14 rounded-lg border border-ink bg-surface p-8 sm:p-12"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-widest text-paper">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              {t.work.currentLabel}
            </p>
            {/* <p className="text-sm font-semibold text-muted">
              {t.work.since}{" "}
              <time dateTime={currentProject.startDate}>{startDate}</time> – {t.work.present}
            </p> */}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 id="current-project-title" className="text-3xl font-extrabold sm:text-4xl">
                {currentProject.title[language]}
              </h3>
              <p className="mt-3 font-semibold text-accent-ink">
                {t.work.clientLabel}: {currentProject.client}{" "}
                <span className="font-normal text-muted">
                  ({t.work.viaLabel} {currentProject.via})
                </span>
              </p>
              <p className="mt-5 max-w-[60ch] text-muted">{currentProject.description[language]}</p>
            </div>
            <div className="lg:col-span-5">
              <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                {currentProject.tags.map((tag) => (
                  <li key={tag} className="tag bg-paper">
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">{t.work.privateNote}</p>
            </div>
          </div>
        </article>

        <ol className="mt-24 space-y-20">
          {featuredProjects.map((project, index) => (
            <li key={project.name} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className={`group block overflow-hidden rounded-lg border border-line bg-surface lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt=""
                  width={1400}
                  height={788}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div className="lg:col-span-5">
                <p className="text-sm font-semibold text-muted">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-3xl font-bold">{project.name}</h3>
                <p className="mt-4 text-muted">{project.description[language]}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.work.demo}: ${project.name}`}
                      className="link-underline inline-flex items-center gap-1"
                    >
                      {t.work.demo}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.work.source}: ${project.name}`}
                      className="link-underline inline-flex items-center gap-1"
                    >
                      {t.work.source}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-24 border-t border-line pt-10">
          <h3 className="eyebrow mb-6">{t.work.other}</h3>
          <ul className="grid gap-8 md:grid-cols-2">
            {otherProjects.map((project) => (
              <li key={project.name.en}>
                <p className="font-display text-xl font-bold">{project.name[language]}</p>
                <p className="mt-2 text-muted">{project.description[language]}</p>
                <p className="mt-3 text-sm text-muted">{project.tags.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
