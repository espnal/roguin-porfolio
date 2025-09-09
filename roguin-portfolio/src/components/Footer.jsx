// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="absolute bottom-8 left-0 w-full px-6">
      <div className="flex space-x-6 text-slate-400">
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors">
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors">
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://codepen.io/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors">
          <SiCodepen size={20} />
        </a>
        <a
          href="https://instagram.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
}
