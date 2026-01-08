import React from "react";
import Typewriter from "./Effects/Typewriter";
import "../styles/Global.css";
import "../styles/Intro.css";
import background from "../assets/images/background.jpg";

const Intro: React.FC = () => {
  return (
    <div className="intro-page">
      <div
        className="intro-background"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="intro-overlay">

        <div className="intro-content">
          <h1>
            <span className="welcome-text">Hi there!</span>
            <br />
            <span className="website-text">
              Welcome to{" "}
              <Typewriter
                texts={["My Website! :)", "Cathy's Website"]}
                speed={150}
                pause={1750}
                initialDelay={500}
              />
            </span>
          </h1>
        </div>
        <a href="#About-Me-Page" className="scroll-down" aria-label="Scroll to About">
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
    </div>
  );
};

export default Intro;
