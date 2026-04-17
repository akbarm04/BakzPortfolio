import React from "react";
import { motion } from "framer-motion";
import { Code2, MonitorPlay, Paintbrush, PenTool, Layers, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: MonitorPlay,
    title: "Web Design",
    number: "01",
    description:
      "Creating digital experiences that are intuitive, engaging, and memorable. Focused on visual hierarchy and smooth interaction.",
  },
  {
    icon: Code2,
    title: "Development",
    number: "02",
    description:
      "Translating designs into pixel-perfect, performant, and accessible code using modern frontend technologies.",
  },
  {
    icon: Paintbrush,
    title: "Brand Identity",
    number: "03",
    description:
      "Building cohesive visual systems that communicate your values and distinguish you from the competition.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    number: "04",
    description:
      "Designing systematic interfaces and user flows that prioritize usability without sacrificing aesthetic quality.",
  },
  {
    icon: Layers,
    title: "Motion Design",
    number: "05",
    description:
      "Bringing interfaces to life with purposeful motion — transitions, micro-interactions, and scroll experiences.",
  },
  {
    icon: Zap,
    title: "Creative Direction",
    number: "06",
    description:
      "Shaping visual strategy and creative vision across campaigns, digital products, and brand touchpoints.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] font-mono text-gray-400 mb-4 tracking-[0.3em] uppercase">
            (04) Services
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            What I Do.
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-3xl overflow-hidden border border-gray-100">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white p-8 md:p-10 relative overflow-hidden hover:bg-black transition-colors duration-500 cursor-default"
              >
                {/* Number */}
                <span className="absolute top-6 right-8 text-xs font-mono text-gray-200 group-hover:text-white/20 transition-colors duration-500">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mb-7 inline-flex p-3 rounded-2xl bg-gray-50 group-hover:bg-white/10 transition-colors duration-500">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-black group-hover:text-white transition-colors duration-500"
                  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Bottom border reveal */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
