import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { id: 1, name: "Brand Identity", category: "Design", metrics: "120k Views" },
  { id: 2, name: "Motion Design", category: "Animation", metrics: "+45% Growth" },
  { id: 3, name: "Web Experience", category: "Development", metrics: "Awwwards Site of the Day" },
  { id: 4, name: "App Design", category: "Product", metrics: "10k+ Downloads" },
  { id: 5, name: "Campaign", category: "Art Direction", metrics: "Global Reach" },
  { id: 6, name: "Editorial", category: "Typography", metrics: "Featured in Print" },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-sm font-mono text-gray-400 mb-4">(01) RECENT WORK</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">My Portfolio.</h2>
          </div>
          <button className="flex items-center gap-2 font-mono uppercase text-sm font-bold pb-2 border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition-colors w-fit">
            View All <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-2 uppercase">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded-md">{project.metrics}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
