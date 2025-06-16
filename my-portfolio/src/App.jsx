import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import "./App.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App