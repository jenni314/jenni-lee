import Image from "next/image";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col" style={{ gap: "20px" }}>
      {/* Image */}
      <div
        className="w-full overflow-hidden bg-[var(--ds-bg-secondary)] relative"
        style={{ height: "380px" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col" style={{ gap: "12px" }}>
        {/* Meta row */}
        <div className="flex items-center" style={{ gap: "12px" }}>
          <span
            className="text-[var(--ds-text-secondary)]"
            style={{ fontSize: "13px" }}
          >
            {project.year}
          </span>
          <span
            className="text-[var(--ds-text-secondary)] bg-[var(--ds-bg-secondary)]"
            style={{
              fontSize: "13px",
              padding: "4px 12px",
              borderRadius: "100px",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[var(--ds-text)]"
          style={{ fontSize: "20px", fontWeight: 500, margin: 0 }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-[var(--ds-text-secondary)]"
          style={{ fontSize: "16px", lineHeight: 1.7, margin: 0 }}
        >
          {project.description}
        </p>
      </div>
    </article>
  );
}
