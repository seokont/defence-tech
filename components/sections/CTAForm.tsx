"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const stages = [
  "Ідея / Pre-seed",
  "MVP / R&D",
  "Пілот / перші продажі",
  "Серійне виробництво",
  "Scale-up / зростання",
];

const activities = [
  "БПЛА / дрони",
  "РЕБ / EW системи",
  "AI / autonomous systems",
  "Кібербезпека / ISR",
  "Сенсори / компоненти",
  "Ракетні технології",
  "Розмінування / SHORAD",
  "Dual-use / Civil-military",
  "Інше",
];

export default function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    activity: "",
    stage: "",
    validation: "",
    contact: "",
    comment: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("server");
      setSubmitted(true);
    } catch {
      setError("Не вдалося надіслати заявку. Спробуйте ще раз або напишіть нам напряму.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "10px",
    color: "#FFFFFF",
    fontSize: "0.9rem",
    fontFamily: "Lato, sans-serif",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "rgba(255,255,255,0.6)",
    fontFamily: "Lato, sans-serif",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(160deg, #0C1A30 0%, #0F172A 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-6rem",
          right: "-6rem",
          width: "32rem",
          height: "32rem",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Header */}
          <div data-reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              Почати роботу
            </span>
            <h2
              style={{
                fontFamily: "EB Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Отримайте персональну карту фінансування
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem",
                fontFamily: "Lato, sans-serif",
                lineHeight: 1.7,
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              Заповніть форму — ми зв'яжемося з вами протягом одного робочого дня та запропонуємо формат першого кроку.
            </p>
          </div>

          {/* Form card */}
          <div
            data-reveal
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "20px",
              padding: "2.5rem",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <CheckCircle size={56} color="#059669" style={{ margin: "0 auto 1.5rem" }} />
                <h3
                  style={{
                    fontFamily: "EB Garamond, Georgia, serif",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                  }}
                >
                  Заявку отримано
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.95rem",
                    fontFamily: "Lato, sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  Дякуємо. Ми зв'яжемося з вами протягом одного робочого дня.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      Ім'я *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ваше ім'я"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                      }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" style={labelStyle}>
                      Компанія *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Назва компанії"
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {/* Activity */}
                  <div>
                    <label htmlFor="activity" style={labelStyle}>
                      Сфера діяльності *
                    </label>
                    <select
                      id="activity"
                      name="activity"
                      required
                      value={form.activity}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                      }}
                    >
                      <option value="" style={{ background: "#1E293B" }}>
                        Оберіть напрям
                      </option>
                      {activities.map((a) => (
                        <option key={a} value={a} style={{ background: "#1E293B" }}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Stage */}
                  <div>
                    <label htmlFor="stage" style={labelStyle}>
                      Стадія проєкту *
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      required
                      value={form.stage}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                      }}
                    >
                      <option value="" style={{ background: "#1E293B" }}>
                        Оберіть стадію
                      </option>
                      {stages.map((s) => (
                        <option key={s} value={s} style={{ background: "#1E293B" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Validation */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label htmlFor="validation" style={labelStyle}>
                    Наявність Brave1 / МО / Сили оборони validation
                  </label>
                  <input
                    id="validation"
                    name="validation"
                    type="text"
                    placeholder="Є Brave1 грант / є контракт з МО / є бойовий пілот / немає"
                    value={form.validation}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    }}
                  />
                </div>

                {/* Contact */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label htmlFor="contact" style={labelStyle}>
                    Email / Телефон / Telegram *
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    placeholder="email@company.ua або @telegram"
                    value={form.contact}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    }}
                  />
                </div>

                {/* Comment */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <label htmlFor="comment" style={labelStyle}>
                    Коментар / що шукаєте
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    placeholder="Опишіть коротко вашу компанію та що саме вас цікавить: гранти, інвестиції, структура, конкретна програма тощо"
                    value={form.comment}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.6)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    }}
                  />
                </div>

                {/* Error */}
                {error && (
                  <p style={{
                    marginBottom: "1rem",
                    padding: "0.75rem 1rem",
                    background: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: "8px",
                    color: "#FCA5A5",
                    fontSize: "0.875rem",
                    fontFamily: "Lato, sans-serif",
                  }}>
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "1rem 2rem",
                    background: loading
                      ? "rgba(201,168,76,0.5)"
                      : "linear-gradient(135deg, #C9A84C, #E8C97A)",
                    color: "#0F172A",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    borderRadius: "10px",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.625rem",
                    transition: "opacity 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) (e.currentTarget as HTMLElement).style.opacity = "0.88";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                >
                  <Send size={18} style={{ animation: loading ? "spin 1s linear infinite" : "none" }} />
                  {loading ? "Надсилання..." : "Надіслати заявку"}
                </button>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "Lato, sans-serif",
                    marginTop: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  Ваші дані конфіденційні. Ми відповідаємо протягом одного робочого дня.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
