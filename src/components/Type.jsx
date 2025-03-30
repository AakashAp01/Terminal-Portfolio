import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useMemo } from "react";

function getRandomizedWords() {
  const words = [
    "A Laravel Developer",
    "A MERN Stack Developer",
    "A Passionate Programmer",
    "Welcome to my Portfolio!",
    "Code. Create. Conquer.",
    "Building Scalable Solutions.",
    "Transforming Ideas into Reality.",
    "Writing Clean & Efficient Code.",
    "Solving Problems with Logic.",
    "Innovate. Develop. Deploy.",
    "Crafting Seamless User Experiences.",
    "Breaking Code. Fixing Bugs.",
    "Writing Code that Speaks.",
    "Turning Visions into Web Apps.",
    "Performance. Security. Scalability.",
    "Developing with Passion & Precision.",
    "Code is Poetry.",
    "Debugging Like a Pro.",
    "Always Learning, Always Growing.",
    "Transforming Coffee into Code.",
    "Design. Develop. Deliver.",
  ];
  
  const shuffledWords = words.sort(() => Math.random() - 0.5);

  return ["Hey, I'm Aakash Prajapati", ...shuffledWords];
}

function Type() {
  const words = useMemo(() => getRandomizedWords(), []); 

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
          words={words}
          loop={0} 
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