import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APPS } from "../commands";

export default function Spotlight({ open, onClose, onRun }) {
  return (
    <AnimatePresence>
      {open && <SpotlightPanel onClose={onClose} onRun={onRun} />}
    </AnimatePresence>
  );
}

function SpotlightPanel({ onClose, onRun }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  const q = query.trim().toLowerCase();
  const matches = APPS.filter((a) =>
    `${a.label} ${a.cmd} ${a.description}`.toLowerCase().includes(q)
  );
  const results = q && !matches.some((a) => a.cmd === q)
    ? [...matches, { id: "__raw", label: `Run “${query.trim()}” in Terminal`, cmd: query.trim(), description: "Execute as a terminal command", icon: "fa-solid fa-terminal", color: "from-gray-800 to-black" }]
    : matches;

  useEffect(() => {
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const run = (item) => {
    if (!item) return;
    onClose();
    onRun(item.cmd);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      run(results[active]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex justify-center items-start pt-[18vh] px-4 bg-black/40 backdrop-blur-sm font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onMouseDown={onClose}
    >
      <motion.div
        role="dialog"
        aria-label="Spotlight search"
        className="w-full max-w-xl rounded-2xl bg-gray-900/85 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/70 overflow-hidden"
        initial={{ scale: 0.96, y: -10, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: -10, opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 380 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 h-14">
          <i className="fa-solid fa-magnifying-glass text-gray-400 text-lg" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Spotlight Search"
            className="flex-1 bg-transparent outline-none text-xl text-white placeholder-gray-500"
          />
          <kbd className="text-[11px] text-gray-400 border border-white/15 rounded px-1.5 py-0.5">esc</kbd>
        </div>

        {results.length > 0 && (
          <ul ref={listRef} className="max-h-[45vh] overflow-y-auto border-t border-white/10 p-2">
            {results.map((item, i) => (
              <li
                key={item.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => run(item)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                  i === active ? "bg-blue-500/80 text-white" : "text-gray-200"
                }`}
              >
                <span className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-[22%] bg-gradient-to-b ${item.color}`}>
                  <i className={`${item.icon} text-sm ${item.id === "__raw" ? "text-green-400" : "text-white"}`} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium truncate">{item.label}</span>
                  <span className={`block text-xs truncate ${i === active ? "text-blue-100" : "text-gray-400"}`}>
                    {item.description} · <span className="font-mono">{item.cmd}</span>
                  </span>
                </span>
                {i === active && <i className="fa-solid fa-arrow-turn-down rotate-90 text-xs opacity-80" />}
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-end gap-4 px-4 py-2 text-[11px] text-gray-500 border-t border-white/10">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>⌘K toggle</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
