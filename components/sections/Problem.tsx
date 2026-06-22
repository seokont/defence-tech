"use client";
import { AlertTriangle, Clock, FileX, GitBranch, Lock, Map } from "lucide-react";

const problems = [
  {
    icon: Map,
    title: "Немає карти фінансування",
    description:
      "30–60 потенційних інструментів на одну компанію. Частина сумісна, частина конфліктує. Без систематизованого аналізу — рух наосліп.",
  },
  {
    icon: FileX,
    title: "Відсутні готові матеріали",
    description:
      "Гранти та інвестори вимагають pitch deck, financial model, data room, IP-аудит. Більшість компаній не готові до першого дзвінка.",
  },
  {
    icon: GitBranch,
    title: "Неправильна програма або напрям",
    description:
      "Кожна програма має специфічні критерії: технологія, стадія, структура власності, юрисдикція. Неправильна подача — витрачений час і ресурси.",
  },
  {
    icon: Lock,
    title: "Ризики структури та compliance",
    description:
      "Вимоги щодо структури власності, IP, export control (ITAR/EAR), FOCI, CFC та санкційних ризиків можуть заблокувати участь у міжнародних програмах.",
  },
  {
    icon: AlertTriangle,
    title: "Незрозумілість EU / UK / US структури",
    description:
      "Багато програм вимагають наявності юридичної особи в ЄС, Великій Британії або США. Відсутність правильної структури закриває доступ до цілих каналів капіталу.",
  },
  {
    icon: Clock,
    title: "Ризик втратити дедлайни",
    description:
      "EDIP, EDF, EIC, NATO DIANA — кожна програма має конкретні вікна подачі. Пропуск дедлайну означає очікування наступного циклу або повну втрату можливості.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="section"
      style={{
        backgroundColor: "#F8FAFC",
      }}
    >
      <div className="container">
        <div data-reveal style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.875rem",
              background: "rgba(220,38,38,0.08)",
              border: "1px solid rgba(220,38,38,0.2)",
              borderRadius: "100px",
              color: "#DC2626",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "Lato, sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Ключова проблема
          </span>
          <h2
            style={{
              fontFamily: "EB Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#0F172A",
              maxWidth: "680px",
              margin: "0 auto 1rem",
              lineHeight: 1.2,
            }}
          >
            Фінансування є. Але доступ до нього — складний.
          </h2>
          <p
            style={{
              color: "#475569",
              fontSize: "1.05rem",
              maxWidth: "560px",
              margin: "0 auto",
              fontFamily: "Lato, sans-serif",
              lineHeight: 1.7,
            }}
          >
            Без персональної карти фінансування компанія може втратити час, дедлайни та реальний доступ до капіталу.
          </p>
        </div>

        {/* Bento-style problem grid */}
        <div
          data-stagger
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "1.25rem",
          }}
        >
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  transition: "box-shadow 0.25s, transform 0.2s, border-color 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(15,23,42,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#CBD5E1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "10px",
                      background: "rgba(220,38,38,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    <Icon size={20} color="#DC2626" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "EB Garamond, Georgia, serif",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#0F172A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "0.9rem",
                        fontFamily: "Lato, sans-serif",
                        lineHeight: 1.6,
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
