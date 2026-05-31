import React from 'react'
import Title from './title'
import userIcon from '../assets/user.png'
import mailIcon from '../assets/mail.png'
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const ContactUs = () => {
  return (
    <div 
      id="contact-us" 
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title 
        title="Contact Us" 
        desc="Our team is here to listen, assist, and collaborate. From inquiries to feedback, we’re committed to making your experience smooth and rewarding." 
      />

      {/* Contact Form */}
      <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
        
        {/* Name Field */}
        <motion.div 
          className="relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm mb-2 font-medium">Your Name</p>
          <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
            <img 
              src={userIcon} 
              alt="user" 
              className="w-5 h-5 ml-3 opacity-70" 
            />
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full py-3 pl-3 pr-4 bg-transparent text-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </motion.div>

       
        <motion.div 
          className="relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm mb-2 font-medium">Your Email</p>
          <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
            <img 
              src={mailIcon} 
              alt="email" 
              className="w-5 h-5 ml-3 opacity-70" 
            />
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full py-3 pl-3 pr-4 bg-transparent text-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </motion.div>

        
        <motion.div 
          className="sm:col-span-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm mb-2 font-medium">Your Message</p>
          <textarea 
            placeholder="Type your message here..." 
            rows="10" 
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
          ></textarea>
        </motion.div>

     
        <motion.div 
          className="sm:col-span-2 flex justify-end"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button 
            type="submit" 
            className="bg-gradient-to-r from-blue-600 via-teal-400 to-red-500 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </div>
  )
}

export default ContactUs
