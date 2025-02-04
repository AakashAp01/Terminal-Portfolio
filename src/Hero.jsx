import { motion } from "framer-motion";
import Type from "./Type";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Hero() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  // Handle Enter Key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(command);
      setCommand(""); // Clear input after execution
    }
  };

  // Command Handling Logic
  const executeCommand = (cmd) => {
    let newOutput = "";
    switch (cmd.toLowerCase()) {
      case "about":
        newOutput = "I'm a passionate Full-Stack Developer specializing in React, Node.js, and MongoDB.";
        break;
      case "contact":
        newOutput = (
          <div className="flex flex-col space-y-3">
            <p className="text-green-400 text-lg">✨ Let's Connect & Build Something Awesome! ✨</p>
            
            <p>You can reach me at:  
              <a href="mailto:aakashap309@gmail.com" className="text-green-400 hover:underline">
                ✉️ aakashap309@gmail.com
              </a>
            </p>
        
            <p>Feel free to drop a message! 🚀</p>
        
            <div className="flex gap-4 text-white text-2xl">
              <a href="https://github.com/aakashap01" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github hover:text-green-400"></i> 
              </a>
              <a href="https://www.linkedin.com/in/aakashap" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin hover:text-green-400"></i> 
              </a>
              <a href="https://www.facebook.com/share/1HPLsmLaTn/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook hover:text-green-400"></i> 
              </a>
              <a href="https://www.instagram.com/_aakash_ap_/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram hover:text-green-400"></i> 
              </a>
              <a href="https://x.com/akashap01" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter hover:text-green-400"></i> 
              </a>
            </div>
        
            <p className="text-green-400">💡 Open to collaborations & new opportunities!</p>
          </div>
        );
        break;
      case "projects":
        newOutput = "Check out my GitHub: github.com/aakashap";
        break;
      case "clear":
        setOutput([]);
        return;
      default:
        newOutput = `Command not found: "${cmd}". Try 'about', 'contact', or 'projects'.`;
    }
    setOutput([...output, { command: cmd, response: newOutput }]);
  };

  return (
    <div className="overflow-hidden bg-black text-green-400 font-mono min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl border border-green-500 rounded-lg shadow-lg">
        {/* Terminal Header */}
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between rounded-t-lg border-b border-green-500">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-sm">~/Portfolio/Terminal</p>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-96 overflow-y-auto">
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
  );
}

export default Hero;
