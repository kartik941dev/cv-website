"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#achievements", label: "Achievements" },
    { href: "#projects", label: "Projects" },
    { href: "#interests", label: "Interests" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[color:var(--border)] bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-tight">
          <span className="text-base">Anushka Patel</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm items-center">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded hover:bg-black/5 dark:hover:bg-white/10"
          onClick={toggle}
        >
          <span className="i-heroicons-bars-3 w-6 h-6" aria-hidden />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-background/95">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={close} className="py-2">
                {item.label}
              </a>
            ))}
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


