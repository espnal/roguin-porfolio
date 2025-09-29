import Footer from "./Footer";
export default function Header() {
  return (
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[58%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold">Roguin Peña</h1>
        <p className="mt-2 text-textSecondary">Software Developer</p>
        <p class="mt-4 max-w-xs leading-normal text-textSecondary">
          I develop thoughtful, maintainable solutions that bring clarity and
          impact to the web.
        </p>
        <nav className="mt-10 space-y-4">
          <a class="group flex items-center py-3 active" href="#about">
            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
          <a class="group flex items-center py-3 active" href="#experience">
            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
          <a class="group flex items-center py-3 active" href="#projects">
            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </a>
        </nav>
      </div>
      <Footer />
    </header>
  );
}
