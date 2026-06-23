"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, FileSearch } from "lucide-react";

const stats = [
  { value: "30–60", label: "потенційних джерел фінансування на компанію" },
  { value: "$49.1B", label: "залучено у глобальний defence-tech у 2025" },
  { value: "1 500+", label: "компаній у екосистемі Brave1" },
  { value: "€8.7B", label: "European defence-tech інвестиції 2025" },
];

const GOLD = [201, 168, 76] as const;
const TEAL = [0, 180, 216] as const;
const BLUE = [99, 155, 255] as const;
const PALETTES = [GOLD, GOLD, GOLD, TEAL, TEAL, BLUE];

type RGB = readonly [number, number, number];
type Particle = {
  x: number; y: number; vx: number; vy: number;
  bvx: number; bvy: number; // base velocity particles return to
  r: number; rgb: RGB; glow: boolean;
  phase: number; speed: number;
};

function useParticles(ref: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let particles: Particle[] = [];

    const spawn = (): Particle => {
      const bvx = (Math.random() - 0.5) * 0.4;
      const bvy = (Math.random() - 0.5) * 0.4;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: bvx, vy: bvy, bvx, bvy,
        r: Math.random() * 1.3 + 0.5,
        rgb: PALETTES[Math.floor(Math.random() * PALETTES.length)],
        glow: Math.random() < 0.22,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.4,
      };
    };

    const init = () => {
      const count = Math.min(90, Math.max(40, Math.floor((W * H) / 11000)));
      particles = Array.from({ length: count }, spawn);
    };
    init();

    let mx = -9999, my = -9999;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => { mx = -9999; my = -9999; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const MAX_DIST = 155;
    const REPEL_R = 90;
    let t = 0;
    let raf: number;

    const frame = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        // mouse repulsion
        const dx = p.x - mx, dy = p.y - my;
        const md = Math.hypot(dx, dy);
        if (md < REPEL_R && md > 1) {
          const f = ((REPEL_R - md) / REPEL_R) * 0.07;
          p.vx += (dx / md) * f;
          p.vy += (dy / md) * f;
        }
        // drift back to base velocity — keeps particles always moving
        p.vx += (p.bvx - p.vx) * 0.018;
        p.vy += (p.bvy - p.vy) * 0.018;
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.22;
            const r = (a.rgb[0] + b.rgb[0]) >> 1;
            const g = (a.rgb[1] + b.rgb[1]) >> 1;
            const bl = (a.rgb[2] + b.rgb[2]) >> 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      // particles
      for (const p of particles) {
        const pulse = p.glow ? Math.sin(t * 0.025 * p.speed + p.phase) * 0.35 + 0.65 : 1;
        const [r, g, b] = p.rgb;

        if (p.glow) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 7);
          grd.addColorStop(0, `rgba(${r},${g},${b},${0.18 * pulse})`);
          grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.glow ? p.r * 1.6 : p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.65 * pulse})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef);

  return (
    <section
      style={{
        minHeight: "100dvh",
        background: "#0F172A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Ambient color blobs */}
      <style>{`
        @keyframes hblob1{0%,100%{transform:translate(0,0) scale(1)}40%{transform:translate(-70px,50px) scale(1.12)}75%{transform:translate(50px,-30px) scale(0.92)}}
        @keyframes hblob2{0%,100%{transform:translate(0,0) scale(1)}35%{transform:translate(90px,-70px) scale(1.08)}70%{transform:translate(-50px,60px) scale(0.95)}}
        @keyframes hblob3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-60px,-50px) scale(1.18)}}
        @media(prefers-reduced-motion:reduce){.hb{animation:none!important}}
      `}</style>

      <div className="hb" aria-hidden="true" style={{
        position:"absolute",top:"-10rem",right:"-8rem",width:"44rem",height:"40rem",
        background:"radial-gradient(ellipse,rgba(0,180,216,0.13) 0%,transparent 68%)",
        filter:"blur(55px)",animation:"hblob1 13s ease-in-out infinite",pointerEvents:"none",
      }}/>
      <div className="hb" aria-hidden="true" style={{
        position:"absolute",bottom:"-6rem",left:"-8rem",width:"38rem",height:"34rem",
        background:"radial-gradient(ellipse,rgba(201,168,76,0.11) 0%,transparent 65%)",
        filter:"blur(65px)",animation:"hblob2 16s ease-in-out infinite",pointerEvents:"none",
      }}/>
      <div className="hb" aria-hidden="true" style={{
        position:"absolute",top:"30%",left:"45%",width:"32rem",height:"28rem",
        background:"radial-gradient(ellipse,rgba(99,102,241,0.09) 0%,transparent 70%)",
        filter:"blur(80px)",animation:"hblob3 11s ease-in-out infinite",pointerEvents:"none",
      }}/>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      />

      {/* Gold grid */}
      <div aria-hidden="true" style={{
        position:"absolute",inset:0,
        backgroundImage:"linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)",
        backgroundSize:"60px 60px",pointerEvents:"none",
      }}/>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <span style={{
            display:"inline-flex",alignItems:"center",gap:"0.5rem",
            padding:"0.375rem 1rem",
            border:"1px solid rgba(201,168,76,0.45)",borderRadius:"100px",
            color:"#C9A84C",fontSize:"0.8rem",fontFamily:"Lato, sans-serif",
            letterSpacing:"0.08em",textTransform:"uppercase",
            background:"rgba(201,168,76,0.07)",backdropFilter:"blur(8px)",
          }}>
            <span style={{
              width:"6px",height:"6px",borderRadius:"50%",
              background:"#C9A84C",display:"inline-block",
              boxShadow:"0 0 6px #C9A84C",
            }}/>
            UKRLAW — Юридично-фінансовий консалтинг
          </span>
        </div>

        <h1 style={{
          fontFamily:"EB Garamond, Georgia, serif",
          fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:600,
          color:"#FFFFFF",lineHeight:1.15,maxWidth:"820px",
          marginBottom:"1.5rem",textShadow:"0 4px 32px rgba(0,0,0,0.5)",
        }}>
          Залучайте гранти, інвестиції та міжнародний капітал для{" "}
          <span style={{ color:"#C9A84C", fontStyle:"italic" }}>defence-tech</span> і dual-use проєктів
        </h1>

        <p style={{
          fontSize:"clamp(1rem, 2vw, 1.2rem)",color:"rgba(255,255,255,0.75)",
          maxWidth:"640px",marginBottom:"2.5rem",
          fontFamily:"Lato, sans-serif",lineHeight:1.7,
          textShadow:"0 2px 16px rgba(0,0,0,0.4)",
        }}>
          Допомагаємо українським технологічним компаніям знайти правильні програми фінансування, підготувати документи та структурувати вихід на EU / UK / US капітал.
        </p>

        <div className="hero-ctas" style={{ display:"flex", flexWrap:"wrap", gap:"1rem", marginBottom:"4rem" }}>
          <a
            href="#contact"
            style={{
              display:"inline-flex",alignItems:"center",gap:"0.5rem",
              padding:"1rem 2rem",
              background:"linear-gradient(135deg, #C9A84C, #E8C97A)",
              color:"#0F172A",fontFamily:"Lato, sans-serif",fontWeight:700,
              fontSize:"1rem",borderRadius:"10px",textDecoration:"none",
              transition:"transform 0.15s, box-shadow 0.2s",cursor:"pointer",
              boxShadow:"0 4px 20px rgba(201,168,76,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(201,168,76,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.3)";
            }}
          >
            Отримати консультацію
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            style={{
              display:"inline-flex",alignItems:"center",gap:"0.5rem",
              padding:"1rem 2rem",
              background:"rgba(255,255,255,0.06)",
              border:"1px solid rgba(255,255,255,0.22)",
              color:"#FFFFFF",fontFamily:"Lato, sans-serif",fontWeight:400,
              fontSize:"1rem",borderRadius:"10px",textDecoration:"none",
              transition:"border-color 0.2s, background 0.2s",cursor:"pointer",
              backdropFilter:"blur(6px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.55)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,168,76,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.06)";
            }}
          >
            <FileSearch size={18} />
            Замовити Investment Mapping
          </a>
        </div>

        <div
          className="hero-stats"
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",
            gap:"1.5rem",paddingTop:"2.5rem",
            borderTop:"1px solid rgba(255,255,255,0.1)",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.value}>
              <div style={{
                fontFamily:"EB Garamond, Georgia, serif",
                fontSize:"clamp(1.75rem, 3vw, 2.5rem)",fontWeight:700,
                color:"#C9A84C",lineHeight:1,marginBottom:"0.375rem",
                textShadow:"0 0 24px rgba(201,168,76,0.3)",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize:"0.8rem",color:"rgba(255,255,255,0.55)",
                fontFamily:"Lato, sans-serif",lineHeight:1.4,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
