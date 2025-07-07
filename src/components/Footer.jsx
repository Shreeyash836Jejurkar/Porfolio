import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SOCIAL_LINKS, FOOTER_DATA } from "../constants/portfolio";

export default function Footer() {
  return (
    <footer className="w-full bg-backgroundLight dark:bg-backgroundDark border-t border-gray-200 dark:border-gray-700 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex space-x-6 mb-2 sm:mb-0">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent transition" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />
          </a>
          <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer">
            <FaMedium className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent transition" />
          </a>
          <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="w-6 h-6 text-orange-500 hover:scale-110 transition" />
          </a>
          <a href={`mailto:${SOCIAL_LINKS.mail.replace('mailto:', '')}`}>
            <FaEnvelope className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent transition" />
          </a>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-right">
          {FOOTER_DATA.madeWith}
          <br />
          {FOOTER_DATA.name} &middot; {FOOTER_DATA.copyright}
        </div>
      </div>
    </footer>
  );
} 