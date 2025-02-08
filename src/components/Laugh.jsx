import React, { useState } from "react";
import { jokes, colors , emojis } from "../assets/data";
import { motion } from "framer-motion";

const LaughComponent = () => {
  const [joke, setJoke] = useState(jokes[Math.floor(Math.random() * jokes.length)]);
  const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [emoji, setEmoji] = useState(emojis.smileys[Math.floor(Math.random() * emojis.smileys.length)]);

  const getNewJoke = () => {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  return (
    <div className="p-2">
      {/* Animated Joke Display */}
      <motion.p
        key={joke} 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className={`font-bold ${color} p-2`}
      >
        {joke} -{emoji}
      </motion.p>
    </div>
  );
};

export default LaughComponent;
