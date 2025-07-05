import { FaNpm, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { PACKAGE_INFO, ANIMATION_VARIANTS } from "../constants/portfolio";

export default function Package() {
  return (
    <section id="package" className="flex justify-center px-4">
      <div className="w-full max-w-3xl pt-8">
        <motion.h2 
          className="text-xl sm:text-xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2 mb-6"
          variants={ANIMATION_VARIANTS.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Published Package
        </motion.h2>

        <motion.div 
          className="rounded-2xl p-6 bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-lg space-y-4 transition-all duration-300 hover:shadow-xl"
          variants={ANIMATION_VARIANTS.fadeInUpSmall}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ 
            y: -2,
            transition: { duration: 0.2 }
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {PACKAGE_INFO.name}
            </h3>
            <motion.a
              href={PACKAGE_INFO.npmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-600 hover:underline flex items-center gap-1"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <FaNpm className="w-5 h-5" /> View on npm
            </motion.a>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-800 dark:text-gray-300">
            <strong>{PACKAGE_INFO.name}</strong> {PACKAGE_INFO.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-500 dark:text-gray-400">Weekly Downloads</span>
              <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{PACKAGE_INFO.weeklyDownloads}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 dark:text-gray-400">Use Cases</span>
              <span className="text-sm text-gray-800 dark:text-gray-300">
                {PACKAGE_INFO.useCases}
              </span>
            </div>
          </div>

          {/* Tech Tags */}
          <div className="flex gap-3 text-lg text-gray-700 dark:text-gray-200 pt-2">
            <SiJavascript />
            <SiNodedotjs />
            <FaGithub />
          </div>
        </motion.div>
      </div>
    </section>
  );
}