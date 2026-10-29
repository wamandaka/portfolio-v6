import { useEffect, useRef, useState } from "react";
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
      // Clipboard access can be denied; the mailto link remains available.
    }
  };

  return (
    <footer id="contact" aria-labelledby="contact-title" className="resume-container pb-14">
      <div className="resume-section">
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
              <FiMail aria-hidden="true" className="h-3.5 w-3.5 text-[#e2e8f0]" />
              <span className="figma-link-text">{profile.email}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="figma-badge cursor-pointer gap-1.5 transition-colors hover:bg-[#475569] hover:text-[#f1f5f9]"
            >
              {copied ? (
                <FiCheck aria-hidden="true" className="h-3 w-3 text-emerald-400" />
              ) : (
                <FiCopy aria-hidden="true" className="h-3 w-3" />
              )}
              <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
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
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748b]">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-3">
          <span>{t.footer.built}</span>
          <a
            href="#home"
            aria-label={t.footer.top}
            className="inline-flex h-7 w-7 items-center justify-center rounded-[4px] bg-[#334155] text-[#cbd5e1] transition-colors hover:bg-[#475569] hover:text-[#f1f5f9]"
          >
            <FiArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
