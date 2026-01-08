import React from "react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import StarSparkles from "./components/Spec";


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
    </div>

    
  );
};

export default App;