import React from 'react'
import styles from './styles/Privacy.module.css'
import { Dancing_Script } from 'next/font/google'
import Popup from '../animations/Popup'

const DancingScript = Dancing_Script({
    weight: '400',
    preload: false
  })

const Privacy = () => {
  return (
    <div className={styles.privacybox}>
        <div className={styles.text}>We take privacy seriously</div>
        <div className={styles.heading}>Before you get started</div>
        <div className={styles.medtext}>"We wont't share your answers with anyone (and won't ever tell you which friends said what about you)"</div>
        <div className={styles.text}>with love , 
            <div className={`${DancingScript.className} ${styles.newfont}`}>Team ahead</div>
        </div>
        <Popup>
        <div className={`${styles.smbutton} button flex`}>Start a test</div>
        </Popup>
        <div className={styles.smtext}>Take only 5 minutes</div>
    </div>
  )
}

export default Privacy