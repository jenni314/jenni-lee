import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jenni Lee — Designer",
  description:
    "Portfolio of Jenni Lee, a designer focused on brand identity, product design, and visual communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="pt-[73px] min-h-screen">{children}</main>
        <footer className="px-6 py-10 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-400 tracking-wide">
            © 2025 Jenni Lee
          </span>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-neutral-400 hover:text-[var(--foreground)] transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
