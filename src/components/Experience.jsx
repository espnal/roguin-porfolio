// components/Experience.jsx
import React from "react";

const experiences = [
  {
    date: "Spring Semester 2024", // Usamos el semestre pasado como fecha
    title: "Full-Stack Developer (Team Project)",
    company: "BookMe: Vehicle Rental Platform", // Nombre del Proyecto
    companyUrl: "https://github.com/espnal/bookme-repo", // Enlace a tu repositorio del proyecto (si existe)
    description:
      "Collaborated in an Agile team to develop 'BookMe,' a .NET Blazor web application for hourly/daily vehicle rentals. Focused on implementing a robust role-based access control system (ASP.NET Identity) and developing the Vehicle Management** and **Booking Workflow** features. Actively participated in daily stand-ups and used GitHub for collaborative version control (branching, pull requests, code reviews) to ensure timely delivery and code quality.",
    technologies: [
      "ASP.NET Core",
      "Blazor Server",
      "SQLite",
      "ASP.NET Identity",
      "Agile/Scrum",
      "GitHub",
    ],
  },
  {
    date: "February 2023 - June 2023",
    title: "Software Developer",
    company: "Freelance",
    companyUrl: "https://github.com/espnal",
    description:
      "Created a platform for organized management and effective scheduling of appointments for a dental office. Used React.js to build a dynamic and responsive user interface and implemented MongoDB to efficiently store and manage service data. Faced technical challenges and made strategic decisions to optimize performance and usability.",
    technologies: [
      "React.js",
      "MongoDB",
      "JavaScript",
      "Responsive Web Development",
    ],
  },
  {
    date: "August 2022 - September 2022",
    title: "Web Developer Analyst",
    company: "Freelance",
    companyUrl: "https://github.com/espnal",
    description:
      "Managed and analyzed errors in responsive design, proposing and implementing new designs according to the business model to correct inconsistencies. Improved SEO on the website by optimizing HTML code, content, and overall structure. Documented requirements and streamlined the project design program.",
    technologies: [
      "JavaScript",
      "Responsive Design",
      "SEO",
      "Project Documentation",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-5 lg:px-0 lg:scroll-mt-28 cursor-pointer"
      aria-label="Work experience">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>

      <ol className="group/list">
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            className="mb-12 relative group transition-all sm:grid sm:grid-cols-8 sm:gap-6 ">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden transition rounded-md lg:block " />

            <span
              className="z-10 mb-2 text-xs font-medium uppercase tracking-wide text-slate-400 sm:col-span-2"
              aria-label={exp.date}>
              {exp.date}
            </span>

            <div className="sm:col-span-6">
              <h3
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                aria-label={`${exp.title} at ${exp.company}`}>
                <span>
                  {exp.title} · {exp.company}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                {exp.description}
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used">
                {exp.technologies.map((tech, tIdx) => (
                  <li key={tIdx} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
