import type { Metadata } from "next";
import { works } from "../data/works";
import WorkCard from "../components/WorkCard";

export const metadata: Metadata = {
  title: "Works — Jenni Lee",
};

const categories = ["All", ...Array.from(new Set(works.map((w) => w.category)))];

export default function Works() {
  return (
    <div className="px-6 max-w-5xl mx-auto">
      {/* Header */}
      <section className="pt-20 pb-12 border-b border-neutral-200 dark:border-neutral-800">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          Works
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            All Projects
          </h1>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            A collection of selected work across branding, product design,
            editorial, and more.
          </p>
        </div>
      </section>

      {/* Category filter — static display, can be wired up with state later */}
      <section className="py-8 flex gap-4 flex-wrap border-b border-neutral-200 dark:border-neutral-800">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`text-xs tracking-widest uppercase px-4 py-1.5 border transition-colors ${
              i === 0
                ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                : "border-neutral-200 dark:border-neutral-700 text-neutral-400 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Works grid */}
      <section className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* End note */}
      <section className="py-12 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-400 tracking-widest uppercase text-center">
          {works.length} Projects — More on request
        </p>
      </section>
    </div>
  );
}
