"use client";
import { Cpu, Radio, Eye, Shield, Cog, Rocket, Globe } from "lucide-react";

const segments = [
  {
    icon: Shield,
    label: "Brave1-резиденти",
    desc: "Компанії з підтвердженим статусом або поточними заявками на гранти Brave1",
  },
  {
    icon: Rocket,
    label: "БПЛА / USV / UGV",
    desc: "Виробники ударних, розвідувальних та логістичних безпілотних систем усіх класів",
  },
  {
    icon: Radio,
    label: "РЕБ / EW системи",
    desc: "Розробники засобів радіоелектронної боротьби, захисту GNSS та глушіння",
  },
  {
    icon: Cpu,
    label: "AI / Autonomous Systems",
    desc: "Компанії, що розробляють системи ШІ, автономних рішень та machine vision для defence",
  },
  {
    icon: Eye,
    label: "Cyber / ISR / Navigation",
    desc: "Рішення у сфері кібербезпеки, розвідки, спостереження та навігаційних технологій",
  },
  {
    icon: Cog,
    label: "Sensors / Components",
    desc: "Виробники датчиків, компонентів та рішень у сфері advanced manufacturing",
  },
  {
    icon: Shield,
    label: "Бойова валідація",
    desc: "Компанії з пілотами, контрактами або підтвердженим тестуванням від Сил оборони",
  },
  {
    icon: Globe,
    label: "EU / UK / US вихід",
    desc: "Scale-up компанії, що готуються до міжнародного ринку та залучення іноземного капіталу",
  },
];

export default function ForWhom() {
  return (
    <section
      id="for-whom"
      style={{ backgroundColor: "#0F172A", padding: "6rem 0" }}
    >
      <div className="container">
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
            Для кого
          </span>
          <h2
            style={{
              fontFamily: "EB Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#FFFFFF",
              maxWidth: "680px",
              margin: "0 auto 1rem",
            }}
          >
            Ми працюємо з провідними сегментами defence-tech
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1rem",
              maxWidth: "560px",
              margin: "0 auto",
              fontFamily: "Lato, sans-serif",
              lineHeight: 1.7,
            }}
          >
            Якщо ваша компанія розробляє, виробляє або постачає технологічні рішення для потреб оборони — ми знаємо вашу екосистему.
          </p>
        </div>

        {/* Segments bento grid */}
        <div
          data-stagger
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  transition: "border-color 0.25s, background 0.25s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "8px",
                    background: "rgba(201,168,76,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#C9A84C" />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "EB Garamond, Georgia, serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {seg.label}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.825rem",
                      fontFamily: "Lato, sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    {seg.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
