import React from 'react';
import styles from './styles/VacancyCard.module.css';

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
        <div className={`${styles.VacancyCardbox} flex col`}>
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
        </div>
    );
};

export default VacancyCard;