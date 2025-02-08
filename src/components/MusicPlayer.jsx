import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import tune from "../assets/tune.mp3";
import musicGif from "../assets/wave.gif";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to play music
  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(tune);
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Function to pause music
  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle play/pause
  const toggleMusic = () => {
    isPlaying ? pauseMusic() : playMusic();
  };

  // Auto-play music when component mounts
  useEffect(() => {
    playMusic(); // Start playing automatically

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null; // Cleanup on unmount
      }
    };
  }, []);

  return (
    <div className="m-1 flex items-center space-x-4">
      <div className="relative">
        <img src={musicGif} alt="Music Playing" className="w-32" />
        <motion.button
          className="absolute inset-0 m-auto w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 text-white rounded-full z-10"
          whileHover={{ scale: 1.2 }}
          onClick={toggleMusic}
        >
          <i  className={`fa ${isPlaying ? "fa-pause" : "fa-play"} text-xl cursor-pointer`}></i>
        </motion.button>
      </div>
    </div>
  );
};

export default MusicPlayer;
