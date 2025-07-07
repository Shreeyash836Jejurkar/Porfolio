import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaMapMarkerAlt, FaEye } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Summary from "./sections/Summary";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Package from "./sections/Package";
import { SOCIAL_LINKS, THEME_CONFIG, LAYOUT_CONFIG, PERSONAL_INFO } from "./constants/portfolio";

export default function App() {
  const [darkMode, setDarkMode] = useState(THEME_CONFIG.defaultDarkMode);
  const [pillHovered, setPillHovered] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);

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
        {/* Left column: Sidebar */}
        <div className="flex flex-col items-center">
          <Sidebar />
        </div>
        {/* Location Pill - fixed, just below Sidebar */}
        <div className="hidden sm:block fixed left-4 top-24 z-40">
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="flex items-center overflow-hidden bg-white dark:bg-backgroundDark shadow-lg rounded-full cursor-pointer border border-gray-200 dark:border-gray-700 group p-3 min-w-[48px] h-12"
            onMouseEnter={() => setPillHovered(true)}
            onMouseLeave={() => setPillHovered(false)}
          >
            <span className="flex items-center justify-center w-6 h-6 text-accent">
              <FaMapMarkerAlt className="w-5 h-5" />
            </span>
            {pillHovered && (
              <span className="ml-2 whitespace-nowrap text-gray-800 dark:text-gray-200 text-sm font-medium">
                {PERSONAL_INFO.location_short}
              </span>
            )}
          </motion.div>
        </div>
        {/* Right column: Main content and Social Bar */}
        <div className="flex-1 flex flex-col">
          {/* Right Social Bar (desktop only) */}
          <div className="hidden sm:flex fixed top-1/2 right-4 -translate-y-1/2 flex-col items-center space-y-5 z-40">
            <a href={`mailto:${SOCIAL_LINKS.mail}`}>
              <FaEnvelope className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent hover:scale-110 transition" />
            </a>
            <div className="relative mb-5" onMouseEnter={() => setGithubHovered(true)} onMouseLeave={() => setGithubHovered(false)}>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent hover:scale-110 transition" />
              </a>
              {githubHovered && (
                <div className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 z-50 bg-white dark:bg-backgroundDark p-4 rounded shadow-lg border border-gray-200 dark:border-gray-700 min-w-[700px] max-w-[1200px] overflow-x-auto">
                  <GitHubCalendar username="Shreeyash836Jejurkar" />
                </div>
              )}
            </div>
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