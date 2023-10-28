"use client"
import styles from './styles/Menifesto.module.css'
import Image from 'next/image'
import Circle from '../assets/Ellipse 2.png'
import Slug from '../assets/Flyingslug.png'
import Tag from '../assets/tag.png'
import Headingslideleft from '../animations/headingslideleft'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Menifesto = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        left: -270,
        bottom: -100,
        scale: 1,
        transition: {
          duration: 1.9,
          delay: 0.4,
        },
      });
    }
  }, [controls, inView]);

  return (
    <div className={`${styles.menifestobox} flex col`}>
      <Headingslideleft>
        <div className={`${styles.buildreason}`}>Built out of frustration</div>
        <div className={`${styles.heading}`}>Meet the ahead app</div>
      </Headingslideleft>
      <div className={`${styles.content} flex `}>
        <div className={`${styles.logo}`}>
          <motion.div ref={ref} className={styles.cirlce}
          initial={{left:200, bottom:-150, scale: 0 }}
          animate={controls}>
          <Image  src={Circle} alt='' width={300} />
          </motion.div>
          <Headingslideleft>
          <div className={`${styles.whitecircle} flex`}>
            <div className={styles.rank}>1</div>
            <Image className={styles.tag} src={Tag} alt='' />
            <Image className={styles.slug} src={Slug} alt='slug' />
          </div>
          </Headingslideleft>
        </div>
        <Headingslideleft>
          <div className={`${styles.contentbox} flex col`}>
            <div className={`${styles.contenttext}`}>A personalized pocked coach that provides bite-sized, science-driven tools to boost emotional intelligence.</div>
            <div className={`${styles.contenttext}`}>Think of ot as a pocket cheerleader towards a better, more fulfilling.</div>
          </div></Headingslideleft>
      </div>
    </div>
  )
}

export default Menifesto