"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-[var(--background)]/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <Link
        href="/"
        className="text-sm font-medium tracking-widest uppercase hover:opacity-60 transition-opacity"
      >
        Jenni Lee
      </Link>
      <nav className="flex gap-8">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm tracking-wide transition-opacity hover:opacity-60 ${
              pathname === href ? "opacity-100 font-medium" : "opacity-50"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
