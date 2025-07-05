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
import { SKILLS } from "../constants/portfolio";

export default function Skills() {
  // Create icon mapping
  const iconMap = {
    FaJava: FaJava,
    SiJavascript: SiJavascript,
    SiKotlin: SiKotlin,
    SiReact: SiReact,
    SiNextdotjs: SiNextdotjs,
    SiElectron: SiElectron,
    SiFlutter: SiFlutter,
    SiTailwindcss: SiTailwindcss,
    SiRedux: SiRedux,
    SiFirebase: SiFirebase,
    SiGit: SiGit,
  };

  // Convert skills data to include actual icon components
  const techSkills = SKILLS.map(skill => {
    const IconComponent = iconMap[skill.icon];
    return {
      name: skill.name,
      icon: <IconComponent className={`text-[${skill.color}]`} />
    };
  });

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