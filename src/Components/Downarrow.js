import React from 'react'
import { motion } from 'framer-motion'

export default function Downarrow() {
    return(
        <>
        <motion.div
                              animate={{
                                y:[0,10],
                                transition:{
                                  delay:1,
                                  yoyo:Infinity,
                                  duration:1
                                }
                              }}
                      className='rounded-md w-2 h-4 bg-slate-800 my-2'>
                    </motion.div>
                    <motion.div 
                                          animate={{
                                            y:[0,10],
                                            transition:{
                                              delay:1.1,
                                              yoyo:Infinity,
                                              duration:1
                                            }
                                          }}
                    className='rounded-md w-2 h-4 bg-slate-800 mb-2'></motion.div>
                    <motion.div 
                                          animate={{
                                            y:[0,10],
                                            transition:{
                                              delay:1.2,
                                              yoyo:Infinity,
                                              duration:1
                                            }
                                          }}
                    className='smallarrow rounded-md'></motion.div>
        </>
          );
}
