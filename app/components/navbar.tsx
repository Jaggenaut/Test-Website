import React from 'react'
import styles from './styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'

const navbar = () => {
  return (
    <div className={`${styles.navbox} flex`}>
      <div className={`${styles.navinnerbox} flex`}>
        <div className={styles.logo}>
            <Image src={logo} alt='logo' className='logo' width={100}
      height={100}/>
        </div>
        <div className={`${styles.navoptions} flex`}>
            <Link href='#'>Emotions</Link>
            <Link href='#'>Menifesto</Link>
            <Link href='#'>Self-awarness Test</Link>
            <Link href='#'>Work With Us</Link> 
        </div>
        <Link href='#' className='button flex'>Download app</Link>
      </div>
    </div>
  )
}

export default navbar
