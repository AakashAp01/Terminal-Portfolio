import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <motion.div
      className="text-xl md:text-2xl font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="text-green-500">$_</span>
      <span className="text-white">
        <Typewriter
          words={[
            "Hey, I'm Aakash Prajapati.",
            "A Laravel Developer.",
            "A MERN Stack Developer.",
            "A Passionate Programmer.",
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
