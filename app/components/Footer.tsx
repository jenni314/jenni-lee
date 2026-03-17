const socialLinks = ["LinkedIn", "Dribbble", "Twitter"];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex items-center justify-between bg-[var(--ds-bg)] border-t border-[var(--ds-border)]"
      style={{ padding: "48px 80px" }}
    >
      <span
        className="text-[var(--ds-text-secondary)]"
        style={{ fontSize: "13px" }}
      >
        © 2026 Elena Vasquez
      </span>
      <div className="flex items-center" style={{ gap: "24px" }}>
        {socialLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[var(--ds-text-secondary)] transition-colors hover:text-[var(--ds-text)]"
            style={{ fontSize: "13px" }}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
