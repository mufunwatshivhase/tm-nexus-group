import React from 'react'
import { motion } from "framer-motion"
import Title from './title'
import aliceImg from '../assets/alice.png'
import brianImg from '../assets/brian.png'
import cynthiaImg from '../assets/cynthia.png'
import davidImg from '../assets/david.png'

const teamData = [
  { name: 'Mufunwa Tshivhase', role: 'Director', image: aliceImg },
  { name: 'Emmanuel Mulovhedzi', role: 'Director', image: brianImg },
  { name: 'Cynthia Lee', role: 'UI/UX Designer', image: cynthiaImg },
  { name: 'David Kim', role: 'Project Manager', image: davidImg },
]


const cardAnimations = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}


const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // 👈 delay between each card
      delayChildren: 0.1,    // 👈 initial delay before first card
    },
  },
}

const Teams = () => {
  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
      <Title title="Our Teams" desc="Meet the dedicated teams behind our success." />

      
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5"
            variants={cardAnimations}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.img
              src={team.image}
              alt={team.name}
              className="w-12 h-12 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
            />
            <div>
              <h3 className="text-sm font-bold">{team.name}</h3>
              <p className="text-xs opacity-60">{team.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Teams
