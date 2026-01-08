import React, { useEffect } from "react";
import "../styles/Sparkles.css";

const StarSparkles: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 10% chance to spawn a big star
      if (Math.random() < 0.1) {
        const star = document.createElement("div");
        star.className = "sparkle";
        const size = Math.random() * 25 + 15; // 15–40px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        const offsetX = Math.random() * 40 - 20;
        const offsetY = Math.random() * 40 - 20;
        star.style.left = `${e.clientX + offsetX}px`;
        star.style.top = `${e.clientY + offsetY}px`;
        document.body.appendChild(star);
        setTimeout(() => star.remove(), 800);
      }

      // 50% chance to spawn tiny specs
      if (Math.random() < 0.5) {
        const spec = document.createElement("div");
        spec.className = "spec";
        const offsetX = Math.random() * 30 - 15;
        const offsetY = Math.random() * 30 - 15;
        spec.style.left = `${e.clientX + offsetX}px`;
        spec.style.top = `${e.clientY + offsetY}px`;
        document.body.appendChild(spec);
        setTimeout(() => spec.remove(), 600);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default StarSparkles;
