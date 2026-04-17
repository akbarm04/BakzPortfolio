import React from "react";
import { motion } from "framer-motion";

const TOOLS = [
  "Figma",
  "React",
  "TypeScript",
  "Framer",
  "Next.js",
  "Tailwind CSS",
  "After Effects",
  "Webflow",
  "Three.js",
  "Notion",
  "Illustrator",
  "Vercel",
  "Spline",
  "GSAP",
];

function MarqueeRow({
  items,
  direction = 1,
  speed = 30,
}: {
  items: string[];
  direction?: 1 | -1;
  speed?: number;
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex items-center gap-0 w-max"
        animate={{ x: direction === 1 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((tool, i) => (
          <div
            key={i}
            className="group flex items-center gap-6 px-6"
          >
            <span className="text-sm font-mono uppercase tracking-widest text-gray-400 whitespace-nowrap group-hover:text-black transition-colors duration-300 cursor-default select-none">
              {tool}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-200 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

interface ToolsMarqueeProps {
  label?: string;
}

export function ToolsMarquee({ label = "Tools & Technologies" }: ToolsMarqueeProps) {
  return (
    <section className="py-16 border-y border-gray-100 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gray-300">
          {label}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <MarqueeRow items={TOOLS} direction={1} speed={35} />
        <MarqueeRow items={[...TOOLS].reverse()} direction={-1} speed={28} />
      </div>
    </section>
  );
}

const CLIENTS = [
  "Google",
  "Apple",
  "Spotify",
  "Airbnb",
  "Stripe",
  "Notion",
  "Linear",
  "Vercel",
  "GitHub",
  "Figma",
];

export function ClientsMarquee() {
  return (
    <section className="py-14 border-y border-gray-100 overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gray-300">
          Trusted by teams at
        </p>
      </div>
      <MarqueeRow items={CLIENTS} direction={1} speed={25} />
    </section>
  );
}
