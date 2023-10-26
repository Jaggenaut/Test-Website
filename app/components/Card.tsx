import React from 'react';
import styles from './styles/Card.module.css';

interface CardProps {
    key: number;
    Emotion: string;
    color: string;
    scale: string;
    Heading: string;
    Text: string;
}

interface Props {
    CardProps: CardProps;
}

const Card: React.FC<Props> = ({ CardProps }) => {

    return (
        <div className={`${styles.cardbox} flex col`} style={{backgroundColor:`${CardProps.color}`, scale:`${CardProps.scale}`}}>
            <div className={styles.cardhead} >{CardProps.Emotion}</div>
            <div className={styles.cardheading}>{CardProps.Heading}</div>
            <div className={styles.cardtext}>{CardProps.Text}</div>
        </div>
    );
};

export default Card;




