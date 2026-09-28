import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CmdModal from "./components/CmdModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import Spotlight from "./components/Spotlight";
import Window from "./components/Window";
import Terminal from "./components/Terminal";
import { APPS } from "./commands";

let nextId = 1;

const appLabel = (appId) => (appId === "terminal" ? "Terminal" : APPS.find((a) => a.id === appId)?.label);

function App() {
  const [windows, setWindows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [typingSound, setTypingSound] = useState(false);
  const [focusSignal, setFocusSignal] = useState(0);
  const desktopRef = useRef(null);
  const zCounter = useRef(0);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSpotlightOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const live = windows.filter((w) => !w.closing);
  const visible = live.filter((w) => !w.minimized);
  const focusedId = visible.reduce((top, w) => (!top || w.z > top.z ? w : top), null)?.id;
  const stackOrder = [...windows].sort((a, b) => a.z - b.z).map((w) => w.id);
  const openApps = new Set(live.map((w) => w.appId));
  const anyFullScreen = visible.some((w) => w.fullScreen);

  const updateWindow = (id, patch) => setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, ...patch } : w)));

  const cascadeOffset = (n) => {
    const el = desktopRef.current;
    if (!el || window.innerWidth < 640) return { x: 0, y: 0 };
    const step = (n % 6) * 28;
    const roomX = Math.max(0, (el.clientWidth - Math.min(896, el.clientWidth)) / 2);
    const roomY = Math.max(0, el.clientHeight - 32 - 530);
    return { x: Math.min(step, roomX), y: Math.min(step, roomY) };
  };

  const openApp = (appId, cmd) => {
    const z = ++zCounter.current;
    const queued = cmd ? { id: nextId++, cmd } : null;
    const offset = cascadeOffset(live.length);
    const id = nextId++;
    setWindows((ws) => {
      const existing = ws.find((w) => w.appId === appId && !w.closing);
      if (existing) {
        return ws.map((w) =>
          w === existing ? { ...w, z, minimized: false, queued: appId === "terminal" && queued ? queued : w.queued } : w
        );
      }
      return [...ws, { id, appId, z, offset, queued, minimized: false, fullScreen: false, closing: false }];
    });
  };

  const openFromDock = (appId) => openApp(appId, APPS.find((a) => a.id === appId)?.cmd);

  const focusWindow = (id) =>
    setWindows((ws) => {
      const top = Math.max(...ws.map((w) => w.z));
      const target = ws.find((w) => w.id === id);
      if (!target || target.z === top) return ws;
      const z = ++zCounter.current;
      return ws.map((w) => (w.id === id ? { ...w, z } : w));
    });

  const closeAll = () => setWindows((ws) => ws.map((w) => ({ ...w, closing: true })));
  const removeWindow = (id) => setWindows((ws) => ws.filter((w) => w.id !== id));

  const runCommand = (raw) => {
    const cmd = raw.trim();
    const lc = cmd.toLowerCase();
    if (!cmd) return;
    if (lc === "ap help") return setIsModalOpen(true);
    if (lc === "clear" || lc === "cls") return closeAll();
    const app = APPS.find((a) => a.cmd === lc);
    if (app) openApp(app.id, app.cmd);
    else openApp("terminal", cmd);
  };

  const closeSpotlight = () => {
    setIsSpotlightOpen(false);
    setFocusSignal((n) => n + 1);
  };

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <MenuBar onRun={runCommand} onHelp={() => setIsModalOpen(true)} onSpotlight={() => setIsSpotlightOpen(true)} />
      <Header />

      <div ref={desktopRef} className="m-2 mb-32 text-green-400 font-mono relative min-h-[560px] md:min-h-[700px]">
        <AnimatePresence>
          {windows.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center pointer-events-none select-none"
            >
              <i className="fa-solid fa-terminal text-5xl text-green-500/70" />
              <p className="text-lg text-gray-300">No windows open</p>
              <p className="text-sm text-gray-500">
                Click <span className="text-green-400">Terminal</span> in the Dock to get started, or press{" "}
                <kbd className="rounded border border-white/20 px-1.5 text-gray-300">⌘K</kbd> to search.
              </p>
              <motion.i
                className="fa-solid fa-arrow-down mt-4 text-green-500/60"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {windows.map((w) => (
          <Window
            key={w.id}
            win={w}
            title={`${appLabel(w.appId)} — ~/Portfolio/AakashAp`}
            focused={w.id === focusedId}
            zIndex={w.fullScreen ? 62 : 10 + stackOrder.indexOf(w.id)}
            desktopRef={desktopRef}
            onFocus={() => focusWindow(w.id)}
            onClose={() => updateWindow(w.id, { closing: true })}
            onMinimize={() => updateWindow(w.id, { minimized: true, fullScreen: false })}
            onToggleFullScreen={() => updateWindow(w.id, { fullScreen: !w.fullScreen })}
            onClosed={removeWindow}
            onHelp={() => setIsModalOpen(true)}
          >
            <Terminal
              queuedCommand={w.queued}
              showIntro={w.appId === "terminal"}
              isFocused={w.id === focusedId}
              focusSignal={focusSignal}
              fullScreen={w.fullScreen}
              openHelp={() => setIsModalOpen(true)}
              typingSound={typingSound}
              setTypingSound={setTypingSound}
            />
          </Window>
        ))}
      </div>

      <CmdModal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

      <AnimatePresence>
        {!anyFullScreen && (
          <Dock openApps={openApps} onOpen={openFromDock} onSpotlight={() => setIsSpotlightOpen(true)} onTrash={closeAll} />
        )}
      </AnimatePresence>

      <Spotlight open={isSpotlightOpen} onClose={closeSpotlight} onRun={runCommand} />

      <Footer />
    </>
  );
}

export default App;
