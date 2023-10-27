import React from 'react';
import styles from './styles/Aheadcard.module.css';

interface AheadcardProps {
    key: number;
    Heading: string;
    Text: string;
}

interface Props {
    AheadcardProps: AheadcardProps;
}

const Aheadcard: React.FC<Props> = ({ AheadcardProps }) => {

    return (
        <div className={`${styles.Aheadcardbox} flex col`}>
            <div className={styles.Aheadcardheading}>{AheadcardProps.Heading}</div>
            <div className={styles.Aheadcardtext}>{AheadcardProps.Text}</div>
        </div>
    );
};

export default Aheadcard;