import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Jenni Lee",
};

const skills = [
  "Brand Identity",
  "Visual Design",
  "UX/UI Design",
  "Typography",
  "Art Direction",
  "Editorial Design",
  "Packaging",
  "Motion Graphics",
];

const experience = [
  {
    role: "Senior Designer",
    company: "Studio Meridian",
    period: "2023 — Present",
  },
  {
    role: "Designer",
    company: "Folio Agency",
    period: "2021 — 2023",
  },
  {
    role: "Junior Designer",
    company: "Blank Space Studio",
    period: "2019 — 2021",
  },
];

export default function About() {
  return (
    <div className="px-6 max-w-5xl mx-auto">
      {/* Header */}
      <section className="pt-20 pb-16 border-b border-neutral-200 dark:border-neutral-800">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight max-w-2xl">
          Designer based in New York, working at the intersection of craft and
          clarity.
        </h1>
      </section>

      {/* Bio + Details */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-neutral-200 dark:border-neutral-800">
        {/* Bio */}
        <div className="space-y-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            I&apos;m Jenni Lee, a multidisciplinary designer with six years of
            experience helping brands find their visual voice. My work spans
            brand identity, digital product design, editorial, and packaging.
          </p>
          <p>
            I believe good design starts with careful listening — understanding
            the problem before reaching for the pencil. I care deeply about
            systems thinking, typographic detail, and the spaces between
            elements.
          </p>
          <p>
            When I&apos;m not designing, I&apos;m usually reading, visiting
            galleries, or experimenting with darkroom photography.
          </p>
          <div className="pt-4">
            <a
              href="#"
              className="text-sm border border-[var(--foreground)] px-5 py-2.5 inline-block hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors tracking-wide"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Details column */}
        <div className="space-y-10">
          {/* Skills */}
          <div>
            <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
              Disciplines
            </h2>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm border-b border-neutral-100 dark:border-neutral-800 pb-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-10">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.company}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <p className="font-medium">{item.role}</p>
                <p className="text-sm text-neutral-400">{item.company}</p>
              </div>
              <p className="text-sm text-neutral-400 shrink-0">{item.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          Get in Touch
        </h2>
        <p className="text-xl font-medium max-w-md leading-snug mb-8">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
        <div className="flex gap-6 flex-wrap">
          <a
            href="mailto:hello@jennilee.com"
            className="text-sm border border-[var(--foreground)] px-5 py-2.5 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors tracking-wide"
          >
            hello@jennilee.com
          </a>
          <Link
            href="/works"
            className="text-sm text-neutral-400 hover:text-[var(--foreground)] transition-colors tracking-wide self-center"
          >
            View my work →
          </Link>
        </div>
      </section>
    </div>
  );
}
