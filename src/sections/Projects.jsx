// src/sections/Projects.jsx
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiReact, SiFirebase, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { PROJECTS, ANIMATION_VARIANTS } from "../constants/portfolio";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Create icon mapping for tech stack
  const iconMap = {
    "React": SiReact,
    "Firebase": SiFirebase,
    "Tailwind CSS": SiTailwindcss,
    "Spring Boot": SiFirebase, // Using Firebase icon as placeholder
    "MySQL": SiTailwindcss, // Using Tailwind icon as placeholder
  };

  // Convert projects data to include actual icon components
  const projectsWithIcons = PROJECTS.map(project => ({
    ...project,
    tech: project.tech.map(techName => {
      const IconComponent = iconMap[techName];
      return IconComponent ? <IconComponent key={techName} /> : null;
    }).filter(Boolean)
  }));

  return (
    <section id="projects" className="flex justify-center px-4">
      <div className="w-full max-w-6xl pt-8 flex flex-col space-y-6">
        <motion.h2 
          className="text-xl sm:text-2xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2 mb-4"
          variants={ANIMATION_VARIANTS.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h2>

        {projectsWithIcons.length === 0 ? (
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-gray-400">No projects added yet.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={ANIMATION_VARIANTS.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projectsWithIcons.map((project, index) => (
              <motion.div
                key={index}
                className={`flex flex-col rounded-lg overflow-hidden backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ${
                  hoveredIndex === null 
                    ? "bg-white/60 dark:bg-white/10 hover:shadow-xl hover:-translate-y-1" 
                    : hoveredIndex === index 
                      ? "bg-white/80 dark:bg-white/20 shadow-2xl -translate-y-2 scale-105 z-10" 
                      : "bg-white/30 dark:bg-white/5 opacity-50 scale-95"
                }`}
                variants={ANIMATION_VARIANTS.itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ 
                  scale: hoveredIndex === null ? 1.02 : 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Image with overlay */}
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
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
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <FaGithub className="w-4 h-4" />
                        View
                      </motion.a>
                    )}
                  </div>

                  <p className="text-sm text-gray-800 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex gap-3 text-lg text-gray-700 dark:text-gray-200 pt-1">
                    {project.tech}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}