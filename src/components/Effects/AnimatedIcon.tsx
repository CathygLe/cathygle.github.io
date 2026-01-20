import React from "react";
import { motion } from "framer-motion";

interface AnimatedIconProps {
  src: string;
  alt: string;
  label: string;
  fromLeft?: boolean; // if true, icon comes from left; false = right
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ src, alt, label, fromLeft = true }) => {
  return (
    <motion.div
      className="icon"
      initial={{ x: fromLeft ? -200 : 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <img src={src} alt={alt} className="custom-icon" />
      <span>{label}</span>
    </motion.div>
  );
};

export default AnimatedIcon;
