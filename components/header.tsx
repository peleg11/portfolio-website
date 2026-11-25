"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/type";
import ThemeSwitch from "./theme-switch";
import Mark from "./mark";

const navLinks = links.filter((l) => l.name !== "Home");

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [open, setOpen] = useState(false);

  const go = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const name = (
    <a
      href="#home"
      onClick={() => go("Home")}
      className="flex h-11 items-center gap-2 text-[20px] tracking-[-0.02em]"
    >
      <Mark className="h-6 w-6" />
      Shay Peleg
    </a>
  );

  return (
    <MotionConfig reducedMotion="user">
      <header className="fixed inset-x-0 top-0 z-40 h-[var(--nav)] border-b border-ink/[0.12] bg-bg">
        <div className="wrap relative flex h-full items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <a href="#main" className="skip-link">
            Skip to content
          </a>

          <nav aria-label="Sections" className="hidden lg:block">
            <ul className="flex gap-1">
              {navLinks.map(({ name, hash }) => (
                <li key={hash} className="relative">
                  <a
                    href={hash}
                    onClick={() => go(name)}
                    aria-current={activeSection === name ? "location" : undefined}
                    className={`flex h-11 items-center px-3 text-[15px] font-medium transition-colors hover:text-ink ${
                      activeSection === name ? "text-ink" : "text-muted"
                    }`}
                  >
                    {name}
                  </a>
                  {activeSection === name && (
                    <motion.span
                      layoutId="nav-bar"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-x-3 -bottom-[14px] h-0.5 bg-ink"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {name}

          <div className="flex items-center justify-end gap-2">
            <ThemeSwitch />
            <a
              href="#contact"
              onClick={() => go("Contact")}
              className="btn btn-primary hidden sm:inline-flex"
            >
              Send a message
              <LuArrowRight aria-hidden className="arrow h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-sheet"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-sm border border-ink/20 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.12 }}
                >
                  {open ? (
                    <LuX aria-hidden className="h-5 w-5" />
                  ) : (
                    <LuMenu aria-hidden className="h-5 w-5" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
      {open && (
        <motion.div
          id="menu-sheet"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="fixed inset-x-0 bottom-0 top-[var(--nav)] z-30 overflow-y-auto bg-bg lg:hidden"
          onClick={() => setOpen(false)}
        >
          <nav aria-label="Sections" className="wrap pt-4">
            <ul>
              {navLinks.map(({ name, hash }, i) => (
                <motion.li
                  key={hash}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.04 + i * 0.03 }}
                  className="border-b border-ink/[0.12]"
                >
                  <a
                    href={hash}
                    onClick={() => go(name)}
                    className="flex h-14 items-center text-[20px]"
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => go("Contact")}
              className="btn btn-primary mt-8 w-full sm:hidden"
            >
              Send a message
              <LuArrowRight aria-hidden className="arrow h-4 w-4" />
            </a>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </MotionConfig>
  );
}
