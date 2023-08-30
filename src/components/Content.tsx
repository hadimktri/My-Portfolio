import Intro from "./pages/Intro";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";

export default function Content() {
  return (
    <div className="flex flex-col tracking-wide items-center ">
      <Intro />
      <About />
      <Education />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}
