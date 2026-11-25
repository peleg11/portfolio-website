import type { IconType } from "react-icons";
import {
  LuAtom,
  LuBriefcase,
  LuGraduationCap,
  LuMousePointer2,
  LuPenTool,
  LuPlug,
  LuSparkles,
  LuWorkflow,
} from "react-icons/lu";
import {
  SiAnthropic,
  SiDocker,
  SiFramer,
  SiGit,
  SiJss,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const contact = {
  email: "shay.peleg11@gmail.com",
  linkedin: "https://www.linkedin.com/in/shay-peleg11/",
  github: "https://github.com/peleg11",
  cv: "/ShayPelegCV.pdf",
} as const;

export const experiencesData = [
  {
    role: "Full-stack engineer, frontend specialist",
    org: "dig.ai",
    location: "Tel Aviv, IL",
    description: `Led end-to-end development of two flagship AI chatbot products: an enterprise platform and the self-serve ask.dig.ai. Architected the frontend infrastructure and managed highly dynamic application state with Jotai and JSS. Expanded into full-stack work, connecting complex UI features to backend services that power sophisticated conversational workflows. Introduced AI-assisted development with Cursor and Claude Code, including custom skills now used across the entire R&D team.`,
    link: { label: "Try ask.dig.ai", href: "https://ask.dig.ai" },
    icon: LuBriefcase,
    date: "2025 – present",
  },
  {
    role: "Frontend engineer",
    org: "Code Ocean",
    location: "Tel Aviv, IL",
    description: `Spent 3 years building, refactoring and maintaining client-side features of a complex React single-page application. Created atomic React components and hooks, wired them to the API with Redux and Redux-Saga, and worked closely with backend, product and QA to ship a reliable, user-friendly experience.`,
    icon: LuBriefcase,
    date: "2021 – 2024",
  },
  {
    role: "B.Sc Software Engineering",
    org: "SCE",
    location: "Beer Sheva, IL",
    description:
      "Sami Shamoon College of Engineering, majoring in Data Science. Started working as a frontend developer in my third year of study.",
    icon: LuGraduationCap,
    date: "2018 – 2022",
  },
  {
    role: "B.Sc Life Sciences",
    org: "Ben-Gurion University",
    location: "Beer Sheva, IL",
    description:
      "Completed a 3.5-year degree in Life Sciences before moving into software engineering.",
    icon: LuGraduationCap,
    date: "2014 – 2018",
  },
];

// Brand marks keep their own colours; `color: undefined` means the mark is black and follows the ink.
// Concepts without a brand mark get a neutral glyph (`brand: false`), shown in the muted ink.
type Skill = { name: string; icon: IconType; color?: string; brand: boolean };

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", brand: true },
      { name: "React", icon: SiReact, color: "#58C4DC", brand: true },
      { name: "Next.js", icon: SiNextdotjs, brand: true },
      { name: "Jotai", icon: LuAtom, brand: false },
      { name: "Redux", icon: SiRedux, color: "#764ABC", brand: true },
      { name: "Redux-Saga", icon: SiReduxsaga, color: "#86D46B", brand: true },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", brand: true },
      { name: "Styled-components", icon: SiStyledcomponents, color: "#DB7093", brand: true },
      { name: "JSS", icon: SiJss, color: "#F7DF1E", brand: true },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF", brand: true },
      { name: "UX design", icon: LuPenTool, brand: false },
    ],
  },
  {
    title: "Backend and tooling",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", brand: true },
      { name: "Python", icon: SiPython, color: "#3776AB", brand: true },
      { name: "REST APIs", icon: LuPlug, brand: false },
      { name: "Docker", icon: SiDocker, color: "#2496ED", brand: true },
      { name: "Git", icon: SiGit, color: "#F05032", brand: true },
    ],
  },
];

// The AI card's diagram: the hub and what it orchestrates, in the words of the About copy.
export const aiHub = { name: "Multi-agent systems", icon: LuWorkflow };
export const aiNodes: Skill[] = [
  { name: "Claude Code", icon: SiAnthropic, brand: true },
  { name: "Cursor", icon: LuMousePointer2, brand: false },
  { name: "MCP integrations", icon: LuPlug, brand: false },
  { name: "Custom skills", icon: LuSparkles, brand: false },
];
