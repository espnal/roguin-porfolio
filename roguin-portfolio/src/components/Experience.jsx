// src/components/Experience.jsx
export default function Experience() {
  const jobs = [
    {
      date: "2023 — Present",
      title: "Software Developer · Car Rental Company",
      desc: "Developing internal tools and booking systems with ASP.NET Core and Blazor.",
      skills: ["C#", "Blazor", "Entity Framework"],
    },
    {
      date: "2021 — 2023",
      title: "Frontend Developer · Freelance",
      desc: "Built responsive websites and web apps using React and TailwindCSS.",
      skills: ["React", "TailwindCSS", "JavaScript"],
    },
  ];

  return (
    <section id="experience" className="mb-20">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <div key={i}>
            <p className="text-sm text-gray-400">{job.date}</p>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-300 mt-2">{job.desc}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.skills.map((skill, j) => (
                <span key={j} className="bg-gray-800 px-3 py-1 text-sm rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
