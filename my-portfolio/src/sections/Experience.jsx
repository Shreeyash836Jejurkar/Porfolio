// src/sections/Experience.jsx
export default function Experience() {
  return (
    <section id="experience" className="flex justify-center px-4">
      <div className="w-full max-w-3xl space-y-8 pt-4">
        <h2 className="text-xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2">
          Experience
        </h2>

        {/* Full-Time Role */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h3 className="text-lg text-gray-900 dark:text-white">
              Software Developer · BrightChamps Tech Pvt. Ltd
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jul 2022 – Jun 2024
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Stack: React Native, React, Electron, Next.js
          </p>
          <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 space-y-1 pl-2">
            <li>Led app development across 4 verticals in Agile sprints.</li>
            <li>Automated OTA updates using CodePush, cutting manual work by 20%.</li>
            <li>Built reusable atomic UI systems for scalability.</li>
            <li>Enhanced engagement via deep/deferred links.</li>
            <li>Leveraged analytics: GA, MoEngage, Appsflyer, UXCam.</li>
            <li>Reduced crashes by 98% via Sentry & Crashlytics integration.</li>
          </ul>
        </div>

        {/* Internship */}
        <div className="space-y-2 border-t border-gray-200 dark:border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h3 className="text-lg text-gray-900 dark:text-white">
              React Native Intern · BrightChamps
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jan 2022 – Jul 2022
            </p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 space-y-1 pl-2">
            <li>Revamped login with Redux & Truecaller for OTP-less verification.</li>
            <li>Improved satisfaction by 25% with polished, responsive UI.</li>
            <li>Maintained build safety with remote config + Git workflows.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}