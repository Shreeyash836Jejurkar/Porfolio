const blogPosts = [
    {
      title: "App Update Prompt Using Firebase Remote Config in React Native",
      url: "https://medium.com/@shreeyash.dev/app-update-prompt-using-firebase-remote-config-in-react-native-0c28e40b7be5",
      date: "May 21, 2024",
    },
    {
      title: "Exploring the Singleton Pattern in React",
      url: "https://medium.com/@shreeyash.dev/exploring-the-singleton-pattern-leveraging-a-powerful-design-principle-in-react-9b38cc1e847c",
      date: "April 14, 2024",
    },
    {
      title: "Exploring the Depths of Axios: Lesser-Known Capabilities",
      url: "https://medium.com/@shreeyash.dev/exploring-the-depths-of-axios-uncovering-lesser-known-capabilities-2db935819e00",
      date: "March 3, 2024",
    },
    {
      title: "3 Lesser-Used React Native Hooks for Advanced Developers",
      url: "https://medium.com/@shreeyash.dev/beyond-the-basics-3-lesser-used-react-native-hooks-for-advanced-developers-801f9412fc76",
      date: "February 18, 2024",
    },
  ]
  
  export default function Blogs() {
    return (
      <section
        id="blogs"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
            Blogs
          </h3>
  
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.date}
                </p>
              </a>
            ))}
          </div>
  
          <div className="text-center mt-10">
            <a
              href="https://medium.com/@shreeyash.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              View All Blogs on Medium →
            </a>
          </div>
        </div>
      </section>
    )
  }