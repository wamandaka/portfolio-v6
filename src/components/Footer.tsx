import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiCopy, FiCheck, FiArrowUp, FiExternalLink } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wamandaka/",
    icon: <FaLinkedin size={20} />,
    handle: "in/wamandaka",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    url: "https://github.com/wamandaka",
    icon: <FaGithub size={20} />,
    handle: "github.com/wamandaka",
    color: "hover:text-white",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kang_piscokk/",
    icon: <FaInstagram size={20} />,
    handle: "@kang_piscokk",
    color: "hover:text-[#E4405F]",
  },
];

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "wamandaka122@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 relative overflow-hidden">
      {/* Contact CTA Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-3xl border border-cyan-500/30 relative overflow-hidden text-center shadow-2xl shadow-cyan-950/30">
          {/* Subtle Glow Orb inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Let's Collaborate
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
            Ready to Build <span className="gradient-accent">High-Impact</span> Digital Solutions?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you have an enterprise project inquiry, frontend engineering questions, or want to discuss scalable web solutions — feel free to reach out.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <RiSendPlaneFill size={18} />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full font-medium text-sm sm:text-base text-slate-200 glass-panel hover:bg-slate-800/80 border border-slate-700 hover:border-slate-500 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <FiCheck className="text-emerald-400" size={18} />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy className="text-cyan-400" size={18} />
                  <span>Copy: {email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 pt-8 border-t border-slate-800/80">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/60 group ${social.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-400 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {social.name}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono truncate max-w-[120px]">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <FiExternalLink className="text-slate-500 group-hover:text-slate-300 transition-colors" size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Waman Daka Wardani.</span>
          <span>•</span>
          <span className="text-cyan-400/80">Enterprise Web Specialist</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">
            Built with React, TypeScript & Tailwind CSS
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl glass-panel hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
