"use client";
import React, { useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";
import { aiHub, aiNodes, skillGroups } from "@/lib/data";
import { useActiveInView } from "@/lib/hooks";

type Item = (typeof skillGroups)[number]["skills"][number];

function SkillIcon({ icon: Icon, color, brand }: Item) {
  return (
    <Icon
      aria-hidden
      className={`h-5 w-5 shrink-0 ${brand ? "text-ink" : "text-muted"}`}
      style={color ? { color } : undefined}
    />
  );
}

// Signal timing, from the fixed node size (h-11 = 44px) and gap (gap-3 = 12px): the spine pulse
// reaches node i after (34 + 56i) px of a SPINE-px run that takes 1.2 s of the 2.8 s loop (globals.css).
const SPINE = 34 + 56 * (aiNodes.length - 1);
const reach = (i: number) => ((34 + 56 * i) / SPINE) * 1.2;
const tickDelay = (i: number) => `${reach(i).toFixed(2)}s`;
const hitDelay = (i: number) => `${(reach(i) + 0.4).toFixed(2)}s`;

export default function Skills() {
  const { ref } = useActiveInView("Skills");
  const [paused, setPaused] = useState(false);
  const Hub = aiHub.icon;

  return (
    <section ref={ref} id="skills" className="section">
      <div className="wrap">
        <h2 className="t-h2 max-w-[20ch]">Skills and tools</h2>
        <p className="t-lead mt-4 max-w-[52ch] text-ink/80">
          The languages, libraries and AI tools I work with every day.
        </p>

        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-12">
          {skillGroups.map((g, gi) => (
            <div
              key={g.title}
              className={
                gi === 0 ? "md:col-span-8 lg:col-span-4" : "md:col-span-4 lg:col-span-3"
              }
            >
              <h3 className="t-label text-muted">{g.title}</h3>
              <ul
                className={`mt-3 border-t border-ink/[0.12] ${
                  gi === 0 ? "md:grid md:grid-cols-2 md:gap-x-6 lg:block" : ""
                }`}
              >
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex h-11 items-center gap-3 border-b border-ink/[0.12]"
                  >
                    <SkillIcon {...s} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div
            className={`ai-card relative rounded-lg bg-surface p-6 sm:p-8 md:col-span-12 md:grid md:grid-cols-2 md:gap-x-6 lg:col-span-5 lg:block ${
              paused ? "is-paused" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play the diagram animation" : "Pause the diagram animation"}
              className="absolute right-2 top-2 grid h-11 w-11 place-items-center rounded-sm text-muted transition-colors hover:bg-ink/[0.06] hover:text-ink sm:right-4 sm:top-4"
            >
              {paused ? (
                <LuPlay aria-hidden className="h-4 w-4" />
              ) : (
                <LuPause aria-hidden className="h-4 w-4" />
              )}
            </button>
            <div>
              <h3 className="t-h3 pr-10">AI engineering</h3>
              <p className="mt-2 max-w-[40ch] text-ink/80">
                Custom Claude Code skills I wrote are used across the entire
                R&amp;D team.
              </p>
            </div>
            {/* A tree drawn by layout, so it holds at every width: the hub, a spine, a tick per node.
                A signal runs down the spine and out along each tick, timed to reach each node in turn. */}
            <div
              className="mt-8 md:mt-0 lg:mt-8"
              role="img"
              aria-label="Diagram: multi-agent systems connected to Claude Code, Cursor, MCP integrations and custom skills"
            >
              <span className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-3 text-[15px] font-medium text-accent-ink">
                <Hub aria-hidden className="h-5 w-5 shrink-0" />
                {aiHub.name}
              </span>
              <div
                className="relative ml-[22px] mt-3 pl-6"
                style={{ "--d": `${SPINE}px` } as React.CSSProperties}
              >
                <span
                  aria-hidden
                  className="absolute -left-px -top-3 bottom-[22px] w-[3px] overflow-hidden"
                >
                  <span className="absolute inset-y-0 left-px w-px bg-ink/25" />
                  <span className="spine-pulse anim absolute left-0 top-0 h-5 w-[3px] rounded-full bg-gradient-to-b from-transparent to-ink dark:to-accent" />
                </span>
                <ul className="flex flex-col gap-3">
                  {aiNodes.map((n, i) => (
                    <li
                      key={n.name}
                      className="node-hit anim relative flex h-11 items-center gap-2 whitespace-nowrap rounded-md border border-ink/[0.12] bg-bg px-3 text-[15px]"
                      style={{ animationDelay: hitDelay(i) }}
                    >
                      <span
                        aria-hidden
                        className="absolute -left-6 top-1/2 h-px w-6 bg-ink/25"
                      >
                        <span
                          className="tick-pulse anim absolute -top-[2px] left-0 h-[5px] w-[5px] rounded-full bg-ink dark:bg-accent"
                          style={{ animationDelay: tickDelay(i) }}
                        />
                      </span>
                      <SkillIcon {...n} />
                      {n.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
