import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="w-full p-4 border-b shadow-sm sticky top-0 bg-white dark:bg-gray-900 dark:border-gray-800 z-50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300 cursor-pointer"
                >
                    Shreeyash
                </h1>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <a href="#about" className="hover:text-blue-600 transition-colors duration-300">
                        About
                    </a>
                    <a href="#projects" className="hover:text-blue-600 transition-colors duration-300">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">
                        Contact
                    </a>
                    <a href="#blogs" className="hover:text-blue-600 transition-colors duration-300">Blogs</a>
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-xl focus:outline-none text-gray-700 dark:text-gray-300 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="sm:hidden mt-2 space-y-2 px-4 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 pb-4 transition-colors duration-300">
                    <a href="#about" className="block hover:text-blue-600 transition-colors duration-300">
                        About
                    </a>
                    <a href="#projects" className="block hover:text-blue-600 transition-colors duration-300">
                        Projects
                    </a>
                    <a href="#contact" className="block hover:text-blue-600 transition-colors duration-300">
                        Contact
                    </a>
                    <a href="#blogs" className="hover:text-blue-600 transition-colors duration-300">Blogs</a>
                    <ThemeToggle />
                </div>
            )}
        </nav>
    )
}