import React from "react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import StarSparkles from "./components/Effects/Sparkle";
import Resume from "./components/Resume";

const App: React.FC = () => {
  return (
    <div className="scroll-container">
      <StarSparkles />
      <section className="Page" id="Intro-Page">
        <Intro />
      </section>

      <section className="Page" id="About-Me-Page">
        <AboutMe />
      </section>

      <section className="Page" id="Projects-Page">
        <Projects />
      </section>

      <section className="Page" id="Resume-Page">
        <Resume />
      </section>
    </div>

    
  );
};

export default App;