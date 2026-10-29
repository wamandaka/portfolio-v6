import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGlobe, FiMail, FiMapPin } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { profile } from "../data/profile";

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#334155] pt-10 pb-10 sm:pt-14 sm:pb-12"
    >
      {/* Dashed 24x24px Grid Pattern (Figma line-vertical & line-horizontal, 10% white, [2,2] dash) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24M0 0v24' stroke='rgba(255,255,255,0.1)' stroke-width='0.75' stroke-dasharray='2 2' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blurred Angular/Mesh Gradient Glow (Figma #fe79b9 -> #ad00ff -> #2489ff, blur 120px) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full opacity-75 blur-[110px]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #fe79b9 0deg, #ad00ff 150deg, #2489ff 360deg)",
        }}
      />

      {/* Bottom Shadow Linear Gradient Fade to #0f172a (Figma shadow layer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f172a]/0 via-[#0f172a]/55 to-[#0f172a]"
      />

      {/* Centered Identity, Contact, and Social Pills (Figma contents frame) */}
      <div className="resume-container relative z-10 flex flex-col items-center text-center">
        {/* Title & Subtitle */}
        <div className="flex flex-col items-center gap-1.5">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#e2e8f0] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-sm font-medium text-[#cbd5e1] sm:text-base">
            {t.hero.eyebrow}
          </p>
        </div>

        {/* Contact Info & Social Buttons */}
        <div className="mt-5 flex flex-col items-center gap-3">
          {/* Address & Email Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#e2e8f0] sm:text-[13px]">
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#e2e8f0]" />
              <span>{profile.location[language]}</span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <FiMail aria-hidden="true" className="h-3.5 w-3.5 text-[#e2e8f0]" />
              <a href={`mailto:${profile.email}`} className="figma-link">
                <span className="figma-link-text">{profile.email}</span>
              </a>
            </span>
          </div>

          {/* Social Pill Buttons (Exact Figma button variants: website, linkedin, instagram/figma, github) */}
          <ul
            aria-label={t.hero.profiles}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {/* Website / Portfolio Pill */}
            <li>
              <a
                href="#project"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#7c3aed] bg-[#f6f3ff] px-3 py-1 text-xs font-semibold text-[#7c3aed] transition-transform hover:-translate-y-0.5"
              >
                <FiGlobe aria-hidden="true" className="h-3.5 w-3.5" />
                <span>wamandaka.dev</span>
              </a>
            </li>

            {/* LinkedIn Pill */}
            <li>
              <a
                href="https://www.linkedin.com/in/wamandaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#0a66c2] bg-[#f1f8ff] px-3 py-1 text-xs font-semibold text-[#0a66c2] transition-transform hover:-translate-y-0.5"
              >
                <FaLinkedin aria-hidden="true" className="h-3.5 w-3.5" />
                <span>/wamandaka</span>
              </a>
            </li>

            {/* Instagram Pill (styled in Figma's coral/orange pill palette) */}
            <li>
              <a
                href="https://www.instagram.com/kang_piscokk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#f24e1e] bg-[#fff4f1] px-3 py-1 text-xs font-semibold text-[#f24e1e] transition-transform hover:-translate-y-0.5"
              >
                <FaInstagram aria-hidden="true" className="h-3.5 w-3.5" />
                <span>/@kang_piscokk</span>
              </a>
            </li>

            {/* GitHub Pill */}
            <li>
              <a
                href="https://github.com/wamandaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#222222] bg-[#f2f2f2] px-3 py-1 text-xs font-semibold text-[#222222] transition-transform hover:-translate-y-0.5"
              >
                <FaGithub aria-hidden="true" className="h-3.5 w-3.5" />
                <span>/wamandaka</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
