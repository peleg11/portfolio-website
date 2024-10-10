'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useActiveInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useActiveInView('About');

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      id='about'
      className='scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        <span className='font-bold'>I'm Shay Peleg</span>, a frontend developer
        with a background in software engineering. I earned my{' '}
        <span className='font-bold'>Software Engineering</span> degree from SCE
        in August 2022, and I also hold a degree in{' '}
        <span className='font-bold'>Life Sciences</span> from Ben-Gurion
        University, completed in 2018. During the third year of my software
        engineering studies, I started working as a{' '}
        <span className='font-bold'>frontend developer</span>, gaining hands-on
        experience while balancing my education.
      </p>
      <p>
        My expertise includes working with{' '}
        <span className='font-bold'>
          React, TypeScript, CSS-in-JS (Styled-Components), and Redux-Saga.
        </span>{' '}
        I enjoy collaborating with design and product teams to build clean,
        functional, and user-friendly web applications. Always eager to learn, I
        continue to develop my skills and adapt to new technologies in the
        ever-evolving field of frontend development.
      </p>
    </motion.section>
  );
}
