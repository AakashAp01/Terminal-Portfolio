import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      className="max-w-lg mx-auto  text-white p-6 rounded-2xl shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-green-400 text-2xl font-bold">✨ Let's Connect ✨</h2>

      <p className="mt-4 text-lg">
        You can reach me at:  
        <a href="mailto:aakashap309@gmail.com" className="text-green-400 hover:underline ml-1">
          ✉️ aakashap309@gmail.com
        </a>
      </p>
      <p className="mt-2 text-gray-300">Feel free to drop a message! 🚀</p>

 
      <div className="flex justify-center gap-5 mt-5">
        {[
          { href: "https://github.com/aakashap01", icon: "fa-github" },
          { href: "https://www.linkedin.com/in/aakashap", icon: "fa-linkedin" },
          { href: "https://www.facebook.com/share/1HPLsmLaTn/", icon: "fa-facebook" },
          { href: "https://www.instagram.com/_aakash_ap_/", icon: "fa-instagram" },
          { href: "https://x.com/akashap01", icon: "fa-x-twitter" },
          { href: "https://wa.me/+919327163149", icon: "fa-whatsapp" }, 
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 hover:scale-110 hover:text-green-400"
            whileHover={{ y: -5 }}
          >
            <i className={`fa-brands ${icon}`}></i>
          </motion.a>
        ))}
      </div>

      <p className="mt-6 text-green-400 text-lg font-semibold">💡 Open to collaborations & new opportunities!</p>
    </motion.div>
  );
}
