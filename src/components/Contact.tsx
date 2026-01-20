import React from "react";
import "../styles/Contact.css"; 
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
        <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 200, scale: 0.7 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            viewport={{ once: true, amount: 0.5 }}     
            transition={{ duration: 1, ease: "easeOut" }}
        >
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
        </motion.div>
    </div>
  );
};

export default Contact;
 