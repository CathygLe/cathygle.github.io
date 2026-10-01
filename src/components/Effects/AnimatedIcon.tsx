import React from "react";
import { motion } from "framer-motion";
import { NARROW_VIEWPORT_QUERY, useMediaQuery } from "../../hooks/useMediaQuery";

interface AnimatedIconProps {
  src: string;
  alt: string;
  label: string;
  fromLeft?: boolean; // if true, icon comes from left; false = right
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ src, alt, label, fromLeft = true }) => {
  const isNarrow = useMediaQuery(NARROW_VIEWPORT_QUERY);

  return (
    <motion.div
      className="icon"
      initial={
        isNarrow
          ? { opacity: 1, x: 0, y: 12 }
          : { x: fromLeft ? -200 : 200, opacity: 0 }
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
      <img src={src} alt={alt} className="custom-icon" />
      <span>{label}</span>
    </motion.div>
  );
};

export default AnimatedIcon;
