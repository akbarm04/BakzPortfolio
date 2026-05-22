import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";

const EMAIL = "hello@alexrivera.co";

const QUICK_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const SERVICES_LIST = [
  "Web Development",
  "Data Science",
  "Machine Learning",
  "UI/UX Design",
  "API Integration",
  "Consulting",
];

const SOCIALS = [
  { Icon: Github, label: "GitHub", href: "https://github.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Left col — brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h3 className="text-2xl font-bold tracking-tighter mb-2">
              Akbar Maulana
            </h3>
            <p className="text-white/50 text-sm font-mono leading-relaxed mb-8 max-w-xs">
              A developer exploring data science and ML. Building digital
              experiences and sharing the journey.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8 text-sm font-mono">
              <div className="flex items-center gap-3 text-white/50">
                <MapPin size={14} className="shrink-0" />
                <span>Bandung, West Java &bull; Remote Friendly</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Mail size={14} className="shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                Let's Work Together
              </button>
              <button className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full text-xs font-mono uppercase tracking-widest hover:border-white/60 transition-colors">
                <Mail size={12} />
                Newsletter
              </button>
            </div>
          </motion.div>

          {/* Middle col — services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/60 hover:text-white transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right col — quick links + socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 mb-10">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-4">
              Follow Me
            </h4>
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/30">
          <p>
            © {new Date().getFullYear()} Akbar Maulana. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/60 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
