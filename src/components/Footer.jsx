// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-12 lg:mt-0">
      <div className="flex space-x-6 text-slate-400 text-2xl">
        <a href="#" className="hover:text-accent transition-colors">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          <SiCodepen />
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
