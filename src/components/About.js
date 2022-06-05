import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div 
      className='text-white blenny min-h-screen p-12'

      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{
        x: window.innerWidth,
        transition: {duration: 0.1} 
      }}
    >
      <section className='container mx-auto'>
        <h1 className='blenny text-white text-8xl uppercase flex justify-center mb-12'>🧠 about</h1>
      </section>
    </motion.div>
  )
}

export default About