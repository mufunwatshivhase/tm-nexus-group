import React, { useEffect } from 'react'

const ThemeToggleBtn = ({ theme, setTheme, assets }) => {
  // Set initial theme once on mount
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')
    setTheme(savedTheme || (prefersDarkMode ? 'dark' : 'light'))
  }, [setTheme])

  // Apply theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full 
                 bg-gradient-to-r from-blue-600 via-teal-400 to-red-500 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 hover:opacity-90 transition-colors duration-300 shadow-md"
      aria-label="Toggle theme"
    >
      <img
        src={theme === 'dark' ? assets['light-mode.png'] : assets['dark-mode.png']}
        alt={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="w-6 h-6 transition-transform duration-300"
      />
    </button>
  )
}

export default ThemeToggleBtn

