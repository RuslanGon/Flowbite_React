import React, { useEffect, useState } from 'react';

const DarkModeDemo = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="flex items-center gap-2 bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 rounded-lg text-sm px-4 py-2"
    >
      {isDark ? (
        // Light icon
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.22a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.41-1.41l.7-.71zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM4.22 4.22a1 1 0 00-1.42 1.42l.71.7a1 1 0 101.41-1.41l-.7-.71zM3 9a1 1 0 100 2H2a1 1 0 100-2h1zm1.22 6.78a1 1 0 011.42-1.42l.71.71a1 1 0 01-1.41 1.41l-.72-.7zM9 17a1 1 0 102 0v1a1 1 0 10-2 0v-1zm6.78-1.22a1 1 0 00-1.42-1.42l-.7.71a1 1 0 001.41 1.41l.71-.7z" />
        </svg>
      ) : (
        // Dark icon
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      )}
      {isDark ? 'Light theme' : 'Dark theme'}
    </button>
  );
};

export default DarkModeDemo;
