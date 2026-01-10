import React from "react";
import {  FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css"; 

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
        <div className="contact-content">
            <h1>Contact</h1>
            <p style={{ marginBottom: "80px" }}>If you'd like to get in touch, feel free to reach out. </p>

            <h3 style={{ marginBottom: "1px" }}>Phone</h3>
            <p style={{ marginBottom: "30px" }}>Mobile Number: 604-727-5242</p>

            <h3 style={{ marginBottom: "1px" }}>Email</h3>
            <p style={{ marginBottom: "30px" }}>cathyglale@gmail.com</p>

            <h3 style={{ marginBottom: "1px" }}>LinkedIn</h3>
            
            <p>
                <a
                    href="https://www.linkedin.com/in/cathygle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    style={{ color: "white" }}
                >
                    www.linkedin.com/in/cathygle
                </a>
            </p>
        </div>
    </div>
  );
};

export default Contact;
 