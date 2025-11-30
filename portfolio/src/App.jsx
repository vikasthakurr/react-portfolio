import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import skills from "./data/skills.js";
import project from "./data/project.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skill skills={skills} />
        <Projects projects={project} />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
