export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center text-center bg-[var(--ds-bg-secondary)]"
      style={{ padding: "80px", gap: "24px" }}
    >
      <h2
        className="text-[var(--ds-text)]"
        style={{ fontSize: "28px", fontWeight: 500, lineHeight: 1.2, margin: 0 }}
      >
        About
      </h2>
      <p
        className="text-[var(--ds-text-secondary)]"
        style={{
          fontSize: "16px",
          lineHeight: 1.7,
          maxWidth: "680px",
          margin: 0,
        }}
      >
        Elena Vasquez is an interaction designer focused on creating digital
        products that feel natural and human. With a background in cognitive
        psychology and visual design, she brings a research-driven approach to
        every project — balancing aesthetics with usability to craft experiences
        people genuinely enjoy.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center justify-center text-[var(--ds-text)] text-[14px] font-medium border border-[var(--ds-text)] transition-opacity hover:opacity-70"
        style={{ padding: "12px 24px", borderRadius: "4px", fontWeight: 500 }}
      >
        Learn More
      </a>
    </section>
  );
}
