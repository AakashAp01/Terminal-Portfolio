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
    <header className="w-auto pt-4 pb-2 flex justify-center items-center">
      {/* GitHub Star Button */}
      <motion.a
        href="https://github.com/aakashap01/react-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 px-4 py-2 rounded-lg flex items-center gap-2 text-white font-medium hover:bg-green-600 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fa-brands fa-github"></i> GitHub Star {stars !== null ? `⭐ ${stars}` : ""}
      </motion.a>
    </header>
  );
}
