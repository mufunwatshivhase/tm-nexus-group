import React, { useEffect } from 'react'

const ThemeToggleBtn = ({ theme, setTheme, assets }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme')
    setTheme(savedTheme || (prefersDarkMode.matches ? 'dark' : 'light'))

   
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    prefersDarkMode.addEventListener('change', handleChange)

    return () => prefersDarkMode.removeEventListener('change', handleChange)
  }, [setTheme])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
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
      aria-pressed={theme === 'dark'}
    >
      <img
        src={theme === 'dark' ? assets['light-mode.png'] : assets['dark-mode.png']}
        alt={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="w-6 h-6 transition-transform duration-300 transform hover:scale-110 hover:rotate-6"
      />
    </button>
  )
}

export default ThemeToggleBtn
