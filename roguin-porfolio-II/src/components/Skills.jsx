import React, { useEffect, useRef, useCallback } from "react";

// Data structure for all skills
const SKILLS_DATA = [
  // Frontend / Mobile Development
  {
    name: "JavaScript",
    level: 90,
    category: "Frontend / Mobile",
    icon: "fas fa-code",
  },
  {
    name: "ReactJS",
    level: 80,
    category: "Frontend / Mobile",
    icon: "fas fa-laptop-code",
  },
  {
    name: "React Native",
    level: 35,
    category: "Frontend / Mobile",
    icon: "fas fa-mobile-alt",
  },
  {
    name: "Expo",
    level: 35,
    category: "Frontend / Mobile",
    icon: "fas fa-rocket",
  },
  {
    name: "HTML5, CSS3",
    level: 90,
    category: "Frontend / Mobile",
    icon: "fas fa-code-branch",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "Frontend / Mobile",
    icon: "fas fa-drafting-compass",
  },

  // Backend / Database
  {
    name: "Node.js",
    level: 80,
    category: "Backend / Database",
    icon: "fas fa-server",
  },
  {
    name: "ASP.NET Core MVC",
    level: 65,
    category: "Backend / Database",
    icon: "fas fa-cogs",
  },
  {
    name: "Blazor Server",
    level: 65,
    category: "Backend / Database",
    icon: "fas fa-layer-group",
  },
  {
    name: "PHP",
    level: 45,
    category: "Backend / Database",
    icon: "fas fa-terminal",
  },
  {
    name: "SQLite",
    level: 55,
    category: "Backend / Database",
    icon: "fas fa-database",
  },
  {
    name: "SQL Server",
    level: 55,
    category: "Backend / Database",
    icon: "fas fa-database",
  },
  {
    name: "Entity Framework Core",
    level: 70,
    category: "Backend / Database",
    icon: "fas fa-project-diagram",
  },

  // Tools / Collaboration
  {
    name: "Git & GitHub",
    level: 85,
    category: "Tools / Collaboration",
    icon: "fas fa-code-commit",
  },
  {
    name: "RESTful APIs",
    level: 80,
    category: "Tools / Collaboration",
    icon: "fas fa-plug",
  },
  {
    name: "Responsive Design",
    level: 90,
    category: "Tools / Collaboration",
    icon: "fas fa-mobile-alt",
  },
  {
    name: "Team Collaboration",
    level: 85,
    category: "Tools / Collaboration",
    icon: "fas fa-users",
  },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);

  // Group skills by category
  const skillsByCategory = SKILLS_DATA.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(skillsByCategory);
  const categoriesCount = categories.length;

  // Hook to determine the bar color
  const getBarColor = useCallback(() => {
    return "bg-accent"; // Acquainted (45%)
  }, []);

  // IntersectionObserver logic to handle the animation on view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll(".skill-item-v2");
            skillItems.forEach((item) => {
              const level = parseInt(item.getAttribute("data-level"), 10);
              const progressBar = item.querySelector(".progress-bar-v2");
              if (progressBar) {
                // Apply the width with a small delay to ensure the transition is visible
                setTimeout(() => {
                  progressBar.style.width = `${level}%`;
                }, 100);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // 50% visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className=" text-gray-100 my-20">
      <div className="max-w-7xl mx-auto">
        <hr className="border-gray-600 mb-12" />
        {/* Skills Container by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {categories.map(([category, skills], index) => {
            // Logic for a single column to span both slots and center itself
            // when categories count is 1 (index 0) or 3 (index 2) in a 2-column layout.
            const isLoneColumn =
              categoriesCount === 1 || (categoriesCount === 3 && index === 2);

            // Classes for centering and spanning on large screens
            const loneColumnClasses = isLoneColumn
              ? "lg:col-span-2 lg:max-w-lg lg:mx-auto"
              : "";

            return (
              <div
                key={category}
                className={`p-6 bg-rgb(45 212 191 / 0.1) rounded-xl shadow-lg ${loneColumnClasses}`}>
                <h3 className="text-xl font-semibold mb-6 text-white-400 border-b border-gray-700 pb-2">
                  {category}
                </h3>
                <div
                  className={`${
                    isLoneColumn ? "flex flex-wrap gap-6" : "space-y-4"
                  }`}>
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`skill-item-v2 ${
                        isLoneColumn ? "flex-1 min-w-[200px]" : ""
                      }`}
                      data-level={skill.level}>
                      <div className="flex items-center space-x-3 my-3">
                        {/* Larger Icons: text-2xl for size and w-8 for stable alignment */}
                        <i
                          className={`${skill.icon} text-white-500 text-2xl w-8 text-center`}></i>
                        <span className="text-gray-200">{skill.name}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-gray-700 rounded-full mt-1.5">
                        <div
                          className={`progress-bar-v2 h-full rounded-full transition-all duration-1500 ease-out ${getBarColor(
                            skill.level
                          )}`}
                          style={{ width: "0%" }} // Initial 0% width for animation
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
