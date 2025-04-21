
export const Navbar = () => {

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] border-b border-white/10 shadow-lg">
        <div className="px-4">
            <div className="flex justify-between items-center h-16 font-mono font-bold">
                <a href="#home" className="text-xl text-white"> 
                    Harry<span className="text-blue-500">Kim</span>
                </a>

                <div className="flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Home </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors"> About </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> Projects </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> Contact </a>
                </div>

            </div>
        </div>
    </nav>
}