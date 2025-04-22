
export const About = () => {
    const skills = [
        "Basic Data Structures",
        "Algorithms",
        "Software Construction",
        "Databases"
    ]

    return <section id="about"
    className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center z-10 px-4 max-w-5xl mx-auto">
            <img src="/images/selfie.png" alt="Harry Kim" className="w-32 h-32 object-cover rounded-full shadow-md mx-auto mb-6 ring-2 ring-cyan-400"></img>
            <h1 className="text-3xl font-bold mb-8 text-cyan-500">About Me</h1>
            <p className="text-gray-400 max-w-lg mx-auto">
                I am a hardworking, intellectual individual studying Software Systems at Simon Fraser University. I'm interested in software development, and have experience in languages like C++ and Java, and am learning some web design and React.
                As I continue my journey in software development, I'm excited to explore new technologies and their real-world applications.
                When I'm not coding, I enjoy playing video games and working on creative projects.
            </p>
            <div className="rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">🎯Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border border-white/10">
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
                    <div className="rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>No industry relevant work experience yet</strong> - Keep an eye out for updates!
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </section>
}