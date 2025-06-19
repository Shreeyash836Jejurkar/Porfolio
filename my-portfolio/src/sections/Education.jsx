// src/sections/Education.jsx
export default function Education() {
  return (
    <section id="education" className="flex justify-center px-4">
      <div className="w-full max-w-3xl space-y-6 pt-4">
        <h2 className="text-xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2">
          Education
        </h2>

        {/* MSc Block */}
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-lg px-5 py-4 border border-white/20 shadow-sm transition">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h3 className="text-lg text-gray-900 dark:text-white">
              MSc, Advanced Computer Science
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sep 2024 – Present
            </p>
          </div>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-1">
            University of Sheffield
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Coursework: Mobile App Development, Object-Oriented Systems, Testing & Verification, Network Performance Analysis, Software Re-engineering, GPU
          </p>
        </div>

        {/* BTech Block */}
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-lg, px-5 py-4 border border-white/20 shadow-sm transition">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h3 className="text-lg text-gray-900 dark:text-white">
              BTech, Computer Science and Engineering
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jun 2018 – May 2022
            </p>
          </div>
          <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-1">
            VIT Bhopal University · CGPA: 8.8/10
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Coursework: Computer Networks, Operating Systems, DBMS, Computer Architecture
          </p>
        </div>
      </div>
    </section>
  );
}