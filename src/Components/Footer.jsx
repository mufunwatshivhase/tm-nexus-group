import React from 'react'
import logo from '../assets/dark_logo.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'
import instagramIcon from '../assets/instagram.png'
import linkedinIcon from '../assets/linkedin.png'

const Footer = ({ theme }) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 sm:pt-10 mt-20 px-4 sm:px-10 lg:px-24 xl:px-40">
      
      
      <div className="flex justify-between lg:items-start max-lg:flex-col gap-10">
        
       
        <div className="text-gray-600 dark:text-gray-400 flex flex-col items-start gap-4">
          <img src={logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-md mt-4">
            From strategy to execution, we help businesses succeed.
          </p>

          <ul className="flex gap-8 mt-4">
            <li><a className="hover:text-primary" href="#hero">Home</a></li>
            <li><a className="hover:text-primary" href="#services">Services</a></li>
            <li><a className="hover:text-primary" href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            Get the latest updates and insights from our team.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors duration-300">
              Subscribe
            </button>
          </div>

          
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-primary">
              <img src={facebookIcon} alt="Facebook" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:text-primary">
              <img src={twitterIcon}  alt="Twitter" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:text-primary">
              <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:text-primary">
              <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
            </a>
          </div>
          
            <div className="mt-6 text-gray-600 dark:text-gray-400 text-sm">
                <p><strong>TM Nexus Group (Pty Ltd)</strong></p>
                <p>Enterprise No: K2025808708</p>
                <p>VAT No: 9438178239</p>
                <p>Directors: Mufunwa Tshivhase, Emmanuel Mulovhedzi</p>
                <p>Address: 15 Yellowwood Blvd, Riverside View, Diepsloot, Gauteng, 2189</p>
                </div>
        </div>
      </div>

      \
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} TM Nexus Group. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
