import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion, useViewportScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import Nav from '../Components/Nav';
import ThreeJsCode from '../Components/ThreeJsExample'
import Downarrow from '../Components/Downarrow';
import Projectslide from '../Components/Projectslide';


import framerIcon from '../images/framerIcon.svg'

import PortfolioPage from '../images/PortfolioPage.PNG'
import kaisenPage from '../images/kaisenPage.PNG'
import RPSPage from '../images/RPSPage.PNG'
import Islands from '../images/islands.PNG'

import Github from '../images/icons8-github-60.png'
import Linkedin from '../images/icons8-linkedin-circled-60.png'

import './Main.css'

export default function Main() {

  useEffect(() => {
    ThreeJsCode('ThreeJsCanvas')
  }, []);

  const { scrollYProgress } = useViewportScroll()

  const [navOpen, SetnavOpen] = useState(false)


  return (
    <div className='w-full min-h-screen main'>

      <div className='h-screen flex flex-col items-center justify-center border-b-2 border-black area'>

          <motion.div id='MainText'
          initial={{x:-300, opacity:0.1, rotate:-90}}
          animate={{x:0, opacity:1, rotate:0,
          transition:{ type: "spring", stiffness: 50, bounce:0.3, duration:5},
          }}
          style={{
          x:useTransform(scrollYProgress, [0, 0.35], [0, -600]),
          rotate:useTransform(scrollYProgress, [0, 0.35], [0, 90]),
          }}
          >
          
            <div className='text-center text-4xl md:text-6xl border-b-2 px-6 border-black'><h1>Joey <br></br> Larsen</h1></div>
            <div className='text-lg md:text-2xl text-center'><p>a developer <br></br> based in austria</p></div>
          </motion.div>

          <div className='flex flex-row'>

            <motion.a
            initial={{
              scale:0
            }}
            animate={{scale:1}}
            transition={{duration:0.8,delay:0,type:'spring',bounce:0.7}}
            href='https://github.com/Joeyl23' target='_blank' rel='noreferrer' alt='icons8 github icon'><motion.img src={Github}></motion.img></motion.a>

            <motion.a 
            initial={{
              scale:0
            }}
            animate={{scale:1}}
            transition={{duration:0.8,delay:0.2,type:'spring',bounce:0.7}}
            href='https://www.linkedin.com/in/joey-larsen-680308186/' target='_blank' rel='noreferrer' alt='icons8 linkedin icon'><motion.img src={Linkedin}></motion.img></motion.a>

          </div>
        

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

            <div className='w-auto bg-gray-400/40 p-3 border-2 border-black framerTextBox'>
              <h1 className='opacity-1'>I was animated</h1>
              <h1 className='opacity-1'>with Framer!</h1>
            </div>

            <div className='w-4 h-2 bg-gray-400/40 mt-2 border-2 border-black framerTextBoxsm'></div>

            <div className='w-2 h-2 bg-gray-400/40 mt-2 border-2 border-black framerTextBoxsm'></div>

          </motion.div>
            <div></div>
          </motion.div>SwiperSlide



          <div className='flex flex-col justify-center items-center absolute bottom-4 right-24'>
          <Downarrow />
          </div>
      </div>



      <div className='w-full h-screen flex flex-col md:flex-row area border-b-2 border-black relative' id='about_me'>
          <div className='h-1/5 w-full md:w-1/4 flex self-center justify-center items-center'>

            <motion.h1 className='text-4xl'
              style={{
                x:useTransform(scrollYProgress, [0,0.3,0.35, 0.8], [-300,0,0,-300]),
                rotate:useTransform(scrollYProgress, [0,0.3,0.35, 0.8], [90,0,0,-90]),
              }}>
              ABOUT ME
            </motion.h1>

          

          </div>

          <div className='arrowdown hidden md:block sticky top-0'></div>

          <div className='h-5/6 md:h-full w-full md:w-3/4 text-2xl md:text-3xl flex flex-col justify-center items-center text-center ' >

            <h1>I graduated a technical education in<br></br> austria - 2022</h1>
            <span><br></br></span>
            <h1>experienced with</h1>
            <h1>HTML - CSS - JS</h1>
            <h1>REACTJS</h1>
            <h1>BOOTSTRAP - TAILWINDCSS</h1>
            <h1>STRAPI</h1>
            <span><br></br></span>
            <h1>and making good pizza</h1>

            <div className='flex flex-col relative'>
              <canvas id='ThreeJsCanvas' className='aspect-video min-h-[180px]' />

              <div className='tooltip'>

              <div className='w-auto text text-xl'>
                <motion.div className='arrow ml-2'
                  animate={{
                    y:[0,-10],
                    rotate:[0,20],
                    transition:{
                      delay:1,
                      yoyo:Infinity,
                      duration:1.5
                    }
                  }}
                ></motion.div>


                 <span className='px-4'>dragable </span>
              </div>
               
              </div>

            </div>

          </div>

      </div>


      <div className='h-screen w-full flex flex-col border-b-2 border-black' id='projects'>

        <h1 className='text-4xl h-[12%] self-center justify-self-center'> Projects </h1>

        <div className='w-full h-[70%] px-6'>
        <Swiper
            className='w-full h-full'
            spaceBetween={50}
            breakpoints = {{
              slidesPerView:1,
              768: {
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide className='h-full w-full'><Projectslide name='My Portfolio Page' imgsrc={PortfolioPage} description='Built with ReactJS using Tailwindcss, Framer motion, ThreeJS and Swiper' /></SwiperSlide>
            <SwiperSlide className='h-full w-full'><Projectslide name='Kaisen Mechanical keyboards' url='https://kaisen-shop.com/' imgsrc={kaisenPage} description='ecommerce Website made with React, Nodejs, Express and MongoDB (WIP)' /></SwiperSlide>
          </Swiper>

        </div>

        <div className='flex flex-col w-full h-[18%] justify-center items-center'>
          <Downarrow />
        </div>


      </div>


      <div className='h-screen w-full flex flex-col' id='projects'>

        <h1 className='text-4xl h-[12%] self-center justify-self-center'> Small Projects </h1>

        <div className='w-full max-h-[88%] px-6'>
        <Swiper
            className='w-full h-full'
            spaceBetween={50}
            breakpoints = {{
              slidesPerView:1,
              768: {
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide className='h-full w-full'><Projectslide name='islands observer game' url='https://joeysislands.netlify.app/' imgsrc={Islands} description='Built with ReactJS using ThreeJS, react three Fiber, react drei and blender' /></SwiperSlide>
            <SwiperSlide className='h-full w-full'><Projectslide name='Rock paper scissors game' url='https://joey-rps.netlify.app/' imgsrc={RPSPage} description='Built with ReactJS using Tailwindcss and Framer motion' /></SwiperSlide>
          </Swiper>

        </div>


      </div>

      <button className='fixed top-8 right-8 z-10' onClick={() => SetnavOpen(!navOpen)}>
        <motion.div className='w-11 h-11'
        animate={navOpen ? 'open' : 'closed'}
        >
          <motion.div className='w-11 h-[8px] bg-black mb-[4px] rounded-md' id='menulinerotate1'
          variants={{
            open: { rotate:45 },
            closed: { rotate:0 } 
          }}
          ></motion.div>
          <motion.div className='w-11 h-[8px] bg-black mb-[4px] rounded-md' id='menuline'
          variants={{
            open: { opacity:0},
            closed: { opacity:1},
          }}
          transition={{duration:0.2}}
          ></motion.div>
          <motion.div className='w-11 h-[8px] bg-black mb-[4px] rounded-md' id='menulinerotate2'
          variants={{
            open: { rotate:-45, y:-24 },
            closed: { rotate:0, y:0 }
          }}
          ></motion.div>
        </motion.div>
      </button>


      <AnimatePresence>
        {navOpen && <Nav setNavOpen={childSetNavOpen} />}
      </AnimatePresence>

    </div>
  )


  function childSetNavOpen(value){
    SetnavOpen(value);
  }
  
}
