import styles from './styles/SelfImprovement.module.css'
import SelfImpCard from './SelfImpCard'
import Image from 'next/image'
import slug from '../assets/blueslug.png'
import Headingslideleft from '../animations/headingslideleft'
import TranslateXAnimation from '../animations/Slugmotion'

const SelfImprovment = () => {
    const dummydata = [{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    },{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    },{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    },{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    },{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    },{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    },{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    },{
        key:0,
        heading:"It's not as easy as 1-2-3.",
        text : "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
    }]
  return (
    <div className={`${styles.containerbox} flex col`}>
        <Headingslideleft>
        <div className={styles.smallheading}>Wrong with self-improvement and how we're fixing it.</div>
        </Headingslideleft>
        <div className='flex'>
            <Headingslideleft>
            <div className={styles.largeheading}>Self-improvement. Ugh.</div>
            </Headingslideleft>
            <TranslateXAnimation>
            <Image className={styles.slug} src={slug} alt='' />
            </TranslateXAnimation>
        </div>
        <div className='flex w-full'>
            <div className={styles.cardscontainer}>
                {dummydata.map((improve) => {
                    return(
                        <SelfImpCard key={improve.key} SelfProps={improve} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SelfImprovment