"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Чи гарантуєте ви отримання гранту або інвестицій?",
    a: "Ні — і жоден відповідальний консультант не може цього гарантувати. Рішення про видачу гранту або інвестиції завжди залишається за грантовим комітетом або інвестором. Ми допомагаємо оцінити можливості, підготувати дорожню карту, підвищити готовність компанії до залучення капіталу та супроводжуємо процес на кожному кроці — що суттєво підвищує шанси на успішний результат.",
  },
  {
    q: "Чи можна подаватися на EU-програми без компанії в ЄС?",
    a: "Залежить від програми. Для EDIP USI існують окремі треки для українських юридичних осіб. EDF та частина Horizon Europe вимагають наявності EU-entity або участі у консорціумі з EU-компаніями. Під час нашої діагностики ми визначаємо, які саме структурні умови потрібні для кожного конкретного напряму.",
  },
  {
    q: "Що робити, якщо компанія тільки на ранній стадії?",
    a: "Ранні стадії — один із наших ключових фокусів. Brave1 має окремі треки для R&D та ранньої розробки, EIC Pathfinder підходить для deep-tech pre-commercial stage. Ми підбираємо програми, релевантні саме для вашої стадії, та готуємо дорожню карту, яка враховує, як поступово розширювати доступні канали фінансування в міру зростання компанії.",
  },
  {
    q: "Чи працюєте ви з dual-use проєктами?",
    a: "Так, dual-use — це один із наших основних профілів. Багато програм (EIC, Horizon Europe, DFC URIF, UK IFU) орієнтовані саме на технології подвійного використання. При цьому dual-use проєкти потребують особливої уваги до export control (ITAR/EAR), FOCI та питань IP — це також частина нашої роботи.",
  },
  {
    q: "Скільки часу займає Investment Mapping (Tier 1)?",
    a: "Залежно від складності компанії та кількості потенційних програм — від 2 до 4 тижнів. Ми починаємо з установчої зустрічі, після якої проводимо детальний аналіз та готуємо фінальний звіт із картою фінансування, scoring matrix та roadmap.",
  },
  {
    q: "Чи допомагаєте з підготовкою pitch deck та фінансової моделі?",
    a: "Так, це частина Tier 2 — Capital Raise Preparation. Ми готуємо pitch deck (12–15 слайдів), financial model (3–5 років), investor memo та executive summary, адаптовані під конкретну аудиторію: VC-фонд, грантовий комітет або strategic investor. Кожен матеріал враховує специфіку defence-tech аудиторії.",
  },
  {
    q: "Чи супроводжуєте ви переговори з інвесторами та фондами?",
    a: "Так. У рамках Tier 2 та Tier 3 ми готуємо компанію до переговорів і за потреби беремо участь у підготовці до investor meetings, Q&A-сесій та due diligence. Ми також допомагаємо структурувати угоди та аналізуємо term sheets із юридичної та фінансової точки зору.",
  },
  {
    q: "Чи допомагаєте ви з реєстрацією або роботою в Defence City?",
    a: "Так, це окремий пакет — Defence City Application Pack. Ми аналізуємо, чи підходить Defence City для конкретної структури бізнесу, готуємо необхідні документи для реєстрації та надаємо рекомендації щодо оптимізації в рамках цього режиму.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ backgroundColor: "#F8FAFC", padding: "6rem 0" }}
    >
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Header */}
          <div data-reveal style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: "rgba(15,23,42,0.06)",
                border: "1px solid rgba(15,23,42,0.12)",
                borderRadius: "100px",
                color: "#334155",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "Lato, sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              FAQ
            </span>
            <h2
              style={{
                fontFamily: "EB Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#0F172A",
                marginBottom: "1rem",
              }}
            >
              Часті запитання
            </h2>
            <p
              style={{
                color: "#475569",
                fontSize: "1rem",
                fontFamily: "Lato, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Якщо ваше питання не знайшло відповіді — напишіть нам напряму.
            </p>
          </div>

          {/* Accordion */}
          <div data-stagger style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: `1px solid ${isOpen ? "#CBD5E1" : "#E2E8F0"}`,
                    borderRadius: "14px",
                    overflow: "hidden",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxShadow: isOpen ? "0 4px 20px rgba(15,23,42,0.07)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1.375rem 1.5rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontFamily: "EB Garamond, Georgia, serif",
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: "#0F172A",
                        lineHeight: 1.3,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        display: "flex",
                      }}
                    >
                      <ChevronDown size={20} color={isOpen ? "#0369A1" : "#94A3B8"} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 1.5rem 1.375rem",
                      }}
                    >
                      <p
                        style={{
                          color: "#475569",
                          fontSize: "0.9rem",
                          fontFamily: "Lato, sans-serif",
                          lineHeight: 1.7,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
