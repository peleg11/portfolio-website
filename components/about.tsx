"use client";
import React from "react";
import { useActiveInView } from "@/lib/hooks";
import WordHighlight from "./word-highlight";

const facts = [
  {
    title: "Two degrees",
    body: "B.Sc in Life Sciences from Ben-Gurion University in 2018, then B.Sc in Software Engineering from SCE in August 2022. I started working as a frontend developer in my third year.",
  },
  {
    title: "Frontend architecture first",
    body: "I started in deep frontend architecture with React, TypeScript, Jotai, Redux-Saga and CSS-in-JS, then grew into full-stack work on backend APIs and server-side logic.",
  },
  {
    title: "AI system orchestration",
    body: "Multi-agent environments, MCP integrations and standardized AI coding workflows with Cursor and Claude Code, including custom skills adopted across the entire R&D team.",
  },
];

export default function About() {
  const { ref } = useActiveInView("About");

  return (
    <section ref={ref} id="about" className="section">
      <div className="wrap">
        <h2 className="t-label text-muted">About me</h2>
        <div className="mt-6">
          <WordHighlight
            parts={[
              { text: "I enjoy bridging scalable infrastructure with" },
              { text: "intuitive, high-performance user experiences,", strong: true },
              {
                text: "and collaborating with design and product teams to build clean, functional applications.",
              },
            ]}
          />
        </div>
        <ul className="mt-10 grid gap-x-6 gap-y-8 border-t border-ink/[0.12] pt-8 sm:mt-16 sm:gap-y-10 sm:pt-10 lg:grid-cols-3 lg:gap-6">
          {facts.map((f) => (
            <li key={f.title}>
              <h3 className="t-h3">{f.title}</h3>
              <p className="mt-3 max-w-[46ch] text-ink/80">{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
