"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function OscillateWhenInView({
    children,
  }: {
    children: React.ReactNode
  }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const oscillateVariants = {
    oscillate: {
      rotateZ: [0, -3, 3, -2, 2, -1, 1, -1, 0],

      transition: {
        duration: 1,
        repeat: 2,
      },
    },
  };

  return (
    <div ref={ref}>
      {inView && (
        <motion.div
          animate="oscillate"
          variants={oscillateVariants}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default OscillateWhenInView;
