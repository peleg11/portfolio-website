'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className='z-[999] relative'>
      <motion.div
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='fixed top-0 left-1/2 h-[3.25rem] w-[24rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
      ></motion.div>

      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map(({ name, hash }) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='h-3/4 flex items-center justify-center relative'
              key={hash}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                  { 'text-gray-950 dark:text-gray-200': activeSection === name }
                )}
                href={hash}
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    layoutId='activeSection'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
