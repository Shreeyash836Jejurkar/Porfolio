import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <header className="p-6 text-center text-xl font-semibold shadow">
        <a href="/">Shreeyash Jejurkar</a>
      </header>
      <main className="px-6 py-8 max-w-4xl mx-auto">
        {children}
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Shreeyash Jejurkar. All rights reserved.
      </footer>
    </div>
  );
}