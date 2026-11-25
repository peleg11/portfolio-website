"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  LuCheck,
  LuFileText,
  LuLoader2,
  LuRotateCcw,
  LuSparkles,
} from "react-icons/lu";
import { contact } from "@/lib/data";

// A scripted multi-agent run, built from the CV facts used elsewhere on the page.
const question = "How does Shay use AI at work?";
// `out` is what each step shows once it is done: the planner's sub-questions, the tool call and its result.
const steps: { agent: string; detail: string; out?: React.ReactNode }[] = [
  {
    agent: "Planner agent",
    detail: "Split the question in two",
    out: (
      <span className="flex flex-wrap gap-2">
        {["Which tools?", "Which workflows?"].map((q) => (
          <span key={q} className="rounded-full border border-ink/[0.15] px-2.5 py-0.5">
            {q}
          </span>
        ))}
      </span>
    ),
  },
  {
    agent: "MCP · read_cv",
    detail: "Read ShayPelegCV.pdf",
    out: (
      <code className="block rounded-sm bg-bg px-3 py-2 font-mono text-[13px] leading-relaxed">
        read_cv({"{"} section: &quot;experience&quot; {"}"})
        <br />
        <span className="text-muted">→ 2 roles, 2 degrees</span>
      </code>
    ),
  },
  { agent: "Writer agent", detail: "Drafted the answer" },
];
const answer =
  "Shay introduced AI-assisted development with Cursor and Claude Code at dig.ai, including custom skills now used across the entire R&D team. Day to day, that means multi-agent environments and MCP integrations.".split(
    " "
  );

// Timeline in ms: each step runs, then ticks done; the answer then streams word by word.
const STEP_START = 500;
const STEP_GAP = 650;
const STEP_RUN = 500;
const ANSWER_START = STEP_START + steps.length * STEP_GAP;
const WORD_MS = 38;
const END = ANSWER_START + answer.length * WORD_MS + 300;

export default function AgentChat() {
  const reduced = useReducedMotion();
  const [ms, setMs] = useState(0);
  const raf = useRef(0);

  const play = useCallback(() => {
    cancelAnimationFrame(raf.current);
    if (reduced) return setMs(END);
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = now - t0;
      setMs(Math.min(t, END));
      if (t < END) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [reduced]);

  useEffect(() => {
    play();
    return () => cancelAnimationFrame(raf.current);
  }, [play]);

  const words = Math.max(0, Math.floor((ms - ANSWER_START) / WORD_MS));
  const done = ms >= END;

  return (
    <div data-ui className="absolute inset-0 flex flex-col overflow-hidden rounded-lg bg-surface">
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-ink/[0.12] pl-5 pr-2">
        <p className="flex items-center gap-2 text-[15px] font-medium">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-ink">
            <LuSparkles aria-hidden className="h-4 w-4" />
          </span>
          Multi-agent chat
        </p>
        <button
          type="button"
          onClick={play}
          aria-label="Replay the conversation"
          className="grid h-11 w-11 place-items-center rounded-sm text-muted transition-colors hover:bg-ink/[0.06] hover:text-ink"
        >
          <LuRotateCcw aria-hidden className="h-4 w-4" />
        </button>
      </div>

      {/* Anchored to the bottom like a real chat, so a short frame shows the newest lines. */}
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-5 overflow-hidden p-5 [mask-image:linear-gradient(to_bottom,transparent,black_40px)] sm:p-6 lg:justify-start lg:gap-6 lg:p-8 lg:[mask-image:none]">
        <p className="max-w-[85%] self-end rounded-md bg-bg px-4 py-3">
          {question}
        </p>

        <ol className="flex flex-col gap-3 text-sm">
          {steps.map((s, i) => {
            const start = STEP_START + i * STEP_GAP;
            if (ms < start) return null;
            const running = ms < start + STEP_RUN;
            return (
              <li key={s.agent} className="flex items-start gap-3">
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                    running ? "text-muted" : "bg-ink text-bg"
                  }`}
                >
                  {running ? (
                    <LuLoader2 aria-hidden className="h-4 w-4 animate-spin" />
                  ) : (
                    <LuCheck aria-hidden className="h-3.5 w-3.5" />
                  )}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-2 pt-0.5">
                  <span className="flex flex-wrap gap-x-2">
                    <span className="font-medium">{s.agent}</span>
                    <span className="text-muted">{s.detail}</span>
                  </span>
                  {!running && s.out}
                </span>
              </li>
            );
          })}
        </ol>

        {ms >= ANSWER_START && (
          <p className="leading-relaxed">
            {answer.slice(0, words).join(" ")}
            {!done && (
              <span
                aria-hidden
                className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-ink"
              />
            )}
          </p>
        )}

        {done && (
          <a
            href={contact.cv}
            download
            className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-ink/[0.15] bg-bg px-3 text-sm transition-colors hover:border-ink/40"
          >
            <LuFileText aria-hidden className="h-4 w-4 text-muted" />
            Source: ShayPelegCV.pdf
          </a>
        )}
      </div>
    </div>
  );
}
