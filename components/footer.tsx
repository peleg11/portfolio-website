import React from "react";
import { contact, links } from "@/lib/data";
import Mark from "./mark";
import Contact from "./contact";

const elsewhere = [
  { label: "LinkedIn", href: contact.linkedin },
  { label: "GitHub", href: contact.github },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // The closing screen: the contact block, then the directory, one screen together.
    <footer className="flex flex-col pb-10 sm:min-h-svh">
      <Contact />
      <div className="wrap mt-12 border-t border-ink/[0.12] pt-10 sm:mt-auto sm:pt-16">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <a href="#home" className="flex h-11 items-center gap-2 text-[20px] tracking-[-0.02em]">
              <Mark className="h-6 w-6" />
              Shay Peleg
            </a>
            <p className="mt-2 max-w-[36ch] text-muted">
              Senior full-stack engineer and frontend specialist in Tel Aviv.
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="t-label text-muted">On this page</h3>
            <ul className="mt-2">
              {links
                .filter((l) => l.name !== "Home")
                .map((l) => (
                  <li key={l.hash}>
                    <a href={l.hash} className="link inline-block py-2.5">
                      {l.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="t-label text-muted">Elsewhere</h3>
            <ul className="mt-2">
              {elsewhere.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-block py-2.5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={contact.cv} download className="link inline-block py-2.5">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-ink/[0.12] pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <small className="text-sm">&copy; {currentYear} Shay Peleg</small>
          <small className="text-sm">
            Product names and logos are trademarks of their owners.
          </small>
        </div>
      </div>
    </footer>
  );
}
