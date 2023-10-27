import React from 'react'
import styles from './styles/Menifesto.module.css'
import Image from 'next/image'
import Circle from '../assets/Ellipse 2.png'
import Slug from '../assets/Flyingslug.png'
import Tag from '../assets/tag.png'

const Menifesto = () => {
  return (
    <div className={`${styles.menifestobox} flex col`}>
        <div className={`${styles.buildreason}`}>Built out of frustration</div>
        <div className={`${styles.heading}`}>Meet the ahead app</div>
        <div className={`${styles.content} flex `}>
            <div className={`${styles.logo}`}>
              <Image className={styles.cirlce} src={Circle} alt=''/>
              <div className={`${styles.whitecircle} flex`}>
                <div className={styles.rank}>1</div>
                <Image className={styles.tag} src={Tag} alt=''/>
                <Image className={styles.slug} src={Slug} alt='slug' />
              </div>
              <div></div>
            </div>
            <div className={`${styles.contentbox} flex col`}>
                <div className={`${styles.contenttext}`}>A personalized pocked coach that provides bite-sized, science-driven tools to boost emotional intelligence.</div>
                <div className={`${styles.contenttext}`}>Think of ot as a pocket cheerleader towards a better, more fulfilling.</div>
            </div>
        </div>
    </div>
  )
}

export default Menifesto