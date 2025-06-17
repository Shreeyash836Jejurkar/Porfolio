import { useEffect, useState } from "react"

const projectList = [
  {
    title: 'IndieTrack',
    description: 'A lightweight CRM for solopreneurs.',
    link: 'https://github.com/yourusername/indietrack',
  },
  {
    title: 'SkillQuest',
    description: 'Habit-building micro-challenge app.',
    link: 'https://github.com/yourusername/skillquest',
  },
]

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="projects"
      className="scroll-mt-28 py-24 px-6 
        bg-gradient-to-b 
        from-gray-50 via-white to-gray-100 
        dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 
        transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        <h3 className={`text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-all duration-700 
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          🚀 Projects
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {projectList.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`transform transition-all duration-500 ease-in-out rounded-xl p-6 border 
                          bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 
                          hover:shadow-lg hover:scale-[1.02] hover:border-blue-500 dark:hover:border-blue-400 
                          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {proj.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {proj.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}