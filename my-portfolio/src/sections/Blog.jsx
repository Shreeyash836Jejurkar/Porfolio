import { FaMedium } from "react-icons/fa";

export default function Blog() {
  const blogs = [
    {
      title: "App Update Prompt: Using Firebase Remote Config in React Native",
      date: "Apr 12, 2024 · 3 min read",
      summary:
        "Effortlessly prompting app update with Remote Configuration in production React Native apps.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*QAF0Qve8hvO60m6r.png",
      tags: ["Firebase", "Remote Config", "React Native"],
      link: "https://medium.com/@shreeyash.dev/app-update-prompt-using-firebase-remote-config-in-react-native-0c28e40b7be5",
    },
    {
      title: "Exploring the Singleton Pattern in React",
      date: "Apr 9, 2024 · 4 min read",
      summary:
        "Maximising code efficiency by understanding and implementing the Singleton Pattern in modern React.",
      image:
        "https://miro.medium.com/v2/resize:fit:1294/format:webp/1*JqhzsaRuis8sBHf-qkXhZQ.png",
      tags: ["Singleton", "Design Patterns", "React"],
      link: "https://medium.com/@shreeyash.dev/exploring-the-singleton-pattern-leveraging-a-powerful-design-principle-in-react-9b38cc1e847c",
    },
    {
      title: "Exploring the Depths of Axios",
      date: "Apr 5, 2024 · 4 min read",
      summary:
        "From custom configs to global error handling: uncovering advanced capabilities in Axios for React developers.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HRC4C6qtN54xyjv4nSfeww.png",
      tags: ["Axios", "Error Handling", "React"],
      link: "https://medium.com/@shreeyash.dev/exploring-the-depths-of-axios-uncovering-lesser-known-capabilities-2db935819e00",
    },
    {
      title: "Beyond the Basics: 3 Lesser-Used React Native Hooks",
      date: "Apr 2, 2024 · 3 min read",
      summary:
        "Leveraging useReducer, useMemo, and useCallback for optimal React Native development.",
      image:
        "https://miro.medium.com/v2/resize:fit:1382/format:webp/1*oRJVnh5h4nINV-das63USw.png",
      tags: ["React Native", "Hooks", "Advanced React"],
      link: "https://medium.com/@shreeyash.dev/beyond-the-basics-3-lesser-used-react-native-hooks-for-advanced-developers-801f9412fc76",
    },
  ];

  return (
    <section id="blog" className="flex justify-center px-4">
      <div className="w-full max-w-6xl pt-8 flex flex-col space-y-6">
        <h2 className="text-xl sm:text-xl text-indigo-500 dark:text-indigo-400 font-medium tracking-wide border-b border-gray-300/40 dark:border-white/10 pb-2 mb-4">
          Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-lg overflow-hidden backdrop-blur-md bg-white/60 dark:bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition h-full"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30 dark:bg-black/40 z-10" />
                {/* Tags */}
                <div className="absolute bottom-2 left-2 z-20 flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-white/10 text-gray-800 dark:text-gray-300 shadow-sm backdrop-blur-md border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-4 space-y-2 pb-10 relative">
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{blog.date}</p>
                <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                  {blog.summary}
                </p>

                {/* Read Button in corner */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <FaMedium className="w-4 h-4" />
                  Read
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}