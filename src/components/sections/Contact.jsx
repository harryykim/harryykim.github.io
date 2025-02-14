
export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Contact Me</h2>
            <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Email</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                harryykim@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Phone Number</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                778-917-2619
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </section>
}