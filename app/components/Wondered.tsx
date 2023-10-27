import React from 'react'
import styles from './styles/Wondered.module.css'
import Image from 'next/image'
import tag from '../assets/tag.png'

const Wondered = () => {
  return (
    <div className={`${styles.wonderedbox} flex col`}>
        <div className={`${styles.text}`}>
            Let your friends,family and co-worker (anonymously) rate your social skills.
        </div>
        <div className={`${styles.heading}`}>
            Ever wondered what others think of you?
        </div>
        <div className={`${styles.line} flex col`}>
            <hr className={styles.dotted} />
            <div className={`${styles.list} flex`}>
                <div className={`${styles.listitem} flex col`}>
                    <Image src={tag} alt='tag' width={40} height={40} />
                    <div className={styles.count}>1</div>
                    <div className={styles.content}>Answer question on your social skills</div>
                </div>
                <div className={`${styles.listitem} flex col`}>
                    <Image src={tag} alt='tag' width={40} height={40} />
                    <div className={styles.count}>2</div>
                    <div className={styles.content}>Let others anonymously answer the same questions about you</div>
                </div>
                <div className={`${styles.listitem} flex col`}>
                    <Image src={tag} alt='tag' width={40} height={40} />
                    <div className={styles.count}>3</div>
                    <div className={styles.content}>Find out where you and the others see things the same way - and where not!</div>
                </div>
            </div>
        </div>
        <div className={`${styles.slider} flex `}>
            <div className={`${styles.whiteback} flex col`}>
                <hr className={styles.greyline}/>
                <div className={`${styles.divcont} flex`}>
                <div className={styles.revdiv} style={{alignItems:'flex-start'}}>
                    <div className={styles.contentdiv}></div >
                    <div className={styles.circle} style={{backgroundColor:'rgba(99,65,240,255)'}}></div>
                    <div className={styles.contentdiv} style={{backgroundColor:'rgba(99,65,240,255)'}}>You</div>
                </div>
                <div className={styles.stdiv} style={{alignItems:'center'}}>
                    <div className={styles.contentdiv}></div>
                    <div className={styles.circle} style={{backgroundColor:'rgba(64,194,252,255)'}}></div>
                    <div className={styles.contentdiv} style={{backgroundColor:'rgba(64,194,252,255)'}}>Anonymous 1</div></div>
                <div className={styles.revdiv} style={{alignItems:'center'}}>
                    <div className={styles.contentdiv}></div>
                    <div className={styles.circle} style={{backgroundColor:'rgba(253,179,56,255)'}}></div>
                    <div className={styles.contentdiv} style={{backgroundColor:'rgba(253,179,56,255)'}}>Anonymous 2</div></div>
                <div className={styles.stdiv} style={{alignItems:'flex-end'}}>
                    <div className={styles.contentdiv}></div>
                    <div className={styles.circle} style={{backgroundColor:'rgba(88,200,151,255)'}}></div>
                    <div className={styles.contentdiv} style={{backgroundColor:'rgba(88,200,151,255)'}}>Anonymous 3</div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wondered