import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Globe, GitMerge, BarChart3 } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    number: "01",
    description:
      "Building fast, responsive, and accessible web applications from scratch — frontend to backend, end to end.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    number: "02",
    description:
      "Designing and building RESTful APIs, database schemas, and server-side logic that is clean and scalable.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    number: "03",
    description:
      "Exploring datasets, finding patterns, and turning raw numbers into clear, actionable insights with Python.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    number: "04",
    description:
      "Building and experimenting with ML models — from data preparation to training, evaluation, and deployment.",
  },
  {
    icon: Code2,
    title: "Code Review",
    number: "05",
    description:
      "Reviewing codebases for quality, performance, and maintainability. Sharing feedback that actually helps.",
  },
  {
    icon: GitMerge,
    title: "Technical Consulting",
    number: "06",
    description:
      "Helping teams pick the right tools, architect solutions, and make technical decisions with confidence.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
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
