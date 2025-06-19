import { useState } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";

import Sidebar from "./components/Sidebar";
import Summary from "./sections/Summary";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import ContactPopup from "./components/ContactPopup";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [showContact, setShowContact] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row transition-colors duration-300 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
      <Sidebar />

      {/* Right Social Bar */}
      <div className="hidden sm:flex fixed top-1/2 right-4 -translate-y-1/2 flex-col items-center space-y-5 z-40">
        <a href="https://github.com/Shreeyash836Jejurkar" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent hover:scale-110 transition" />
        </a>
        <a href="https://www.linkedin.com/in/shreeyash-jejurkar-9999931a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />
        </a>
        <a href="https://medium.com/@shreeyash.dev" target="_blank" rel="noopener noreferrer">
          <FaMedium className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-accent hover:scale-110 transition" />
        </a>
        <a href="https://leetcode.com/u/jejurkarshreeyash/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="w-6 h-6 text-orange-500 hover:scale-110 transition" />
        </a>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-3xl px-4 sm:px-6 py-10 space-y-20 sm:space-y-24">
          <Summary />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Blog />
        </div>
      </main>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 left-4 z-50 p-3 bg-accent text-white rounded-full shadow-md hover:bg-accentHover transition duration-200"
      >
        {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
      </button>

      {/* Contact Me Button */}
      {/* <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-accent text-white rounded-full shadow-md hover:bg-accentHover transition duration-200"
      >
        Contact Me
      </button>
      <ContactPopup isOpen={showContact} onClose={() => setShowContact(false)} /> */}
    </div>
  );
}