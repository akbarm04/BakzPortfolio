import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const EMAIL = "hello@alexrivera.co";

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-40 bg-white relative overflow-hidden"
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono text-gray-400 mb-6 tracking-[0.3em] uppercase"
        >
          (05) Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.9] mb-12 max-w-4xl mx-auto"
        >
          Let's get to know
          <br />
          <span className="text-gray-300">each other</span>
        </motion.h2>

        {/* Email pill — opens mailto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={`mailto:${EMAIL}`}
            data-testid="link-email"
            className="group inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full text-base md:text-lg font-mono tracking-tight hover:bg-gray-800 transition-colors duration-200"
          >
            <Mail size={16} className="shrink-0" />
            {EMAIL}
          </a>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 hover:border-black hover:text-black px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-200"
          >
            {copied ? "Copied!" : "Copy email address"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
