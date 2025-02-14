

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Projects</h2>
            <div className="p-6 rounded-border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)]">
                <h3>Sample Project</h3>
                <p className="text-gray-400 mb-4">
                    Unfortunately, I don't seem to have any projects right now. That'll change soon!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Sample Skills", "Sample Skills"].map((tech,key) =>(
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                   hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a className="text-blue-400 hover:text-blue-300 transition-colors">
                        Project Link
                    </a>
                </div>
            </div>
        </div>
    </section>
}