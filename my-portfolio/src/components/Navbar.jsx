import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = ["about", "projects", "blogs", "contact"]

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/70 shadow-sm border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
        >
          Shreeyash Jejurkar
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-4 text-sm font-medium">
          {navLinks.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-white transition-all duration-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl focus:outline-none text-gray-700 dark:text-gray-300"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden overflow-hidden transform transition-all duration-300 ease-in-out px-4 ${
          menuOpen
            ? "max-h-96 opacity-100 translate-y-0 pb-4"
            : "max-h-0 opacity-0 -translate-y-2 pb-0"
        } bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300`}
      >
        <div className="flex flex-col items-center space-y-2 text-sm">
          {navLinks.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}