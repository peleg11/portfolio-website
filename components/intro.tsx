"use client";
import React from "react";
import Image from "next/image";
import pic from "@/public/shayLinkedin.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useActiveInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[109rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Image
          className="h-48 w-48 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          src={pic}
          alt="Portrait of Shay Peleg"
          quality="100"
          priority={true}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 mt-8 px-4 text-3xl font-bold !leading-[1.3] sm:text-5xl"
      >
        Hi, I&apos;m Shay Peleg.
        <br />
        <span className="font-medium">
          I build <span className="italic">AI-driven products</span> people
          actually enjoy using.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mb-10 px-4 text-lg font-medium !leading-[1.6] text-gray-700 dark:text-white/70 sm:text-xl"
      >
        <span className="font-bold text-gray-900 dark:text-white">
          Senior Full-Stack Engineer &amp; Frontend Specialist.
        </span>
        <br />
        React, Next.js, TypeScript and multi-agent systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-95 transition dark:bg-[#676394] dark:bg-opacity-100"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/ShayPelegCV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 active:scale-95 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/shay-peleg11/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 hover:dark:text-gray-50"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/peleg11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 hover:dark:text-gray-50 dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
