import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp, FiCheck, FiCopy, FiExternalLink, FiMail } from "react-icons/fi";
import { useLanguage } from "../i18n/useLanguage";
import { profile } from "../data/profile";

const Footer = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Mailto link remains functional if clipboard permission is denied
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" aria-labelledby="contact-title">
      {/* Contact Section Row */}
      <motion.div
        className="resume-section"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div>
          <h2 id="contact-title" className="resume-section-title">
            {t.contact.eyebrow}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="resume-content-title">{t.contact.title}</h3>
            <p className="text-xs leading-relaxed text-[#cbd5e1] sm:text-[13px]">
              {t.contact.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-[13px]">
            <a
              href={`mailto:${profile.email}`}
              className="figma-link inline-flex items-center gap-1.5"
            >
              <FiMail aria-hidden="true" className="h-3.5 w-3.5 text-[#cbd5e1]" />
              <span className="figma-link-text">{profile.email}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="figma-badge cursor-pointer gap-1.5 transition-colors hover:bg-[#475569] hover:text-[#f1f5f9]"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="inline-flex items-center gap-1 text-emerald-400"
                  >
                    <FiCheck aria-hidden="true" className="h-3 w-3" />
                    <span>{t.contact.copied}</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="inline-flex items-center gap-1"
                  >
                    <FiCopy aria-hidden="true" className="h-3 w-3" />
                    <span>{t.contact.copy}</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs">
            {profile.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="figma-link inline-flex items-center gap-1"
                >
                  <FiExternalLink aria-hidden="true" className="h-3 w-3 text-[#64748b]" />
                  <span className="figma-link-text">
                    {social.name} ({social.handle})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Document Bottom Footer Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-10 text-xs text-[#64748b]">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">{t.footer.built}</span>
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={scrollToTop}
            aria-label={t.footer.top}
            className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-[4px] bg-[#334155] text-[#cbd5e1] transition-colors hover:bg-[#475569] hover:text-[#f1f5f9]"
          >
            <FiArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
