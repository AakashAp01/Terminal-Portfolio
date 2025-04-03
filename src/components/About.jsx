import profile from "../assets/profile2.png";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto text-white p-8 rounded-xl shadow-lg">
  
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        
        <div className="relative w-32 h-52 md:w-40 md:h-52">
      

          <div className="relative w-full h-full border-4 rounded-br-xs shadow-lg overflow-hidden">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4 text-left">
          <p className="leading-relaxed">
            Hey, I'm <span className="text-green-500">Aakash Prajapati</span>, a passionate Fullstack Web Developer. 
            My expertise lies in developing scalable web applications using 
            <span className="text-green-500"> Laravel</span>, with a strong focus on 
            RESTful APIs, authentication mechanisms, and third-party APIs integrations. 
            I have experience working with <span className="text-green-500">MySQL</span>, 
            optimizing queries, and ensuring smooth deployments on production servers.
          </p>

          <p className="leading-relaxed">
            In addition to my professional experience, I am a self-taught developer in 
            <span className="text-green-500"> React.js, Node.js, Express.js</span>, and 
            <span className="text-green-500"> Laravel Livewire</span>. 
            I continuously expand my skill set to stay updated with modern web technologies.
          </p>

          <p className="leading-relaxed">
            I am proficient in version control (<span className="text-green-500">Git, GitHub</span>) 
            and have experience deploying applications using 
            <span className="text-green-500"> cPanel and Hostinger</span>. 
            I enjoy solving complex problems, writing clean and maintainable code, and 
            collaborating with teams to deliver high-quality applications.
          </p>
        </div>
      </div>
    </div>
  );
}
