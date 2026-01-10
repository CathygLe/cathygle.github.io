import React from "react";

import "../styles/Global.css";
import "../styles/Resume.css"; 
import EVR from "../assets/images/icons/EVR.png";
import ontraccr from "../assets/images/icons/ontraccr.webp";
import graham from "../assets/images/icons/graham.png";
import Timeline from "./Effects/Timeline";
import type { TimelineItem } from "./Effects/Timeline";

const experience: TimelineItem[] = [
    {
    date: "January 2026 - Present",
    company: "EVR",
    role: "Software Developer Engineer",
    logo: EVR,
    description: ["Developed blending systems tools to enhancing operational efficiency and system functionality.",
                  "Designed and implemented custom front-end solutions using modern development frameworks.",
                  "Conducted QA and testing across the application toolset to ensure reliability and accuracy.",
    ],
    technologies: ["Azure", "SQL", "Node.JS", "React"],
    direction: "left",
    },
    {
    date: "May 2025 - September 2025",
    company: "Ontraccr Technologies",
    role: "Software Developer in Test",
    logo: ontraccr,
    description: 
                ["Documented and tracked developer progress by performing feature testing, analyzing results, and reviewing PRs to ensure specifications were met prior to product release",
                "Implemented automated tests using Playwright and backend unit tests using Jest, integrating them into Bitbucket CI/CD pipeline steps to streamline regression testing and reduce developer workload",
                "Participated in sprint planning by defining product features and QA plans, identifying edge cases and improving test coverage",
                "Assisted with debugging by analyzing failures, investigating code, and providing reproduction steps to support timely resolution"
                ],
    technologies: ["JavaScript", "TypeScript", "Jest", "Playwright"],
    direction: "right",
    },
    {
    date: "January 2022 - March 2025",
    company: "Graham Construction",
    role: "Project Coordinator",
    logo: graham,
    description: 
                ["Conducted business analysis by tracking labor productivity and forecasting project schedules, budget risks, and key milestonesto support effective resource allocation and on-time project delivery",
                "Developed an automated data tracking system by creating Microsoft Excel tools to document and improve the efficiency of record-keeping for client-contractor communication",
                "Drafted detailed technical documentation and project specifications to facilitate clear communication between teams and clients, and performed inspections and tests to ensure compliance with standards and project requirements",
                ],
    technologies: ["Microsoft Office", "Bluebeam","Python"],
    direction: "left",
    },
];

const Resume: React.FC = () => {
  return (
    <div className="resume-page">
        <div className="resume-content">
            <h1>My Experience</h1>
            <div className="vertical-line" />

            <div className="timeline-circle" style={{ top: `410px` }}/>
            <div className="timeline-circle" style={{ top: `895px` }}/>
            <div className="timeline-circle" style={{ top: `1425px` }}/>

            <div className="timeLineItems">
                <Timeline items={experience} />
            </div>
        </div>
    </div>
  );
};

export default Resume;
