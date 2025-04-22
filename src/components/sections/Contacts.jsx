
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
                    <h3 className="text-xl font-bold mb-4">Github Profile</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <a href="https://github.com/harryykim" className="text-blue-600 underline hover:text-blue-800">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}