"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useActiveInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useActiveInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      id="about"
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold">I&apos;m Shay Peleg</span>, a senior
        full-stack engineer with 5 years of experience building complex,
        end-to-end web applications and modern AI-driven platforms. I earned my{" "}
        <span className="font-bold">Software Engineering</span> degree from SCE
        in August 2022, and I also hold a degree in{" "}
        <span className="font-bold">Life Sciences</span> from Ben-Gurion
        University, completed in 2018. During the third year of my software
        engineering studies, I started working as a{" "}
        <span className="font-bold">frontend developer</span>, gaining hands-on
        experience while balancing my education.
      </p>
      <p className="mb-3">
        I started out in deep frontend architecture with{" "}
        <span className="font-bold">
          React, TypeScript, Jotai, Redux-Saga and CSS-in-JS (JSS,
          Styled-Components)
        </span>
        , and grew into full-stack work spanning backend APIs and server-side
        logic. At <span className="font-bold">dig.ai</span> I led the
        development of two flagship AI chatbot products, from a complex
        enterprise solution to a self-serve platform,{" "}
        <a
          href="https://ask.dig.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-2 hover:text-gray-950 dark:hover:text-gray-50 transition"
        >
          ask.dig.ai
        </a>
        .
      </p>
      <p>
        I&apos;m highly specialized in{" "}
        <span className="font-bold">AI system orchestration</span>, including
        multi-agent environments, MCP integrations, and standardized AI coding
        workflows with tools like Cursor and Claude Code, including custom
        skills adopted across the entire R&amp;D team. I enjoy bridging scalable
        infrastructure with intuitive, high-performance user experiences, and
        collaborating with design and product teams to build clean, functional
        applications.
      </p>
    </motion.section>
  );
}
