import React from 'react'
import styles from './styles/EqBeatsIq.module.css'

const EqBeatsIq = () => {
    return (
        <div className={`${styles.eqiqbox} flex row`}>
            <div className={styles.eqiqtext}>EQ beats IQ</div>
            <div className='flex row'>
            <div className={styles.text}>People with high emotional intelligence (EQ) live more fulfilled lives.They tend to be happier and have healthier relationships.</div>
            <div className={styles.text}>They are more successful in their pursuits and make for inspiring learders. According to science, they earn $29k a year.</div>
            </div>
        </div>
    )
}

export default EqBeatsIq
