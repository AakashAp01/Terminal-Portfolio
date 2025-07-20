import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/aakashap01/react-portfolio");
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <header className="w-full py-3 flex justify-center items-center gap-3 sm:gap-4 z-50 bg-black relative">
      {/* GitHub Repo Button */}
      <motion.a
        href="https://github.com/aakashap01/react-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, boxShadow: "0 0 15px #22c55e" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="px-4 sm:px-6 py-1.5 sm:py-2 border border-green-500 rounded-sm text-white flex items-center gap-2 sm:gap-3 text-sm sm:text-base bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
      >
        <motion.i
          className="fa-brands fa-github text-green-400"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <span className="font-mono tracking-wide">
          GitHub {stars !== null ? `⭐ ${stars}` : ""}
        </span>
      </motion.a>

      {/* Other Portfolio Button */}
      <motion.a
        href="https://akashap.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, boxShadow: "0 0 15px #3b82f6" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="px-4 sm:px-6 py-1.5 sm:py-2 border border-blue-500 rounded-sm text-white flex items-center gap-2 sm:gap-3 text-sm sm:text-base bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
      >
        <motion.i
          className="fa-solid fa-arrow-up-right-from-square text-blue-400"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <span className="font-mono tracking-wide">New Portfolio</span>
      </motion.a>
    </header>
  );
}
