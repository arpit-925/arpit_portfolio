import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SectionDivider from "./components/SectionDivider";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <SectionDivider />
      <About />

      <SectionDivider />
      <Skills />

      <SectionDivider />
      <Projects />

      <SectionDivider />
      <Contact />
    </div>
  );
};

export default App;
