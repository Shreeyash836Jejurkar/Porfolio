export default function Footer() {
  return (
    <footer
      className="w-full py-6 text-center text-sm 
        bg-white dark:bg-gray-900 
        text-gray-700 dark:text-gray-400 
        border-t border-gray-200 dark:border-gray-700 
        transition-colors duration-500"
    >
      <p>
        © {new Date().getFullYear()} <span className="font-medium">Shreeyash Jejurkar</span> •{" "}
        <a
          href="/Shreeyash_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          Resume
        </a>
      </p>
    </footer>
  )
}