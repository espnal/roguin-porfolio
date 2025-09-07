export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50 px-6 py-4">
      <ul className="flex space-x-6 text-white">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
