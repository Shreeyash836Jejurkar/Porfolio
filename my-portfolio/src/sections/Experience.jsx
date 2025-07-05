// src/sections/Experience.jsx
import { motion } from "framer-motion";
import { EXPERIENCE, ANIMATION_VARIANTS } from "../constants/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="flex justify-center px-4">
      <motion.div 
        className="w-full max-w-3xl space-y-8 pt-4"
        variants={ANIMATION_VARIANTS.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 
          className="text-xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2"
          variants={ANIMATION_VARIANTS.titleVariants}
        >
          Experience
        </motion.h2>

        {EXPERIENCE.map((job, index) => (
          <motion.div 
            key={index}
            className={`space-y-2 ${index > 0 ? 'border-t border-gray-200 dark:border-white/10 pt-6' : ''}`}
            variants={ANIMATION_VARIANTS.fadeInUpSmall}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="text-lg text-gray-900 dark:text-white">
                {job.title} · {job.company}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {job.period}
              </p>
            </div>
            {job.stack && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stack: {job.stack}
              </p>
            )}
            <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 space-y-1 pl-2">
              {job.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}