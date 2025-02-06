import { motion } from "framer-motion";

export default function CmdModal({ isModalOpen, closeModal }) {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-lg w-auto max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-green-400 text-2xl font-semibold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-terminal"></i> Command Info
            </h2>


            <p className="text-white text-lg mb-4">
              Below are the available commands and their actions:
            </p>

            <ul className="list-disc max-h-48 pl-6 text-white space-y-2 overflow-y-scroll">
              <li><span className="text-green-400 font-semibold">resume</span> - Download Resume</li>
              <li><span className="text-green-400 font-semibold">contact</span> - Contact Info</li>
              <li><span className="text-green-400 font-semibold">about</span> - About Info</li>
              <li><span className="text-green-400 font-semibold">cls</span> or <span className="text-green-400 font-semibold">clear</span> - Clear Terminal</li>
              <li><span className="text-green-400 font-semibold">tech-stack</span> - Show Tech Stack</li>
              <li><span className="text-green-400 font-semibold">projects</span> - Show all project wiht git-hub link</li>
              <li><span className="text-green-400 font-semibold">↑ (Up Arrow)</span> - Show Previous Command</li>
              <li><span className="text-green-400 font-semibold">↓ (Down Arrow)</span> - Show Next Command</li>
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
