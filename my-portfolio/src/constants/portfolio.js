// Portfolio Constants - All data centralized in one file

// Personal Information
export const PERSONAL_INFO = {
  name: "Shreeyash Jejurkar",
  title: "React Native Developer | Masters student | Software Developer",
  location: "Sheffield, South Yorkshire, United Kingdom",
  description: "I'm a mobile-first engineer with 2+ years of experience building intuitive, scalable apps. Passionate about bridging design and tech, I'm currently exploring AI to create smart, human-centered systems.",
  avatar: "/assets/shreeyash.jpeg",
  resume: "/resume.pdf"
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/Shreeyash836Jejurkar",
  linkedin: "https://www.linkedin.com/in/shreeyash-jejurkar-9999931a3/",
  medium: "https://medium.com/@shreeyash.dev",
  leetcode: "https://leetcode.com/u/jejurkarshreeyash/",
  mail: "mailto:jejurkarshreeyash@gmail.com"
};

// Navigation Sections
export const NAVIGATION_SECTIONS = [
  "summary",
  "projects", 
  "experience", 
  "education", 
  "blog"
];

// Skills Data
export const SKILLS = [
  { name: "Java", icon: "FaJava", color: "#f89820" },
  { name: "JavaScript", icon: "SiJavascript", color: "#f7df1e" },
  { name: "Kotlin", icon: "SiKotlin", color: "#7f52ff" },
  { name: "React", icon: "SiReact", color: "#61dafb" },
  { name: "React Native", icon: "SiReact", color: "#61dafb" },
  { name: "Next.js", icon: "SiNextdotjs", color: "black" },
  { name: "Electron", icon: "SiElectron", color: "#47848f" },
  { name: "Flutter", icon: "SiFlutter", color: "#02569b" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38bdf8" },
  { name: "Redux", icon: "SiRedux", color: "#764abc" },
  { name: "Firebase", icon: "SiFirebase", color: "#ffca28" },
  { name: "Git", icon: "SiGit", color: "#f05032" }
];

// Projects Data
export const PROJECTS = [
  {
    title: "Property Manager",
    subtitle: "Mobile App",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    description: "React Native app for landlords to manage properties, tenants, and repairs. Features geolocation and real-time archiving.",
    tech: ["React", "Firebase"],
    link: null
  },
  {
    title: "MyLibraryApp",
    subtitle: "Mobile App",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    description: "A mobile app built with React Native for cataloging and managing personal book collections. Includes QR scanning, reading status tracking, and intuitive UI.",
    tech: ["React", "Firebase"],
    link: "https://github.com/Shreeyash836Jejurkar/MyLibraryApp"
  },
  {
    title: "TaskManagementAPI",
    subtitle: "Backend API",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    description: "A robust RESTful API for managing tasks, priorities, and deadlines. Built using Spring Boot and MySQL with secure authentication and CRUD endpoints.",
    tech: ["Spring Boot", "MySQL"],
    link: "https://github.com/Shreeyash836Jejurkar/TaskManagementAPI"
  },
  {
    title: "EDA Web App",
    subtitle: "Data Science Tool",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    description: "Web app that automates CSV-based exploratory data analysis with Plotly & Pandas Profiling. Cuts effort by 40%.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/Shreeyash836Jejurkar/EDA-WebApp"
  }
];

// Experience Data
export const EXPERIENCE = [
  {
    title: "Software Developer",
    company: "BrightChamps Tech Pvt. Ltd",
    period: "Jul 2022 – Jun 2024",
    stack: "React Native, React, Electron, Next.js",
    achievements: [
      "Led app development across 4 verticals in Agile sprints.",
      "Automated OTA updates using CodePush, cutting manual work by 20%.",
      "Built reusable atomic UI systems for scalability.",
      "Enhanced engagement via deep/deferred links.",
      "Leveraged analytics: GA, MoEngage, Appsflyer, UXCam.",
      "Reduced crashes by 98% via Sentry & Crashlytics integration."
    ]
  },
  {
    title: "React Native Intern",
    company: "BrightChamps",
    period: "Jan 2022 – Jul 2022",
    stack: null,
    achievements: [
      "Revamped login with Redux & Truecaller for OTP-less verification.",
      "Improved satisfaction by 25% with polished, responsive UI.",
      "Maintained build safety with remote config + Git workflows."
    ]
  }
];

// Education Data
export const EDUCATION = [
  {
    degree: "MSc, Advanced Computer Science",
    institution: "University of Sheffield",
    period: "Sep 2024 – Present",
    gpa: null,
    coursework: "Mobile App Development, Object-Oriented Systems, Testing & Verification, Network Performance Analysis, Software Re-engineering, GPU"
  },
  {
    degree: "BTech, Computer Science and Engineering",
    institution: "VIT Bhopal University",
    period: "Jun 2018 – May 2022",
    gpa: "8.8/10",
    coursework: "Computer Networks, Operating Systems, DBMS, Computer Architecture"
  }
];

// Blog Posts Data
export const BLOG_POSTS = [
  {
    title: "App Update Prompt: Using Firebase Remote Config in React Native",
    date: "Apr 12, 2024 · 3 min read",
    summary: "Effortlessly prompting app update with Remote Configuration in production React Native apps.",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*QAF0Qve8hvO60m6r.png",
    tags: ["Firebase", "Remote Config", "React Native"],
    link: "https://medium.com/@shreeyash.dev/app-update-prompt-using-firebase-remote-config-in-react-native-0c28e40b7be5"
  },
  {
    title: "Exploring the Singleton Pattern in React",
    date: "Apr 9, 2024 · 4 min read",
    summary: "Maximising code efficiency by understanding and implementing the Singleton Pattern in modern React.",
    image: "https://miro.medium.com/v2/resize:fit:1294/format:webp/1*JqhzsaRuis8sBHf-qkXhZQ.png",
    tags: ["Singleton", "Design Patterns", "React"],
    link: "https://medium.com/@shreeyash.dev/exploring-the-singleton-pattern-leveraging-a-powerful-design-principle-in-react-9b38cc1e847c"
  },
  {
    title: "Exploring the Depths of Axios",
    date: "Apr 5, 2024 · 4 min read",
    summary: "From custom configs to global error handling: uncovering advanced capabilities in Axios for React developers.",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HRC4C6qtN54xyjv4nSfeww.png",
    tags: ["Axios", "Error Handling", "React"],
    link: "https://medium.com/@shreeyash.dev/exploring-the-depths-of-axios-uncovering-lesser-known-capabilities-2db935819e00"
  },
  {
    title: "Beyond the Basics: 3 Lesser-Used React Native Hooks",
    date: "Apr 2, 2024 · 3 min read",
    summary: "Leveraging useReducer, useMemo, and useCallback for optimal React Native development.",
    image: "https://miro.medium.com/v2/resize:fit:1382/format:webp/1*oRJVnh5h4nINV-das63USw.png",
    tags: ["React Native", "Hooks", "Advanced React"],
    link: "https://medium.com/@shreeyash.dev/beyond-the-basics-3-lesser-used-react-native-hooks-for-advanced-developers-801f9412fc76"
  }
];

// Package Data
export const PACKAGE_INFO = {
  name: "sealight",
  description: "sealight is a CLI tool that scans your codebase for secrets like API keys, tokens, and passwords. Ideal for CI/CD pipelines and local devs to prevent accidental leaks.",
  npmLink: "https://www.npmjs.com/package/sealight",
  weeklyDownloads: "300+",
  useCases: "Pre-commit hooks, GitHub Actions, local audits",
  tech: ["JavaScript", "Node.js", "GitHub"]
};

// Animation Variants (for framer-motion)
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  fadeInUpSmall: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  titleVariants: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

// Theme Configuration
export const THEME_CONFIG = {
  defaultDarkMode: true,
  accentColor: "#6366f1",
  accentHover: "#4f46e5"
};

// Layout Configuration
export const LAYOUT_CONFIG = {
  maxWidth: "max-w-3xl",
  maxWidthLarge: "max-w-6xl",
  maxWidthSummary: "max-w-4xl",
  spacing: "space-y-20 sm:space-y-24",
  padding: "px-4 sm:px-6 py-10"
};

// Footer Data
export const FOOTER_DATA = {
  name: "Shreeyash Jejurkar",
  copyright: "© 2025 Shreeyash Jejurkar",
  madeWith: "Built with React, Tailwind CSS & Framer Motion"
}; 