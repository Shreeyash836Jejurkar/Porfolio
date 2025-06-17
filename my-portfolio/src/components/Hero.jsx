import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import shreeyashImage from '../assets/shreeyash.jpeg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-28 relative min-h-screen w-full flex items-center justify-center 
                 bg-gradient-to-br from-blue-50 via-white to-purple-100 
                 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                 transition-colors duration-500 px-6"
    >
      {/* Background accents */}
      <div className="absolute w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-[140px] -z-10 top-20 left-10" />
      <div className="absolute w-[300px] h-[300px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[100px] -z-10 bottom-10 right-10" />

      {/* Main Card */}
      <div className="relative max-w-4xl w-full flex flex-col items-center text-center space-y-8 backdrop-blur-md px-8 py-12 
                      bg-white/30 dark:bg-white/5 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl">

        {/* Resume link top-left */}
        <div className="absolute top-4 left-4 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 
                        bg-white/40 dark:bg-white/10 backdrop-blur-md px-4 py-1 rounded-full shadow-sm 
                        border border-white/20 dark:border-white/10">
          <a href="/Shreeyash_Resume.pdf" target="_blank" rel="noopener noreferrer">📄 Resume</a>
        </div>

        {/* Avatar */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 dark:border-white/10 shadow-2xl">
          <img
            src={shreeyashImage}
            alt="Shreeyash"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Shreeyash Jejurkar
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            Mobile App Developer · React Native Specialist
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Building seamless, secure, and beautiful mobile experiences.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-block text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full 
                     shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
        >
          ✨ Explore My Work
        </a>

        {/* Social icons vertical on bottom right corner */}
        <div className="absolute bottom-6 right-6 flex flex-col items-center gap-4 text-lg text-blue-600 dark:text-blue-400">
          <a href="mailto:jejurkarshreeyash@gmail.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <FaEnvelope />
          </a>
          <a href="https://github.com/shreeyashjejurkar" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/shreeyashjejurkar" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}