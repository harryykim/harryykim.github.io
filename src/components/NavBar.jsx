
export const NavBar = () => {

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white"> 
                    Harry<span className="text-blue-500">kim</span>
                </a>

                <div className="md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Home </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors"> About </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> Projects </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> Contact </a>
                </div>

            </div>
        </div>
    </nav>
}