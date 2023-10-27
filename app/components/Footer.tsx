import React from 'react'
import styles from './styles/Footer.module.css'
import Image from 'next/image'
import logo from '../assets/logo.png'
import appstore from '../assets/playstorlogo.png'

const Footer = () => {
  return (
    <div className='flex col my-16'>
        <Image src={logo} alt='logo' width={150}/>
        <div className={styles.heading}>ahead</div>
        <Image src={appstore} alt='appstore' width={150}/>
        <div className={styles.smtext}> © 2022 Ahead app. All rights reserved </div>
    </div>
  )
}

export default Footer