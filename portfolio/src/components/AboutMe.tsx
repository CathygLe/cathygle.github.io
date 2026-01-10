import React from "react";
import AnimatedIcon from "./Effects/AnimatedIcon";
import { motion } from "framer-motion";
import "../styles/Global.css";
import "../styles/About-Me.css";
import headshot1 from "../assets/images/HeadShot-3.jpg";
import headshot2 from "../assets/images/HeadShot-2.jpg";
import headshot3 from "../assets/images/HeadShot.jpg";
import ultimate from "../assets/images/Frisbee.jpg";
import snowboard from "../assets/images/Mountain.jpg";
import sunset from "../assets/images/Sunset.gif";
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

import AnimatedHobby from "./Effects/Hobbies"; 

const hobbies = [
  {
    img: ultimate,
    title: "Ultimate Frisbee",
    description: "I've enjoyed playing ultimate frisbee since high school, where I had the opportunity to captain my team and compete in city championships. I also spent some time coaching and now play recreationally for fun."
  },
  {
    img: snowboard,
    title: "Snowboarding",
    description: "I've recently taken up snowboarding and am really enjoying the challenge of learning a new skill. It's been exciting to push myself outside my comfort zone. If you have any tips or tricks, I'd love to hear them!"
  },
  {
    img: sunset,
    title: "Cycling & Chasing Sunsets",
    description: "I got into cycling during the pandemic as a way to stay active. It quickly became a rewarding hobby, as I was able to chase sunsets while exploring Vancouver's scenic views."
  }
];


const AboutMe: React.FC = () => {
  return (
    <div className="about-me-page">
        <div className="mainIntro">
            <motion.div
                className="introduction"
                initial={{ opacity: 0, x: -80 }}      
                whileInView={{ opacity: 1, x: 0 }}    
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ duration: 1 }}          
            >
                <h1 className="title">About Me</h1>
                <h2>I am Cathy Le, a software developer.</h2>
                <p>
                I'm currently a Computer Science Student at the University of British Columbia,
                with an interest of creating innovative tools that leverage technology to solve
                complex problems.
                </p>
                <p>
                My background in civil engineering exposed me to some shortcomings in project 
                controls and data analytics, which sparked my interest in developing solutions
                to improve efficiency and streamline everyday tasks.
                </p>
            </motion.div>

            <div className="headshot-scroll">
                <div className="headshot"><img src={headshot1} alt="Photo 1" /></div>
                <div className="headshot"><img src={headshot2} alt="Photo 2" /></div>
                <div className="headshot"><img src={headshot3} alt="Photo 3" /></div>
            </div>
        </div>
        <h2 style={{ fontSize: "35px"}}>My Hobbies</h2>
            <div className="hobbies-container">
                <div className="hobbies-container">
                    {hobbies.map((hobby, index) => (
                        <AnimatedHobby 
                        key={index} 
                        img={hobby.img} 
                        title={hobby.title} 
                        description={hobby.description} 
                        />
                    ))}
                </div>
            </div>
        <h2 style={{ fontSize: "30px"}}>Programming Languages</h2>
            <div className="tech-icons">
                <AnimatedIcon src={python} alt="Python" label="Python" fromLeft={true} />
                <AnimatedIcon src={c} alt="C/C++" label="C++" fromLeft={false} />
                <AnimatedIcon src={java} alt="Java" label="Java" fromLeft={true} />
                <AnimatedIcon src={r} alt="R" label="R" fromLeft={false} />
                <AnimatedIcon src={css} alt="CSS" label="CSS" fromLeft={true} />
                <AnimatedIcon src={html} alt="HTML" label="HTML" fromLeft={false} />
                <AnimatedIcon src={racket} alt="Racket" label="Dr Racket" fromLeft={true} />
            </div>

        <h2 style={{ fontSize: "30px"}}>Tools & Platforms</h2>
            <div className="tools-icons">
                <AnimatedIcon src={github} alt="GitHub" label="GitHub" fromLeft={true} />
                <AnimatedIcon src={jira} alt="Jira" label="Jira" fromLeft={false} />
                <AnimatedIcon src={figma} alt="Figma" label="Figma" fromLeft={true} />
                <AnimatedIcon src={sanity} alt="Sanity" label="Sanity" fromLeft={false} />
                <AnimatedIcon src={firebase} alt="Firebase" label="Firebase" fromLeft={true} />
                <AnimatedIcon src={react} alt="React" label="React" fromLeft={false} />
            </div>
        <a href="#Projects-Page" className="scroll-down2" aria-label="Scroll to Projects">
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="transition-transform duration-300 hover:translate-y-1"
          >
            {/* Soft circle */}
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255)" strokeWidth="1" fill="none" />
            {/* Thinner arrow */}
            <path
              d="M8 10l4 4 4-4"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </a>
    </div>
  );
};

export default AboutMe;
