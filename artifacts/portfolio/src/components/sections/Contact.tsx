import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black text-white rounded-t-[3rem] mt-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            Let's work<br/>together.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="mailto:hello@alexrivera.co"
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-xl md:text-2xl font-mono tracking-tight transition-colors border border-white/10"
            >
              hello@alexrivera.co
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Drop a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-transparent border-white/20 h-14 rounded-xl text-white placeholder:text-white/40 focus-visible:ring-white/30"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-white/20 h-14 rounded-xl text-white placeholder:text-white/40 focus-visible:ring-white/30"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="bg-transparent border-white/20 min-h-[150px] rounded-xl text-white placeholder:text-white/40 focus-visible:ring-white/30 resize-none"
                />
              </div>
              <Button size="lg" className="w-full h-14 rounded-xl bg-white text-black hover:bg-gray-200 text-base font-bold">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h4 className="text-sm font-mono text-white/50 mb-4 uppercase tracking-widest">Socials</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black bg-transparent text-white">Twitter / X</Button>
                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black bg-transparent text-white">LinkedIn</Button>
                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black bg-transparent text-white">Dribbble</Button>
                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black bg-transparent text-white">Instagram</Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-mono text-white/50 mb-4 uppercase tracking-widest">Location</h4>
              <p className="text-xl">San Francisco, CA<br/>Remote Friendly</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-mono">
          <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
          <p>Designed with intention.</p>
        </div>
      </div>
    </section>
  );
}
