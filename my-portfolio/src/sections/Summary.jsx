import { FaMapMarkerAlt } from "react-icons/fa";

export default function Summary() {
  return (
    <section id="summary" className="flex justify-center px-4">
      <div className="w-full max-w-3xl rounded-3xl p-8 bg-white/60 dark:bg-white/10 backdrop-blur-lg shadow-2xl border border-white/10 transition">

        {/* Avatar + Text Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          {/* Avatar - centered vertically to text */}
          <div className="flex justify-center sm:justify-start sm:h-full">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-md">
              <img
                src="/assets/shreeyash.jpeg"
                alt="Shreeyash Jejurkar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl text-indigo-500 dark:text-indigo-400 tracking-wide">
              Shreeyash Jejurkar
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt className="text-indigo-500" />
              <span>Sheffield, South Yorkshire, United Kingdom</span>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              React Native Developer | Masters student | Software Developer
            </p>

            {/* Description */}
            <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mt-4">
              I’m a mobile-first engineer with 2+ years of experience building intuitive, scalable apps. Passionate about bridging design and tech, I’m currently exploring AI to create smart, human-centered systems.
            </p>
          </div>
        </div>

        {/* Centered Button Below Entire Card */}
        <div className="mt-8 flex justify-center">
          <a
            href="/assets/Shreeyash-Resume.pdf"
            download
            className="inline-block px-6 py-2 rounded-full border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 dark:hover:bg-indigo-400/10 transition backdrop-blur-md"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}