import { motion } from "framer-motion";
import Type from "./Type";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { div } from "framer-motion/client";
import profile from "./assets/profile.jpg"
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
        newOutput = (
          <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-lg max-w-3xl mx-auto text-white">

            {/* Right Side - Rectangular Profile Image with Glow (Moved to Top on Small Screens) */}
            <div className="relative md:w-40 md:h-52 md:mr-6 mb-2 w-32 h-52 mt-6 md:mt-0">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 w-full h-full bg-green-500 blur-xl opacity-30 rounded-lg"></div>

              {/* Profile Image with Thin Border and Glow */}
              <div className="relative w-full h-full border border-green-400 rounded-lg shadow-[0px_0px_15px_rgba(34,197,94,0.6)]">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Left Side - About Text */}
            <div className="flex-1 text-left space-y-4">
              <h2 className="text-green-400 text-2xl font-bold flex items-center">
                <i className="fa-solid fa-user text-green-400 mr-2"></i> About Me
              </h2>
              <p className="text-lg leading-relaxed">
                Hi! I'm <span className="text-green-400">Aakash Prajapati</span>, a passionate
                <strong> Full-Stack Developer</strong> with a strong foundation in
                <strong> MERN Stack, Laravel, PHP, JavaScript, and CSS.</strong>
                I specialize in crafting dynamic, scalable, and high-performance web applications that provide seamless user experiences. 🚀
              </p>

              <p className="text-lg leading-relaxed">
                With a keen eye for design and performance optimization, I build robust
                <span className="text-green-400"> front-end interfaces</span> using React, Tailwind, and Bootstrap.
                On the <span className="text-green-400"> backend</span>, I develop secure and efficient APIs with Node.js, Express, Laravel, and PHP,
                ensuring smooth data management using MongoDB and MySQL.
              </p>

              <p className="text-lg leading-relaxed">
                Beyond coding, I am passionate about problem-solving, exploring new technologies, and staying updated with the latest industry trends.
                I thrive in <span className="text-green-400">collaborative environments</span> and enjoy working with teams to bring innovative ideas to life.
                Whether it’s a startup project, an enterprise-level application, or a personal portfolio, I am always eager to create meaningful digital solutions.
              </p>

              <p className="text-lg leading-relaxed">
                When I’m not coding, I enjoy contributing to open-source projects, writing tech blogs, and mentoring aspiring developers.
                Let's connect and build something amazing together! ✨
              </p>

            </div>

          </div>
        );
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
        case "tech-stack":
          newOutput = (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 text-white">
              {/* Frontend Technologies */}
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-brands fa-react text-blue-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">React</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="w-10 h-10 mb-2" alt="Tailwind CSS" />
                <p className="text-green-400 font-semibold">Tailwind CSS</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-brands fa-bootstrap text-purple-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">Bootstrap</p>
              </div>
        
              {/* Backend Technologies */}
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-brands fa-node text-green-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">Node.js</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" className="w-10 h-10 mb-2" alt="Express.js" />
                <p className="text-green-400 font-semibold">Express.js</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-brands fa-php text-indigo-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">PHP</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" className="w-10 h-10 mb-2" alt="Laravel" />
                <p className="text-green-400 font-semibold">Laravel</p>
              </div>
        
              {/* Databases */}
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-solid fa-database text-red-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">MongoDB</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-solid fa-database text-blue-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">MySQL</p>
              </div>
        
              {/* Tools */}
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-solid fa-toolbox text-yellow-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">Postman</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-brands fa-git text-orange-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">Git</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-brands fa-github text-white text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">GitHub</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-solid fa-server text-purple-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">CPanel</p>
              </div>
              <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <i className="fa-solid fa-cloud text-blue-400 text-4xl mb-2"></i>
                <p className="text-green-400 font-semibold">Hostinger</p>
              </div>
            </div>
          );
        
        break;
      case "projects":
        newOutput = "Check out my GitHub: github.com/aakashap";
        break;
      case "resume":
        newOutput = (
          <div className="text-white">
            <p className="text-white">Click the link below to download the resume:</p>
            {/* Resume Download Link */}
            <motion.a
              href="./src/Aakash_Prajapati_Resume.pdf"
              download="Aakash_Prajapati_Resume.pdf"
              className="text-green-400 hover:text-green-500 underline mt-2 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Download Resume
            </motion.a>
          </div>
        );

        break;
      case "clear":
      case "cls":
        setOutput([]);
        return;
      default:
        newOutput = `Command not found: "${cmd}".`;
    }
    setOutput([...output, { command: cmd, response: newOutput }]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="overflow-hidden bg-black text-green-400 font-mono min-h-screen flex justify-center items-center">
        <div className="w-full max-w-4xl border border-green-500 rounded-lg shadow-lg relative">
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center justify-between rounded-t-lg border-b border-green-500">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" title="Refresh" onClick={() => window.location.reload()}></div>
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
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 max-w-lg">
                <h2 className="text-green-400 text-2xl font-semibold mb-4">Command Info</h2>

                <p className="text-white text-lg mb-4">
                  Below are the available commands and their actions:
                </p>

                <ul className="list-disc pl-6 text-white space-y-2">
                  <li><span className="text-green-400 font-semibold">resume</span> - Download Resume</li>
                  <li><span className="text-green-400 font-semibold">contact</span> - Contact Info</li>
                  <li><span className="text-green-400 font-semibold">about</span> - About Info</li>
                  <li><span className="text-green-400 font-semibold">cls</span> or <span className="text-green-400 font-semibold">clear</span> - Clear Terminal</li>
                </ul>

                <div className="mt-6 flex justify-end">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-400 transition duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

          )}

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

export default Hero;
