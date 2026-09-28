export const APPS = [
  { id: "about", label: "About", cmd: "ap about", description: "Who I am", icon: "fa-solid fa-user", color: "from-sky-400 to-blue-600" },
  { id: "projects", label: "Projects", cmd: "ap --projects", description: "Things I've built", icon: "fa-solid fa-folder-open", color: "from-cyan-300 to-blue-500" },
  { id: "tech", label: "Tech Stack", cmd: "ap tech stack", description: "Tools & technologies", icon: "fa-solid fa-layer-group", color: "from-violet-400 to-purple-700" },
  { id: "github", label: "GitHub Stats", cmd: "ap github stats", description: "Contribution stats", icon: "fa-brands fa-github", color: "from-gray-500 to-gray-800" },
  { id: "resume", label: "Resume", cmd: "ap resume", description: "View or download resume", icon: "fa-solid fa-file-lines", color: "from-rose-400 to-red-600" },
  { id: "contact", label: "Contact", cmd: "ap --contact", description: "Get in touch", icon: "fa-solid fa-envelope", color: "from-sky-300 to-sky-600" },
  { id: "music", label: "Music", cmd: "ap --music", description: "Play background music", icon: "fa-solid fa-music", color: "from-pink-400 to-rose-600" },
  { id: "devcard", label: "Dev Card", cmd: "ap dev card", description: "daily.dev stats card", icon: "fa-solid fa-id-card", color: "from-indigo-400 to-indigo-700", dock: false },
  { id: "inspire", label: "Inspire", cmd: "ap inspire", description: "Motivational quote", icon: "fa-solid fa-lightbulb", color: "from-amber-300 to-orange-500", dock: false },
  { id: "laugh", label: "Make Me Laugh", cmd: "ap make me laugh", description: "Random joke", icon: "fa-solid fa-face-laugh-squint", color: "from-yellow-300 to-amber-500", dock: false },
  { id: "help", label: "Help", cmd: "ap help", description: "All commands", icon: "fa-solid fa-circle-question", color: "from-emerald-400 to-green-600", dock: false },
  { id: "clear", label: "Clear Terminal", cmd: "clear", description: "Empty the terminal", icon: "fa-solid fa-trash", color: "from-gray-300 to-gray-500", dock: false },
];

export const COMPLETIONS = [
  ...APPS.map((a) => a.cmd),
  "cls",
  "on typing sound",
  "off typing sound",
  "animate:",
];
