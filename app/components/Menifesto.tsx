import React from 'react'
import styles from './styles/Menifesto.module.css'

const Menifesto = () => {
  return (
    <div className={`${styles.menifestobox} flex col`}>
        <div className={`${styles.buildreason}`}>Built out of frustration</div>
        <div className={`${styles.heading}`}>Meet the ahead app</div>
        <div className={`${styles.content} flex `}>
            <div className={`${styles.logo}`}></div>
            <div className={`${styles.contentbox} flex col`}>
                <div className={`${styles.contenttext}`}>A personalized pocked coach that provides bite-sized, science-driven tools to boost emotional intelligence.</div>
                <div className={`${styles.contenttext}`}>Think of ot as a pocket cheerleader towards a better, more fulfilling.</div>
            </div>
        </div>
    </div>
  )
}

export default Menifesto