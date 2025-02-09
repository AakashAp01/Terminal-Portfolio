
export default function TechStack() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 text-white">
                {/* HTML */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="35" height="35">
                        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                        <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
                        <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
                    </svg>
                    <p className="text-green-400 font-semibold">HTML5</p>
                </div>

                {/* CSS */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-css3-alt text-blue-500 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">CSS3</p>
                </div>

                {/* JavaScript */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <i className="fa-brands fa-js-square text-yellow-400 text-4xl mb-2"></i>
                    <p className="text-green-400 font-semibold">JavaScript</p>
                </div>

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
                    <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png" className="w-10 h-10 mb-2" alt="Express.js" />
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
                    <svg class="w-10 h-10 text-gray-800 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M7.29395 11.8039c0-3.96638 2.13959-6.41723 3.53335-8.01378.6733-.7712 1.1725-1.34306 1.1725-1.79012 0 .44706.4993 1.01892 1.1725 1.79013 1.3938 1.59654 3.5334 4.04739 3.5334 8.01377 0 4.3266-2.7501 6.9507-4.0764 7.7654L12.3701 22h-.7071l-.2906-2.4295c-1.3255-.8132-4.07845-3.4378-4.07845-7.7666Zm4.06395 6.7007.6419-9.44578.649 9.44578-.649.7503-.6419-.7503Z" clip-rule="evenodd" />
                    </svg>

                    <p className="text-green-400 font-semibold">MongoDB</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252">
                        <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" />
                        <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" />
                    </svg>

                    <p className="text-green-400 font-semibold">MySQL</p>
                </div>

                {/* Tools */}
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <svg viewBox="0 0 256 256" width="40" height="40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7Z" fill="#FF6C37" /><path d="m174.2 82.184-54.007 54.007-15.229-15.23c53.11-53.11 58.358-48.503 69.236-38.777Z" fill="#FFF" /><path d="M120.193 137.47c-.384 0-.64-.128-.895-.384l-15.358-15.229a1.237 1.237 0 0 1 0-1.792c54.007-54.006 59.638-48.887 71.028-38.649.255.256.383.512.383.896s-.128.64-.383.896l-54.007 53.878c-.128.256-.512.384-.768.384Zm-13.437-16.509 13.437 13.438 52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65Z" fill="#FF6C37" /><path d="m135.679 151.676-14.718-14.718 54.007-54.006c14.46 14.59-7.167 38.265-39.29 68.724Z" fill="#FFF" /><path d="M135.679 152.956c-.384 0-.64-.128-.896-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896s.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.791 0 15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614-.383.256-.767.384-1.023.384Zm-12.926-15.998c8.19 8.319 11.646 11.646 12.926 12.926 21.5-20.476 42.36-41.464 42.488-55.926.128-3.327-1.152-6.655-3.327-9.214l-52.087 52.214Z" fill="#FF6C37" /><path d="m105.22 121.345 10.878 10.878c.256.256.256.512 0 .768-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.175-.64-2.431-1.791-.128-.64.128-1.28.512-1.664l13.053-13.054c.256-.256.64-.384.768-.128Z" fill="#FFF" /><path d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455 0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128Zm11.902-16.51-12.542 12.543c-.256.256-.383.64-.128 1.024.128.383.512.511.896.383l21.116-4.607-9.342-9.342Z" fill="#FF6C37" /><path d="M202.739 52.238c-8.191-7.935-21.373-7.679-29.307.64-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.155 85l-14.59-14.59 18.174-18.172Z" fill="#FFF" /><path d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012 0-12.158 9.854-22.012 22.012-22.012 5.631 0 11.134 2.176 15.23 6.143.255.256.383.512.383.896s-.128.64-.384.895L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.327 2.047-7.295 3.199-11.262 3.199Zm0-41.337c-10.75 0-19.452 8.703-19.324 19.453 0 10.75 8.702 19.452 19.452 19.324 2.944 0 5.887-.64 8.575-2.047l-13.438-13.31c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.479-12.414-4.479Z" fill="#FF6C37" /><path d="m203.122 52.622-.255-.256-18.301 18.044 14.461 14.462c1.408-.896 2.816-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178Z" fill="#FFF" /><path d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.589-14.59c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l18.173-18.173a1.237 1.237 0 0 1 1.791 0l.384.256c8.575 8.574 8.575 22.396.128 31.098-1.28 1.28-2.687 2.432-4.223 3.328-.384.128-.64.256-.768.256Zm-12.798-15.87 12.926 12.926c1.024-.64 2.048-1.536 2.816-2.304 7.294-7.294 7.678-19.196.64-26.875L186.357 70.41Z" fill="#FF6C37" /><path d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247 8.063 8.063 51.062-44.792c3.328-2.816 3.584-7.807.768-11.134-.256-.128-.384-.256-.512-.384Z" fill="#FFF" /><path d="M124.929 142.077c-.384 0-.64-.128-.896-.383l-8.063-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0 9.115 9.115 0 0 1 0 12.926l-.384.384-51.063 44.792c-.128.255-.384.383-.767.383Zm-6.143-9.342 6.27 6.271 50.167-44.024c2.816-2.304 3.072-6.527.768-9.342-2.303-2.816-6.526-3.072-9.342-.768-.128.128-.256.256-.512.384l-47.351 47.48Z" fill="#FF6C37" /><path d="M80.009 187.637c-.512.256-.768.768-.64 1.28l2.175 9.214c.512 1.28-.256 2.816-1.663 3.2-1.024.384-2.176 0-2.816-.768l-14.077-13.95 45.943-45.943 15.87.256 10.75 10.75c-2.56 2.175-18.045 17.149-55.542 35.961Z" fill="#FFF" /><path d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.896 0-.383.128-.64.384-.895l45.944-45.944c.256-.256.64-.384.895-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.895.767c-13.566 11.902-31.995 23.804-54.902 35.194l2.175 9.086c.384 1.664-.384 3.456-1.92 4.352-.767.384-1.407.512-2.047.512Zm-14.078-15.997 13.182 13.054c.384.64 1.152.896 1.792.512.64-.384.896-1.152.512-1.792l-2.176-9.214c-.256-1.152.256-2.176 1.28-2.688 22.652-11.39 40.952-23.163 54.39-34.81l-9.47-9.47-14.718-.256-44.792 44.664Z" fill="#FF6C37" /><path d="m52.11 197.62 11.006-11.007 16.38 16.381-26.107-1.791c-1.151-.128-1.92-1.152-1.791-2.304 0-.512.128-1.024.512-1.28Z" fill="#FFF" /><path d="m79.497 204.146-26.236-1.791c-1.92-.128-3.199-1.792-3.071-3.712.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.792 0l16.38 16.38c.385.385.512.897.257 1.408-.256.512-.64.768-1.152.768Zm-16.381-15.74-10.11 10.11c-.384.255-.384.895 0 1.151.127.128.255.256.511.256l22.652 1.536-13.053-13.054ZM104.452 146.557c-.768 0-1.28-.64-1.28-1.28 0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-20.477 4.352h-.256Zm12.414-11.902-8.446 8.446 13.821-2.943-5.375-5.503Z" fill="#FF6C37" /><path d="m124.8 140.926-14.077 3.071c-1.024.256-2.048-.384-2.303-1.408-.128-.64 0-1.28.511-1.791l7.807-7.807 8.063 7.935Z" fill="#FFF" /><path d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.385-1.663.897-2.303l7.806-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-14.078 3.072h-.64Zm6.399-10.622-6.91 6.91c-.257.257-.257.512-.129.768s.384.384.768.384l11.774-2.56-5.503-5.502ZM203.25 64.907c-.256-.767-1.151-1.151-1.92-.895-.767.255-1.151 1.151-.895 1.92 0 .127.128.255.128.383.768 1.536.512 3.455-.512 4.863-.512.64-.384 1.536.128 2.048.64.512 1.536.384 2.048-.256 1.92-2.432 2.303-5.503 1.023-8.063Z" fill="#FF6C37" /></svg>
                    <p className="text-green-400 font-semibold">Postman</p>
                </div>
                <div className="border border-green-500 p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                        <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36" />
                    </svg>

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