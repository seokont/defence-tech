"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, FileSearch } from "lucide-react";

/* ─── WebGL shader (from AetherHero) ─── */
const FRAG = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
#define FC gl_FragCoord.xy
#define R resolution
#define T time
#define MN min(R.x,R.y)
float pattern(vec2 uv) {
  float d=.0;
  for (float i=.0; i<3.; i++) {
    uv.x+=sin(T*(1.+i)+uv.y*1.5)*.2;
    d+=.005/abs(uv.x);
  }
  return d;
}
vec3 scene(vec2 uv) {
  vec3 col=vec3(0);
  uv=vec2(atan(uv.x,uv.y)*2./6.28318,-log(length(uv))+T);
  for (float i=.0; i<3.; i++) {
    int k=int(mod(i,3.));
    col[k]+=pattern(uv+i*6./MN);
  }
  return col;
}
void main() {
  vec2 uv=(FC-.5*R)/MN;
  vec3 col=vec3(0);
  float s=12., e=9e-4;
  col+=e/(sin(uv.x*s)*cos(uv.y*s));
  uv.y+=R.x>R.y?.5:.5*(R.y/R.x);
  col+=scene(uv);
  O=vec4(col,1.);
}`;

const VERT = `#version 300 es
precision highp float;
in vec2 position;
void main(){ gl_Position = vec4(position, 0.0, 1.0); }`;

/* ─── Stats data ─── */
const stats = [
  { value: "30–60", label: "потенційних джерел фінансування на компанію" },
  { value: "$49.1B", label: "залучено у глобальний defence-tech у 2025" },
  { value: "1 500+", label: "компаній у екосистемі Brave1" },
  { value: "€8.7B", label: "European defence-tech інвестиції 2025" },
];

/* ─── Shader canvas hook ─── */
function useAetherCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { alpha: false, antialias: false });
    if (!gl) return;

    const compile = (src: string, type: number) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };

    const v = compile(VERT, gl.VERTEX_SHADER);
    const f = compile(FRAG, gl.FRAGMENT_SHADER);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, v);
    gl.attachShader(prog, f);
    gl.linkProgram(prog);
    gl.deleteShader(v);
    gl.deleteShader(f);

    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    gl.useProgram(prog);
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "time");
    const uRes = gl.getUniformLocation(prog, "resolution");

    gl.clearColor(0.06, 0.09, 0.16, 1);

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      const W = Math.floor(r.width * dpr);
      const H = Math.floor(r.height * dpr);
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
      }
      gl.viewport(0, 0, W, H);
    };
    fit();

    const ro = new ResizeObserver(fit);
    ro.observe(canvas);

    let raf: number;
    const loop = (t: number) => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 1e-3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
    };
  }, [canvasRef]);
}

/* ─── Hero section ─── */
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useAetherCanvas(canvasRef);

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
      {/* ── Aether WebGL canvas background ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          userSelect: "none",
          touchAction: "none",
          opacity: 0.55,
        }}
      />

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.45) 50%, rgba(12,26,48,0.7) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Gold grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Gold glow top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10rem",
          right: "-10rem",
          width: "40rem",
          height: "40rem",
          background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Trust badge */}
        <div style={{ marginBottom: "1.75rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1rem",
              border: "1px solid rgba(201,168,76,0.45)",
              borderRadius: "100px",
              color: "#C9A84C",
              fontSize: "0.8rem",
              fontFamily: "Lato, sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "rgba(201,168,76,0.07)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#C9A84C",
                display: "inline-block",
                boxShadow: "0 0 6px #C9A84C",
              }}
            />
            UKRLAW — Юридично-фінансовий консалтинг
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "EB Garamond, Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.15,
            maxWidth: "820px",
            marginBottom: "1.5rem",
            textShadow: "0 4px 32px rgba(0,0,0,0.5)",
          }}
        >
          Залучайте гранти, інвестиції та міжнародний капітал для{" "}
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>defence-tech</span> і dual-use проєктів
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "640px",
            marginBottom: "2.5rem",
            fontFamily: "Lato, sans-serif",
            lineHeight: 1.7,
            textShadow: "0 2px 16px rgba(0,0,0,0.4)",
          }}
        >
          Допомагаємо українським технологічним компаніям знайти правильні програми фінансування, підготувати документи та структурувати вихід на EU / UK / US капітал.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
              color: "#0F172A",
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "transform 0.15s, box-shadow 0.2s",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
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
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "#FFFFFF",
              fontFamily: "Lato, sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
              cursor: "pointer",
              backdropFilter: "blur(6px)",
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

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.value}>
              <div
                style={{
                  fontFamily: "EB Garamond, Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#C9A84C",
                  lineHeight: 1,
                  marginBottom: "0.375rem",
                  textShadow: "0 0 24px rgba(201,168,76,0.3)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "Lato, sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
