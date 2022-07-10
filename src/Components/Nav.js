import React from 'react'
import { motion } from 'framer-motion'

export default function Nav() {

    const scrollto = (sectionid) => {
        document.getElementById(sectionid).scrollIntoView({behavior:'smooth', block:'start'});
      }
    return(
        <>
    
        <motion.div className='fixed right-0 top-16 h-16 w-auto flex flex-col text-white menu z-20'
                initial={{ opacity: 0, x:200 }}
                animate={{ 
                  opacity: 1,
                  x:0,
                 }}
                exit={{  
                  opacity: 0,
                  x:200
                 }}
        >
            <button onClick={() => scrollto('about_me')} className='menuitem w-20 py-2'> About Me </button>
            <button onClick={() => scrollto('projects')} className='menuitem w-20 py-2'> Projects </button>
        </motion.div>
      </>
      )
}
