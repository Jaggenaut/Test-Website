import React from 'react'
import styles from './styles/EqBeatsIq.module.css'

const EqBeatsIq = () => {
    return (
        <div className={`${styles.eqiqbox} flex row my-16`}>
            <div className={styles.eqiqtext}>Be the best you with EQ</div>
            <div className='flex row'>
            <div className={styles.text}>Not having your own emotions under control might be holding you back.</div>
            <div className={styles.text}>Additionally not understanding those of others stop you from being parent, friend you can be.</div>
            </div>
        </div>
    )
}

export default EqBeatsIq
