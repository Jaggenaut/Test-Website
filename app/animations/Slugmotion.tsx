"use client"
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TranslateXAnimationProps {
  children: ReactNode;
}

const TranslateXAnimation: React.FC<TranslateXAnimationProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    animate: { x: [300, 200, 100,0], y:[30,15,15,0] ,rotateZ:[0,-65,-65,0], opacity:[0,1,1,1],
        transition: {
            duration: 3.4,
            delay : 0,
          },},
  };

  return (
    <div ref={ref}>
      {inView && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={animationVariants}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default TranslateXAnimation;
