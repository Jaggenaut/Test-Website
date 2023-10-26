import React from 'react'
import styles from './styles/Emotions.module.css'
import Card from './Card'

const Emotions = () => {
   const EmotionsData = [{
        key : 0,
        Emotion : '😯',
        color : 'rgba(216,242,255,255)',
        scale : '0.98',
        Heading : 'You get a promotion at work',
        Text : "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
    },{
        key : 1,
        Emotion : '😀',
        color : 'rgba(238,235,254,255)',
        scale : '1.05',
        Heading : 'You get a promotion at work',
        Text : "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
    },{
        key : 2,
        Emotion : '😳',
        color : 'rgba(99,65,239,255)',
        scale : '0.95',
        Heading : 'You get a promotion at work',
        Text : "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
    },{
        key : 3,
        Emotion : '😠',
        color : 'rgba(255,239,213,255)',
        scale : '1.02',
        Heading : 'You get a promotion at work',
        Text : "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
    },{
        key : 4,
        Emotion : '🤨',
        color : 'rgba(216,242,255,255)',
        scale : '0.98',
        Heading : 'You get a promotion at work',
        Text : "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
    },{
        key : 5,
        Emotion : '😊',
        color : 'rgba(238,235,254,255)',
        scale : '1',
        Heading : 'You get a promotion at work',
        Text : "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
    }]
  return (
    <>
    <div className={`${styles.emotionbox} flex col`}>
      <div className={`${styles.emotionheading}`}>Does this sound familier...</div>
      <div className={`${styles.slimehead}`} ></div>
    </div>
    <div className={`${styles.gridslider}`} >
    <div className={`${styles.gridforcards}`}>
      {EmotionsData.map((emotion) => {
          return(
              <Card 
              key={emotion.key}
              CardProps = {emotion}/>
          )
      })}
    </div></div>
    </>
  )
}

export default Emotions
