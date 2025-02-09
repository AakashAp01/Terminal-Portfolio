import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      name: "Portfolio Terminal",
      description: "A terminal-style interactive portfolio.",
      github: "https://github.com/AakashAp01/React-Portfolio",
    },
    {
      name: "Personal Portfolio with Admin Panel",
      description: "A personal portfolio with an admin panel built in Laravel.",
      github: "https://github.com/AakashAp01/Laravel-Portfolio-With-Admin-Panel",
    },
    {
      name: "Laravel Real-Time Chat App",
      description: "A Laravel real-time chat app using Reverb and React.",
      github: "https://github.com/AakashAp01/Laravel-Real-Time-Chat-App",
    },
    {
      name: "React Password Generator",
      description: "A collection of basic React projects like a password generator, BG changer, and currency converter.",
      github: "https://github.com/AakashAp01/Basic-React",
    },
    {
      name: "React Currency Converter",
      description: "A simple React-based currency converter.",
      github: "https://github.com/AakashAp01/Basic-React",
    },
    {
      name: "Laravel Livewire E-Com",
      description: "A fully functional e-commerce platform built using Laravel Livewire. Features include product management, cart functionality, user authentication, and real-time updates.",
      github: "https://github.com/AakashAp01/Laravel-Livewire",
    }
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-5 rounded-xl shadow-md border border-green-500 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:scale-105"
          >
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-code text-green-400 text-2xl"></i>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              </div>
              <i className={`fa-solid ${expanded === index ? "fa-chevron-up" : "fa-chevron-down"} text-green-400`}></i>
            </div>

            <motion.div
              initial={false}
              animate={{ height: expanded === index ? "auto" : 0, opacity: expanded === index ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 text-sm mt-3">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center gap-2 mt-2"
              >
                <i className="fa-brands fa-github"></i> View on GitHub
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
