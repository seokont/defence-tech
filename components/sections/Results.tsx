"use client";
import { CheckCircle } from "lucide-react";

const results = [
  {
    title: "Персональна карта фінансування",
    desc: "Конкретний перелік програм, що підходять вашій компанії з урахуванням стадії, технології та структури.",
  },
  {
    title: "Пріоритизовані програми",
    desc: "Scoring matrix — які програми подавати першими, що має найвищий шанс успіху та найменші ризики.",
  },
  {
    title: "Список дедлайнів і вікон подачі",
    desc: "Повний календар дедлайнів по всіх актуальних програмах з нагадуваннями та подіями.",
  },
  {
    title: "Перелік необхідних документів",
    desc: "Точний список того, що потрібно підготувати для кожної програми — без зайвого.",
  },
  {
    title: "Рекомендації щодо структури",
    desc: "Чи потрібна EU / UK / US entity, Defence City, або достатньо поточної структури — обґрунтована відповідь.",
  },
  {
    title: "Investor-ready матеріали",
    desc: "Pitch deck, financial model, investor memo та executive summary, адаптовані під конкретну аудиторію.",
  },
  {
    title: "Готовий data room",
    desc: "Структурований пакет документів, що відповідає стандартам VC due diligence та грантових перевірок.",
  },
  {
    title: "Зниження ризику помилкової подачі",
    desc: "Ми перевіряємо відповідність вимогам до того, як компанія витратить ресурси на підготовку.",
  },
  {
    title: "Економія часу команди",
    desc: "Замість місяців самостійного дослідження — структурований результат за тижні.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="section"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
        >
          {/* Header */}
          <div data-reveal style={{ textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: "rgba(5,150,105,0.08)",
                border: "1px solid rgba(5,150,105,0.25)",
                borderRadius: "100px",
                color: "#059669",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "Lato, sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Що отримує клієнт
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
              Конкретний результат, а не загальні поради
            </h2>
            <p
              style={{
                color: "#475569",
                fontSize: "1rem",
                maxWidth: "540px",
                margin: "0 auto",
                fontFamily: "Lato, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Кожен наш проєкт завершується набором матеріалів, якими команда може одразу користуватися.
            </p>
          </div>

          {/* Results grid */}
          <div
            data-stagger
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
              gap: "1rem",
            }}
          >
            {results.map((r) => (
              <div
                key={r.title}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "0.875rem",
                  transition: "box-shadow 0.25s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(15,23,42,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <CheckCircle
                  size={20}
                  color="#059669"
                  style={{ flexShrink: 0, marginTop: "0.15rem" }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "EB Garamond, Georgia, serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#0F172A",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      color: "#475569",
                      fontSize: "0.85rem",
                      fontFamily: "Lato, sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
