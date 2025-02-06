import { motion } from "framer-motion";

export default function Projects() {
  // Sample project data
  const projects = [
    {
      name: "Portfolio Terminal",
      description: "A terminal-style interactive portfolio.",
      github: "https://github.com/aakashap01/portfolio-terminal",
    },
    {
      name: "E-Commerce API",
      description: "RESTful API for e-commerce with authentication.",
      github: "https://github.com/aakashap01/ecommerce-api",
    },
    {
      name: "Blog CMS",
      description: "A full-stack content management system for blogs.",
      github: "https://github.com/aakashap01/blog-cms",
    },
    {
      name: "Task Manager",
      description: "A simple task manager app with CRUD operations.",
      github: "https://github.com/aakashap01/task-manager",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className=" p-4 rounded-lg m-2 shadow-lg border border-green-500 flex flex-col items-start space-y-3"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <i className="fa-solid fa-code text-green-400 text-2xl"></i>
          <h3 className="text-green-400 text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-300">{project.description}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-2"
          >
            <i className="fa-brands fa-github"></i> View on GitHub
          </a>
        </motion.div>
      ))}
    </div>
  );
}
