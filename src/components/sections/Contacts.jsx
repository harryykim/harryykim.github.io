
export const Contacts = () => {
    return <section id="contact"
    className="min-h-screen flex items-center justify-center">
        <div className="text-center z-10 px-4">
            <h1 className="text-3xl font-bold mb-20 text-cyan-500">Contact Me</h1>
            <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Email</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            harryykim@gmail.com
                        </li>
                    </ul>
                </div>
                <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Phone Number</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            778-917-2619
                        </li>
                    </ul>
                </div>
                <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Github Profile</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <a href="https://github.com/harryykim" className="text-blue-400 underline hover:text-blue-300 transition-colors">Github</a>
                        </li>
                    </ul>
                </div>
                <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4">LinkedIn Profile</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <a href="https://www.linkedin.com/in/harry-kim-25a210307/" className="text-blue-400 underline hover:text-blue-300 transition-colors">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Resume</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <a href="/files/Resume.docx" target="blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300 transition-colors">Download My Resume</a>
                        </li>
                    </ul>
                </div>
                <div className="rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Cover Letter</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <a href="/files/Cover%20Letter.docx" target="blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300 transition-colors">Download My Cover Letter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}