import { motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";
import resume from "../assets/Akash_Laravel_Developer_Resume.pdf";

export default function Resume() {
  return (
    <motion.div
      className=" text-white p-4 rounded-lg shadow-lg max-w-md  mt-6 border border-green-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-green-400 mb-3">
        📄Resume
      </h2>
      <p className="text-gray-300 mb-4">
        Click the buttons below to view or download my resume.
      </p>

      <div className="flex space-x-4">
        {/* View Resume */}
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-500 text-black rounded-lg shadow transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaEye />
          <span>View</span>
        </motion.a>

        {/* Download Resume */}
        <motion.a
          href={resume}
          download="Aakash_Prajapati_Resume.pdf"
          className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-black rounded-lg shadow transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaDownload />
          <span>Download</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
