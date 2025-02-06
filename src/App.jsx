import { motion } from "framer-motion";
import Type from "./components/Type";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./components/About";

import TeckStack from "./components/TeckStack";
import Resume from "./components/Resume";
import Contact from "./components/contact";
import CmdModal from "./components/CmdModal";

function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  // Handle Enter Key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(command);
      setCommand("");
    }
  };

  // Command Handling Logic
  const executeCommand = (cmd) => {
    let newOutput = "";
    switch (cmd.toLowerCase()) {
      case "about":
        newOutput = (
          <About />
        );
        break;

      case "contact":
        newOutput = (
          <Contact />
        );
        break;
      case "tech-stack":
        newOutput = (
          <TeckStack />
        );

        break;
      case "projects":
        newOutput = "Check out my GitHub: github.com/aakashap";
        break;
      case "resume":
        newOutput = (
          <Resume />
        );

        break;
      case "clear":
      case "cls":
        setOutput([]);
        return;
      default:
        newOutput = (
         <span className="text-red-400">error: {`"${cmd}"`} command not found!</span>
        );

    }
    setOutput([...output, { command: cmd, response: newOutput }]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal (pass this as well)
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <div className="overflow-hidden bg-black text-green-400 font-mono min-h-screen flex justify-center items-center">
        <div className="w-full max-w-4xl border border-green-500 rounded-lg shadow-lg relative">
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center justify-between rounded-t-lg border-b border-green-500">
            <div className="flex gap-2">
              <div
                className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-transparent group hover:text-white cursor-pointer"
                title="Refresh"
                onClick={() => window.location.reload()}
              >
                <span className="group-hover:block text-[8px]">✖</span>
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full" title="Back" onClick={() => window.history.back()}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full" ></div>
            </div>
            <p className="text-gray-400 text-sm">~/Portfolio/AakashAp &nbsp;
              {/* Info Icon with Tooltip */}

              <i
                className="fa-solid fa-info-circle text-green-500 cursor-pointer"
                onClick={openModal}
              />
            </p>
            <CmdModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
         
          {/* Terminal Body */}
          <div
            className="p-6 h-[500px] overflow-y-auto"
          >
            <Type />

            <motion.hr
              className="my-4 border-green-500 opacity-50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
            />

            {/* Output Section */}
            <div className="mt-4 text-lg">
              {output.map((item, index) => (
                <div key={index}>
                  <p>
                    <span className="text-green-500">>_ </span>
                    {item.command}
                  </p>
                  <div className="text-white">{item.response}</div>
                </div>
              ))}
            </div>

            {/* Input Field */}
            <div className="mt-4 flex items-center">
              <span className="text-green-500 text-lg">>_</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-white ml-2 w-full text-lg"
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>

      {/* Made by Passion and Heart Emoji outside of terminal container */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm flex items-center justify-center w-full">
        <p className="ml-2">@powered by Passion 🔥 and ❤️</p>
      </div>
    </>
  );

}

export default App;
