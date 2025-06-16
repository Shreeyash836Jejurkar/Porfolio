import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') setDark(true)
    }, [])

    useEffect(() => {
        const root = window.document.documentElement
        if (dark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark])

    return (
        <button
            onClick={() => setDark(!dark)}
            className="text-xl p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
        >
            <span className="transition-transform duration-300 ease-in-out">
                {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </span>
        </button>
    )
}