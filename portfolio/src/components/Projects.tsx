import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";
import { RiCheckboxCircleLine } from "react-icons/ri";

import project1 from "../assets/images/project1-image.jpg";
import project2 from "../assets/images/project2-image.png";
import project3 from "../assets/images/project3-image.png";
import project4 from "../assets/images/project4-image.png";
import project5 from "../assets/images/project5-img.png";


const projectData = [
    {
        title: "Prepal",
        description: "PrepPal is a Java-based application that manages user recipes and generates grocery lists.",
        link: "https://github.com/CathygLe/Prepal",
        image: project1,
        tech: ["Java", "JUnit", "Java Swing"]
    },
    {
        title: "Furminder", 
        description: "A mobile habit tracking application that motivates users by linking daily habits to the care of a virtual pet.",
        link: "https://eddie-yoshie.itch.io/furminder",
        image: project5,
        tech: ["Unity", "C#", "Figma"]
    },
    {
        title: "Chromulator",
        description: "A customizable calculator that allows users to personalize colors while performing arithmetic operations.",
        link: "https://cathygle.github.io/Chromulator/",
        image: project2,
        tech: ["HTML", "CSS", "JavaScript"]
    }, 
    {
        title: "PlaiCraft Predictive Analysis",
        description: "Conducted a predictive analysis to explore player engagement and demographics in the PlaiCraft community",
        link: "https://github.com/CathygLe/PlaiCraft-Data-Science-Analysis",
        image: project3,
        tech: ["R", "Jupyter Notebook"]
    },
    {
        title: "Building Occupancy Detection",
        description: "Machine learning model for detecting building occupancy to optimize energy consumption.",
        link: "https://github.com/CathygLe/Building-Occupancy-Detection",
        image: project4,
        tech: ["Python", "Scikit-learn", "Pandas"]
    },
];

const Projects: React.FC = () => {
  return (
    <div className="Projects">
        <div className="projects-header">
            <h1 className="title">Projects</h1>
        </div>

        <div className="Projects-Text">
            <p>More projects are on their way...</p>
        </div>
        <div className="projects-grid">
            {projectData.map((proj, i) => (
                <motion.a
                    key={i}
                    href={proj.link}
                    className="project-square"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ scale: 1.10 }}
                    transition={{ duration: 0.2 }}
                >
                    <img src={proj.image} alt={proj.title} className="project-image" />
                    <h2>{proj.title}</h2>
                    <p>{proj.description}</p>
                    <div className="tech-header">
                        <span>Technologies</span>
                    </div>
                    <div className="project-tech">
                        {proj.tech.map((techItem, idx) => (
                            <span key={idx} className="tech-badge">
                            <RiCheckboxCircleLine style={{ marginLeft: "30px" }} /> {techItem}
                            </span>
                        ))}
                    </div>
                </motion.a>
            ))}
        </div>

         <a href="#Resume-Page" className="scroll-down2" aria-label="Scroll to Experience"
            style={{ marginTop: "20px" }}>
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

export default Projects;
