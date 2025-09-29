// src/components/Projects.jsx
import { FiExternalLink } from "react-icons/fi";
import bookMeImg from "../assets/images/BookMe.png";
import ReaderX from "../assets/images/readerx-translator.png";
import quiz from "../assets/images/quizapp.jpg";
import recipesapp from "../assets/images/recipesapp.jpg";

export default function Projects() {
  const projects = [
    {
      name: "ReaderX",
      desc: "A modern, user-friendly web application designed to help language learners read and understand texts in multiple languages with ease. Built with React and featuring real-time translations, word saving, and progress tracking.",
      link: "https://github.com/espnal/readerx",
      img: ReaderX,
    },
    {
      name: "Car Rental App",
      desc: "BookMe is a .NET Blazor web application that allows businesses to rent out vehicles on an hourly or daily basis. It features a vehicle checkout system including CRUD management, role-based access control, and responsive design for both desktop and mobile users.",
      link: "https://github.com/espnal/CSE325-team",
      img: bookMeImg,
    },
    {
      name: "Quiz App",
      desc: " An interactive question-and-answer application built with React. It allows users to test their knowledge on different topics, displaying scores in real time and providing immediate feedback. Designed with a simple and attractive interface, focused on usability and fun learning.",
      link: "quiz-app-espnal.vercel.app",
      img: quiz,
    },
    {
      name: "Recipes App",
      desc: " An intuitive app for exploring, searching, and saving recipes. It allows users to discover dishes organized by category, view detailed ingredients, and follow step-by-step instructions. It includes options for marking favorite recipes and managing personal collections, all in a modern, easy-to-use interface.",
      link: "recipes-app-view.vercel.app",
      img: recipesapp,
    },
  ];

  return (
    <section id="projects" className="mb-16 md:mb-24 lg:mb-36 cursor-pointer">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-12">
        Projects
      </h2>

      <ul>
        {projects.map((p, i) => (
          <li
            key={i}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 mb-12 hover:opacity-100">
            {/* Overlay hover effect */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition group-hover:bg-slate-800/50 group-hover:drop-shadow-lg sm:block" />

            {/* Content */}
            <div className="z-10 order-2 sm:col-span-6">
              <h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-[#46AAB4] text-lg transition-colors">
                  {p.name}
                  <FiExternalLink className="ml-2 opacity-70" />
                </a>
              </h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>
            </div>

            {/* Thumbnail */}
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover rounded-lg border-2 border-slate-200/10 
           transition sm:order-1 sm:col-span-6 group-hover:border-slate-200/30"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
