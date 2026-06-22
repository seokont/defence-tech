"use client";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    tier: "Tier 1",
    label: "Investment & Grant Mapping",
    badge: "Стартова точка",
    badgeColor: "#3B82F6",
    target: "Ранні стадії, Brave1-резиденти, компанії без чіткого напряму",
    includes: [
      "Аудит компанії та технологічного профілю",
      "Аналіз стадії, traction та ринкового потенціалу",
      "Підбір та scoring програм фінансування",
      "Scoring matrix із пріоритетами",
      "Roadmap на 12 місяців",
      "Список швидких можливостей і найближчих дедлайнів",
    ],
    result:
      "Компанія отримує персональну карту фінансування та розуміє, куди рухатися і з чого починати.",
    highlight: false,
  },
  {
    tier: "Tier 2",
    label: "Capital Raise Preparation",
    badge: "Найпопулярніший",
    badgeColor: "#C9A84C",
    target: "Компанії з traction, контрактами, пілотами або продажами",
    includes: [
      "Pitch deck для інвесторів і грантових програм",
      "Financial model (3–5 років)",
      "Investor memo і executive summary",
      "Підготовка data room",
      "IP-аудит та compliance review",
      "Grant applications (Brave1, EDIP, EIC та ін.)",
      "Підготовка до Series A / strategic investment",
    ],
    result:
      "Компанія стає investor-ready та готова до переговорів із фондами, грантовими програмами та стратегічними інвесторами.",
    highlight: true,
  },
  {
    tier: "Tier 3",
    label: "International Structuring & Defence Capital Access",
    badge: "Scale-up",
    badgeColor: "#059669",
    target: "Компанії, що виходять на EU / UK / US капітал",
    includes: [
      "Структурування EU / UK / US legal entity",
      "Defence City setup та оптимізація",
      "EU-front company або Delaware C-corp за потреби",
      "ITAR / EAR / FOCI risk mapping",
      "CFC / tax / ownership analysis",
      "Супровід міжнародних партнерств та M&A prep",
    ],
    result:
      "Компанія отримує правову структуру, оптимізовану для вимог міжнародного капіталу, та усуває compliance-ризики.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      style={{ backgroundColor: "#0F172A" }}
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
            Послуги
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
            Три рівні підтримки — під вашу стадію
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
            Кожен рівень побудований під конкретну стадію готовності компанії до залучення капіталу.
          </p>
        </div>

        {/* Tier cards */}
        <div
          data-stagger
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.tier}
              style={{
                background: tier.highlight
                  ? "linear-gradient(160deg, #1E293B, #162236)"
                  : "rgba(255,255,255,0.04)",
                border: tier.highlight
                  ? "1px solid rgba(201,168,76,0.45)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = tier.highlight
                  ? "0 20px 60px rgba(201,168,76,0.15)"
                  : "0 12px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Badge */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "100px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    fontFamily: "Lato, sans-serif",
                    letterSpacing: "0.06em",
                    background: `${tier.badgeColor}22`,
                    color: tier.badgeColor,
                    border: `1px solid ${tier.badgeColor}55`,
                  }}
                >
                  {tier.badge}
                </span>
              </div>

              {/* Tier + title */}
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "Lato, sans-serif",
                  marginBottom: "0.375rem",
                }}
              >
                {tier.tier}
              </div>
              <h3
                style={{
                  fontFamily: "EB Garamond, Georgia, serif",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                  lineHeight: 1.25,
                }}
              >
                {tier.label}
              </h3>

              {/* Target */}
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "Lato, sans-serif",
                  marginBottom: "1.5rem",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                Для кого: {tier.target}
              </p>

              {/* Includes */}
              <ul style={{ listStyle: "none", marginBottom: "1.5rem", flex: 1 }}>
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "0.875rem",
                      fontFamily: "Lato, sans-serif",
                      marginBottom: "0.625rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: tier.badgeColor, marginTop: "0.2rem", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div
                style={{
                  padding: "1rem",
                  background: `${tier.badgeColor}10`,
                  borderRadius: "10px",
                  borderLeft: `3px solid ${tier.badgeColor}`,
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: tier.badgeColor,
                    fontWeight: 700,
                    fontFamily: "Lato, sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.375rem",
                  }}
                >
                  Результат
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "Lato, sans-serif",
                    lineHeight: 1.55,
                  }}
                >
                  {tier.result}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.5rem",
                  background: tier.highlight
                    ? "linear-gradient(135deg, #C9A84C, #E8C97A)"
                    : "rgba(255,255,255,0.08)",
                  color: tier.highlight ? "#0F172A" : "#FFFFFF",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Замовити {tier.tier}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
