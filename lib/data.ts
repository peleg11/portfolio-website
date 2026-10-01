import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Engineer - Frontend Specialist",
    location: "Tel-Aviv, IL",
    description: `I led the end-to-end development of two flagship AI chatbot products at dig.ai: a complex enterprise-facing solution and a self-serve platform (ask.dig.ai). I architected the frontend infrastructure and managed highly dynamic application state with Jotai and JSS, and expanded into full-stack work by integrating complex UI features with backend services to support sophisticated conversational workflows. I also integrated AI-native coding tools (Cursor, Claude Code) into daily engineering workflows to speed up delivery.`,
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
  {
    title: "Frontend Engineer",
    location: "Tel-Aviv, IL",
    description: `I worked as a frontend engineer at Code Ocean for 3 years, building from scratch, refactoring and maintaining client-side features of a complex React single page application. I created atomic React components and hooks, combined them with logic using Redux and Redux Saga, and connected them to the API, working closely with backend developers, product and QA to deliver a user-friendly, bug-free experience.`,
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Graduated B.Sc Software Engineering",
    location: "Beer Sheva, IL",
    description:
      "I graduated my SWE degree after 4 years of studying at Sami Shamoon College of Engineering (SCE) Majoring in Data Science. I started working as a frontend developer on the third year as a student (2021).",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Graduated B.Sc Life Sciences",
    location: "Beer Sheva, IL",
    description:
      "I graduated my life sciences degree after 3.5 years of studying at Ben-Gurion University.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Jotai",
  "Redux",
  "Redux-Saga",
  "JSS",
  "Styled-components",
  "Tailwind CSS",
  "Framer Motion",
  "REST APIs",
  "MCP",
  "Multi-Agent Systems",
  "Claude Code",
  "Cursor",
  "Git",
  "Docker",
  "UX Design",
] as const;
