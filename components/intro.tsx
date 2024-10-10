'use client';
import React from 'react';
import Image from 'next/image';
import pic from '@/public/shayLinkedin.jpeg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useActiveInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useActiveInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='scroll-mt-[109rem] mb-28 max-w-[50rem] text-center sm:mb-0'
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
      >
        <span className='font-bold'>Hi, I&apos;m Shay Peleg.</span>
        <div className='relative flex items-center justify-center mt-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <Image
              className='h-48 w-48 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
              src={pic}
              alt='shay peleg photo'
              quality='100'
              priority={true}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.2,
                duration: 0.9,
              }}
              className='absolute bottom-0 right-0 text-4xl'
            >
              👋
            </motion.span>
          </motion.div>
        </div>
        <br />
        I&apos;m an{' '}
        <span className='font-bold'>experienced Frontend Developer</span> with a
        passion for creating{' '}
        <span className='italic'>
          pixel-perfect, user-friendly web applications.
        </span>{' '}
        I have a keen eye for <span className='font-bold'>UX design</span> and a
        strong foundation in{' '}
        <span className='font-bold'>Software Engineering.</span> <br />
        My focus is{' '}
        <span className='italic'>React, Next.js, TypeScript and CSS.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-95 transition dark:bg-[#676394] dark:bg-opacity-100'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition ' />
        </Link>
        <a
          href='/shayPelegFEdevCV.pdf'
          download
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none hover:scale-105 active:scale-95 transition cursor-pointer borderBlack dark:bg-white/10'
        >
          Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a
          href='https://www.linkedin.com/in/shay-peleg11/'
          target='_blank'
          className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full  outline-none hover:scale-[1.15rem] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950  dark:bg-white/10 dark:text-white/60 hover:dark:text-gray-50'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/peleg11'
          target='_blank'
          className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full  outline-none hover:scale-[1.15rem] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 hover:dark:text-gray-50 dark:bg-white/10 dark:text-white/60'
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
