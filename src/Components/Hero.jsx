import React from 'react'
import heroImg from '../assets/hero.png'  
import hp1 from '../assets/homepagepic1.jpg'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div 
      id="hero" 
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 
                 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      
      className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img 
          src={heroImg}   
          alt="Hero Image" 
          className="w-12 h-12 object-cover rounded-lg shadow-lg"
        />
        <p className="text-xs font-medium">Trusted by 100+ people worldwide</p>
      </motion.div>
    
      <motion.h1 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[80px] font-semibold xl:leading-[90px] max-w-4xl"
      >
        TM Nexus  <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">Group</span>
      </motion.h1>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl "
      >
        We are the future.
      </motion.h2>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl text-lg"
      >
        We are a multidisciplinary solutions provider dedicated to helping businesses and individuals thrive.
      </motion.p>

        <motion.img 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          src={hp1} 
          alt="Homepage Pic 1" 
          className="w-full max-w-5xl rounded-4xl shadow-lg mt-8" 
        />

    



    </div>
    
  )
}

export default Hero
