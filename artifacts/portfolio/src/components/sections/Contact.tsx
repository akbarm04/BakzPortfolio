import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Send } from "lucide-react";

const EMAIL = "hello@alexrivera.co";

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#111] rounded-3xl p-8 relative shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
          <Mail size={20} className="text-white" />
        </div>

        <h3 className="text-white text-xl font-bold mb-1">Send a message</h3>
        <p className="text-white/40 text-sm font-mono mb-7 leading-relaxed">
          Fill in the form and your default email app will open with everything pre-filled.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/25 text-sm font-mono outline-none focus:border-white/30 transition-colors"
          />
          <input
            required
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/25 text-sm font-mono outline-none focus:border-white/30 transition-colors"
          />
          <textarea
            required
            rows={4}
            placeholder="Tell me about your project or idea..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/25 text-sm font-mono outline-none focus:border-white/30 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-white text-black rounded-2xl py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Open Email App
            <Send size={14} />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export function Contact() {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <AnimatePresence>
        {open && <ContactModal onClose={() => setOpen(false)} />}
      </AnimatePresence>

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

        <div className="container mx-auto px-8 md:px-16 lg:px-28 xl:px-36 relative z-10 text-center">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Email pill — opens modal */}
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full text-base md:text-lg font-mono tracking-tight hover:bg-gray-800 transition-colors duration-200"
            >
              <Mail size={16} className="shrink-0" />
              {EMAIL}
            </button>

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
    </>
  );
}
