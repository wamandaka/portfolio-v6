import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { profile } from "../data/profile";

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="home"
      aria-label="Profile Header"
      className="relative overflow-hidden border-b border-[#334155] pt-12 pb-10 sm:pt-16 sm:pb-12"
    >
      {/* Dashed 24x24px Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24M0 0v24' stroke='rgba(255,255,255,0.08)' stroke-width='0.75' stroke-dasharray='2 2' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Lightweight Ambient Radial Glow - zero blur cost for maximum mobile performance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-full max-w-[42rem] -translate-x-1/2 rounded-full opacity-60 sm:opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(254,121,185,0.22) 0%, rgba(173,0,255,0.18) 35%, rgba(36,137,255,0.12) 60%, transparent 80%)",
        }}
      />

      {/* Bottom Shadow Linear Gradient Fade to #0f172a */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f172a]/0 via-[#0f172a]/50 to-[#0f172a]"
      />

      {/* Centered Identity, Contact, and Social Pills */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center sm:px-10">
        {/* Title & Subtitle (Immediate paint for optimal LCP/FCP) */}
        <div className="flex flex-col items-center gap-1.5">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#e2e8f0] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-xs font-medium text-[#cbd5e1] sm:text-sm">
            {t.hero.eyebrow}
          </p>
        </div>

        {/* Contact Info & Social Buttons */}
        <div className="mt-5 flex flex-col items-center gap-3.5">
          {/* Address & Email Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#e2e8f0] sm:text-[13px]">
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin
                aria-hidden="true"
                className="h-3.5 w-3.5 text-[#cbd5e1]"
              />
              <span>{profile.location[language]}</span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <FiMail
                aria-hidden="true"
                className="h-3.5 w-3.5 text-[#cbd5e1]"
              />
              <a href={`mailto:${profile.email}`} className="figma-link">
                <span className="figma-link-text">{profile.email}</span>
              </a>
            </span>
          </div>

          {/* Social Pill Buttons (Hardware-accelerated CSS hover/active) */}
          <ul
            aria-label={t.hero.profiles}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {/* LinkedIn Pill */}
            <li>
              <a
                href="https://www.linkedin.com/in/wamandaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#0a66c2] bg-[#f1f8ff] px-3 py-1 text-xs font-semibold text-[#0a66c2] shadow-sm hover:shadow-[0_0_14px_rgba(10,102,194,0.35)] transition-all hover:-translate-y-0.5 active:scale-95 duration-150"
              >
                <FaLinkedin aria-hidden="true" className="h-3.5 w-3.5" />
                <span>/wamandaka</span>
              </a>
            </li>

            {/* Instagram Pill */}
            <li>
              <a
                href="https://www.instagram.com/kang_piscokk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#f24e1e] bg-[#fff4f1] px-3 py-1 text-xs font-semibold text-[#f24e1e] shadow-sm hover:shadow-[0_0_14px_rgba(242,78,30,0.35)] transition-all hover:-translate-y-0.5 active:scale-95 duration-150"
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
                className="inline-flex items-center gap-1.5 rounded-full border border-[#222222] bg-[#f2f2f2] px-3 py-1 text-xs font-semibold text-[#222222] shadow-sm hover:shadow-[0_0_14px_rgba(255,255,255,0.25)] transition-all hover:-translate-y-0.5 active:scale-95 duration-150"
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
