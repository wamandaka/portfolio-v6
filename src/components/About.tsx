import { useLanguage } from "../i18n/useLanguage";
import { experience } from "../data/experience";

const About = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="py-section">
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">{t.about.eyebrow}</p>
            <h2 id="about-title" className="text-4xl font-extrabold sm:text-5xl">
              {t.about.title}
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted lg:col-span-7">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-[60ch]">
                {paragraph}
              </p>
            ))}
            <p className="pt-2 text-sm">
              <span className="font-semibold text-ink">{t.about.skillsLabel}: </span>
              {t.about.skills.join(" · ")}
            </p>
          </div>
        </div>

        <div id="experience" className="mt-24 grid gap-12 border-t border-line pt-12 lg:grid-cols-12">
          <h3 className="font-display text-2xl font-bold lg:col-span-5">{t.about.experienceTitle}</h3>
          <ol className="divide-y divide-line lg:col-span-7">
            {experience.map((entry) => (
              <li key={entry.company} className="py-8 first:pt-0">
                <p className="text-sm font-semibold text-accent-ink">{entry.period[language]}</p>
                <h4 className="mt-1 font-display text-xl font-bold">{entry.role[language]}</h4>
                <p className="text-muted">{entry.company}</p>
                <p className="mt-3 max-w-[60ch]">{entry.summary[language]}</p>
                <ul className="mt-4 max-w-[60ch] list-disc space-y-2 pl-5 text-muted marker:text-accent">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight.en}>{highlight[language]}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
