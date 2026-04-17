import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    type: "Self-employed",
    period: "2022 — Present",
    current: true,
    highlights: [
      "Build and ship web applications for clients across various industries.",
      "Specialize in React, TypeScript, and Node.js ecosystems.",
      "Currently expanding into data science and machine learning with Python.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Tech Startup",
    type: "Full-time",
    period: "2021 — 2022",
    current: false,
    highlights: [
      "Developed and maintained frontend features using React and Tailwind CSS.",
      "Collaborated with backend teams to integrate REST APIs.",
      "Improved page load performance by 40% through code splitting and lazy loading.",
    ],
  },
  {
    role: "Data Science Learner",
    company: "Self-Study",
    type: "Ongoing",
    period: "2023 — Present",
    current: false,
    highlights: [
      "Learning Python fundamentals and data manipulation with Pandas and NumPy.",
      "Exploring machine learning concepts with TensorFlow and scikit-learn.",
      "Working through real-world datasets and building end-to-end ML pipelines.",
    ],
  },
  {
    role: "Computer Science",
    company: "University",
    type: "Bachelor's Degree",
    period: "2019 — 2023",
    current: false,
    highlights: [],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50/50">
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
            (03) Work History
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Experience.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200" />

          <div className="flex flex-col gap-0">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 -translate-x-[4.5px] transition-all ${
                    exp.current
                      ? "bg-black border-black"
                      : "bg-white border-gray-300"
                  }`}
                />

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-sm text-gray-500 font-mono mt-0.5">
                      {exp.company}
                      <span className="mx-2 text-gray-300">·</span>
                      {exp.type}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-gray-400 whitespace-nowrap md:text-right shrink-0">
                    {exp.period}
                  </span>
                </div>

                {exp.highlights.length > 0 && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                        <span className="text-sm text-gray-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
