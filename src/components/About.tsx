import { FiCalendar } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { experience } from "../data/experience";

const About = () => {
  const { language, t } = useLanguage();

  return (
    <div className="resume-container">
      {/* Summary / About Section */}
      <section id="about" aria-labelledby="about-title" className="resume-section">
        <div>
          <h2 id="about-title" className="resume-section-title">
            {t.about.sectionTitle}
          </h2>
        </div>

        <div className="space-y-2.5 text-xs leading-relaxed text-[#e2e8f0] sm:text-sm">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Experience Section (Exact Figma experiences-section structure) */}
      <section id="experience" aria-labelledby="experience-title" className="resume-section">
        <div>
          <h2 id="experience-title" className="resume-section-title">
            {t.about.experienceTitle}
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((entry) => (
            <article key={entry.company} className="space-y-2">
              {/* Work Header Row: Company — Role (type) on left, Calendar + Date on right */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex flex-wrap items-baseline gap-x-1.5">
                  <h3 className="resume-content-title">{entry.company}</h3>
                  <span className="text-xs font-normal text-[#e2e8f0] sm:text-sm">
                    — {entry.role[language]}
                    {entry.employmentType && (
                      <span className="ml-1 text-xs text-[#cbd5e1]">
                        {entry.employmentType[language]}
                      </span>
                    )}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium tracking-tight text-[#e2e8f0]">
                  <FiCalendar aria-hidden="true" className="h-3.5 w-3.5 text-[#64748b]" />
                  <span>{entry.period[language]}</span>
                </div>
              </div>

              {/* Tech Labels Row */}
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                {entry.tags.map((tag) => (
                  <li key={tag} className="figma-badge">
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Bullet List with Figma 5x5 rounded-square dots */}
              <ul className="space-y-1.5 pt-0.5 text-xs leading-relaxed text-[#e2e8f0] sm:text-[13px]">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="figma-bullet-dot" />
                  <span>{entry.summary[language]}</span>
                </li>
                {entry.highlights.map((highlight) => (
                  <li key={highlight.en} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="figma-bullet-dot" />
                    <span>{highlight[language]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
