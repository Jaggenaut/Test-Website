import React from 'react'
import styles from './styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
      <div className={`${styles.navinnerbox} flex row`}>
        <div className={styles.logo}>
            <Image src={logo} alt='logo' className='logo' width={200}
      height={100}/>
        </div>
        <div className={`${styles.navoptions} flex row`}>
            <Link href='#'>Emotions</Link>
            <Link href='#'>Menifesto</Link>
            <Link href='#'>Self-awarness Test</Link>
            <Link href='#'>Work With Us</Link> 
        </div>
        <Link href='#' className='button flex'>Download app</Link>
      </div>
  )
}

export default Navbar
