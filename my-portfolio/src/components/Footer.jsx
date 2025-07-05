import { FOOTER_DATA } from "../constants/portfolio";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-backgroundDarkSecondary border-t border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {FOOTER_DATA.copyright}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {FOOTER_DATA.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
} 