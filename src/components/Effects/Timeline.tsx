import React from "react";
import "../../styles/Timeline.css";
import { motion } from "framer-motion";
import { NARROW_VIEWPORT_QUERY, useMediaQuery } from "../../hooks/useMediaQuery";

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
  const isNarrow = useMediaQuery(NARROW_VIEWPORT_QUERY);

  return (
    <div className="timeline">
        {items.map((item, index) => (

            <motion.div
                key={index}
                className={`timeline-item`}
                initial={
                  isNarrow
                    ? { opacity: 1, x: 0, y: 16 }
                    : { x: item.direction === "left" ? -200 : 200, opacity: 0 }
                }
                animate={isNarrow ? { opacity: 1, x: 0, y: 0 } : undefined}
                whileInView={isNarrow ? undefined : { x: 0, opacity: 1 }}
                viewport={isNarrow ? undefined : { once: true, amount: 0.5 }}
                transition={
                  isNarrow
                    ? { duration: 0.45, ease: "easeOut" }
                    : { duration: 0.8, type: "spring", bounce: 0.3 }
                }
            >
                <div className="timeline-item">
                    <div className={`timeline-item-wrapper ${item.direction}`}>
                        <div className="description-border">
                            <div className="description-box">
                                <div className="description-heading">
                                    {item.logo && (
                                        <img src={item.logo} alt="" className="timeline-inline-logo" />
                                    )}
                                    <div className="description-heading-text">
                                        <h3 className="company-name">{item.company}</h3>
                                        <div className={`timeline-date ${item.direction}`}>
                                            {item.date}
                                        </div>
                                        <h4 className="role-name">{item.role}</h4>
                                    </div>
                                </div>

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
