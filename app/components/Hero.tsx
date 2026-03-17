export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center bg-[var(--ds-bg)]"
      style={{ padding: "120px 80px", gap: "32px" }}
    >
      <h1
        className="text-[var(--ds-text)]"
        style={{ fontSize: "56px", fontWeight: 500, lineHeight: 1.2, margin: 0 }}
      >
        Interaction Designer
      </h1>
      <p
        className="text-[var(--ds-text-secondary)]"
        style={{
          fontSize: "18px",
          lineHeight: 1.7,
          maxWidth: "560px",
          margin: 0,
        }}
      >
        Crafting thoughtful digital experiences that feel intuitive and
        purposeful
      </p>
      <a
        href="#works"
        className="inline-flex items-center justify-center bg-[var(--ds-text)] text-[var(--ds-bg)] text-[14px] font-medium transition-opacity hover:opacity-80"
        style={{ padding: "12px 24px", borderRadius: "4px", fontWeight: 500 }}
      >
        View Works
      </a>
    </section>
  );
}
