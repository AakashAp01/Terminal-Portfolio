import { motion } from "framer-motion";
import path from "./assets/path.json";

function Hero() {
  return (
    <div className="overflow-hidden">
      <nav className="flex justify-between items-center py-6 px-8 bg-red-500 rounded-xl mt-3">
        <h1 className="text-2xl font-bold">AakashAp</h1>
        <ul className="flex gap-8 hidden md:flex">
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Projects
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact
          </motion.li>
        </ul>
        {/* Mobile Menu (Hamburger icon) */}
        <ul className="flex gap-8 md:hidden">
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Projects
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact
          </motion.li>
        </ul>
      </nav>

      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 space-y-8 md:space-y-0">
        <motion.div
          className="space-y-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="bg-red-100 px-4 py-2 rounded-full text-red-500">
            Welcome to my portfolio
          </span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold leading-tight text-red-500"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Creative Full-Stack Developer
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transforming ideas into elegant, responsive, and user-friendly web
            applications. Specialized in React, Node.js, and modern web
            technologies.
          </motion.p>
          <div className="flex gap-4 pt-4">
            <motion.button
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-900 transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg hover:bg-red-50 transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Contact Me
            </motion.button>
          </div>
          <div className="flex gap-6 pt-8">
            <motion.i
              className="fa-brands fa-github text-2xl cursor-pointer text-red-500 hover:text-red-600"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.i>
            <motion.i
              className="fa-brands fa-linkedin text-2xl cursor-pointer text-red-500 hover:text-red-600"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.i>
            <motion.i
              className="fa-brands fa-twitter text-2xl cursor-pointer text-red-500 hover:text-red-600"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.i>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.img
            src={path.profile}
            alt="Developer"
            className="w-[300px] h-[500px] object-cover rounded shadow-2xl transition-all relative z-10 "
            style={{
              maskImage: "linear-gradient(to center, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 80%)",
              WebkitMaskImage: "linear-gradient(to center, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 80%)"
            }}
          />
        </motion.div>

      </main>
    </div>
  );
}

export default Hero;
