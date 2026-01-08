import React from "react";

import "../styles/Global.css";
import "../styles/About-Me.css";
import headshot1 from "../assets/images/HeadShot-3.jpg";
import headshot2 from "../assets/images/HeadShot-2.jpg";
import headshot3 from "../assets/images/HeadShot.jpg";


const AboutMe: React.FC = () => {
  return (
    <div className="about-me-page">
        <div className="mainIntro">
            <div className="introduction">
                <h1 className="title">About Me</h1>
                <h2>I am Cathy Le, a software developer.</h2>
                <p>
                    I'm currently a Computer Science Student at the University of British Columbia,
                    with an interest of creating innovative tools that leverage technology to solve
                    complex problems.
                </p>
                    My background in civil engineering exposed me to some shortcomings in project 
                    controls and data analytics, which sparked my interest in developing solutions
                    to improve efficiency and streamline everyday tasks.
                <p>

                </p>
            </div>

            <div className="headshot-scroll">
                <div className="headshot"><img src={headshot1} alt="Photo 1" /></div>
                <div className="headshot"><img src={headshot2} alt="Photo 2" /></div>
                <div className="headshot"><img src={headshot3} alt="Photo 3" /></div>
            </div>
        </div>
        <h2>Programming Languages</h2>
        

    </div>

  );
};

export default AboutMe;
