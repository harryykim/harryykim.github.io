

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-cyan-500 text-center">Projects</h1>
            <div className="p-6 border rounded-border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)]">
                <h3>Rollcall</h3>
                <div className="flex justify-center items-center">
                    <img src="/images/RollCall%20screenshot.png" alt="A screenshot of the RollCall application." className="w-128 h-auto rounded-lg shadow-md" />
                </div>
                <p className="text-gray-400 mb-4">
                    An attendance management application for after school programs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Next.js"].map((tech,key) =>(
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                   hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-6 items-center">
                    <a href="https://final-project-20-waves.vercel.app/login"
                    className="text-blue-400 hover:text-blue-300 transition-colors">
                        Project Link →
                    </a>
                    <a href="https://drive.google.com/file/d/1Afc_rQp3xi14XXPany3SbFctcGm9uyR4/view"
                    className="text-blue-400 hover:text-blue-300 transition-colors">
                        Project Video →
                    </a>
                </div>
            </div>
            <div className="p-6 border rounded-border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)]">
                <h3>Cybercision</h3>
                <div className="flex justify-center items-center">
                    <img src="/images/cybercision.png" alt="A screenshot of the Cybercision game." className="w-128 h-auto rounded-lg shadow-md" />
                </div>
                <p className="text-gray-400 mb-4">
                    Cybercision, a puzzle simulation game made by Team 9, UBC Game Dev 2022-2023
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Unity", "Game Development"].map((tech,key) =>(
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                   hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-6 items-center">
                    <a href="https://engineereng.itch.io/cybercision"
                    className="text-blue-400 hover:text-blue-300 transition-colors">
                        Project Link →
                    </a>
                    <a href="https://github.com/engineereng/cybercision"
                    className="text-blue-400 hover:text-blue-300 transition-colors">
                        Github Link →
                    </a>
                </div>
            </div>
        </div>
    </section>
}