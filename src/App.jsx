import { motion } from "framer-motion";
import Type from "./components/Type";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import About from "./components/About";
import TeckStack from "./components/TeckStack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import CmdModal from "./components/CmdModal";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (command.trim() === "") return;

      // Store command in history and reset index
      setCommandHistory([command, ...commandHistory]);
      setHistoryIndex(-1);

      executeCommand(command);
      setCommand("");
    }
    else if (e.key === "ArrowUp") {
      // Move to previous command
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setCommand(commandHistory[historyIndex + 1]);
      }
    }
    else if (e.key === "ArrowDown") {
      // Move to next command
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setCommand(commandHistory[historyIndex - 1]);
      } else {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  };

  // Command Handling Logic
  const executeCommand = (cmd) => {
    let newOutput = "";
    switch (cmd.toLowerCase()) {
      case "about":
        newOutput = (<About />);
        break;
      case "contact":
        newOutput = (<Contact />);
        break;
      case "tech-stack":
        newOutput = (<TeckStack/>);
        break;
      case "projects":
        newOutput = (<Projects/>);
        break;
      case "resume":
        newOutput = (<Resume/>);
        break;
      case "clear":
      case "cls":
        setOutput([]);
        return;
      default:
        newOutput = (
          <span className="text-red-500">error: {`"${cmd}"`} command not found!</span>
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
      <Header />
      <div className="overflow-hidden  text-green-400 font-mono min-h-[95%] flex items-center justify-center p-4">
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
              <div
                className="w-3 h-3 bg-yellow-500 rounded-full"
                title="Back"
                onClick={() => window.history.back()}
              ></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm truncate">~/Portfolio/AakashAp &nbsp;
              <i
                className="fa-solid fa-info-circle text-green-500 cursor-pointer"
                onClick={openModal}
              />
            </p>
            <CmdModal isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 h-[500px] max-h-[80vh] overflow-y-auto">
            <Type />

            <motion.hr
              className="my-4 border-green-500 opacity-50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
            />

            {/* Output Section */}
            <div className="mt-4 text-lg space-y-2">
              {output.map((item, index) => (
                <div key={index}>
                  <p>
                    <span className="text-green-500">>_</span>
                    {item.command}
                  </p>
                  <div className="text-white break-words">{item.response}</div>
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

      {/* Footer - Made with Passion */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm flex items-center justify-center w-full text-center px-4">
        <p className="ml-2">©copyright {new Date().getFullYear()} AakashAP | Powered by Passion 🔥 and ❤️</p>
      </div>

    </>

  );

}

export default App;
