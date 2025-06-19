import { useState } from "react";

export default function ContactPopup({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-backgroundDark rounded-xl shadow-lg w-96 p-6 space-y-4 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-black dark:hover:text-white text-xl">×</button>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Contact Me</h3>

        {submitted ? (
          <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md bg-white/60 dark:bg-white/10 text-gray-800 dark:text-white outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 border rounded-md bg-white/60 dark:bg-white/10 text-gray-800 dark:text-white outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-3 py-2 border rounded-md bg-white/60 dark:bg-white/10 text-gray-800 dark:text-white outline-none"
            />
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accentHover text-white py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}