

export const Home = () => {
    return <section id="home"
    className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl font-bold mb-6 text-blue-500">Hi, I'm Harry Kim</h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Hi! I'm Harry Kim, and I'm a student studying Software Systems at Simon Fraser University(SFU). Feel free to check out my projects and get in touch!
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View Projects
                </a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
}