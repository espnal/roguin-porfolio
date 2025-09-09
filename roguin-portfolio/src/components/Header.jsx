export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-3xl font-bold">Roguin Peña</h1>
        <p className="mt-2 text-textSecondary">Front End Developer</p>
        <nav className="mt-10 space-y-4">
          <a href="#about" className="block text-accent hover:underline">
            About
          </a>
          <a href="#experience" className="block text-accent hover:underline">
            Experience
          </a>
          <a href="#projects" className="block text-accent hover:underline">
            Projects
          </a>
        </nav>
      </div>
      <div className="flex space-x-4 text-textSecondary">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </header>
  );
}
