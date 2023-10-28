"use client"
import React, { use } from 'react';
import styles from './styles/VacancyCard.module.css';
import { motion } from 'framer-motion';
import Popup from '../animations/Popup';

interface VacancyCardProps {
    key: number;
    Position: string;
    Type: string;
    Place: string;
    Pay: string;
}

interface Props {
    VacancyCardProps: VacancyCardProps;
}

const VacancyCard: React.FC<Props> = ({ VacancyCardProps }) => {

    return (
        <motion.div whileHover={{
            height: '250px',
            backgroundColor: 'rgb(256,236,212)',
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 50,
                damping: 8,
            }
          }} className={`${styles.VacancyCardbox} flex col`}>
            <div className={styles.VacancyCardheading}>{VacancyCardProps.Position}</div>
            <div className={styles.VacancyCardtext}>
                <div className='flex baseline'>
                    <div className={styles.circle}></div>
                    <div className={styles.text}>{VacancyCardProps.Type}</div>
                </div><div className='flex baseline' >
                    <div className={styles.circle}></div>
                    <div className={styles.text}>{VacancyCardProps.Place}</div>
                </div><div className='flex baseline'>
                    <div className={styles.circle}></div>
                    <div className={styles.text}>{VacancyCardProps.Pay}</div>
                </div>
            </div>
            <Popup>
            <div className={styles.button}>See details</div>
            </Popup>
        </motion.div>
    );
};

export default VacancyCard;