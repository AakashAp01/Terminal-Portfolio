import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <motion.div
      className="text-xl md:text-3xl font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="text-green-500">$ </span>
      <span className="text-white">
        <Typewriter
          words={[
            "Hey, I'm Aakash Prajapati.",
            "I'm a Laravel Developer.",
            "I'm a MERN Stack Developer.",
            "I love building cool projects.",
            "Welcome to my Portfolio!",
          ]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </span>
    </motion.div>
  );
}

export default Type;
