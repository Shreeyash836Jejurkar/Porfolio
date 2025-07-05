import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Summary from "./sections/Summary";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Package from "./sections/Package";
import { SOCIAL_LINKS, THEME_CONFIG, LAYOUT_CONFIG } from "./constants/portfolio";

export default function App() {
  const [darkMode, setDarkMode] = useState(THEME_CONFIG.defaultDarkMode);
  // const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("dark");
  }, []);

  useEffect(() => {
    // Prevent dragging on all elements
    const preventDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Add event listeners to prevent dragging
    const elements = document.querySelectorAll('img, a, button, [role="button"], div, span');
    elements.forEach(element => {
      element.addEventListener('dragstart', preventDrag);
      element.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
        }
      });
    });

    // Cleanup function
    return () => {
      elements.forEach(element => {
        element.removeEventListener('dragstart', preventDrag);
      });
    };
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
      <div className="flex flex-col sm:flex-row flex-1">
        <Sidebar />

        {/* Right Social Bar */}
        <div className="hidden sm:flex fixed top-1/2 right-4 -translate-y-1/2 flex-col items-center space-y-5 z-40">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent hover:scale-110 transition" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />
          </a>
          <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer">
            <FaMedium className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent hover:scale-110 transition" />
          </a>
          <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="w-6 h-6 text-orange-500 hover:scale-110 transition" />
          </a>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex justify-center">
          <div className={`w-full ${LAYOUT_CONFIG.maxWidth} ${LAYOUT_CONFIG.padding} ${LAYOUT_CONFIG.spacing}`}>
            <Summary />
            <Skills />
            <Projects />
            <Package />
            <Experience />
            <Education />
            <Blog />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 left-4 z-50 p-3 bg-accent text-white rounded-full shadow-md hover:bg-accentHover transition duration-200"
      >
        {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
      </button>
    </div>
  );
}