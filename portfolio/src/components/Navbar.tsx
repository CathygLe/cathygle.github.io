import React from "react";
import "../styles/Navbar.css";  

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#Intro-Page">Home</a></li>
        <li><a href="#About-Me-Page">About Me</a></li>
        <li><a href="#Projects-Page">Projects</a></li>
        <li><a href="#Resume-Page">Resume</a></li>
        <li><a href="#Contact-Page">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
