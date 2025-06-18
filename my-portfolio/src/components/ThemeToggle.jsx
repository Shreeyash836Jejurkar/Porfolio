import { useLayoutEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useLayoutEffect(() => {
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const enabled = saved === "dark" || (!saved && prefersDark)
    document.documentElement.classList.toggle("dark", enabled)
    setDark(enabled)
  }, [])

  const toggleTheme = () => {
    const newTheme = !dark
    setDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ease-out"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <FaSun className="text-yellow-400 transition-transform duration-200" />
      ) : (
        <FaMoon className="text-blue-500 transition-transform duration-200" />
      )}
    </button>
  )
}