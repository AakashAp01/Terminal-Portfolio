import { motion } from "framer-motion";

function ContactMe() {
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
          Contact Me
        </motion.h1>

        {/* Red horizontal line */}
        <motion.hr
          className="my-6 border-t-2 border-red-500 opacity-60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        {/* Contact description */}
        <motion.p
          className="text-neutral-400 mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm always open to new opportunities and collaborations. If you have a project or just want to chat, feel free to reach out.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg border-2 border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-red-500"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg border-2 border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-red-500"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.textarea
              placeholder="Your Message"
              className="p-4 rounded-lg border-2 border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-red-500"
              rows="4"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-900 transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default ContactMe;
