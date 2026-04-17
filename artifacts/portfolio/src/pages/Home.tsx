import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ToolsMarquee, ClientsMarquee } from "@/components/ToolsMarquee";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <Work />
        <ToolsMarquee label="Tools & Technologies I Use" />
        <About />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
