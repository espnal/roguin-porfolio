// components/Experience.jsx
import React from "react";

const experiences = [
  {
    date: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    companyUrl: "https://www.klaviyo.com",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    date: "2018 — 2024",
    title: "Lead Engineer",
    company: "Upstatement",
    companyUrl: "https://www.upstatement.com",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
  },
  {
    date: "July — Dec 2017",
    title: "UI Engineer Co-op",
    company: "Apple",
    companyUrl: "https://www.apple.com",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    technologies: ["MusicKit.js", "9to5Mac", "The Verge"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-5 lg:px-0 lg:scroll-mt-28"
      aria-label="Work experience">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>

      <ol className="group/list">
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            className="mb-12 relative group transition-all sm:grid sm:grid-cols-8 sm:gap-6 hover:opacity-100 lg:hover:opacity-50 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <header className="absolute -inset-x-4 -inset-y-2.5 hidden transition rounded-md lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg" />

            <header
              className="z-10 mb-2 text-xs font-medium uppercase tracking-wide text-slate-400 sm:col-span-2"
              aria-label={exp.date}>
              {exp.date}
            </header>

            <div className="sm:col-span-6">
              <h3 className="text-base font-medium leading-tight text-slate-200">
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${exp.title} at ${exp.company}`}>
                  <span>
                    {exp.title} · {exp.company}
                  </span>
                </a>
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
