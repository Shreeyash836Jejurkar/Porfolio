export default function About() {
    return (
      <section
        id="about"
        className="py-16 px-4 bg-white dark:bg-gray-800 transition-colors duration-300 ease-in-out"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            About Me
          </h3>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            I'm currently pursuing MSc in Cybersecurity & AI. I love building apps,
            exploring AI, and creating clean user interfaces.
          </p>
        </div>
      </section>
    )
  }