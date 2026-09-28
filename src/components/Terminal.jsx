import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Type from "./Type";
import About from "./About";
import TechStack from "./TechStack";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";
import GitHubStats from "./GitHubStats";
import MotivationalQuote from "./MotivationalQuote";
import LaughComponent from "./Laugh";
import MusicPlayer from "./MusicPlayer";
import Animate from "./Animate";
import DevCard from "./DevCard";
import TypeMusic from "../assets/type2.wav";
import { COMPLETIONS } from "../commands";

let nextOutputId = 0;

const COMMAND_OUTPUT = {
  "ap about": About,
  "ap github stats": GitHubStats,
  "ap --contact": Contact,
  "ap tech stack": TechStack,
  "ap --projects": Projects,
  "ap resume": Resume,
  "ap inspire": MotivationalQuote,
  "ap make me laugh": LaughComponent,
  "ap --music": MusicPlayer,
  "ap dev card": DevCard,
};

export default function Terminal({ queuedCommand, showIntro, isFocused, focusSignal, fullScreen, openHelp, typingSound, setTypingSound }) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const typeSoundRef = useRef(null);
  const lastQueuedId = useRef(null);

  const typeSound = () => (typeSoundRef.current ??= new Audio(TypeMusic));

  const append = (cmd, response) => setOutput((prev) => [...prev, { id: nextOutputId++, command: cmd, response }]);

  const execute = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const lc = cmd.toLowerCase();

    if (lc === "clear" || lc === "cls") {
      setOutput([]);
    } else if (lc === "ap help") {
      openHelp();
      append(cmd, null);
    } else if (lc === "on typing sound") {
      setTypingSound(true);
      append(cmd, <span className="text-green-500 m-4">Typing sound enabled! 🔊</span>);
    } else if (lc === "off typing sound") {
      setTypingSound(false);
      typeSound().pause();
      append(cmd, <span className="text-red-500 m-4">Typing sound disabled! 🔇</span>);
    } else if (lc.startsWith("animate:")) {
      const text = cmd.split(":")[1].trim();
      append(cmd, text ? <Animate text={text} /> : <span className="text-red-500">Error: No text provided after &quot;animate:&quot;.</span>);
    } else if (COMMAND_OUTPUT[lc]) {
      const Output = COMMAND_OUTPUT[lc];
      append(cmd, <Output />);
    } else {
      append(
        cmd,
        <span className="text-red-500">
          Error: Command <strong>&quot;{cmd}&quot;</strong> not found! Use <strong>&quot;ap help&quot;</strong> for more info.
        </span>
      );
    }
  };

  useEffect(() => {
    if (queuedCommand && lastQueuedId.current !== queuedCommand.id) {
      lastQueuedId.current = queuedCommand.id;
      execute(queuedCommand.cmd);
    }
  });

  useEffect(() => {
    const body = bodyRef.current;
    const last = body?.querySelector("[data-entry]:last-of-type");
    if (!body) return;
    body.scrollTop = last ? last.offsetTop - 8 : body.scrollHeight;
  }, [output]);

  useEffect(() => {
    if (isFocused) inputRef.current?.focus({ preventScroll: true });
  }, [isFocused, focusSignal]);

  const complete = () => {
    const input = command.toLowerCase();
    if (!input) return;
    const matches = COMPLETIONS.filter((c) => c.startsWith(input));
    if (matches.length === 0) return;
    const prefix = matches.reduce((p, m) => {
      let i = 0;
      while (i < p.length && p[i] === m[i]) i++;
      return p.slice(0, i);
    });
    if (prefix.length > input.length) setCommand(prefix);
    else if (matches.length > 1) append(command, <span className="text-gray-400 whitespace-pre-wrap">{matches.join("    ")}</span>);
  };

  const handleKeyDown = (e) => {
    if (typingSound && (e.key.length === 1 || e.key === "Backspace")) {
      const sound = typeSound();
      if (sound.paused) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
      }
    }

    if (e.key === "Enter") {
      if (!command.trim()) return;
      setHistory([command, ...history]);
      setHistoryIndex(-1);
      execute(command);
      setCommand("");
      typeSound().pause();
    } else if (e.key === "Tab") {
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp") {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setCommand(history[historyIndex + 1]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setCommand(history[historyIndex - 1]);
      } else {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  };

  return (
    <div
      ref={bodyRef}
      onClick={() => {
        if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
      }}
      className={`relative p-4 overflow-y-auto ${fullScreen ? "h-[calc(100vh-42px)] md:p-4" : "h-[480px] md:p-6"}`}
    >
      {showIntro && !fullScreen && (
        <>
          <Type />
          <motion.hr
            className="my-4 border-green-500 opacity-50"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}

      <div className="mt-4 text-sm">
        <AnimatePresence>
          {output.map((item) => (
            <motion.div
              key={item.id}
              data-entry
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p>
                <span className="text-green-500">{">_"}</span> {item.command}
              </p>
              <div className="text-white break-words">{item.response}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center">
        <span className="text-green-500">{">_"}</span>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Terminal input"
          className="bg-transparent border-none outline-none text-sm text-white ml-1 w-full"
        />
      </div>
    </div>
  );
}
