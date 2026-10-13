import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { profile } from "../data/profile";
import portrait from "../assets/icon.png";

const Hero = () => {
  const { t } = useLanguage();
  const profiles = profile.socials.filter((social) => social.name !== "Instagram");
  const icons = { LinkedIn: FaLinkedin, GitHub: FaGithub } as const;

  return (
    <section id="home" className="pb-section pt-16 sm:pt-24">
      <div className="page-container grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-6">{t.hero.eyebrow}</p>
          <h1 className="max-w-[18ch] text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            {t.hero.headline}
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg text-muted">{t.hero.description}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#project" className="btn btn-primary">
              {t.hero.primaryCta}
              <FiArrowDown aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.hero.secondaryCta}
            </a>
          </div>

          <ul aria-label={t.hero.profiles} className="mt-10 flex items-center gap-5 text-sm font-medium">
            {profiles.map((social) => {
              const Icon = icons[social.name as keyof typeof icons];
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2"
                  >
                    <Icon aria-hidden="true" />
                    {social.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <div className="rounded-lg border border-line bg-surface p-8">
            <img
              src={portrait}
              alt={t.hero.imageAlt}
              width={400}
              height={400}
              className="mx-auto aspect-square w-full max-w-xs object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
