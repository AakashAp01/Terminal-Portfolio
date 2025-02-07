import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-auto p-4 flex justify-center items-center">

      {/* GitHub Star Button */}
      <motion.a
        href="https://github.com/aakashap01"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500  px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fa-brands fa-github"></i> Star on GitHub ⭐
      </motion.a>
    </header>
  );
}
