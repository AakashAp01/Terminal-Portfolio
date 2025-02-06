
export default function TeckStack() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 text-white">
                {/* Frontend Technologies */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-react text-blue-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">React</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="w-10 h-10 mb-2" alt="Tailwind CSS" />
                    <p className="text-green-400 font-semibold">Tailwind CSS</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-bootstrap text-purple-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">Bootstrap</p>
                </div>

                {/* Backend Technologies */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-node text-green-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">Node.js</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" className="w-10 h-10 mb-2" alt="Express.js" />
                    <p className="text-green-400 font-semibold">Express.js</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-php text-indigo-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">PHP</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" className="w-10 h-10 mb-2" alt="Laravel" />
                    <p className="text-green-400 font-semibold">Laravel</p>
                </div>

                {/* Databases */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-solid fa-database text-red-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">MongoDB</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-solid fa-database text-blue-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">MySQL</p>
                </div>

                {/* Tools */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-solid fa-toolbox text-yellow-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">Postman</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-git text-orange-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">Git</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-github text-white text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">GitHub</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-solid fa-server text-purple-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">CPanel</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-solid fa-cloud text-blue-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">Hostinger</p>
                </div>
            </div>
        </>

    )

}