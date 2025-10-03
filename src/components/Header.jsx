import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

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

  const handleNavClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className="relative lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[50%] lg:flex-col lg:justify-between lg:py-24">
      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="absolute right-4 top-2 z-20 inline-flex items-center justify-center rounded-md bg-transparent p-0 text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Roguin Peña</h1>
        <p className="mt-2 text-textSecondary">Software Developer</p>
        <p className="mt-4 max-w-xs leading-normal text-textSecondary">
          I develop thoughtful, maintainable solutions that bring clarity and
          impact to the web.
        </p>

        {/* Nav */}
        <nav
          className={
            "mt-10 space-y-4 lg:block " + (isOpen ? "block" : "hidden")
          }>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                className={`group flex items-center py-3 ${
                  isActive ? "active" : ""
                }`}
                href={`#${item.id}`}
                onClick={handleNavClick}>
                <span
                  className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
                  }`}></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    isActive ? "text-slate-200" : "text-slate-500"
                  }`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
      {/* Social icons/footer at the end */}
      <Footer />
    </header>
  );
}
