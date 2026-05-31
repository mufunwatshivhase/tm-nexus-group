import React from 'react'
import company_logos from '../assets/clr.png'
import { motion } from "motion/react"

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }} 
      
      className="font-semibold">Trusted by these companies</motion.h3>

      {/* Flex row for logos */}
      <div className="flex flex-wrap items-center justify-center gap-5 m-">
        <motion.img 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          src={company_logos} 
          alt="Company Logo 1" 
          className="max-h-20 drop-shadow-xl" 
        />
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          src={company_logos} 
          alt="Company Logo 2" 
          className="max-h-20 drop-shadow-xl" 
        />
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          src={company_logos} 
          alt="Company Logo 3" 
          className="max-h-20 drop-shadow-xl" 
        />
      </div>
    </div>
  )
}

export default TrustedBy