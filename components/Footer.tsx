"use client";
import { useEffect, useState } from "react";
import { Mail, MessageSquare, Eye, Users } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Послуги",
    links: [
      { label: "Investment & Grant Mapping", href: "#services" },
      { label: "Capital Raise Preparation", href: "#services" },
      { label: "International Structuring", href: "#services" },
      { label: "Спеціалізовані пакети", href: "#packages" },
    ],
  },
  {
    title: "Програми",
    links: [
      { label: "Brave1", href: "#opportunities" },
      { label: "EDIP / USI", href: "#opportunities" },
      { label: "NATO DIANA / NIF", href: "#opportunities" },
      { label: "DFC URIF / UK IFU", href: "#opportunities" },
    ],
  },
  {
    title: "Компанія",
    links: [
      { label: "Наш підхід", href: "#approach" },
      { label: "Для кого", href: "#for-whom" },
      { label: "FAQ", href: "#faq" },
      { label: "Отримати консультацію", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const [visitStats, setVisitStats] = useState<{ today: number; last7d: number } | null>(null);

  useEffect(() => {
    fetch("/api/visits", { method: "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.today === "number" && typeof data.last7d === "number") {
          setVisitStats(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#060E1B",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        padding: "4rem 0 2rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <Image
                src="/logo-transparent.png"
                alt="UKRLAW"
                width={44}
                height={44}
                style={{
                  objectFit: "contain",
                  filter: "brightness(1.35) drop-shadow(0 0 7px rgba(201,168,76,0.45))",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "EB Garamond, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#FFFFFF",
                    lineHeight: 1,
                  }}
                >
                  UKRLAW
                </div>
                <div style={{ fontSize: "0.6rem", color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  STRATEGIC LEGAL CENTER
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.85rem",
                fontFamily: "Lato, sans-serif",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
                maxWidth: "260px",
              }}
            >
              Юридично-фінансовий консалтинг для українських defence-tech та dual-use компаній. Гранти, інвестиції, міжнародне структурування.
            </p>
            {/* Contact info */}
            {/* <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <a
                href="mailto:info@ukrlaw.ua"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.82rem",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                <Mail size={14} />
                info@ukrlaw.ua
              </a>
              <a
                href="https://t.me/ukrlaw"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.82rem",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                <MessageSquare size={14} />
                @ukrlaw_capital
              </a>
            </div> */}
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.875rem",
                        fontFamily: "Lato, sans-serif",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: "0.78rem",
                fontFamily: "Lato, sans-serif",
              }}
            >
              © 2026 ТОВ «УКРГОСКАПІТАЛ» / UKRLAW. Всі права захищені.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.72rem",
                fontFamily: "Lato, sans-serif",
                maxWidth: "520px",
                textAlign: "right",
                lineHeight: 1.5,
              }}
            >
              Матеріали на цьому сайті мають інформаційний характер і не є офертою, юридичною порадою або гарантією отримання фінансування.
            </p>
          </div>
          {visitStats && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.4rem 0.9rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  fontSize: "0.72rem",
                  fontFamily: "Lato, sans-serif",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                <Eye size={13} color="#C9A84C" />
                <span>{visitStats.today} сьогодні</span>
                <span style={{ color: "#C9A84C" }}>•</span>
                <Users size={13} color="#C9A84C" />
                <span>{visitStats.last7d} за 7 днів</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
