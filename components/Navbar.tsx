"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Можливості", href: "#opportunities" },
  { label: "Послуги", href: "#services" },
  { label: "Підхід", href: "#approach" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакт", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: scrolled || menuOpen ? "rgba(15,23,42,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(201,168,76,0.2)" : "none",
      }}
    >
      <div className="container" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
            <Image
              src="/logo-transparent.png"
              alt="UKRLAW УКРГОСКАПІТАЛ"
              width={52}
              height={52}
              style={{
                objectFit: "contain",
                filter: "brightness(1.35) drop-shadow(0 0 7px rgba(201,168,76,0.5))",
              }}
              priority
            />
            <div>
              <div
                style={{
                  fontFamily: "EB Garamond, Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                  lineHeight: 1.1,
                }}
              >
                UKRLAW
              </div>
              <div style={{ fontSize: "0.625rem", color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                STRATEGIC LEGAL CENTER

              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.5rem 0.875rem",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  borderRadius: "6px",
                  transition: "color 0.2s, background 0.2s",
                  fontFamily: "Lato, sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#C9A84C";
                  (e.target as HTMLElement).style.backgroundColor = "rgba(201,168,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                marginLeft: "0.5rem",
                padding: "0.5625rem 1.25rem",
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                color: "#0F172A",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "6px",
                transition: "opacity 0.2s, transform 0.15s",
                fontFamily: "Lato, sans-serif",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = "0.9";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = "1";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Отримати консультацію
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              marginTop: "0.75rem",
              padding: "1rem 0 1.25rem",
              borderTop: "1px solid rgba(201,168,76,0.25)",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              background: "rgba(10,18,35,0.98)",
              backdropFilter: "blur(16px)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "0.75rem 1rem",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1rem",
                  textDecoration: "none",
                  borderRadius: "6px",
                  transition: "background 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "0.75rem",
                padding: "1rem 1.5rem",
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                color: "#0F172A",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "10px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              Отримати консультацію
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
