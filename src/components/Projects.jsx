import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      name: "Xpets - Social Media Platform for Pet Owners",
      description: "Developed API endpoints for individual and group chat, along with photo and video album functionality, secured authentication, and RESTful API development.",
      technologies: ["Laravel", "JWT Auth", "REST API", "MySQL"],
    },
    {
      name: "React Terminal Portfolio",
      description: "A terminal-style interactive portfolio built using React, featuring smooth animations with Framer Motion and a sleek design with Tailwind CSS.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/AakashAp01/React-Portfolio",
    },
    {
      name: "Portfolio Laravel",
      description: "A personal portfolio with an admin panel, allowing dynamic blog management, contact form handling with email notifications, and customization of font, theme, and colors.",
      technologies: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
      github: "https://github.com/AakashAp01/Laravel-Portfolio-With-Admin-Panel",
    },
    {
      name: "Laravel Real-Time Chat App",
      description: "A real-time chat application using Laravel's Reverb package and WebSockets, enabling seamless communication between users with instant updates.",
      technologies: ["Laravel", "Reverb", "React", "WebSockets"],
      github: "https://github.com/AakashAp01/Laravel-Real-Time-Chat-App",
    },
    {
      name: "React Password Generator",
      description: "A simple yet effective password generator built with React, using hooks to dynamically create secure passwords with customizable options.",
      technologies: ["React", "Hooks", "Tailwind CSS"],
      github: "https://github.com/AakashAp01/Basic-React",
    },
    {
      name: "React Currency Converter",
      description: "A currency converter built with React, utilizing real-time exchange rate API integration to provide accurate and up-to-date conversions.",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      github: "https://github.com/AakashAp01/Basic-React",
    },
    {
      name: "Ugecy-Campaign & Content Platform",
      description: "A platform where campaign creators and content creators collaborate. Built core functionalities, user role management, and Stripe payment integration for seamless content submission and payments.",
      technologies: ["Laravel", "Stripe", "MySQL", "Livewire"],
    },
    {
      name: "Laravel Livewire E-Com",
      description: "A fully functional e-commerce platform featuring product management, cart system, authentication, and real-time updates powered by Laravel Livewire.",
      technologies: ["Laravel", "Livewire", "Alpine.js", "MySQL"],
      github: "https://github.com/AakashAp01/Laravel-Livewire",
    },
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

              <div className="mt-2">
                <h4 className="text-green-400 font-semibold text-sm">Technologies Used:</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-2 mt-2"
                >
                  <i className="fa-brands fa-github"></i> View on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
