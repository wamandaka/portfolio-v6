import { useLanguage } from "../i18n/useLanguage";
import { skillCategories } from "../data/skills";

const Services = () => {
  const { language, t } = useLanguage();

  return (
    <div className="resume-container">
      {/* Skills & Tools Section (Exact Figma skills-section with underline progress indicators) */}
      <section id="skills" aria-labelledby="skills-title" className="resume-section">
        <div>
          <h2 id="skills-title" className="resume-section-title">
            {t.about.skillsSectionTitle}
          </h2>
        </div>

        <div className="space-y-5">
          {/* Underline Indicators Legend Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-xs text-[#64748b]">{t.about.underlineIndicators}</span>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="figma-skill-badge text-[#cbd5e1]">
                {t.about.frequentlyUsed}
                <span className="figma-skill-progress" style={{ width: "100%" }} />
              </span>
              <span className="figma-skill-badge text-[#cbd5e1]">
                {t.about.occasionally}
                <span className="figma-skill-progress" style={{ width: "25%" }} />
              </span>
            </div>
          </div>

          {/* Skill Categories: Languages, Technologies, Tools & Softwares */}
          {skillCategories.map((category) => (
            <div key={category.title.en} className="space-y-2.5">
              <h3 className="resume-content-title">{category.title[language]}</h3>

              <div className="space-y-2">
                {category.subgroups.map((subgroup) => (
                  <div
                    key={subgroup.label.en}
                    className="grid grid-cols-1 items-baseline gap-1.5 sm:grid-cols-[7.5rem_1fr] sm:gap-3"
                  >
                    <span className="text-xs text-[#64748b]">{subgroup.label[language]}</span>
                    <ul className="flex flex-wrap gap-1.5">
                      {subgroup.items.map((item) => (
                        <li key={item.name} className="figma-skill-badge">
                          <span>{item.name}</span>
                          <span
                            aria-hidden="true"
                            className="figma-skill-progress"
                            style={{ width: `${item.progress}%` }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section styled in the same 2-column Figma layout */}
      <section id="services" aria-labelledby="services-title" className="resume-section">
        <div>
          <h2 id="services-title" className="resume-section-title">
            {t.services.sectionTitle}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.services.items.map((service) => (
            <div key={service.title} className="space-y-1">
              <h3 className="resume-content-title">{service.title}</h3>
              <p className="text-xs leading-relaxed text-[#cbd5e1] sm:text-[13px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
