import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
const profilePhoto = "/photo.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 relative overflow-hidden bg-white"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-5 md:px-16 lg:px-28 xl:px-36 relative z-10">
        {/* Top row — status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-gray-600">
              Available for opportunities
            </span>
          </div>
          <span className="hidden md:block text-xs font-mono text-gray-300 tracking-widest">
            Portfolio — 2026
          </span>
        </motion.div>

        {/* Main grid — on mobile: photo first, text second */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Photo — order-1 on mobile (shows first), order-2 on lg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative border offset */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-[2rem] border-2 border-gray-200 z-0" />

              {/* Photo container — smaller on mobile */}
              <div className="relative z-10 w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[300px] md:h-[400px] lg:w-[320px] lg:h-[430px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale"
                  style={{ objectPosition: "50% 42%" }}
                />
                {/* subtle dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-4 md:-bottom-6 md:-left-6 bg-black text-white rounded-2xl px-3 py-2 md:px-4 md:py-3 text-xs font-mono shadow-xl z-20"
              >
                <p className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-widest mb-0.5">
                  Based in
                </p>
                <p className="font-bold text-xs md:text-sm">Indonesia</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text — order-2 on mobile (shows second), order-1 on lg */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(3rem,12vw,8rem)] font-bold leading-[0.88] tracking-tighter mb-6 md:mb-8"
            >
              AKBAR
              <br />
              <span className="text-gray-300">MAULANA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-sm md:text-lg font-mono text-gray-500 max-w-sm mb-8 md:mb-12 leading-relaxed"
            >
              Full-Stack Developer &amp; aspiring Data Scientist, building
              useful things with code — and learning ML along the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.42,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <button
                onClick={() => scrollToSection("work")}
                className="group inline-flex items-center justify-center gap-3 bg-black text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-xs md:text-sm font-mono uppercase tracking-widest hover:bg-gray-800 active:scale-95 transition-all duration-200"
              >
                See My Work
                <ArrowDownRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-3 border-2 border-black text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full text-xs md:text-sm font-mono uppercase tracking-widest hover:bg-gray-50 active:scale-95 transition-all duration-200"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-14 md:mt-20 flex items-center gap-3 text-gray-300"
        >
          <div className="w-8 h-px bg-gray-200" />
          <span className="text-[10px] font-mono uppercase tracking-widest">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
