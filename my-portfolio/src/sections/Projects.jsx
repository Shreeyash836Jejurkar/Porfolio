// src/sections/Projects.jsx
import { FaGithub } from "react-icons/fa";
import { SiReact, SiFirebase, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Property Manager",
      subtitle: "Mobile App",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
      description:
        "React Native app for landlords to manage properties, tenants, and repairs. Features geolocation and real-time archiving.",
      tech: [<SiReact key="react" />, <SiFirebase key="firebase" />],
      link: null,
    },
    {
      title: "EDA Web App",
      subtitle: "Data Science Tool",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
      description:
        "Web app that automates CSV-based exploratory data analysis with Plotly & Pandas Profiling. Cuts effort by 40%.",
      tech: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />],
      link: "https://github.com/Shreeyash836Jejurkar/EDA-WebApp",
    },
  ];

  return (
    <section id="projects" className="flex justify-center px-4">
      <div className="w-full max-w-6xl pt-8 flex flex-col space-y-6">
        <h2 className="text-xl sm:text-2xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2 mb-4">
          Projects
        </h2>

        {projects.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm text-gray-400">No projects added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg overflow-hidden backdrop-blur-md bg-white/60 dark:bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition"
              >
                {/* Image with overlay */}
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        <FaGithub className="w-4 h-4" />
                        View
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-gray-800 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex gap-3 text-lg text-gray-700 dark:text-gray-200 pt-1">
                    {project.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}