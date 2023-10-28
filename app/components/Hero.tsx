"use client"
import React from 'react'
import styles from './styles/hero.module.css'
import Image from 'next/image'
import applogo from '../assets/playstorlogo.png'
import Phone from '../assets/Group 1.png'
import Smallscreen from '../assets/sortscreen.png'
import Purple from '../assets/purpleslug.png'
import Blue from '../assets/blueslug.png'
import Red from '../assets/redslug.png'
import Headingslideleft from '../animations/headingslideleft'
import { motion } from 'framer-motion';

const Hero = () => {

  const motionVariants = {
    initial: {opacity: 1 }, // Initial position and opacity
    animate: {
      rotateZ: [0,360],
      transition: {
        duration: 3,
        delay: 1.5,
        type: 'spring',
          stiffness: 30,
          damping: 8,
      },
    },
  };


  return (
    <div className={`${styles.herobox} flex`}>
      <div className={`${styles.heroinnerbox} flex row`}>
        <div className={`${styles.textcontainer} flex col`}>
          <Headingslideleft>
            <div className={`${styles.aheadapp}`}>Ahead app</div>
            <div className={`${styles.heading}`}>Master your life by mastering emotions</div>
            <div className='flex row juststart'>
              <Image src={applogo} alt='appstore' width={170} />
              <div className={`${styles.rating}`}></div>
            </div>
          </Headingslideleft>
        </div>
        <div className={`${styles.animations} flex`}>
          < motion.div initial="initial"
        animate="animate"
        variants={motionVariants} className={`${styles.backoutercircle} flex`}>
            < div className={styles.purpleslug}>
              <Image src={Purple} alt='Purple' />
            </ div>
            < div className={styles.smpurpleslug}>
              <Image src={Purple} alt='Purple' /></ div>
            < div className={styles.blueslug}>
              <Image src={Blue} alt='Blue' /></ div>
            < div className={styles.smblueslug}>
              <Image src={Blue} alt='Blue' /></ div>
            < div className={styles.redslug}>
              <Image src={Red} alt='Red' /></ div>
            <div className={styles.smredslug}>
              <Image src={Red} alt='Red' /></div>
          <div className={`${styles.backcircle} flex`}>
          </div>
          </motion.div>
      </div>
    </div>
    </div >
  )
}

export default Hero
