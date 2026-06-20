"use client";
import { Package } from "lucide-react";

const packages = [
  {
    name: "Defence City Application Pack",
    desc: "Повний пакет документів для реєстрації та роботи в режимі Defence City: юридична структура, заяви, регуляторний mapping та рекомендації щодо оптимізації.",
    tag: "UA Regulatory",
    tagColor: "#3B82F6",
  },
  {
    name: "EDIP USI Consortium Builder",
    desc: "Допомагаємо знайти EU-партнерів для консорціуму EDIP/USI, перевірити eligibility, підготувати consortium agreement та заявку під конкретний call.",
    tag: "EU Grant",
    tagColor: "#0369A1",
  },
  {
    name: "NATO Track Pack",
    desc: "Підготовка до DIANA Accelerator та NATO Innovation Fund: заявка, pitch, технічне досьє, відповідність критеріям deep-tech / dual-use / AI.",
    tag: "NATO",
    tagColor: "#C9A84C",
  },
  {
    name: "US Defense Tech Entry Pack",
    desc: "Mapping DFC URIF, USAID, DOD-програм для Ukraine. Аналіз ITAR/EAR ризиків, FOCI compliance, рекомендована US-структура для доступу до US капіталу.",
    tag: "US Capital",
    tagColor: "#7C3AED",
  },
  {
    name: "Grant Readiness Audit",
    desc: "Швидка оцінка готовності компанії до конкретної грантової програми. Висновок: чи відповідає компанія вимогам, що потрібно підготувати, чи варто подаватися.",
    tag: "Audit",
    tagColor: "#475569",
  },
  {
    name: "Investor Data Room Pack",
    desc: "Підготовка повного data room під стандарти VC та private equity: корпоративні документи, IP, контракти, фінансова звітність, KPI dashboard.",
    tag: "VC Ready",
    tagColor: "#059669",
  },
  {
    name: "Pitch Deck & Financial Model Pack",
    desc: "Розробка investor-ready pitch deck (12–15 слайдів) та фінансової моделі (3–5 років) під конкретну аудиторію: VC, strategic investor, грантовий комітет.",
    tag: "Fundraising",
    tagColor: "#C9A84C",
  },
];

export default function SpecialPackages() {
  return (
    <section
      id="packages"
      style={{ backgroundColor: "#F8FAFC", padding: "6rem 0" }}
    >
      <div className="container">
        <div data-reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.875rem",
              background: "rgba(3,105,161,0.08)",
              border: "1px solid rgba(3,105,161,0.2)",
              borderRadius: "100px",
              color: "#0369A1",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "Lato, sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Спеціалізовані пакети
          </span>
          <h2
            style={{
              fontFamily: "EB Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#0F172A",
              maxWidth: "680px",
              margin: "0 auto 1rem",
            }}
          >
            Точкові рішення під конкретний напрям
          </h2>
          <p
            style={{
              color: "#475569",
              fontSize: "1rem",
              maxWidth: "560px",
              margin: "0 auto",
              fontFamily: "Lato, sans-serif",
              lineHeight: 1.7,
            }}
          >
            Якщо ваша компанія вже знає, яка програма або інструмент їй потрібен — ми підготуємо точковий пакет під конкретне завдання.
          </p>
        </div>

        {/* Package bento grid */}
        <div
          data-stagger
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "1.625rem",
                transition: "box-shadow 0.25s, transform 0.2s, border-color 0.25s",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(15,23,42,0.09)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.borderColor = "#CBD5E1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
              }}
            >
              {/* Icon + tag row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "8px",
                    background: `${pkg.tagColor}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Package size={18} color={pkg.tagColor} />
                </div>
                <span
                  style={{
                    padding: "0.2rem 0.625rem",
                    borderRadius: "100px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    fontFamily: "Lato, sans-serif",
                    letterSpacing: "0.05em",
                    background: `${pkg.tagColor}15`,
                    color: pkg.tagColor,
                    border: `1px solid ${pkg.tagColor}35`,
                  }}
                >
                  {pkg.tag}
                </span>
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "EB Garamond, Georgia, serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  lineHeight: 1.3,
                }}
              >
                {pkg.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#475569",
                  fontSize: "0.875rem",
                  fontFamily: "Lato, sans-serif",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {pkg.desc}
              </p>

              {/* CTA link */}
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: pkg.tagColor,
                  fontSize: "0.82rem",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "0.625rem")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "0.375rem")}
              >
                Дізнатися більше →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
