// src/sections/Skills.jsx
import {
  SiJavascript,
  SiKotlin,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiElectron,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  const techSkills = [
    { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-[#7f52ff]" /> },
    { name: "React", icon: <SiReact className="text-[#61dafb]" /> },
    { name: "React Native", icon: <SiReact className="text-[#61dafb]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Electron", icon: <SiElectron className="text-[#47848f]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569b]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764abc]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#ffca28]" /> },
    { name: "Git", icon: <SiGit className="text-[#f05032]" /> },
  ];

  return (
    <section id="skills" className="flex justify-center px-4">
      <div className="w-full max-w-3xl pt-10 relative">

        <div className="relative overflow-hidden">
          {/* Left Gradient Overlay */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/70 dark:from-[#1e1e1e] dark:via-[#1e1e1e]/70 z-10" />
          {/* Right Gradient Overlay */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/70 dark:from-[#1e1e1e] dark:via-[#1e1e1e]/70 z-10" />

          {/* Marquee */}
          <div className="animate-marquee flex space-x-12 w-max">
            {[...techSkills, ...techSkills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-xs group"
              >
                <div className="w-16 h-16 rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-md shadow-inner shadow-white/10 dark:shadow-black/10 flex items-center justify-center text-3xl transition duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-xl">
                  {skill.icon}
                </div>
                <span className="mt-2 text-gray-700 dark:text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}