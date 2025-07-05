import { useState } from "react";
import { FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";
import { BLOG_POSTS, ANIMATION_VARIANTS } from "../constants/portfolio";

export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section id="blog" className="flex justify-center px-4">
      <div className="w-full max-w-6xl pt-8 flex flex-col space-y-6">
        <motion.h2 
          className="text-xl sm:text-xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2 mb-4"
          variants={ANIMATION_VARIANTS.titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Blogs
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={ANIMATION_VARIANTS.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {BLOG_POSTS.map((blog, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col rounded-lg overflow-hidden backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 h-full ${
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
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 dark:bg-black/40 z-10" />
                {/* Tags */}
                <div className="absolute bottom-2 left-2 z-20 flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-white/10 text-gray-800 dark:text-gray-300 shadow-sm backdrop-blur-md border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-4 space-y-2 pb-10 relative">
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{blog.date}</p>
                <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                  {blog.summary}
                </p>

                {/* Read Button in corner */}
                <motion.a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FaMedium className="w-4 h-4" />
                  Read
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}