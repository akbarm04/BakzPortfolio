import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-sm font-mono text-gray-400 mb-4">(02) ABOUT ME</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">About me.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] bg-gray-900 rounded-3xl w-full max-w-md mx-auto overflow-hidden relative"
          >
            {/* Placeholder for photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-900"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-12">
              A multidisciplinary designer and developer crafting digital experiences that live at the intersection of art and technology. With a focus on clarity, motion, and detail.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-4xl font-bold mb-2">5+</p>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-wide">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">12</p>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-wide">Awards Won</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-wide">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
