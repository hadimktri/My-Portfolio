import Intro from "./pages/Intro";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";
import Projects from "./experiences/Projects";


export default function Contents() {
  return (
    <div className="text-sm md:text-base tracking-wide px-4 sm:px-16 md:ml-24 w-full">
      <Intro />
      <About />
      <Education />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}
