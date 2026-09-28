import { useEffect, useState } from "react";

const batteryIcon = (level) => {
  if (level > 0.85) return "fa-battery-full";
  if (level > 0.6) return "fa-battery-three-quarters";
  if (level > 0.35) return "fa-battery-half";
  if (level > 0.1) return "fa-battery-quarter";
  return "fa-battery-empty";
};

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function useBattery() {
  const [battery, setBattery] = useState(null);
  useEffect(() => {
    if (!navigator.getBattery) return;
    let bat;
    const update = () => setBattery({ level: bat.level, charging: bat.charging });
    navigator.getBattery().then((b) => {
      bat = b;
      update();
      bat.addEventListener("levelchange", update);
      bat.addEventListener("chargingchange", update);
    }).catch(() => {});
    return () => {
      bat?.removeEventListener("levelchange", update);
      bat?.removeEventListener("chargingchange", update);
    };
  }, []);
  return battery;
}

export default function MenuBar({ onRun, onHelp, onSpotlight }) {
  const now = useClock();
  const battery = useBattery();

  const date = now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

  const menuItem = "px-2.5 py-0.5 rounded hover:bg-white/15 transition-colors";

  return (
    <nav className="sticky top-0 z-[55] h-7 w-full flex items-center justify-between px-3 text-[13px] text-gray-100 bg-gray-900/70 backdrop-blur-xl border-b border-white/10 font-sans select-none">
      <div className="flex items-center gap-1 min-w-0">
        <i className="fa-solid fa-terminal text-green-400 px-2" aria-hidden="true" />
        <span className="font-semibold px-1.5 truncate">AakashAp</span>
        <div className="hidden md:flex items-center">
          <button className={menuItem} onClick={() => onRun("ap about")}>About</button>
          <button className={menuItem} onClick={() => onRun("ap --projects")}>Projects</button>
          <button className={menuItem} onClick={() => onRun("ap resume")}>Resume</button>
          <button className={menuItem} onClick={() => onRun("ap --contact")}>Contact</button>
          <button className={menuItem} onClick={onHelp}>Help</button>
        </div>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        {battery && (
          <span className="hidden sm:flex items-center gap-1.5 px-2" title={`Battery ${Math.round(battery.level * 100)}%`}>
            <span className="text-xs">{Math.round(battery.level * 100)}%</span>
            <i className={`fa-solid ${batteryIcon(battery.level)}`} />
            {battery.charging && <i className="fa-solid fa-bolt text-[10px] text-yellow-300 -ml-1" />}
          </span>
        )}
        <i className="fa-solid fa-wifi px-2 hidden sm:inline" aria-hidden="true" />
        <button className={menuItem} onClick={onSpotlight} title="Spotlight (⌘K / Ctrl+K)" aria-label="Open Spotlight search">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <span className="px-2 tabular-nums whitespace-nowrap">
          <span className="hidden sm:inline">{date}&nbsp;&nbsp;</span>
          {time}
        </span>
      </div>
    </nav>
  );
}

