import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");

  // Scroll spy functionality
  useEffect(() => {
    const sections = ["about", "skills", "experience", "projects"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[50%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold">Roguin Peña</h1>
        <p className="mt-2 text-textSecondary">Software Developer</p>
        <p class="mt-4 max-w-xs leading-normal text-textSecondary">
          I develop thoughtful, maintainable solutions that bring clarity and
          impact to the web.
        </p>
        <nav className="mt-10 space-y-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                class={`group flex items-center py-3 ${
                  isActive ? "active" : ""
                }`}
                href={`#${item.id}`}>
                <span
                  class={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
                  }`}></span>
                <span
                  class={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    isActive ? "text-slate-200" : "text-slate-500"
                  }`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
      <Footer />
    </header>
  );
}
