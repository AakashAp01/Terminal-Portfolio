import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useAnimationControls } from "framer-motion";
import { APPS } from "../commands";

const BASE = 44;
const MAX = 68;
const RANGE = 140;

function DockIcon({ mouseX, label, icon, color, onClick, running, iconClassName = "text-white" }) {
  const ref = useRef(null);
  const bounce = useAnimationControls();

  const distance = useTransform(mouseX, (x) => {
    const b = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - b.x - b.width / 2;
  });
  const size = useSpring(useTransform(distance, [-RANGE, 0, RANGE], [BASE, MAX, BASE]), {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
  });
  const iconSize = useTransform(size, (s) => s * 0.45);

  const handleClick = () => {
    bounce.start({ y: [0, -18, 0, -7, 0], transition: { duration: 0.6, ease: "easeOut" } });
    onClick();
  };

  return (
    <div className="group relative flex flex-col items-center">
      <span className="pointer-events-none absolute -top-10 whitespace-nowrap rounded-md bg-gray-800/95 border border-white/10 px-2.5 py-1 text-xs text-gray-100 font-sans opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {label}
      </span>
      <motion.button
        ref={ref}
        animate={bounce}
        style={{ width: size, height: size }}
        onClick={handleClick}
        aria-label={label}
        className={`flex items-center justify-center rounded-[22%] bg-gradient-to-b ${color} shadow-lg shadow-black/40 ring-1 ring-white/15 cursor-pointer`}
      >
        <motion.i className={`${icon} ${iconClassName}`} style={{ fontSize: iconSize }} />
      </motion.button>
      <span className={`mt-1 h-1 w-1 rounded-full ${running ? "bg-gray-200" : "bg-transparent"}`} />
    </div>
  );
}

export default function Dock({ onRun, onTerminal, onSpotlight }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 180 }}
      className="fixed inset-x-0 bottom-12 z-[65] hidden sm:flex justify-center pointer-events-none"
    >
      <div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end gap-2 h-[64px] px-3 pt-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/60"
      >
        <DockIcon
          mouseX={mouseX}
          label="Terminal"
          icon="fa-solid fa-terminal"
          color="from-gray-800 to-black"
          iconClassName="text-green-400"
          running
          onClick={onTerminal}
        />
        {APPS.filter((a) => a.dock !== false).map((app) => (
          <DockIcon
            key={app.id}
            mouseX={mouseX}
            label={app.label}
            icon={app.icon}
            color={app.color}
            onClick={() => onRun(app.cmd)}
          />
        ))}
        <div className="self-center mx-1 h-10 w-px bg-white/25" />
        <DockIcon
          mouseX={mouseX}
          label="Spotlight"
          icon="fa-solid fa-magnifying-glass"
          color="from-gray-500 to-gray-700"
          onClick={onSpotlight}
        />
        <DockIcon
          mouseX={mouseX}
          label="Trash (clear)"
          icon="fa-solid fa-trash-can"
          color="from-gray-200 to-gray-400"
          iconClassName="text-gray-700"
          onClick={() => onRun("clear")}
        />
      </div>
    </motion.div>
  );
}
