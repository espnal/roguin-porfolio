// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Personal portfolio built with React and TailwindCSS.",
      link: "#",
    },
    {
      name: "Car Rental App",
      desc: "A booking system built with ASP.NET Core and EF Core.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((p, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-300">{p.desc}</p>
            <a href={p.link} className="text-blue-400 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
