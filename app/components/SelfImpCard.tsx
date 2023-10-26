import React from 'react';
import styles from './styles/SelfImpCard.module.css'

interface SelfProps {
    key: number;
    heading: string;
    text: string;
}

interface Props {
    SelfProps: SelfProps;
}

const Card: React.FC<Props> = ({ SelfProps }) => {

    return (
            <div className={styles.card}>
                <div className={styles.heading}>{SelfProps.heading}</div>
                <div className={styles.text}>{SelfProps.text}</div>
            </div>
    );
};

export default Card;




