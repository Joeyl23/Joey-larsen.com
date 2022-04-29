import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

import ThreeJsCode from '../Components/ThreeJsExample'


import framerIcon from '../images/framerIcon.svg'

import PortfolioPage from '../images/PortfolioPage.PNG'

import './Main.css'

import Nav from '../Components/Nav'

export default function Main() {

  useEffect(() => {
    ThreeJsCode('ThreeJsCanvas')
  }, []);

  const { scrollYProgress } = useViewportScroll()

  const [navOpen, SetnavOpen] = useState(false)

  return (
    <div className='w-full min-h-screen main'>

      {navOpen && <Nav />}

      <button className='fixed top-8 right-8' onClick={() => SetnavOpen(!navOpen)}>
        menu
      </button>

      <div className='h-screen flex items-center justify-center border-b-2 border-black area'>

          <motion.div id='MainText'
          initial={{x:-300, opacity:0.1, rotate:-90}}
          animate={{x:0, opacity:1, rotate:0,
          transition:{ type: "spring", stiffness: 50, bounce:0.3, duration:5},
          }}
          style={{
          x:useTransform(scrollYProgress, [0, 0.5], [0, -300]),
          rotate:useTransform(scrollYProgress, [0, 0.5], [0, 90]),
          }}
          >
          
            <div className='text-center text-4xl md:text-6xl border-b-2 px-6 border-black'><h1>Joey <br></br> Larsen</h1></div>
            <div className='text-lg md:text-2xl text-center'><p>a developer <br></br> based in austria</p></div>
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

            <div className='w-auto bg-gray-400/40 p-3 border-2 border-black framerTextBox'>
              <h1 className='opacity-1'>I was animated</h1>
              <h1 className='opacity-1'>with Framer!</h1>
            </div>

            <div className='w-4 h-2 bg-gray-400/40 mt-2 border-2 border-black framerTextBoxsm'></div>

            <div className='w-2 h-2 bg-gray-400/40 mt-2 border-2 border-black framerTextBoxsm'></div>

          </motion.div>
            <div></div>
          </motion.div>
      </div>



      <div className='w-full h-screen flex flex-col md:flex-row area border-b-2 border-black relative' id='about_me'>
          <div className='h-1/5 w-full md:w-1/4 flex self-center justify-center items-center'>

            <motion.h1 className='text-4xl'
              style={{
                x:useTransform(scrollYProgress, [0.1,0.4,0.5, 0.9], [-300,0,0,-300]),
                rotate:useTransform(scrollYProgress, [0.1,0.4,0.5, 0.9], [90,0,0,-90]),
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


      <div className='h-screen w-full flex flex-col'>

        <h1 className='text-4xl h-[12%] self-center justify-self-center'> Projects </h1>

        <div className='w-full h-[70%] px-6'>
        <Swiper
            className='w-full h-full'
            spaceBetween={50}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints = {{
              slidesPerView:1,
              768: {
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide className='h-full w-full'><Projectslide name='My Portfolio' imgsrc={PortfolioPage} description='Built with ReactJS using Tailwindcss, Framer motion and ThreeJS' /></SwiperSlide>
            <SwiperSlide className='h-full w-full'><Projectslide name='2' /></SwiperSlide>
            <SwiperSlide className='h-full w-full'><Projectslide name='3' /></SwiperSlide>
            <SwiperSlide className='h-full w-full'><Projectslide name='4' /></SwiperSlide>
          </Swiper>

        </div>


      </div>


    

    </div>
  )

  function Projectslide(props) {
    return(
    <div className='h-full w-full bg-gray-200 border border-black flex flex-col items-center'> 
    
    <h1 className='text-center py-4'>{props.name}</h1>

    <img className='w-auto h-3/4 border-2 border-black' src={props.imgsrc} alt='img'></img>

    <h1 className='p-4'>{props.description}</h1>

    </div>
    )
  }


}
