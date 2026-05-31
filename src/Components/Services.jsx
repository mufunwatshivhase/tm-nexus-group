import React from 'react';
import { motion } from "framer-motion";
import cipcIcon from '../assets/cipc-services-icon.png';
import sarsIcon from '../assets/sars-services-icon.png';
import labourIcon from '../assets/labour-services-icon.png';
import businessAdminIcon from '../assets/business-admin-services-icon.png';
import graphicDesignIcon from '../assets/graphic-design-services-icon.png';
import websiteIcon from '../assets/website-services-icon.png';
import marketingIcon from '../assets/marketing-services-icon.png';
import otherServicesIcon from '../assets/other-services-icon.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Services() {
  const services = [
    { title: 'CIPC Services', description: 'Providing comprehensive CIPC services for your business needs.', icon: cipcIcon },
    { title: 'SARS Services', description: 'Helping businesses stay compliant with tax regulations and filings.', icon: sarsIcon },
    { title: 'Labour Services', description: 'Ensuring workplace compliance and employee registrations.', icon: labourIcon },
    { title: 'Business Administration Services', description: 'Professional business plans, profiles, and proposals tailored to your needs.', icon: businessAdminIcon },
    { title: 'Graphic Design Services', description: 'Creative branding solutions including logos, posters, and flyers.', icon: graphicDesignIcon },
    { title: 'Website Services', description: 'Domain, email, and website hosting for your online presence.', icon: websiteIcon },
    { title: 'Marketing Services', description: 'Boost your business with Google Ads and email marketing campaigns.', icon: marketingIcon },
    { title: 'Tender Preparation Services', description: 'Expert tender preparation to help you win contracts.', icon: marketingIcon },
    { title: 'Other Services', description: 'Additional support such as account setup, share certificates, and registrations.', icon: otherServicesIcon },
  ];

  return (
    <motion.div
      id="services"
      className="flex flex-col items-center gap-10 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold"
      >
        Our Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl text-gray-600 dark:text-gray-300"
      >
        Explore our wide range of services designed to help your business thrive.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // 👈 scroll trigger
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <motion.img
              src={service.icon}
              alt={service.title}
              className="w-20 h-20 mb-1"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
