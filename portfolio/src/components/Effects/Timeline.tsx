import React from "react";
import "../../styles/Timeline.css";
import { motion } from "framer-motion";

export interface TimelineItem {
  date: string;
  company: string;
  role: string;
  logo?: string;
  description: string[];
  technologies: string[];
  direction?: "left" | "right"; 
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline">
        {items.map((item, index) => (

            <motion.div
                key={index}
                className={`timeline-item`}
                initial={{ x: item.direction === "left" ? -200 : 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
                <div key={index} className="timeline-item">
                    <div className={`timeline-item-wrapper ${item.direction}`}>
                        <div
                            className={`timeline-date ${item.direction}`}
                            style={{
                                transform: item.direction === "left" ? "translateX(920px)" : "translateX(-950px)",
                                top: "50%",
                            }}
                            >
                            {item.date}
                        </div>

                        {/* {item.logo && (
                            <img
                                src={item.logo}
                                alt={`${item.company} logo`}
                                className="timeline-logo"
                                style={{
                                left: item.direction === "left" ? "calc(750 px)" : "calc(-90px)"
                                }}
                            />
                        )} */}

                        <div className="description-border">
                            <div className="description-box">
                                <h3 className="company-name">{item.company}</h3>
                                <h4 className="role-name">{item.role}</h4>

                                <ul className="description-list">
                                    {item.description.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                                
                                <div className="tech-bar2">
                                    <h4 className="tech-header2">Technologies Used:</h4>
                                    {item.technologies.length > 0 && (
                                        <div className="tech-list">
                                            {item.technologies
                                                .filter(Boolean)
                                                .map((tech, i) => (
                                                <span key={i} className="tech-pill">{tech}</span>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        ))}
    </div>
  );
};

export default Timeline;
