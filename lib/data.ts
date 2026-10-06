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
    title: "Full-Stack Engineer, Frontend Specialist · dig.ai",
    location: "Tel-Aviv, IL",
    description: `Led end-to-end development of two flagship AI chatbot products: an enterprise platform and the self-serve ask.dig.ai. Architected the frontend infrastructure and managed highly dynamic application state with Jotai and JSS. Expanded into full-stack work, connecting complex UI features to backend services that power sophisticated conversational workflows. Introduced AI-assisted development with Cursor and Claude Code, including custom skills now used across the entire R&D team.`,
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
  {
    title: "Frontend Engineer · Code Ocean",
    location: "Tel-Aviv, IL",
    description: `Spent 3 years building, refactoring and maintaining client-side features of a complex React single-page application. Created atomic React components and hooks, wired them to the API with Redux and Redux-Saga, and worked closely with backend, product and QA to ship a reliable, user-friendly experience.`,
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "B.Sc Software Engineering · SCE",
    location: "Beer Sheva, IL",
    description:
      "Sami Shamoon College of Engineering, majoring in Data Science. Started working as a frontend developer in my third year of study.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "B.Sc Life Sciences · Ben-Gurion University",
    location: "Beer Sheva, IL",
    description:
      "Completed a 3.5-year degree in Life Sciences before moving into software engineering.",
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

// Ordered by relevance to your positioning (AI + frontend first).
// HTML and CSS removed: they're assumed at senior level.
export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Multi-Agent Systems",
  "Claude Code",
  "Cursor",
  "Jotai",
  "Redux",
  "Redux-Saga",
  "Tailwind CSS",
  "Styled-components",
  "JSS",
  "Framer Motion",
  "REST APIs",
  "Docker",
  "Git",
  "UX Design",
] as const;
