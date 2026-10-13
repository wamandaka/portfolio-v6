import { useEffect, useRef, useState } from "react";
import { FiArrowUp, FiCheck, FiCopy } from "react-icons/fi";
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
    <footer id="contact" aria-labelledby="contact-title" className="border-t border-line bg-ink text-paper">
      <div className="page-container py-section">
        <p className="eyebrow mb-4 !text-accent">{t.contact.eyebrow}</p>
        <h2 id="contact-title" className="max-w-[16ch] text-5xl font-extrabold sm:text-6xl lg:text-7xl">
          {t.contact.title}
        </h2>
        <p className="mt-6 max-w-[56ch] text-lg text-line">{t.contact.description}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="btn border-paper bg-paper text-ink hover:border-accent hover:bg-accent"
          >
            {t.contact.email}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="btn cursor-pointer border-line bg-transparent text-paper hover:bg-paper/10"
          >
            {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
            <span aria-live="polite">{copied ? t.contact.copied : profile.email}</span>
            <span className="sr-only">{!copied && ` — ${t.contact.copy}`}</span>
          </button>
        </div>

        <div className="mt-16 border-t border-paper/20 pt-8">
          <h3 className="eyebrow mb-4 !text-line">{t.contact.elsewhere}</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
            {profile.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:!text-accent"
                >
                  {social.name} <span className="text-line">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/20 pt-8 text-sm text-line sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <p>{t.footer.built}</p>
            <a
              href="#home"
              aria-label={t.footer.top}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
            >
              <FiArrowUp aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
