import React from "react";
import { Link } from "wouter";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold tracking-tighter"
        >
          ALEX RIVERA
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-wide uppercase">
          <button onClick={() => scrollToSection("hero")} className="hover:text-gray-500 transition-colors">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-gray-500 transition-colors">About</button>
          <button onClick={() => scrollToSection("work")} className="hover:text-gray-500 transition-colors">Work</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-gray-500 transition-colors">Services</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-gray-500 transition-colors">Contact</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black mb-1.5 transition-all"></div>
          <div className="w-6 h-0.5 bg-black transition-all"></div>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4 px-6 flex flex-col gap-4 text-sm font-mono uppercase shadow-lg">
          <button onClick={() => scrollToSection("hero")} className="text-left py-2 border-b border-gray-50">Home</button>
          <button onClick={() => scrollToSection("about")} className="text-left py-2 border-b border-gray-50">About</button>
          <button onClick={() => scrollToSection("work")} className="text-left py-2 border-b border-gray-50">Work</button>
          <button onClick={() => scrollToSection("services")} className="text-left py-2 border-b border-gray-50">Services</button>
          <button onClick={() => scrollToSection("contact")} className="text-left py-2">Contact</button>
        </div>
      )}
    </nav>
  );
}
