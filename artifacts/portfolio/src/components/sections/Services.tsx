import React from "react";
import { motion } from "framer-motion";
import { Code2, MonitorPlay, Paintbrush, PenTool } from "lucide-react";

const SERVICES = [
  {
    icon: <MonitorPlay size={32} strokeWidth={1.5} />,
    title: "Web Design",
    description: "Creating digital experiences that are intuitive, engaging, and memorable. Focusing on visual hierarchy and interaction."
  },
  {
    icon: <Code2 size={32} strokeWidth={1.5} />,
    title: "Development",
    description: "Translating designs into pixel-perfect, performant, and accessible code using modern frontend technologies."
  },
  {
    icon: <Paintbrush size={32} strokeWidth={1.5} />,
    title: "Brand Identity",
    description: "Building cohesive visual systems that communicate your values and distinguish you from the competition."
  },
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: "UI/UX Design",
    description: "Designing systematic interfaces and user flows that prioritize usability without sacrificing aesthetic quality."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-sm font-mono text-gray-400 mb-4">(04) SERVICES</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">What I Do.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 group"
            >
              <div className="mb-8 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
