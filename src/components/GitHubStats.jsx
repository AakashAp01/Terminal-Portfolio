import { motion } from "framer-motion";

export default function GitHubStats() {
  return (
    <div className="m-5">
      {/* GitHub Stats */}
      <motion.img
        src="https://github-readme-stats.vercel.app/api?username=aakashap01&show_icons=true&theme=dark&hide_border=true&icon_color=22c55e&text_color=22c55e"
        alt="GitHub Stats"
        className="rounded-lg border p-5 border-green-500"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      />

    </div>
  );
}
