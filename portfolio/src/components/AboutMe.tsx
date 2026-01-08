import React from "react";

import "../styles/Global.css";
import "../styles/About-Me.css";
import headshot1 from "../assets/images/HeadShot-3.jpg";
import headshot2 from "../assets/images/HeadShot-2.jpg";
import headshot3 from "../assets/images/HeadShot.jpg";
import python from "../assets/images/icons/python.png";
import racket from "../assets/images/icons/racket.png";
import css from "../assets/images/icons/css.png";
import r from "../assets/images/icons/rstudio.png";
import java from "../assets/images/icons/java.png";
import html from "../assets/images/icons/html.png";
import react from "../assets/images/icons/react.webp";
import firebase from "../assets/images/icons/firebase.png";
import sanity from "../assets/images/icons/sanity.png";
import jira from "../assets/images/icons/jira.png";
import figma from "../assets/images/icons/figma.png";
import github from "../assets/images/icons/github.svg";
import c from "../assets/images/icons/c.png";



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
        <div className="tech-icons">
            <div className="icon">
                <img src={python} alt="Python" className="custom-icon" />
                <span>Python</span>
            </div>               
            <div className="icon">
                <img src={c} alt="C/C++" className="custom-icon" />
                <span>C++</span>
            </div>

            <div className="icon">
                <img src={java} alt="Java" className="custom-icon" />
                <span>Java</span>
            </div>

            <div className="icon">
                <img src={r} alt="R" className="custom-icon" />
                <span>R</span>
            </div>

            <div className="icon">
                <img src={css} alt="CSS" className="custom-icon" />
                <span>CSS</span>
            </div>

            <div className="icon">
                <img src={html} alt="HTML" className="custom-icon" />
                <span>HTML</span>
            </div>


            <div className="icon">
                <img src={racket} alt="Racket" className="custom-icon" />
                <span>Racket</span>
            </div>
        </div>

        <h2>Tools & Platforms</h2>
            <div className="tools-icons">
                <div className="icon">
                    <div className="icon">
                        <img src={github} alt="GitHub" className="custom-icon" />
                        <span>GitHub</span>
                    </div>
                </div>

                <div className="tools-icons">
                    <div className="icon">
                        <img src={jira} alt="Jira" className="custom-icon" />
                        <span>Jira</span>
                    </div>
                </div>
                <div className="tools-icons">
                    <div className="icon">
                        <img src={figma} alt="Figma" className="custom-icon" />
                        <span>Figma</span>
                    </div>
                </div>

                <div className="tools-icons">
                    <div className="icon">
                        <img src={sanity} alt="Sanity" className="custom-icon" />
                        <span>Sanity</span>
                    </div>
                </div>
                <div className="icon">
                    <div className="icon">
                        <img src={firebase} alt="Firebase" className="custom-icon" />
                        <span>Firebase</span>
                    </div>
                </div>

                <div className="tools-icons">
                    <div className="icon">
                        <img src={react} alt="React" className="custom-icon" />
                        <span>React</span>
                    </div>
                </div>
            </div>
        </div>


  );
};

export default AboutMe;
