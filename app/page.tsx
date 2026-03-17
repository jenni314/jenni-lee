import Link from "next/link";
import { featuredWorks } from "./data/works";
import WorkCard from "./components/WorkCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-20 pb-24 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          Designer — Available for work
        </p>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight max-w-3xl">
          Crafting thoughtful design for brands, products, and experiences.
        </h1>
        <div className="mt-10 flex gap-6 items-center">
          <Link
            href="/works"
            className="text-sm border border-[var(--foreground)] px-5 py-2.5 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors tracking-wide"
          >
            View All Works
          </Link>
          <Link
            href="/about"
            className="text-sm text-neutral-400 hover:text-[var(--foreground)] transition-colors tracking-wide"
          >
            About Me →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 max-w-5xl mx-auto">
        <hr className="border-neutral-200 dark:border-neutral-800" />
      </div>

      {/* Featured Works */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs tracking-widest uppercase text-neutral-400">
            Selected Works
          </h2>
          <Link
            href="/works"
            className="text-xs text-neutral-400 hover:text-[var(--foreground)] transition-colors tracking-wide"
          >
            All works →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* Brief intro strip */}
      <section className="px-6 py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <p className="text-xl md:text-2xl font-medium max-w-lg leading-snug">
            I&apos;m a multidisciplinary designer with a focus on brand identity
            and digital products.
          </p>
          <Link
            href="/about"
            className="text-sm border border-[var(--foreground)] px-5 py-2.5 self-start hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors tracking-wide shrink-0"
          >
            More About Me
          </Link>
        </div>
      </section>
    </>
  );
}
