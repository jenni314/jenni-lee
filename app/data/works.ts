export type Work = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  featured: boolean;
  coverColor: string;
};

export const works: Work[] = [
  {
    id: "brand-identity-01",
    title: "Horizon Brand Identity",
    category: "Branding",
    year: "2025",
    description:
      "A full visual identity system for a sustainable travel startup — logo, typography, color palette, and brand guidelines.",
    tags: ["Branding", "Identity", "Logo"],
    featured: true,
    coverColor: "#D4C5B0",
  },
  {
    id: "app-design-02",
    title: "Bloom Finance App",
    category: "Product Design",
    year: "2025",
    description:
      "Mobile-first personal finance app focused on mindful spending. End-to-end UX/UI from research to hi-fi prototypes.",
    tags: ["UX", "UI", "Mobile"],
    featured: true,
    coverColor: "#B8C9C1",
  },
  {
    id: "editorial-03",
    title: "Form & Function Editorial",
    category: "Editorial",
    year: "2024",
    description:
      "A six-page editorial spread exploring the intersection of brutalist architecture and modern graphic design.",
    tags: ["Editorial", "Print", "Layout"],
    featured: true,
    coverColor: "#C5C0D4",
  },
  {
    id: "web-design-04",
    title: "Solace Studio Website",
    category: "Web Design",
    year: "2024",
    description:
      "Art direction and web design for an independent ceramics studio. Responsive layout with a handcrafted visual language.",
    tags: ["Web", "Art Direction", "UI"],
    featured: true,
    coverColor: "#D4C0B8",
  },
  {
    id: "packaging-05",
    title: "Terra Skincare Packaging",
    category: "Packaging",
    year: "2024",
    description:
      "Packaging design for a small-batch botanical skincare line. Emphasis on earthy materiality and clean typography.",
    tags: ["Packaging", "Print", "Branding"],
    featured: false,
    coverColor: "#C9D4B8",
  },
  {
    id: "campaign-06",
    title: "Open Streets Campaign",
    category: "Campaign",
    year: "2024",
    description:
      "Visual campaign for a city initiative reclaiming urban streets for pedestrians. Posters, social assets, and signage.",
    tags: ["Campaign", "Print", "Social"],
    featured: false,
    coverColor: "#B8C2D4",
  },
  {
    id: "motion-07",
    title: "Kinetic Type Series",
    category: "Motion",
    year: "2023",
    description:
      "A series of short motion graphics exploring kinetic typography paired with ambient sound design.",
    tags: ["Motion", "Typography", "Video"],
    featured: false,
    coverColor: "#D4D0B8",
  },
  {
    id: "illustration-08",
    title: "City Life Illustrations",
    category: "Illustration",
    year: "2023",
    description:
      "An editorial illustration series documenting everyday life in the city, published in a local arts magazine.",
    tags: ["Illustration", "Editorial"],
    featured: false,
    coverColor: "#D4B8C9",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
