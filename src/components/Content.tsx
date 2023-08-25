import About from "./About";
import Intro from "./Intro";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Content() {
  return (
    <div className="mt-10 flex flex-col items-center px-40">
      <Intro />
      <About />
      <Education />
      <Projects />
      <Experience />
    </div>
  );
}
