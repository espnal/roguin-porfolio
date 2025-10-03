// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-12 lg:mt-0">
      <div className="flex justify-center lg:justify-start space-x-6 text-slate-400 text-3xl lg:text-2xl">
        <a
          href="https://github.com/espnal"
          className="hover:text-accent transition-colors">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/roguin-pena/"
          className="hover:text-accent transition-colors">
          <FaLinkedin />
        </a>
        <a
          href="mailto:ro.guin31@gmail.com?subject=Hello from Portfolio&body=Hi Roguin, I saw your portfolio and would like to get in touch."
          className="hover:text-accent transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          <SiGmail />
        </a>
      </div>
    </footer>
  );
}
