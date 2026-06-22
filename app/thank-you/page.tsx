import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/ui/back-button";
import { Clock, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Дякуємо — UKRLAW",
  description: "Вашу заявку отримано. Ми зв'яжемося з вами протягом одного робочого дня.",
};

const steps = [
  {
    num: "01",
    title: "Отримуємо заявку",
    desc: "Ваша анкета вже у нас. Ми фіксуємо всі деталі та призначаємо відповідального менеджера.",
  },
  {
    num: "02",
    title: "Попередній аналіз",
    desc: "Протягом одного робочого дня ми проводимо попередній аналіз вашої компанії та готуємо питання для уточнення.",
  },
  {
    num: "03",
    title: "Перший контакт",
    desc: "Зв'яжемося з вами через вказаний контакт — запропонуємо формат і час першої зустрічі.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100dvh",
          background: "linear-gradient(160deg, #0C1A30 0%, #0F172A 60%, #060E1B 100%)",
          display: "flex",
          flexDirection: "column",
          paddingTop: "5rem",
        }}
      >
        {/* Gold grid */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "36rem",
            height: "36rem",
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, flex: 1 }}>
          {/* Hero block */}
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              paddingTop: "4rem",
              paddingBottom: "4rem",
              textAlign: "center",
            }}
          >
            {/* Animated checkmark */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.08))",
                border: "2px solid rgba(201,168,76,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
                boxShadow: "0 0 40px rgba(201,168,76,0.15)",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 18L15 26L29 10"
                  stroke="#C9A84C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Badge */}
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.35)",
                borderRadius: "100px",
                color: "#C9A84C",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "Lato, sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Заявку отримано
            </span>

            <h1
              style={{
                fontFamily: "EB Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Дякуємо за звернення
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                fontFamily: "Lato, sans-serif",
                lineHeight: 1.75,
                maxWidth: "520px",
                margin: "0 auto 3rem",
              }}
            >
              Ми отримали вашу анкету і вже розпочинаємо попередній аналіз. Очікуйте на зв'язок протягом{" "}
              <span style={{ color: "#C9A84C", fontWeight: 700 }}>одного робочого дня</span>.
            </p>

            {/* Steps */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "3rem",
                textAlign: "left",
              }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                    padding: "1.25rem 1.5rem",
                    animation: `fadeInUp 0.5s ease-out ${i * 0.1 + 0.2}s both`,
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "10px",
                      background: i === 0 ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.05)",
                      border: i === 0 ? "1px solid rgba(201,168,76,0.35)" : "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "EB Garamond, Georgia, serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: i === 0 ? "#C9A84C" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "EB Garamond, Georgia, serif",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {step.title}
                    </div>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.875rem",
                        fontFamily: "Lato, sans-serif",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "14px",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.85rem",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <Clock size={15} color="#C9A84C" />
                <span>Відповідаємо у робочі дні</span>
              </div>
              <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
              <a
                href="tel:+380679177889"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#C9A84C",
                  fontSize: "0.85rem",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <PhoneCall size={15} />
                +380 67 917 7889
              </a>
            </div>

            {/* CTA back */}
            <BackButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
