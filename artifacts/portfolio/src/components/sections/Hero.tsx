import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-wider">Available for opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6">
              ALEX<br />RIVERA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-3xl text-gray-500 max-w-2xl mb-10 font-mono">
              Creative Developer & Designer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-base h-14 bg-black text-white hover:bg-gray-800"
                onClick={() => scrollToSection("work")}
              >
                See My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 text-base h-14 border-2"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
