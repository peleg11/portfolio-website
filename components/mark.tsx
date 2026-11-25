// The "stack" mark dealt by the taste skill: three bars, longest first.
export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <rect x="2" y="2.5" width="20" height="5.5" rx="2.75" className="fill-ink" />
      <rect x="2" y="9.25" width="14" height="5.5" rx="2.75" className="fill-ink/70" />
      <rect x="2" y="16" width="8" height="5.5" rx="2.75" className="fill-accent" />
    </svg>
  );
}
