"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

type Part = { text: string; strong?: boolean };

/*
  The taste skill's "word-highlight" moment: the statement rests at half ink and turns to ink word
  by word as it crosses the middle of the screen, scrubbed to the scroll (it runs back going up).
  Server render and reduced motion: every word in ink.
*/
export default function WordHighlight({ parts }: { parts: Part[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const words = parts.flatMap((p) =>
    p.text.split(" ").filter(Boolean).map((w) => ({ w, strong: !!p.strong }))
  );
  const [lit, setLit] = useState(words.length);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const update = (p: number) =>
    setLit(reduced ? words.length : Math.round(p * words.length));
  useMotionValueEvent(scrollYProgress, "change", update);
  useEffect(() => update(scrollYProgress.get()), [reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <p
      ref={ref}
      className="t-h2 max-w-[24ch] sm:max-w-[30ch] lg:max-w-[36ch]"
    >
      {words.map(({ w, strong }, i) => (
        <React.Fragment key={i}>
          <span
            className={`transition-colors duration-150 ${
              i < lit
                ? strong
                  ? "text-ink dark:text-accent"
                  : "text-ink"
                : "text-ink/45"
            }`}
          >
            {w}
          </span>{" "}
        </React.Fragment>
      ))}
    </p>
  );
}
