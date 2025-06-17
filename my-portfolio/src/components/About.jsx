import { useEffect, useState } from "react"

export default function About() {
  const skills = [
    "React Native", "JavaScript", "Next.js", "Node.js",
    "Tailwind CSS", "Python", "Firebase", "Spring Boot", "AI & ML"
  ]

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="about"
      className="scroll-mt-28 py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* About Content */}
        <div className={`space-y-6 transform transition duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">👨‍🎓 About Me</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m currently pursuing an MSc in <span className="text-blue-600 dark:text-blue-400 font-medium">Cybersecurity & AI</span>. I specialize in building
            intuitive, secure apps that bridge functionality and design — whether on mobile or the web.
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            My work blends system thinking, user experience, and intelligent logic to make technology more meaningful.
          </p>
        </div>

        {/* Skills Panel */}
        <div className={`relative rounded-xl p-6 border border-transparent bg-white dark:bg-gray-800 shadow-md 
          bg-clip-padding backdrop-filter backdrop-blur-sm transition-all duration-700
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Gradient Border Accent */}
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-40 blur-lg -z-10" />

          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">⚒️ Core Skills</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill}
                style={{ transitionDelay: `${i * 50}ms` }}
                className={`text-sm font-medium text-gray-800 dark:text-gray-200 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-center transform transition-all duration-300 
                  ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}