import { motion } from "framer-motion";
import { useState } from "react";

export default function CmdModal({ isModalOpen, closeModal }) {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const commands = [
    { name: "ap resume", description: "Download or view Resume" },
    { name: "ap --contact", description: "Contact Info" },
    { name: "ap about", description: "About Info" },
    { name: "clear / cls", description: "Clear Terminal" },
    { name: "ap tech stack", description: "Show Tech Stack" },
    { name: "ap github stats", description: "Show GitHub Stats" },
    { name: "ap --help", description: "Get command information" },
    { name: "ap --projects", description: "Show projects" },
    { name: "ap inspire", description: "Generate motivational quotes" },
    { name: "ap make me laugh", description: "Get funny jokes" },
    { name: "ap --music", description: "Play cold background music" },
    { name: "on typing sound", description: "Enable typing sound" },
    { name: "off typing sound", description: "Disable typing sound" },
    { name: "animate:{your-text}", description: "Display animated text in a colorful, drawn style" }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <motion.div
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button in the Top-Right Corner */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-800 transition duration-200"
            >
              <i className="fas fa-times"></i>
            </button>

            <h2 className="text-green-400 text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-terminal"></i> Help Box
            </h2>

            <p className="text-white text-sm sm:text-lg mb-4">
              Below are the available commands and their actions:
            </p>
            <hr className="my-4 border-green-500 opacity-50"/>

            <ul className="list-none max-h-[40vh] text-white space-y-2 overflow-y-auto">
              {commands.map((cmd, index) => (
                <li key={index} className="flex justify-between items-center text-sm sm:text-base px-3 py-2 rounded-md">
                  <span className="flex-1">
                    <span className="text-green-400 font-semibold">👉 {cmd.name}</span> - {cmd.description}
                  </span>
                  <button
                    onClick={() => copyToClipboard(cmd.name)}
                    className="ml-2 px-2 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-200 flex items-center gap-1 text-xs sm:text-sm"
                  >
                    {copiedCommand === cmd.name ? (
                      <i className="fas fa-check text-green-400"></i>
                    ) : (
                      <i className="fas fa-clone" title="Copy"></i>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
}
