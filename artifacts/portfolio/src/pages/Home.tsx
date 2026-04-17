import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
      </main>
      <Contact />
    </div>
  );
}
