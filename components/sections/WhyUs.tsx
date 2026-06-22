"use client";
import { Scale, Map, Layers, FileText, Link } from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Перетин права, фінансів і грантів",
    desc: "Ми не просто юристи і не просто фінансові консультанти. Ми працюємо на перетині корпоративного права, грантового менеджменту та інвестиційного структурування.",
  },
  {
    icon: Map,
    title: "Розуміємо defence-tech landscape",
    desc: "Ми знаємо Brave1, Defence City, DOT-Chain, EDIP, EDF, DIANA та US-треки не з брошур — ми аналізуємо їх вимоги системно та регулярно.",
  },
  {
    icon: Scale,
    title: "Аналізуємо сумісність програм",
    desc: "Одна з наших ключових компетенцій — знайти комбінації, які підсилюють одна одну, та уникнути тих, що конфліктують між собою.",
  },
  {
    icon: FileText,
    title: "Готуємо матеріали, а не просто консультуємо",
    desc: "Після роботи з нами у клієнта залишаються конкретні документи: карта, roadmap, pitch deck, data room, заявки. Не тільки слова.",
  },
  {
    icon: Link,
    title: "Будуємо pipeline, а не одну заявку",
    desc: "Наш підхід — системний. Ми допомагаємо збудувати 12-місячний pipeline, де кожна заявка або переговори пов'язані між собою логічно.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
        >
          {/* Header */}
          <div data-reveal style={{ textAlign: "center" }}>
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
              Чому UKRLAW / УКРГОСКАПІТАЛ
            </span>
            <h2
              style={{
                fontFamily: "EB Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#FFFFFF",
                maxWidth: "700px",
                margin: "0 auto 1rem",
                lineHeight: 1.2,
              }}
            >
              Системний підхід на перетині права, фінансів та оборонних технологій
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem",
                maxWidth: "580px",
                margin: "0 auto",
                fontFamily: "Lato, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Ми не підбираємо одну програму і не складаємо одну заявку. Ми аналізуємо повну картину фінансових можливостей та допомагаємо компанії пройти шлях від першої діагностики до закритого раунду.
            </p>
          </div>

          {/* Differentiators */}
          <div
            data-stagger
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "1.25rem",
            }}
          >
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "1.75rem",
                    transition: "border-color 0.25s, transform 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "10px",
                      background: "rgba(201,168,76,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={20} color="#C9A84C" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "EB Garamond, Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {d.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.62)",
                      fontSize: "0.875rem",
                      fontFamily: "Lato, sans-serif",
                      lineHeight: 1.65,
                    }}
                  >
                    {d.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "12px",
              padding: "1.5rem 2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.825rem",
                fontFamily: "Lato, sans-serif",
                lineHeight: 1.7,
                fontStyle: "italic",
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              Ми не гарантуємо отримання грантів або інвестицій — жоден консультант не може цього гарантувати. Ми допомагаємо оцінити можливості, підготувати дорожню карту, підвищити готовність компанії до залучення капіталу та супроводжуємо процес на кожному кроці.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
