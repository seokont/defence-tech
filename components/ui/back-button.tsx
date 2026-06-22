"use client";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <a
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.875rem 1.75rem",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "rgba(255,255,255,0.85)",
        fontFamily: "Lato, sans-serif",
        fontSize: "0.925rem",
        fontWeight: 400,
        borderRadius: "10px",
        textDecoration: "none",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.45)";
        (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
      }}
    >
      <ArrowLeft size={17} />
      Повернутися на головну
    </a>
  );
}
