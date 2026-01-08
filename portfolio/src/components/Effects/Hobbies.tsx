import { motion } from "framer-motion";

interface AnimatedHobbyProps {
  img: string;
  title: string;
  description: string;
}

const AnimatedHobby: React.FC<AnimatedHobbyProps> = ({ img, title, description }) => {
  return (
    <div className="hobby-wrapper">
      <motion.div
        className="hobby-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }} // slower fade-in
      >
        <div className="hobby-photo">
          <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
    </div>
  );
};

export default AnimatedHobby;
