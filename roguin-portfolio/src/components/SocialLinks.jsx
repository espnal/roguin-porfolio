// src/components/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 text-gray-400">
      <a
        href="https://github.com/tuusuario"
        target="_blank"
        className="hover:text-white">
        <FaGithub size={20} />
      </a>
      <a
        href="https://linkedin.com/in/tuusuario"
        target="_blank"
        className="hover:text-white">
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://instagram.com/tuusuario"
        target="_blank"
        className="hover:text-white">
        <FaInstagram size={20} />
      </a>
    </div>
  );
}
