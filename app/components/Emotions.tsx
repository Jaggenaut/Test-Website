import React from 'react'
import styles from './styles/Emotions.module.css'
import Card from './Card'
import Image from 'next/image'
import Slug from '../assets/redslug.png'
import Head from 'next/head'
import Headingslideleft from '../animations/headingslideleft'
import ScrollAnimation from '../animations/Scroll'
import TranslateXAnimation from '../animations/Slugmotion'

const Emotions = () => {
  const EmotionsData = [{
    key: 0,
    Emotion: '😯',
    color: 'rgba(216,242,255,255)',
    scale: '0.98',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 1,
    Emotion: '😀',
    color: 'rgba(238,235,254,255)',
    scale: '1.05',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 2,
    Emotion: '😳',
    color: 'rgba(99,65,239,255)',
    scale: '0.95',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 3,
    Emotion: '😠',
    color: 'rgba(255,239,213,255)',
    scale: '1.02',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 4,
    Emotion: '🤨',
    color: 'rgba(216,242,255,255)',
    scale: '0.98',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 5,
    Emotion: '😊',
    color: 'rgba(238,235,254,255)',
    scale: '1',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key:6,
    Emotion: '😊',
    color: 'rgba(238,235,254,255)',
    scale: '1',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 8,
    Emotion: '😊',
    color: 'rgba(238,235,254,255)',
    scale: '1',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 9,
    Emotion: '😊',
    color: 'rgba(238,235,254,255)',
    scale: '1',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }, {
    key: 10,
    Emotion: '😊',
    color: 'rgba(238,235,254,255)',
    scale: '1',
    Heading: 'You get a promotion at work',
    Text: "You question yourselg and wonder when they'll realise you're an unqualified imposter , instead of trustiong yourself & your abilities."
  }]
  return (
    <>
      <div className={`${styles.emotionbox} flex col`}>
        <div className='flex'>
          <Headingslideleft>
            <div className={`${styles.emotionheading}`}>Does this sound familier...</div>
          </Headingslideleft>
          <TranslateXAnimation>
          <Image className={`${styles.slimehead}`} src={Slug} alt='' />
          </TranslateXAnimation>
        </div>
      </div>
      <div className={`${styles.gridslider}`} >
        <ScrollAnimation>
        <div className={`${styles.gridforcards}`}>
          {EmotionsData.map((emotion) => {
            return (
              <Card
                key={emotion.key}
                CardProps={emotion} />
            )
          })}
        </div>
        </ScrollAnimation></div>
    </>
  )
}

export default Emotions
