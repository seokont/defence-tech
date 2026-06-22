"use client";
import { Flag, Globe, TrendingUp } from "lucide-react";

const channels = [
  {
    icon: Flag,
    title: "Українські програми",
    color: "#3B82F6",
    items: [
      "Brave1 — гранти від 500 тис. до 900 млн грн",
      "Defence City — спеціальний регуляторний режим",
      "DOT-Chain — ланцюги оборонних постачальників",
      "5%-кредитування ОПК",
    ],
    note: "Понад 2,2 млрд грн видано за два роки",
  },
  {
    icon: Globe,
    title: "EU / NATO / Міжнародні",
    color: "#0369A1",
    items: [
      "EDIP USI — для українських юросіб",
      "EDF, Horizon Europe, EIC",
      "NATO DIANA, NATO Innovation Fund",
      "UK IFU, DFC URIF ($150M+)",
    ],
    note: "Відкрито спеціальні треки для України",
  },
  {
    icon: TrendingUp,
    title: "Приватний капітал",
    color: "#C9A84C",
    items: [
      "VC-фонди defence-tech напряму",
      "Family offices та strategic investors",
      "Defence-focused funds (EU, US, UK)",
      "Series A / strategic investment",
    ],
    note: "$129 млн в українські стартапи у 2025",
  },
];

export default function WhyNow() {
  return (
    <section
      id="why-now"
      className="section"
      style={{
        backgroundColor: "#0F172A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
        }}
      />

      <div className="container">
        {/* Section header */}
        <div data-reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.875rem",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "100px",
              color: "#C9A84C",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "Lato, sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Чому саме зараз
          </span>
          <h2
            style={{
              fontFamily: "EB Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#FFFFFF",
              maxWidth: "720px",
              margin: "0 auto 1.25rem",
              lineHeight: 1.2,
            }}
          >
            2026 рік — вікно можливостей для українського defence-tech
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.05rem",
              maxWidth: "600px",
              margin: "0 auto",
              fontFamily: "Lato, sans-serif",
              lineHeight: 1.7,
            }}
          >
            Вперше за новітню історію для однієї компанії одночасно відкриті три паралельні канали фінансування. Кожен має свої дедлайни, вимоги та можливості. Без правильної карти — ризик втратити доступ до капіталу.
          </p>
        </div>

        {/* Three channel cards */}
        <div
          data-stagger
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "1.5rem",
          }}
        >
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "2rem",
                  transition: "border-color 0.25s, background 0.25s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "10px",
                    background: `${ch.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={22} color={ch.color} />
                </div>
                <h3
                  style={{
                    fontFamily: "EB Garamond, Georgia, serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "1rem",
                  }}
                >
                  {ch.title}
                </h3>
                <ul style={{ listStyle: "none", marginBottom: "1.25rem" }}>
                  {ch.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "0.9rem",
                        fontFamily: "Lato, sans-serif",
                        marginBottom: "0.625rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: ch.color, marginTop: "0.3rem", flexShrink: 0 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    padding: "0.625rem 0.875rem",
                    background: `${ch.color}15`,
                    borderRadius: "8px",
                    borderLeft: `3px solid ${ch.color}`,
                    color: ch.color,
                    fontSize: "0.8rem",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {ch.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
