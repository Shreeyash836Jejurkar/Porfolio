export default function Footer() {
    return (
      <footer
        className="w-full py-6 text-center text-sm 
          bg-white text-gray-600 
          dark:bg-gray-900 dark:text-gray-400 
          border-t border-gray-200 dark:border-gray-700 
          transition-colors duration-300"
      >
        <p>
          © {new Date().getFullYear()} Shreeyash Jejurkar •{' '}
          <a
            href="/Shreeyash_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 transition-colors duration-300"
          >
            Resume
          </a>
        </p>
      </footer>
    )
  }