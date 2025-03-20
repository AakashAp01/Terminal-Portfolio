import { motion } from "framer-motion";

export default function DevCard() {
  return (
    <div className="m-5">
      {/* daily dev Stats */}
      <a href="https://app.daily.dev/aakashap"> <motion.img
        src="https://api.daily.dev/devcards/v2/6UbQkWVqqQZ0SHWGnAZlg.png?type=wide&r=o2j"
        alt="AakashAp's Dev Card"
        className="rounded-3xl border p-2 border-green-500"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        width="400"
      /></a>

    </div>
  );
}