// src/sections/Education.jsx
import { motion } from "framer-motion";
import { EDUCATION, ANIMATION_VARIANTS } from "../constants/portfolio";

export default function Education() {
  return (
    <section id="education" className="flex justify-center px-4">
      <div className="w-full max-w-3xl space-y-8 pt-4">
        <motion.h2 
          className="text-xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2"
          variants={ANIMATION_VARIANTS.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Education
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {EDUCATION.map((education, index) => (
            <motion.div 
              key={index}
              className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-lg px-5 py-4 border border-white/20 shadow-sm transition-all duration-300 hover:shadow-md"
              variants={ANIMATION_VARIANTS.fadeInUpSmall}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="text-lg text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {education.period}
                </p>
              </div>
              <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-1">
                {education.institution}{education.gpa && ` · CGPA: ${education.gpa}`}
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                Coursework: {education.coursework}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}