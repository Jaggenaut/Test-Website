import React from 'react'
import styles from './styles/Open.module.css'
import VacancyCard from './VacancyCard'
import Head from 'next/head'
import Headingslideleft from '../animations/headingslideleft'

const Open = () => {
    const dummydata = [{
        key : 0,
        Position : 'Senior Full-stack Engineer',
        Type : "Full-time position",
        Place : "Berlin or remote",
        Pay : '$20-24k, 0.5-1.5% equity share options'
    },{
        key : 1,
        Position : 'Superstar Intern',
        Type : "Full-time position",
        Place : "Berlin or remote",
        Pay : '$20-24k, 0.5-1.5% equity share options'
    },{
        key : 2,
        Position : 'Superstar Intern',
        Type : "Full-time position",
        Place : "Berlin or remote",
        Pay : '$20-24k, 0.5-1.5% equity share options'
    },]
  return (
    <div className={styles.openbox}>
        <Headingslideleft>
        <div className={styles.openheading}>Open vacancies</div>
        </Headingslideleft>
        <div className={styles.cardcont}>
            {dummydata.map((post) =>{
                return (
                    <VacancyCard VacancyCardProps={post} key={post.key}/>
                )
            })}
        </div>
    </div>
  )
}

export default Open