import React from 'react'
import styles from './styles/hero.module.css'
import Image from 'next/image'
import applogo from '../assets/playstorlogo.png'
import Phone from '../assets/Group 1.png'
import Smallscreen from '../assets/sortscreen.png'
import Purple from '../assets/purpleslug.png'
import Blue from '../assets/blueslug.png'
import Red from '../assets/redslug.png'

const Hero = () => {
  return (
    <div className={`${styles.herobox} flex`}>
        <div className={`${styles.heroinnerbox} flex row`}>
          <div className={`${styles.textcontainer} flex col`}>
            <div className={`${styles.aheadapp}`}>Ahead app</div>
            <div className={`${styles.heading}`}>Master your life by mastering emotions</div>
            <div className='flex row'>
              <Image src={applogo} alt='appstore' width={170}/>
              <div className={`${styles.rating}`}></div>
            </div>
          </div>
          <div className={`${styles.animations} flex`}>
            <div className={`${styles.backoutercircle} flex`}>
              <Image className={styles.purpleslug} src={Purple} alt='Purple' />
              <Image className={styles.smpurpleslug} src={Purple} alt='Purple' />
              <Image className={styles.blueslug} src={Blue} alt='Blue' />
              <Image className={styles.smblueslug} src={Blue} alt='Blue' />
              <Image className={styles.redslug} src={Red} alt='Red' />
              <Image className={styles.smredslug} src={Red} alt='Red' />
              <div className={`${styles.backcircle} flex`}>
                  <Image src={Phone} alt='Phone' width={230} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
