// src/App.jsx
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";
import Spotlight from "./components/SpotLight";
export default function App() {
  return (
    <Spotlight size="820px" disableOnTouch={true}>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Header />
          <main className="pt-12 lg:pt-24 lg:w-[55%] lg:py-24">
            <About />
            <Skills />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </Spotlight>
  );
}
