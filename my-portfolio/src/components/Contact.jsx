import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-24 px-6 
        bg-gradient-to-b 
        from-gray-100 via-white to-gray-50 
        dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 
        transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h3
          className={`text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white 
                      transition-all duration-700 ${
                        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
        >
          📬 Get in Touch
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-500">
          Want to collaborate or just say hi?
        </p>

        {/* Social Links */}
        <div
          className={`flex justify-center space-x-6 text-2xl transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="mailto:jejurkarshreeyash@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className={`max-w-md mx-auto space-y-4 text-left transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {['name', 'email'].map((field) => (
            <input
              key={field}
              type={field}
              name={field}
              required
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         transition-colors duration-300"
            />
          ))}
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       transition-colors duration-300"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                       px-6 py-3 rounded-full w-full shadow-md 
                       transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}