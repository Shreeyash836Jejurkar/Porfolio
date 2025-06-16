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
    return (
      <section
        id="projects"
        className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white transition-colors duration-300">
            Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {projectList.map((proj, i) => (
              <a
                key={i}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 dark:border-gray-700 
                           rounded-lg p-6 shadow-sm bg-white dark:bg-gray-800 
                           hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 
                           transition-all duration-300 hover:scale-[1.01]"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {proj.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {proj.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }