import { motion } from "framer-motion";
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
      {/* Dashed 24x24px Grid Pattern (Figma line-vertical & line-horizontal, 10% white, [2,2] dash) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24M0 0v24' stroke='rgba(255,255,255,0.08)' stroke-width='0.75' stroke-dasharray='2 2' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blurred Angular/Mesh Gradient Glow (Figma #fe79b9 -> #ad00ff -> #2489ff) */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.65, 0.85, 0.65],
          scale: [0.97, 1.03, 0.97],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #fe79b9 0deg, #ad00ff 150deg, #2489ff 360deg)",
        }}
      />

      {/* Bottom Shadow Linear Gradient Fade to #0f172a */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f172a]/0 via-[#0f172a]/50 to-[#0f172a]"
      />

      {/* Centered Identity, Contact, and Social Pills */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center sm:px-10">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#e2e8f0] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-xs font-medium text-[#cbd5e1] sm:text-sm">
            {t.hero.eyebrow}
          </p>
        </motion.div>

        {/* Contact Info & Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-5 flex flex-col items-center gap-3.5"
        >
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

          {/* Social Pill Buttons (Exact Figma button variants) */}
          <ul
            aria-label={t.hero.profiles}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {/* LinkedIn Pill */}
            <li>
              <motion.a
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href="https://www.linkedin.com/in/wamandaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#0a66c2] bg-[#f1f8ff] px-3 py-1 text-xs font-semibold text-[#0a66c2] shadow-sm hover:shadow-[0_0_14px_rgba(10,102,194,0.35)] transition-shadow"
              >
                <FaLinkedin aria-hidden="true" className="h-3.5 w-3.5" />
                <span>/wamandaka</span>
              </motion.a>
            </li>

            {/* Instagram Pill (Figma coral/orange variant) */}
            <li>
              <motion.a
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href="https://www.instagram.com/kang_piscokk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#f24e1e] bg-[#fff4f1] px-3 py-1 text-xs font-semibold text-[#f24e1e] shadow-sm hover:shadow-[0_0_14px_rgba(242,78,30,0.35)] transition-shadow"
              >
                <FaInstagram aria-hidden="true" className="h-3.5 w-3.5" />
                <span>/@kang_piscokk</span>
              </motion.a>
            </li>

            {/* GitHub Pill */}
            <li>
              <motion.a
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href="https://github.com/wamandaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#222222] bg-[#f2f2f2] px-3 py-1 text-xs font-semibold text-[#222222] shadow-sm hover:shadow-[0_0_14px_rgba(255,255,255,0.25)] transition-shadow"
              >
                <FaGithub aria-hidden="true" className="h-3.5 w-3.5" />
                <span>/wamandaka</span>
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
