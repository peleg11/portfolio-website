import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: 'Projects',
  //   hash: '#projects',
  // },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated B.Sc Biology',
    location: 'Beer Sheva, IL',
    description:
      'I graduated my biology degree after 3.5 years of studying at Ben-gurion University.',
    icon: React.createElement(LuGraduationCap),
    date: '2014 - 2018',
  },
  {
    title: 'Graduated B.Sc Software Engineering',
    location: 'Beer Sheva, IL',
    description:
      'I graduated my SWE degree after 4 years of studying at SCE Majoring in Data Science. I started working as a frontend developer on the third year as a student (2021).',
    icon: React.createElement(LuGraduationCap),
    date: '2018 - 2022',
  },
  {
    title: 'Front-End Developer',
    location: 'Tel-Aviv, IL',
    description: `I worked as a front-end developer at Code Ocean for 3 years, creating and maintaining a complex research platform which included a veraity of features for Code Ocean's UI.`,
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'Typescript',
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Styled-components',
  'Redux',
  'Redux-Saga',
  'Git',
  'Docker',
  'NEXT.js',
  'Tailwind CSS',
  'UX Design',
  'Framer Motion',
  'Python',
] as const;
