import React from 'react'
import styles from './styles/Workwithus.module.css'
import Image from 'next/image'
import logo from '../assets/Image-removebg-preview.png'
import Aheadcard from './Aheadcard'

const WorkwithUs = () => {
    const dummydata = [{
        key :0,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :1,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :2,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :3,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :4,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :5,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :6,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :7,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :8,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },{
        key :9,
        Heading : "Power through, even when the going gets tough",
        Text : "We help you spot and work around whatever stands in your way, be it bad habbit, fears,etc."
    },]
  return (
    <div className={`${styles.workbox} flex col`}>
        <div className={`${styles.headingbox} flex`}>
            <div className={styles.heading}>Work with us</div>
            <div className={styles.appname}>ahead</div>
        </div>
        <div className={`${styles.headingbox} flex`}>
            <div className={`${styles.about} flex col`}>
                <div className={styles.aboutcont}>
                    <Image className={styles.logo} src={logo} alt='logo' width={80} height={100}/>
                    <div className={styles.abouthead}>About</div>
                    <div className={styles.abouttext}>At ahead our goal is to make self-improvement fun and lasting.We know their is a way how to make it work.And that's what aHead is all about!</div>
                    <div className={styles.productcard}>
                        <div className={styles.abouthead}>Product</div>
                        <div className={styles.abouttext}>Sure, you can spend ages reading books or sitting in seminars on how to become a better spouse, parent or manager - like we did ...</div>
                        </div>
                    </div>
            </div>
            <div className={styles.cardcont}>
                {dummydata.map((data) =>{
                    return(
                        <Aheadcard AheadcardProps={data} key={data.key} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default WorkwithUs