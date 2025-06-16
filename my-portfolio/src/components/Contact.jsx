import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="transition-colors duration-300">
      <section
        id="contact"
        className="py-16 px-4 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Want to collaborate or just say hi?
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-2xl text-gray-600 dark:text-gray-300 mb-8">
            <a
              href="mailto:jejurkarshreeyash@gmail.com"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="max-w-md mx-auto space-y-4 text-left"
          >
            {['name', 'email'].map((field) => (
              <input
                key={field}
                type={field}
                name={field}
                required
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
              />
            ))}
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}