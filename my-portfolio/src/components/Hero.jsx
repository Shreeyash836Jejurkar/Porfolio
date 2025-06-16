export default function Hero() {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            Hi, I’m Shreeyash 👋
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto transition-colors duration-300">
            I'm a developer who loves crafting useful and beautiful web & mobile experiences.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            View Projects
          </a>
        </div>
      </section>
    )
  }