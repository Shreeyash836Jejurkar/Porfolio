export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#ffffff",            // Pure white
        backgroundDark: "#1e1e1e",             // Soft black (charcoal)
        backgroundDarkSecondary: "#2b2b2b",    // Slight contrast for cards/sections
        textLight: "#111827",                  // Slate-like rich dark text
        textDark: "#f3f4f6",                   // Gray-100
        accent: "#6366f1",       // indigo-500
        accentHover: "#4f46e5",  // indigo-600
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom right, #ffffff, #f5f7ff)', // white → light indigo
      }
    }
  },
  plugins: [],
};