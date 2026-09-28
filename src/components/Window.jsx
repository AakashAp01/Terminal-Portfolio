import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue, useDragControls } from "framer-motion";

const OPEN = { duration: 0.55, ease: [0.4, 0, 0.2, 1] };
const CLOSE = { duration: 0.45, ease: [0.4, 0, 0.8, 0.6] };

function dockTarget(appId) {
  const r = document.querySelector(`[data-dock-id="${appId}"]`)?.getBoundingClientRect();
  if (r && r.width) return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  return { x: window.innerWidth / 2, y: window.innerHeight };
}

const stop = (e) => e.stopPropagation();

function TrafficLight({ label, glyph, color, dimmed, onClick }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center cursor-pointer ring-1 ring-black/20 ${dimmed ? `bg-gray-600 ${color.hover}` : color.base}`}
    >
      <i className={`fa-solid ${glyph} text-[7px] leading-none ${color.glyph} opacity-0 group-hover/lights:opacity-100 transition-opacity`} />
    </button>
  );
}

const RED = { base: "bg-red-500", hover: "group-hover/lights:bg-red-500", glyph: "text-red-950" };
const YELLOW = { base: "bg-yellow-500", hover: "group-hover/lights:bg-yellow-500", glyph: "text-yellow-950" };
const GREEN = { base: "bg-green-500", hover: "group-hover/lights:bg-green-500", glyph: "text-green-950" };

export default function Window({ win, title, focused, zIndex, desktopRef, onFocus, onClose, onMinimize, onToggleFullScreen, onClosed, onHelp, children }) {
  const frameRef = useRef(null);
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(win.offset.x);
  const y = useMotionValue(win.offset.y);
  const savedPos = useRef(null);

  // Genie transform lives on the inner element so it never fights the drag offset.
  const gx = useMotionValue(0);
  const gy = useMotionValue(0);
  const sx = useMotionValue(0.08);
  const sy = useMotionValue(0.03);
  const opacity = useMotionValue(0);

  const offsetToDock = () => {
    const r = frameRef.current.getBoundingClientRect();
    const t = dockTarget(win.appId);
    return { x: t.x - (r.left + r.width / 2), y: t.y - (r.top + r.height / 2) };
  };

  const genieIn = () => {
    const d = offsetToDock();
    gx.set(d.x);
    gy.set(d.y);
    sx.set(0.08);
    sy.set(0.03);
    opacity.set(0);
    return Promise.all([
      animate(gx, 0, OPEN),
      animate(gy, 0, OPEN),
      animate(sx, 1, { ...OPEN, duration: OPEN.duration * 1.15 }),
      animate(sy, 1, { ...OPEN, duration: OPEN.duration * 0.85 }),
      animate(opacity, 1, { duration: 0.2 }),
    ]);
  };

  const genieOut = () => {
    const d = offsetToDock();
    return Promise.all([
      animate(gx, d.x, CLOSE),
      animate(gy, d.y, CLOSE),
      animate(sx, 0.08, { ...CLOSE, duration: CLOSE.duration * 0.8 }),
      animate(sy, 0.03, CLOSE),
      animate(opacity, 0, { duration: CLOSE.duration, ease: "easeIn" }),
    ]);
  };

  useLayoutEffect(() => {
    genieIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- open animation runs once, on mount
  }, []);

  const prev = useRef({ minimized: win.minimized, closing: win.closing, fullScreen: win.fullScreen });
  useEffect(() => {
    const p = prev.current;
    if (win.closing && !p.closing) {
      genieOut().then(() => onClosed(win.id));
    } else if (win.minimized !== p.minimized) {
      win.minimized ? genieOut() : genieIn();
    }
    if (win.fullScreen !== p.fullScreen) {
      if (win.fullScreen) {
        savedPos.current = { x: x.get(), y: y.get() };
        x.set(0);
        y.set(0);
      } else if (savedPos.current) {
        x.set(savedPos.current.x);
        y.set(savedPos.current.y);
      }
    }
    prev.current = { minimized: win.minimized, closing: win.closing, fullScreen: win.fullScreen };
  });

  const inactive = win.minimized || win.closing;

  return (
    <motion.div
      ref={frameRef}
      drag={!win.fullScreen}
      dragListener={false}
      dragControls={dragControls}
      dragConstraints={desktopRef}
      dragElastic={0}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ scale: 1.01 }}
      onPointerDownCapture={onFocus}
      style={{ x, y, zIndex }}
      aria-hidden={inactive}
      className={`${win.fullScreen ? "fixed inset-0" : "absolute inset-x-0 top-4 md:top-8 mx-auto w-full max-w-4xl"} ${inactive ? "pointer-events-none" : ""}`}
    >
      <motion.div
        style={{ x: gx, y: gy, scaleX: sx, scaleY: sy, opacity, originX: 0.5, originY: 1 }}
        className={`h-full flex flex-col overflow-hidden bg-black border ${win.fullScreen ? "rounded-none" : "rounded-lg"} ${
          focused ? "border-green-500 shadow-2xl shadow-green-500/15" : "border-green-900 shadow-xl shadow-black/60"
        } ${isDragging ? "shadow-green-500/40" : ""}`}
      >
        <div
          onPointerDown={(e) => !win.fullScreen && dragControls.start(e)}
          onDoubleClick={onToggleFullScreen}
          className={`drag-handle relative h-9 shrink-0 px-3 flex items-center bg-gray-900 border-b select-none touch-none ${
            focused ? "border-green-500/70" : "border-green-900"
          } ${win.fullScreen ? "" : isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <div className="group/lights relative z-10 flex gap-2" onPointerDown={stop} onDoubleClick={stop}>
            <TrafficLight label="Close" glyph="fa-xmark" color={RED} dimmed={!focused} onClick={onClose} />
            <TrafficLight label="Minimize to Dock" glyph="fa-minus" color={YELLOW} dimmed={!focused} onClick={onMinimize} />
            <TrafficLight
              label={win.fullScreen ? "Exit Full Screen" : "Full Screen"}
              glyph={win.fullScreen ? "fa-compress" : "fa-expand"}
              color={GREEN}
              dimmed={!focused}
              onClick={onToggleFullScreen}
            />
          </div>
          <p className={`absolute inset-x-24 text-center text-xs sm:text-sm truncate ${focused ? "text-gray-300" : "text-gray-500"}`}>
            {title}
          </p>
          <i
            className="fa-solid fa-info-circle relative z-10 ml-auto text-green-500 cursor-pointer"
            title="Command Info"
            onPointerDown={stop}
            onClick={onHelp}
          />
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}
