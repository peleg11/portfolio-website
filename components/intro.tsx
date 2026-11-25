"use client";
import React from "react";
import Image from "next/image";
import pic from "@/public/shayLinkedin.jpeg";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import { useActiveInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { contact } from "@/lib/data";
import AgentChat from "./agent-chat";

// Staggered entrance delays, so the hero reads top to bottom as it arrives.
const d = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Intro() {
  const { ref } = useActiveInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="pb-6 pt-[calc(var(--nav)+40px)] sm:pb-16 sm:pt-[calc(var(--nav)+48px)]"
    >
      <div className="wrap flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="enter flex items-center gap-3 text-sm text-muted" style={d(0)}>
            <Image
              src={pic}
              alt="Portrait of Shay Peleg"
              width={40}
              height={40}
              priority
              placeholder="blur"
              sizes="40px"
              className="h-8 w-8 rounded-full object-cover object-[50%_30%] sm:h-10 sm:w-10"
            />
            Shay Peleg · Tel Aviv · 5 years’ experience
          </p>
          <h1 className="t-h1 enter mt-4" style={d(60)}>
            Senior full-stack engineer for AI products
          </h1>
          <p className="t-lead enter mt-6 max-w-[42ch]" style={d(120)}>
            At dig.ai I led two AI chatbot products, from an enterprise
            platform to the self-serve ask.dig.ai. React, Next.js, TypeScript
            and multi-agent systems.
          </p>
          <div
            className="enter mt-8 flex flex-col gap-3 sm:flex-row"
            style={d(180)}
          >
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Send a message
              <LuArrowRight aria-hidden className="arrow h-4 w-4" />
            </a>
            <a href={contact.cv} download className="btn btn-secondary">
              Download CV
              <LuDownload aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="enter relative h-[280px] sm:h-[440px] lg:col-span-6 lg:col-start-7 lg:h-[min(580px,calc(100svh-var(--nav)-112px))] lg:min-h-[460px]"
          style={d(120)}
        >
          <AgentChat />
        </div>
      </div>
    </section>
  );
}
