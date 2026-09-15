"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Trigger when a section is near the top
        threshold: 0
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-panel-border transition-all duration-300">
      <div className="max-w-[840px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#top" className="font-disp font-bold text-[17.5px] tracking-tight relative group">
          KRISHNA PATEL
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {["experience", "projects", "stack", "about"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`font-mono text-[13px] lowercase tracking-[0.3px] transition-colors duration-200 ${
                  activeSection === item ? "text-accent" : "text-text-dim hover:text-text"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="font-mono text-[13px] font-semibold bg-transparent border border-accent text-accent px-4 py-2 rounded-sm transition-all duration-200 hover:bg-accent hover:text-[#0A0E11]">
              hire_me
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden bg-transparent border-none text-text cursor-pointer p-1.5 rounded z-[101] transition-all duration-200 hover:bg-panel-border ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <Icon name="menu" className={`transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`} />
        </button>

        {/* Mobile Nav */}
        <ul
          className={`absolute top-full left-0 w-full bg-panel border-b border-panel-border p-6 shadow-2xl flex-col gap-5 md:hidden ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          {["experience", "projects", "stack", "about"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-mono text-[13px] lowercase tracking-[0.3px] transition-colors duration-200 ${
                  activeSection === item ? "text-accent" : "text-text-dim hover:text-text"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block font-mono text-[13px] font-semibold bg-transparent border border-accent text-accent px-4 py-2 rounded-sm transition-all duration-200 hover:bg-accent hover:text-[#0A0E11]"
            >
              hire_me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
