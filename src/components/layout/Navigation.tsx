"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/pre-sale", label: "Pre-Sale" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-display text-2xl md:text-3xl italic tracking-tight hover:text-accent transition-colors"
          >
            Trajter
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground transition-transform origin-left",
                  isMobileMenuOpen && "rotate-45 translate-x-px"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground transition-opacity",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 bg-foreground transition-transform origin-left",
                  isMobileMenuOpen && "-rotate-45 translate-x-px"
                )}
              />
            </div>
          </button>
        </nav>
      </Container>

      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container>
          <div className="py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-foreground-muted hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
