export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <p className="text-textSecondary leading-relaxed mb-4">
        I’m a backend developer passionate about building scalable, secure, and
        high-performance systems that serve as the backbone of great digital
        experiences. My favorite work lies at the intersection of clean
        architecture and efficient data handling, creating solutions that are
        reliable, maintainable, and optimized for real-world performance.
      </p>
      <p className="text-textSecondary leading-relaxed mb-4">
        Currently, I'm focused on designing and implementing backend services
        and APIs, making sure they integrate seamlessly with front-end
        applications while maintaining robustness, security, and scalability. I
        enjoy working with databases, optimizing queries, and ensuring that
        every part of the system runs smoothly behind the scenes.
      </p>
      <p className="text-textSecondary leading-relaxed mb-4">
        In the past, I've had the opportunity to contribute to software projects
        across different contexts, from managing structured business workflows
        to experimenting with solutions that improve user interactions through
        solid backend engineering. I've also explored areas like ASP.NET Core,
        Blazor, and Entity Framework, building systems that connect business
        logic with real data in meaningful ways.
      </p>
      <p className="text-textSecondary leading-relaxed mb-4">
        In my spare time, I'm usually at the gym, watching baseball, gaming, or
        spending time with my wife and family.
      </p>
    </section>
  );
}
