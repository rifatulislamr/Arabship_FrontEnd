import React from 'react'
import { motion } from 'framer-motion';



const ContactForm = () => {

    

  return (
    <div>
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <motion.h2
                className="mt-20 font-serif text-4xl text-center mb-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
           Contact Us Today
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
          We welcome your questions and feedback.
            </motion.p>
        
      </div>


       <div className="flex items-center justify-center  ">
         <form className="bg-white p-8   w-full max-w-lg">
        
        
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold  mb-5" htmlFor="name">
          
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            placeholder=" Name"
            required
          />
          </div>

           <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            placeholder=" Email"
            required
          />
           </div>

           <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
         
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=" Message"
            rows="4"
            required
          ></textarea>
          </div>

          <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#1b6254] hover:bg-[#0f4238] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>





    </div>
  )
}

export default ContactForm