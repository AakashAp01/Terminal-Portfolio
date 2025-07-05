import profile from "../assets/profile2.png";

export default function About() {
  return (
    <div className=" mx-auto px-4 py-5 text-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Image */}
        <div className="relative md:w-44 md:h-auto overflow-hidden shadow-xl border-5 border-green-500">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Description */}
        <div className="flex-1 space-y-5 text-sm md:text-base leading-relaxed text-gray-300">
          <p>
            Hey, I'm <span className="text-green-400 font-semibold">Aakash Prajapati</span>, a passionate Fullstack Web Developer.
            My expertise lies in building scalable web applications using
            <span className="text-green-400 font-medium"> Laravel</span>, focusing on RESTful APIs,
            authentication, and third-party integrations. I'm comfortable working with
            <span className="text-green-400"> MySQL</span>, optimizing queries, and deploying to production smoothly.
          </p>

          <p>
            I'm also a self-taught developer skilled in
            <span className="text-green-400"> React.js, Node.js, Express.js</span>, and
            <span className="text-green-400"> Laravel Livewire</span>. I stay updated with modern technologies and keep exploring new tools.
          </p>

          <p>
            I'm proficient in version control using
            <span className="text-green-400"> Git & GitHub</span> and deploy projects via
            <span className="text-green-400"> cPanel and Hostinger</span>. I love crafting clean, maintainable code
            and collaborating to build high-quality software.
          </p>
        </div>
      </div>
    </div>
  );
}
