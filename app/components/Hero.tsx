import React from 'react'
import styles from './styles/hero.module.css'

const Hero = () => {
  return (
    <div className={`${styles.herobox} flex`}>
        <div className={`${styles.heroinnerbox} flex row`}>
          <div className={`${styles.textcontainer} flex col`}>
            <div className={`${styles.aheadapp}`}>Ahead app</div>
            <div className={`${styles.heading}`}>Master your life by mastering emotions</div>
            <div className='flex row'>
              <div className={`${styles.appstore}`}></div>
              <div className={`${styles.rating}`}></div>
            </div>
          </div>
          <div className={`${styles.animations}`}></div>
        </div>
    </div>
  )
}

export default Hero
