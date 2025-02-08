import profile from "../assets/profile.jpg";

export default function About() {
    return (
        <>
            <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-lg max-w-3xl mx-auto text-white">
                {/* Left Side - Profile Image */}
                <div className="relative md:w-40 md:h-52 md:mr-6 mb-4 w-32 h-52 mt-6 md:mt-0">
                    {/* Glowing Background Effect */}
                    <div className="absolute inset-0 w-full h-full bg-green-500 blur-xl opacity-30 rounded-lg"></div>

                    {/* Profile Image */}
                    <div className="relative w-full h-full border border-green-400 rounded-lg shadow-[0px_0px_15px_rgba(34,197,94,0.6)]">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Side - About Text */}
                <div className="flex-1 text-left space-y-4">
                    <h2 className="text-green-500 text-2xl font-bold flex items-center">
                        <i className="fa-solid fa-user text-green-500 mr-2"></i> About Me
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Hey, I'm<span className="text-green-500" > Aakash Prajapati </span>  a passionate Fullstack Web Developer currently working at Fablead Developers Technolabs. My expertise lies in developing scalable web applications using Laravel with a strong focus on RESTful APIs, authentication mechanisms, and third-party integrations. I have experience working with MySQL databases, optimizing queries, and ensuring smooth deployments on production servers.
                    </p>
                    <p className="text-lg leading-relaxed">
                        In addition to my professional experience, I am a self-taught developer in React.js, Node.js, Express.js, and Laravel Livewire, continuously expanding my skill set to stay updated with modern web technologies. I have learned and practiced them independently to enhance my development capabilities.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I am proficient in version control (Git, GitHub) and have experience deploying applications using cPanel and Hostinger. I enjoy solving complex problems, writing clean and maintainable code, and collaborating with teams to deliver high-quality applications.
                    </p>
                </div>
            </div>
        </>
    )
}
