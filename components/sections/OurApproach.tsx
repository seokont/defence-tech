"use client";
const steps = [
  {
    num: "01",
    title: "Діагностика компанії",
    desc: "Аналізуємо технологію, стадію розвитку, traction, структуру власності, наявність контрактів або пілотів із Силами оборони. Оцінюємо поточну готовність до різних програм фінансування.",
    outputs: ["Профіль компанії", "Gap-аналіз", "Список питань для уточнення"],
  },
  {
    num: "02",
    title: "Scoring доступних програм",
    desc: "Аналізуємо 30–60 потенційних інструментів. Перевіряємо сумісність: які програми можна комбінувати, а які конфліктують між собою. Ранжуємо за пріоритетом та реалістичністю.",
    outputs: ["Scoring matrix", "Список сумісних програм", "Карта конфліктів"],
  },
  {
    num: "03",
    title: "Investment / Grant Roadmap",
    desc: "Готуємо дорожню карту фінансування на 12 місяців: які програми подавати зараз, які потребують підготовки, які дедлайни критичні, яка структура потрібна для кожного напряму.",
    outputs: ["Roadmap 12 місяців", "Список дедлайнів", "Рекомендована структура"],
  },
  {
    num: "04",
    title: "Підготовка документів",
    desc: "Готуємо або допомагаємо підготувати всі необхідні матеріали: від pitch deck і financial model до grant application і data room. Кожен документ адаптований під конкретну аудиторію.",
    outputs: ["Pitch deck", "Financial model", "Data room", "Grant applications"],
  },
  {
    num: "05",
    title: "Супровід подачі та переговорів",
    desc: "Супроводжуємо процес подачі в грантові програми, підготовку до переговорів з інвесторами та структурування партнерств. Допомагаємо пройти due diligence та питання compliance.",
    outputs: ["Супровід подачі", "Підготовка до investor meetings", "Структурування угод"],
  },
];

export default function OurApproach() {
  return (
    <section
      id="approach"
      className="section"
      style={{ backgroundColor: "#F8FAFC" }}
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
            Наш підхід
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
            Від діагностики до залучення капіталу — системно
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
            Ми будуємо pipeline фінансування, а не одну випадкову заявку. Кожен крок логічно пов'язаний із результатом.
          </p>
        </div>

        {/* Steps */}
        <div data-stagger style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "860px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="step-card"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "1.75rem",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "1.75rem 2rem",
                transition: "box-shadow 0.25s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(15,23,42,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
              }}
            >
              {/* Step number */}
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "12px",
                  background: i === 0 ? "#0F172A" : "#F1F5F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "EB Garamond, Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: i === 0 ? "#C9A84C" : "#94A3B8",
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "EB Garamond, Georgia, serif",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "#0F172A",
                    marginBottom: "0.625rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "0.9rem",
                    fontFamily: "Lato, sans-serif",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {step.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {step.outputs.map((o) => (
                    <span
                      key={o}
                      style={{
                        padding: "0.25rem 0.75rem",
                        background: "#F1F5F9",
                        borderRadius: "100px",
                        fontSize: "0.78rem",
                        color: "#334155",
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
