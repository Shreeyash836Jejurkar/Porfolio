import { useEffect, useState } from "react";

const sections = ["summary", "projects", "experience", "education", "blog"];

export default function Sidebar() {
  const [active, setActive] = useState("summary");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "summary";
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 180) {
          current = sec;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden fixed top-4 right-4 z-50 bg-accent text-white px-4 py-2 text-lg rounded-lg shadow-lg"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Desktop Top Bar */}
      <div className="hidden sm:flex fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-backgroundDarkSecondary/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center space-x-8">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`relative px-4 py-2 text-base font-medium transition-all rounded-md capitalize ${
                active === sec
                  ? "text-accent bg-accent/10 dark:bg-accent/10"
                  : "text-gray-500 dark:text-gray-400 hover:text-accent"
              }`}
            >
              {sec}
              {active === sec && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-accent rounded-full" />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-backgroundDarkSecondary shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } sm:hidden flex flex-col items-start justify-center space-y-8 p-8`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-gray-600 dark:text-gray-300 text-2xl"
        >
          ✕
        </button>
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            onClick={() => setOpen(false)}
            className={`text-lg font-semibold capitalize w-full px-4 py-3 rounded-md ${
              active === sec
                ? "bg-accent/10 text-accent"
                : "text-gray-600 dark:text-gray-300 hover:text-accent"
            }`}
          >
            {sec}
          </a>
        ))}
      </div>
    </>
  );
}