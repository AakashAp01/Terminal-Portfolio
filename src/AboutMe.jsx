import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="overflow-hidden">
      <div className="p-8">
        {/* Title with animation */}
        <motion.h1
          className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        
        {/* Red horizontal line */}
        <motion.hr
          className="my-6 border-t-2 border-red-500 opacity-60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        <motion.p
          className="text-neutral-400 mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm a passionate front-end developer with expertise in creating beautiful and responsive web applications. I love turning complex problems into simple, beautiful and intuitive designs.
        </motion.p>

        <div className="relative mt-12">
          <div className="absolute left-0 w-1 bg-red-600 h-full"></div>

          <div className="ml-8 space-y-12">
            {[ 
              {
                year: "2023 - Present",
                title: "Senior Front-end Developer",
                description: "Leading front-end development initiatives and mentoring junior developers.",
              },
              {
                year: "2020 - 2023",
                title: "Front-end Developer",
                description: "Developed responsive web applications using modern frameworks.",
              },
              {
                year: "2018 - 2020",
                title: "Junior Developer",
                description: "Started my journey in web development, focusing on HTML, CSS, and JavaScript.",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className="absolute -left-11 w-6 h-6 bg-red-600 rounded-full transform group-hover:scale-110 transition-transform"></div>
                <div className="bg-neutral-900 p-6 rounded-lg shadow-xl transform hover:-translate-y-1 transition-transform border-l-4 border-red-600">
                  <span className="text-red-500 text-sm">{job.year}</span>
                  <h3 className="text-white text-xl font-semibold mt-2">{job.title}</h3>
                  <p className="text-neutral-400 mt-2">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ 
            {
              icon: "code",
              title: "Front-end Development",
              description: "Expert in React, Vue, and modern CSS frameworks",
            },
            {
              icon: "design_services",
              title: "UI/UX Design",
              description: "Creating beautiful and intuitive user interfaces",
            },
            {
              icon: "speed",
              title: "Performance Optimization",
              description: "Building fast and efficient web applications",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 p-6 rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
            >
              <span className="material-symbols-outlined text-red-500 text-4xl">{service.icon}</span>
              <h3 className="text-white text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-neutral-400 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
