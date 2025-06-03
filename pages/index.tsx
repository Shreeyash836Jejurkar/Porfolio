import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="bg-white min-h-screen max-w-4xl mx-auto text-gray-900 font-sans rounded-lg shadow-md px-6 py-12">
        <Head>
          <title>Shreeyash Jejurkar</title>
          <meta name="description" content="Portfolio of Shreeyash Jejurkar" />
        </Head>
        <main>
          <motion.h1
            className="text-4xl font-bold text-blue-600 tracking-wide shadow-sm mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tailwind + Framer Motion Works! 🎉
          </motion.h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to my portfolio site. I'm a fullstack & mobile developer with a strong interest in cybersecurity and AI.
          </p>
        </main>
      </div>
    </section>
  );
}