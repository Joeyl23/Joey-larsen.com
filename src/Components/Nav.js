import React from 'react'

import { motion } from 'framer-motion'

const dropin = {
  hidden:{
    x: '-100vh',
    opacity:0,
  },
  visible:{
    opacity:1,
    transition: {
      duration:0.1,
      type:'spring',
      damping:25,
      stiffness:500,
    },
  },
  exit:{
    x: '-100vh',
    opacity:0,
  },
};

export default function Nav(handleClose) {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div onClick={(e) => e.stopPropagation()}
        className='w-24 h-24 bg-orange-400'>


        </motion.div>
    </Backdrop>
  )



  function Backdrop({children, onClick}){
    return (
      <motion.div className='absolute top-0 left-0 h-full w-full bg-slate-800 bg-opacity-20 flex items-center justify-center'
      onClick={onClick}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
        {children}
      </motion.div>
    )
  }
}
