'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useActiveInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useActiveInView('Skills');

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      id='skills'
      className='scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-3 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariant}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            className='bg-white border border-black/[0.1] rounded-xl px-6 py-2 dark:bg-white/10 dark:text-white/80'
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
