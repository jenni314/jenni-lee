import { Work } from "../data/works";

type WorkCardProps = {
  work: Work;
  size?: "default" | "large";
};

export default function WorkCard({ work, size = "default" }: WorkCardProps) {
  return (
    <article className="group cursor-pointer">
      {/* Cover */}
      <div
        className={`w-full rounded-sm mb-4 overflow-hidden ${
          size === "large" ? "aspect-[4/3]" : "aspect-[3/2]"
        }`}
        style={{ backgroundColor: work.coverColor }}
      >
        <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
          <span className="text-xs tracking-widest uppercase text-white">
            View Project
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-neutral-400 tracking-widest uppercase mb-1">
            {work.category} — {work.year}
          </p>
          <h3 className="text-base font-medium leading-snug group-hover:opacity-60 transition-opacity">
            {work.title}
          </h3>
        </div>
        <span className="text-xs text-neutral-400 mt-1 shrink-0">↗</span>
      </div>
    </article>
  );
}
