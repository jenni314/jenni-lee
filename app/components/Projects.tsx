import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "mindful-banking",
    title: "Mindful Banking App",
    category: "Fintech",
    year: "2024",
    description:
      "A holistic approach to personal finance that prioritizes mental well-being alongside financial health.",
    image: "/project-mindful-banking.png",
  },
  {
    id: "artisan-ecommerce",
    title: "Artisan E-Commerce",
    category: "Retail",
    year: "2024",
    description:
      "A curated marketplace connecting artisans with design-conscious consumers.",
    image: "/project-artisan-ecommerce.png",
  },
  {
    id: "smart-home",
    title: "Smart Home Dashboard",
    category: "IoT",
    year: "2023",
    description:
      "An intuitive control center that makes managing connected devices feel effortless.",
    image: "/project-smart-home.png",
  },
  {
    id: "travel-companion",
    title: "Travel Companion",
    category: "Travel",
    year: "2023",
    description:
      "A thoughtful travel planning experience that adapts to the way people explore.",
    image: "/project-travel-companion.png",
  },
];

export default function Projects() {
  return (
    <section
      id="works"
      className="bg-[var(--ds-bg)] flex flex-col"
      style={{ padding: "80px", gap: "48px" }}
    >
      <h2
        className="text-[var(--ds-text)]"
        style={{ fontSize: "40px", fontWeight: 500, lineHeight: 1.2, margin: 0 }}
      >
        Selected Works
      </h2>

      {/* Grid: 2 columns, 2 rows */}
      <div className="flex flex-col" style={{ gap: "32px" }}>
        {/* Row 1 */}
        <div className="grid grid-cols-2" style={{ gap: "32px" }}>
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-2" style={{ gap: "32px" }}>
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} />
        </div>
      </div>
    </section>
  );
}
