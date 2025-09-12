// src/App.jsx
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";
import Spotlight from "./components/SpotLight";
export default function App() {
  return (
    <Spotlight size="420px" disableOnTouch={true}>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div class="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main className="ml-[25%] w-3/4 p-12 space-y-20">
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </Spotlight>
  );
}
