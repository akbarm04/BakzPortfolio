import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    name: "Brand Identity",
    category: "Design",
    tags: ["Branding", "Strategy"],
    metrics: "120K Views",
    growth: "+15x",
    size: "large",
  },
  {
    id: 2,
    name: "Motion Design",
    category: "Animation",
    tags: ["Motion", "After Effects"],
    metrics: "183K Views",
    growth: "+30x",
    size: "small",
  },
  {
    id: 3,
    name: "Web Experience",
    category: "Development",
    tags: ["React", "Creative Dev"],
    metrics: "Awwwards SOTD",
    growth: "+3.3x",
    size: "small",
  },
  {
    id: 4,
    name: "App Design",
    category: "Product",
    tags: ["UI/UX", "Figma"],
    metrics: "10K+ Downloads",
    growth: "+8x",
    size: "large",
  },
  {
    id: 5,
    name: "Campaign",
    category: "Art Direction",
    tags: ["Campaign", "Visual"],
    metrics: "Global Reach",
    growth: "+22x",
    size: "small",
  },
  {
    id: 6,
    name: "Editorial",
    category: "Typography",
    tags: ["Print", "Editorial"],
    metrics: "Featured",
    growth: "+5x",
    size: "small",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-mono text-gray-400 mb-4 tracking-[0.3em] uppercase">
              (01) Recent Work
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              My Portfolio.
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-400 transition-colors w-fit"
          >
            View All Projects
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group cursor-pointer"
            >
              {/* Image card */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                {/* Background fill */}
                <div className="absolute inset-0 bg-gray-900 transition-transform duration-700 ease-out group-hover:scale-105" />

                {/* Inner texture lines */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)",
                  }}
                />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-black" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                </div>
              </div>

              {/* Metrics row */}
              <div className="flex items-center gap-2 px-1">
                <span className="text-xs font-mono text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  {project.growth}
                </span>
                <span className="text-xs font-mono text-gray-400">{project.metrics}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
