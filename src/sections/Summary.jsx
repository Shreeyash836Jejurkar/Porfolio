import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { PERSONAL_INFO, ANIMATION_VARIANTS } from "../constants/portfolio";

export default function Summary() {
  return (
    <section id="summary" className="flex justify-center px-4 pt-12 sm:pt-24">
      <motion.div 
        className="w-full max-w-4xl"
        variants={ANIMATION_VARIANTS.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="flex flex-col sm:flex-row items-center sm:items-start gap-8"
          variants={ANIMATION_VARIANTS.fadeInUp}
        >
          {/* Avatar */}
          <motion.div 
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-500/20 shadow-md shrink-0"
            variants={ANIMATION_VARIANTS.fadeInUp}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="flex-1 w-full text-center sm:text-left"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <motion.h1 
              className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 tracking-wide"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Location */}
            <motion.div 
              className="flex items-center justify-center sm:justify-start gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <FaMapMarkerAlt className="text-indigo-500" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-sm text-gray-600 dark:text-gray-400 mt-3"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {PERSONAL_INFO.title}
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mt-4 max-w-3xl"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {PERSONAL_INFO.description}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Centered Resume Button */}
        <motion.div 
          className="mt-8 flex justify-center"
          variants={ANIMATION_VARIANTS.fadeInUp}
        >
          <motion.a
            href={PERSONAL_INFO.resume}
            download
            className="inline-block px-6 py-2 rounded-full border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 dark:hover:bg-indigo-400/10 transition backdrop-blur-md"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}