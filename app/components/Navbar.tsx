"use client";

import Link from "next/link";

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      style={{ padding: "20px 48px" }}
      className="flex items-center justify-between bg-[var(--ds-bg)] border-b border-[var(--ds-border)]"
    >
      <Link
        href="/"
        className="text-[18px] font-medium leading-none text-[var(--ds-text)]"
        style={{ fontWeight: 500 }}
      >
        elena v.
      </Link>
      <nav className="flex items-center gap-8">
        {navLinks.map(({ href, label }, i) => (
          <a
            key={href}
            href={href}
            className="text-[14px] transition-colors hover:text-[var(--ds-text)]"
            style={{
              color: i === 0 ? "var(--ds-text)" : "var(--ds-text-secondary)",
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
