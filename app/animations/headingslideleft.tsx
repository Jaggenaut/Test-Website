"use client"

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Headingslideleft({
        children,
      }: {
        children: React.ReactNode
      }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.9,
          delay: 0.4,
          type: 'spring',
          stiffness: 10,
          damping: 5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: -500, opacity: 0 , scale: 0}}
        animate={controls}
      >
       {children}
      </motion.div>
    </div>
  );
};

export default Headingslideleft;
