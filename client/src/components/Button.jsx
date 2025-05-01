import React from 'react'

const Button = () => {
  return (
    <button
      id="theme-toggle"
      type="button"
      className="flex items-center gap-2 bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 rounded-lg text-sm px-4 py-2 pl-[20px]"
    >
      <svg
        id="theme-toggle-dark-icon"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      Dark theme
    </button>
  )
}

export default Button
