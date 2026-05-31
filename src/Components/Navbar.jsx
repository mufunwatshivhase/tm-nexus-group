import React, { useState } from 'react'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme, assets }) => {
  const [open, setOpen] = useState(false)

  
  const desktopContainer = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  }

  const desktopItem = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const dropdownContainer = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  }

  const dropdownItem = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex items-center justify-between px-4 sm:px-12 lg:px-24 py-3 
                 sticky top-0 z-20 backdrop-blur-xl 
                 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
    >
   
      <img
        src={theme === 'dark' ? assets.dark_logo : assets.light_logo}
        className="w-12 sm:w-20"
        alt="logo"
      />

   
      <motion.div
        variants={desktopContainer}
        initial="hidden"
        animate="visible"
        className="hidden sm:flex items-center gap-6"
      >
        <motion.a 
          variants={desktopItem} 
          href="#" 
          className="px-3 py-1 rounded-full text-black dark:text-white 
                     hover:bg-gray-200 dark:hover:bg-gray-700 
                     hover:shadow-md transition-all"
        >
          Home
        </motion.a>


        <motion.a 
          variants={desktopItem} 
          href="#services" 
          className="px-3 py-1 rounded-full text-black dark:text-white 
                     hover:bg-gray-200 dark:hover:bg-gray-700 
                     hover:shadow-md transition-all"
        >
          Services
        </motion.a>


        <motion.a 
          variants={desktopItem} 
          href="#our-work" 
          className="px-3 py-1 rounded-full text-black dark:text-white 
                     hover:bg-gray-200 dark:hover:bg-gray-700 
                     hover:shadow-md transition-all"
        >
          Our Work
        </motion.a>


        <motion.a 
          variants={desktopItem} 
          href="#contact-us" 
          className="px-3 py-1 rounded-full text-black dark:text-white 
                     hover:bg-gray-200 dark:hover:bg-gray-700 
                     hover:shadow-md transition-all"
        >
          Contact Us
        </motion.a>


      </motion.div>

  
      <div className="flex items-center gap-2 sm:gap-4">
    
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-2xl text-black dark:text-white hover:opacity-70 transition-all"
          aria-label="Toggle menu"
        >
          ☰
        </button>

     
        <ThemeToggleBtn theme={theme} setTheme={setTheme} assets={assets} />

        
        <motion.a
          href="#contact-us"
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden sm:flex text-xs sm:text-sm font-semibold items-center gap-2 
                     bg-gradient-to-r from-blue-600 via-teal-400 to-red-500 
                     dark:from-purple-700 dark:via-indigo-600 dark:to-gray-800
                     text-white px-4 sm:px-6 py-2 rounded-full cursor-pointer 
                     hover:opacity-90 transition-all shadow-md"
        >
          <span className="drop-shadow-sm">Connect</span>
          <img src={assets.right_arrow} width="12" alt="arrow" className="invert brightness-200" />
        </motion.a>
      </div>

     
      {open && (
        <motion.div
          variants={dropdownContainer}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-16 left-0 w-full bg-white text-black dark:bg-black dark:text-white shadow-md 
                     flex flex-col items-center gap-4 py-4 sm:hidden z-10"
        >
          <motion.a 
            variants={dropdownItem} 
            href="#" 
            className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                       hover:shadow-md transition-all"
          >
            Home
          </motion.a>
          <motion.a 
            variants={dropdownItem} 
            href="#services" 
            className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                       hover:shadow-md transition-all"
          >
            Services
          </motion.a>
          <motion.a 
            variants={dropdownItem} 
            href="#our-work" 
            className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                       hover:shadow-md transition-all"
          >
            Our Work
          </motion.a>
          <motion.a 
            variants={dropdownItem} 
            href="#contact-us" 
            className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                       hover:shadow-md transition-all"
          >
            Contact Us
          </motion.a>
          <motion.a
            variants={dropdownItem}
            href="#contact-us"
            className="text-sm font-semibold flex items-center gap-2 
                       bg-gradient-to-r from-blue-600 via-teal-400 to-red-500 
                       dark:from-purple-700 dark:via-indigo-600 dark:to-gray-800
                       text-white px-4 py-2 rounded-full cursor-pointer 
                       hover:opacity-90 transition-all shadow-md"
          >
            <span>Connect</span>
            <img src={assets.right_arrow} width="12" alt="arrow" className="invert brightness-200" />
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Navbar
 