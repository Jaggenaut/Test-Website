"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ScrollAnimation({
    children,
  }: {
    children: React.ReactNode
  }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const animationVariants = {
    visible: {
      x: '0px',
      transition: {
        duration: 0.5,
        type: 'spring',
          stiffness: 40,
          damping: 8,
      },
    },
    
  };

  return (
    <div ref={ref}>
      <motion.div
        ref={containerRef}
        initial={{x:'-1200px'}}
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >{children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
