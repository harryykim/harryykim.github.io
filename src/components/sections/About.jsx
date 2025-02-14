

export const About = () => {
    const skills = [
        "Basic Data Structures",
        "Algorithms",
        "Software Construction",
        "Databases"
    ];

    return <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20">

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
            
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                I am a hardworking, intellectual individual studying Software Systems at Simon Fraser University. I'm interested in software development, and have experience in languages like C++ and Java, and am learning some web design and React.
                As I continue my journey in software development, I'm excited to explore new technologies and their real-world applications.
                When I'm not coding, I enjoy playing video games and working on creative projects.
                </p>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🎯Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S. in Computing Science</strong> - SFU (Ongoing)
                            </li>
                            <li>
                                <strong>Relevant Coursework:</strong> Data Structures, Comparative Programming Languages
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>No industry relevant work experience yet</strong> - Keep an eye out for updates!
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
} 