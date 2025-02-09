import { motion } from "framer-motion";
import { useState } from "react";

export default function CmdModal({ isModalOpen, closeModal }) {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const commands = [
    { name: "resume", description: "Download Resume" },
    { name: "contact", description: "Contact Info" },
    { name: "about", description: "About Info" },
    { name: "clear", description: "Clear Terminal" },
    { name: "tech stack", description: "Show Tech Stack" },
    { name: "github", description: "GitHub Stats" },
    { name: "help", description: "Get command information" },
    { name: "projects", description: "Show all projects with GitHub link" },
    { name: "quote", description: "Generates motivational quotes" },
    { name: "make me laugh", description: "Get funny jokes" },
    { name: "play music", description: "Play cold background music" },
    { name: "animate:{your-text}", description: "Animated text effect in a colorful, drawn style." },
    { name: "start type sound", description: "Start typing sound" },
    { name: "stop type sound", description: "Start typing sound" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50 p-4">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-green-400 text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-terminal"></i> Command Info
            </h2>

            <p className="text-white text-sm sm:text-lg mb-4">
              Below are the available commands and their actions:
            </p>
            <hr className="my-4 border-green-500 opacity-50"/>

            <ul className="list-none max-h-[40vh] text-white space-y-2 overflow-y-auto">
              {commands.map((cmd, index) => (
                <li key={index} className="flex justify-between mr-2 items-center text-sm sm:text-base  px-3 py-2 rounded-md">
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

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-400 transition duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
