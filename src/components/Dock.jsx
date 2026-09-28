import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useAnimationControls } from "framer-motion";
import { APPS } from "../commands";

const RANGE = 140;
const MAGNIFY_QUERY = "(hover: hover) and (min-width: 640px)";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function DockIcon({ id, mouseX, base, max, label, icon, color, onClick, running, bounces = true, iconClassName = "text-white" }) {
  const ref = useRef(null);
  const bounce = useAnimationControls();

  const distance = useTransform(mouseX, (x) => {
    const b = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - b.x - b.width / 2;
  });
  const size = useSpring(useTransform(distance, [-RANGE, 0, RANGE], [base, max, base]), {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
  });
  const iconSize = useTransform(size, (s) => s * 0.45);

  const handleClick = () => {
    if (bounces && !running) bounce.start({ y: [0, -18, 0, -7, 0], transition: { duration: 0.6, ease: "easeOut" } });
    onClick();
  };

  return (
    <div className="group relative flex flex-col items-center shrink-0">
      <span className="pointer-events-none absolute -top-10 hidden sm:block whitespace-nowrap rounded-md bg-gray-800/95 border border-white/10 px-2.5 py-1 text-xs text-gray-100 font-sans opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {label}
      </span>
      <motion.button
        ref={ref}
        data-dock-id={id}
        animate={bounce}
        style={{ width: size, height: size }}
        onClick={handleClick}
        aria-label={label}
        className={`flex items-center justify-center rounded-[22%] bg-gradient-to-b ${color} shadow-lg shadow-black/40 ring-1 ring-white/15 cursor-pointer`}
      >
        <motion.i className={`${icon} ${iconClassName}`} style={{ fontSize: iconSize }} />
      </motion.button>
      <span className={`mt-1 h-1 w-1 rounded-full transition-colors ${running ? "bg-gray-200" : "bg-transparent"}`} />
    </div>
  );
}

export default function Dock({ openApps, onOpen, onSpotlight, onTrash }) {
  const mouseX = useMotionValue(Infinity);
  const magnify = useMediaQuery(MAGNIFY_QUERY);
  const base = magnify ? 44 : 38;
  const max = magnify ? 68 : base;

  const shared = { mouseX, base, max };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 180 }}
      className="fixed inset-x-0 bottom-12 z-[65] flex justify-center px-2 pointer-events-none"
    >
      <div
        onMouseMove={(e) => magnify && mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end gap-2 h-[60px] sm:h-[64px] max-w-full px-3 pt-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/60 max-sm:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <DockIcon
          {...shared}
          id="terminal"
          label="Terminal"
          icon="fa-solid fa-terminal"
          color="from-gray-800 to-black"
          iconClassName="text-green-400"
          running={openApps.has("terminal")}
          onClick={() => onOpen("terminal")}
        />
        {APPS.filter((a) => a.dock !== false).map((app) => (
          <DockIcon
            {...shared}
            key={app.id}
            id={app.id}
            label={app.label}
            icon={app.icon}
            color={app.color}
            running={openApps.has(app.id)}
            onClick={() => onOpen(app.id)}
          />
        ))}
        <div className="self-center mx-1 h-10 w-px shrink-0 bg-white/25" />
        <DockIcon
          {...shared}
          id="spotlight"
          label="Spotlight"
          icon="fa-solid fa-magnifying-glass"
          color="from-gray-500 to-gray-700"
          bounces={false}
          onClick={onSpotlight}
        />
        <DockIcon
          {...shared}
          id="trash"
          label={openApps.size ? "Trash — close all windows" : "Trash"}
          icon="fa-solid fa-trash-can"
          color="from-gray-200 to-gray-400"
          iconClassName="text-gray-700"
          bounces={false}
          onClick={onTrash}
        />
      </div>
    </motion.div>
  );
}
