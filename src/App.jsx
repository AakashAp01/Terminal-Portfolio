import { motion, AnimatePresence, useMotionValue, useDragControls } from "framer-motion";
import Type from "./components/Type";
import { useState , useRef ,useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import CmdModal from "./components/CmdModal";
import Header from "./components/Header";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import MotivationalQuote from "./components/MotivationalQuote";
import LaughComponent from "./components/Laugh";
import MusicPlayer from "./components/MusicPlayer";
import Animate from "./components/Animate";
import TypeMusic from "./assets/type2.wav";
import DevCard from "./components/DevCard";
import Footer from "./components/Footer";

function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const Tmusic = new Audio(TypeMusic);
  const [typingSoundEnabled, setTypingSoundEnabled] = useState(false);

  // Window drag state — mimics macOS: drag only from the title bar,
  // position stays wherever it's dropped, and resets cleanly on fullscreen.
  const desktopRef = useRef(null);
  const dragControls = useDragControls();
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (isFullScreen) {
      dragX.set(0);
      dragY.set(0);
    }
  }, [isFullScreen]);

  const startWindowDrag = (e) => {
    if (isFullScreen) return;
    dragControls.start(e);
  };

  const stopHeaderPropagation = (e) => e.stopPropagation();
  const handleKeyDown = (e) => {
    if (typingSoundEnabled && (e.key.length === 1 || e.key === "Backspace")) {
      if (Tmusic.paused) {
        Tmusic.currentTime = 0;
        Tmusic.play().catch(() => { });
      }
    }

    if (e.key === "Enter") {
      if (command.trim() === "") return;

      setCommandHistory([command, ...commandHistory]);
      setHistoryIndex(-1);
      executeCommand(command);
      setCommand("");

      // Stop sound after pressing Enter
      Tmusic.pause();
      Tmusic.currentTime = 0;
    } else if (e.key === "ArrowUp") {
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setCommand(commandHistory[historyIndex + 1]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setCommand(commandHistory[historyIndex - 1]);
      } else {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  };

  const executeCommand = (cmd) => {
    if (!cmd.trim()) return;

    let newOutput = "";

    if (cmd.toLowerCase() === "on typing sound") {
      setTypingSoundEnabled(true);
      newOutput = <span className="text-green-500 m-4">Typing sound enabled! 🔊</span>;
    } else if (cmd.toLowerCase() === "off typing sound") {
      setTypingSoundEnabled(false);
      Tmusic.pause();
      Tmusic.currentTime = 0;
      newOutput = <span className="text-red-500 m-4">Typing sound disabled! 🔇</span>;
    } else if (cmd.toLowerCase().startsWith("animate:")) {
      const textToWrite = cmd.split(":")[1].trim();
      if (textToWrite) {
        newOutput = <Animate text={textToWrite} />;
      } else {
        newOutput = <span className="text-red-500">Error: No text provided after "animate:".</span>;
      }
    } else {
      switch (cmd.toLowerCase()) {
        case "ap about":
          newOutput = <About />;
          break;
        case "ap github stats":
          newOutput = <GitHubStats />;
          break;
        case "ap --contact":
          newOutput = <Contact />;
          break;
        case "ap tech stack":
          newOutput = <TechStack />;
          break;
        case "ap --projects":
          newOutput = <Projects />;
          break;
        case "ap resume":
          newOutput = <Resume />;
          break;
        case "ap help":
          newOutput = openModal();
          break;
        case "ap inspire":
          newOutput = <MotivationalQuote />;
          break;
        case "ap make me laugh":
          newOutput = <LaughComponent />;
          break;
        case "ap --music":
          newOutput = <MusicPlayer />;
          break;
        case "ap dev card":
          newOutput = <DevCard />;
          break;
        case "clear":
        case "cls":
          setOutput([]);
          return;
        default:
          newOutput = (
            <span className="text-red-500">
              Error: Command <strong>"{cmd}"</strong> not found! Use <strong>"ap help"</strong> for more info.
            </span>
          );
      }
    }

    // Append new command response to output
    setOutput((prevOutput) => [...prevOutput, { command: cmd, response: newOutput }]);
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>

      <SpeedInsights />
      <Analytics />
      <Header />
      <div ref={desktopRef} className="m-2 text-green-400 font-mono relative flex items-center justify-center min-h-[560px] md:min-h-[700px]">


        {/* Terminal Window */}
        <motion.div
          drag={!isFullScreen}
          dragListener={false}
          dragControls={dragControls}
          dragConstraints={desktopRef}
          dragElastic={0}
          dragMomentum={false}
          style={{ x: dragX, y: dragY }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          whileDrag={{ scale: 1.01, boxShadow: "0 25px 60px -12px rgba(34,197,94,0.45)" }}
          transition={{ type: "spring", damping: 22, stiffness: 200 }}
          className={`${isFullScreen ? "fixed inset-0 z-[60] m-0" : "w-full max-w-4xl relative z-[60]"} border border-green-500 rounded-sm shadow-lg bg-black backdrop-blur-md transition-[max-width,border-radius] duration-300`}
        >
          {/* Terminal Header (title bar — the only draggable region, like macOS) */}
          <div
            onPointerDown={startWindowDrag}
            onDoubleClick={() => setIsFullScreen((f) => !f)}
            className={`bg-gray-900 px-4 py-2 flex items-center justify-between rounded-t-lg border-b border-green-500 drag-handle select-none touch-none ${
              isFullScreen ? "" : isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <div
              className="flex gap-2"
              onPointerDown={stopHeaderPropagation}
              onDoubleClick={stopHeaderPropagation}
            >
              <div
                className="group relative w-4 h-4 bg-red-500 rounded-full cursor-pointer flex items-center justify-center"
                title="Refresh"
                onClick={() => window.location.reload()}
              >
                <i className="fa-solid fa-xmark text-[8px] leading-none text-red-950 opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </div>
             <div
                className="group relative w-4 h-4 bg-yellow-500 rounded-full cursor-pointer flex items-center justify-center"
                title="Back"
                onClick={() => alert("Happy to see you here 😁💖")}
              >
                <i className="fa-solid fa-minus text-[8px] leading-none text-yellow-950 opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </div>
              <div
                className="group relative w-4 h-4 bg-green-500 rounded-full cursor-pointer flex items-center justify-center"
                title={isFullScreen ? "Minimize" : "Full Screen"}
                onClick={() => setIsFullScreen(!isFullScreen)}
              >
                <i className={`fa-solid ${isFullScreen ? "fa-compress" : "fa-expand"} text-[6px] leading-none text-green-950 opacity-0 group-hover:opacity-100 transition-opacity`}></i>
              </div>
            </div>
            <p className="text-gray-400 text-sm truncate flex-1 text-end">
              ~/Portfolio/AakashAp &nbsp;
              <i
                className="fa-solid fa-info-circle text-green-500 cursor-pointer"
                title="Command Info"
                onPointerDown={stopHeaderPropagation}
                onClick={openModal}
              />
            </p>
          </div>

          {/* Terminal Body */}
          <motion.div
            className={`p-4 overflow-y-auto transition-all duration-500 ${
              isFullScreen ? "h-[calc(100vh-50px)] md:p-1" : "h-[480px] md:p-6"
            }`}
            ref={terminalRef}
            onClick={() => inputRef.current?.focus()}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {!isFullScreen && <Type />}
            {!isFullScreen &&
            <motion.hr
              className="my-4 border-green-500 opacity-50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />}

            {/* Output Section */}
            <div className="mt-4 text-sm">
              <AnimatePresence>
                {output.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>
                      <span className="text-green-500">>_</span> {item.command}
                    </p>
                    <div className="text-white break-words">{item.response}</div>
                  </motion.div>

                ))}
              </AnimatePresence>
            </div>

            {/* Input Field */}
            <div className="flex items-center">
              <span className="text-green-500">>_</span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-sm text-white ml-1 w-full"
                autoFocus
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Command Modal */}
        <CmdModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>


      {/* Footer - Made with Passion */}
      <Footer />


    </>
  );

}

export default App;
