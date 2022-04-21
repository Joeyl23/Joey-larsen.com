import React from 'react'

import { motion, useViewportScroll } from 'framer-motion'
import { useState } from 'react'

import framerIcon from '../images/framerIcon.svg'

import './Main.css'

export default function Main() {

  const { scrollYProgress } = useViewportScroll()

  return (
    <div className='w-full min-h-screen'>

<motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />

      <div className='h-screen flex items-center justify-center border-b-2 border-black'>

          <motion.div id='MainText'
          initial={{x:-300, opacity:0.1, rotate:-90}}
          animate={{x:0, opacity:1, rotate:0,
          transition:{ type: "spring", stiffness: 50, bounce:0.3, duration:5},
          }}>
            <div className='text-center text-4xl border-b-2 px-6 border-black'><h1>Joey <br></br> Larsen</h1></div>
            <div className='text-lg text-center'><p>a developer <br></br> based in austria</p></div>
          </motion.div>
        

        <motion.div className='absolute bottom-20 left-20'
        initial={{
          x:-200,
        }}
        animate={{
          x:0,
          transition:{
            duration:1,
          }
        }}>

          <motion.img className='w-16 h-16' src={framerIcon}
          initial={{
            scale:1,
            rotate:0,
          }}
          animate={{
            scale:[1.2,1],
            rotate:[180,0],
            transition:{
              duration:1.4,
              yoyo:Infinity
            }
          }}
          ></motion.img>
          
          </motion.div>

          <motion.div className='text-center text-black absolute bottom-40 left-40'
          initial={{scale:0.2, opacity:0}}
          animate={{scale:1, opacity:1,
          transition:{ type: "spring", stiffness: 50, bounce:0.3, delay:1}
          }}
          >

          <motion.div
          animate={{
            y:[0,10],
            transition:{
              delay:1,
              yoyo:Infinity,
              duration:1.5
            }
          }}
          >

            <div className='w-auto bg-yellow-400/40 p-3 rounded-md framerTextBox'>
              <h1 className='opacity-1'>I was made with</h1>
              <h1 className='opacity-1'>Framer!</h1>
            </div>

            <div className='w-4 h-2 bg-yellow-400/40 mt-2 rounded-md framerTextBoxsm'></div>

            <div className='w-2 h-2 bg-yellow-400/40 mt-2 rounded-md framerTextBoxsm'></div>

          </motion.div>

            <div></div>
            
          </motion.div>
          
        

      </div>








      <div className='w-full h-96'>




      </div>


    

    </div>
  )
}
