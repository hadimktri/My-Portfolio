import Intro from "./Intro";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";

export default function Content() {
  return (
    <div className="flex flex-col tracking-wide items-center w-screen">
      <Intro />
      <About />
      <Education />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}
