import React from "react";
import { motion } from "framer-motion";
const profilePhoto = "/photo.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-28 xl:px-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] font-mono text-gray-400 mb-4 tracking-[0.3em] uppercase">
            (02) About Me
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            About me.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: tilted photo card */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, y: 20 }}
            whileInView={{ opacity: 1, rotate: -4, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: -1, scale: 1.02 }}
            className="relative flex justify-center"
          >
            {/* Shadow card behind */}
            <div
              className="absolute inset-0 rounded-[2rem] bg-gray-100 border border-gray-200 shadow-lg"
              style={{ transform: "rotate(3deg) translateX(10px) translateY(6px)" }}
            />

            {/* Main photo card */}
            <div className="relative w-full max-w-[360px] bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>

              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  className="w-full h-full object-cover grayscale"
                  style={{ objectPosition: "50% 42%" }}
                />
              </div>

              {/* Name tag at bottom */}
              <div className="px-5 py-4 border-t border-gray-100">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  Developer & Data Science Learner
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-12">
              A developer who loves building things on the web — from clean
              frontends to solid backends. Currently diving into data science and
              machine learning, turning curiosity into real projects one commit
              at a time.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
              {[
                { value: "3+", label: "Years Coding" },
                { value: "30+", label: "Projects Shipped" },
                { value: "∞", label: "Bugs Fixed" },
                { value: "100%", label: "Still Learning" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                >
                  <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
