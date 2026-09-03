import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
};

/**
 * Interactive background: a soft brand-colored gradient aura follows the
 * pointer anywhere on the page and emits small "spark" particles.
 * Sparkle colors dynamically match the current page's theme.
 */
export function SparkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Get sparkle color range based on current page
  const getSparkleColors = () => {
    if (location.pathname === "/") return { hueBase: 210, hueRange: 40, auraColor: "rgba(59,130,246,0.5)" }; // Blue
    if (location.pathname === "/product-training") return { hueBase: 345, hueRange: 30, auraColor: "rgba(236,72,153,0.5)" }; // Pink
    if (location.pathname.includes("/training-videos")) return { hueBase: 38, hueRange: 20, auraColor: "rgba(245,158,11,0.5)" }; // Amber
    if (location.pathname === "/knowledge") return { hueBase: 270, hueRange: 30, auraColor: "rgba(147,51,234,0.5)" }; // Purple
    if (location.pathname === "/architecture") return { hueBase: 180, hueRange: 30, auraColor: "rgba(20,184,166,0.5)" }; // Teal
    if (location.pathname === "/confluence") return { hueBase: 25, hueRange: 25, auraColor: "rgba(249,115,22,0.5)" }; // Orange
    if (location.pathname === "/community") return { hueBase: 160, hueRange: 25, auraColor: "rgba(34,197,94,0.5)" }; // Green
    if (location.pathname === "/chatbot") return { hueBase: 240, hueRange: 40, auraColor: "rgba(99,102,241,0.5)" }; // Indigo
    if (location.pathname === "/old-videos") return { hueBase: 210, hueRange: 40, auraColor: "rgba(59,130,246,0.5)" }; // Blue
    return { hueBase: 210, hueRange: 40, auraColor: "rgba(59,130,246,0.5)" }; // Default Blue
  };

  const { hueBase, hueRange, auraColor } = getSparkleColors();

  useEffect(() => {
    const canvas = canvasRef.current;
    const aura = auraRef.current;
    if (!canvas || !aura) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const sparks: Spark[] = [];
    const pointer = { x: -9999, y: -9999, px: -9999, py: -9999, active: false };
    const eased = { x: -9999, y: -9999 };
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: PointerEvent) => {
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      if (!pointer.active) {
        pointer.px = pointer.x;
        pointer.py = pointer.y;
        eased.x = pointer.x;
        eased.y = pointer.y;
        pointer.active = true;
      }
      if (reduced) return;

      // Generate more visible sparks
      const speed = Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py);
      const count = Math.min(20, 3 + Math.floor(speed / 3)); // More particles
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spread = 2 + Math.random() * 15;
        sparks.push({
          x: pointer.x + Math.cos(angle) * spread * 0.5,
          y: pointer.y + Math.sin(angle) * spread * 0.5,
          vx: Math.cos(angle) * (0.3 + Math.random() * 1.5) + (pointer.x - pointer.px) * 0.08,
          vy: Math.sin(angle) * (0.3 + Math.random() * 1.5) + (pointer.y - pointer.py) * 0.08 - 0.3,
          life: 0,
          maxLife: 50 + Math.random() * 50,
          size: 1 + Math.random() * 2.5,
          hue: hueBase + (Math.random() - 0.5) * hueRange, // Dynamic hue based on page
        });
      }
      if (sparks.length > 600) sparks.splice(0, sparks.length - 600);
    };

    const onLeave = () => {
      pointer.active = false;
      aura.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, width, height);

      if (pointer.active) {
        eased.x += (pointer.x - eased.x) * 0.12;
        eased.y += (pointer.y - eased.y) * 0.12;
        aura.style.opacity = "1";
        aura.style.transform = `translate3d(${eased.x - 350}px, ${eased.y - 350}px, 0) scale(1.3)`;
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        if (!s) continue;
        s.life += 1;
        if (s.life > s.maxLife) {
          sparks.splice(i, 1);
          continue;
        }
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.96;
        s.vy = s.vy * 0.96 - 0.008;

        const t = 1 - s.life / s.maxLife;
        const alpha = Math.pow(t, 1.5) * 1.0; // Better fading curve
        const r = s.size * (0.5 + t * 0.8);

        // Draw outer glow
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 8);
        grad.addColorStop(0, `hsla(${s.hue}, 100%, 75%, ${alpha * 0.6})`);
        grad.addColorStop(0.5, `hsla(${s.hue}, 95%, 70%, ${alpha * 0.3})`);
        grad.addColorStop(1, `hsla(${s.hue}, 92%, 62%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright core
        ctx.fillStyle = `hsla(${s.hue}, 100%, 85%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Extra bright center point
        ctx.fillStyle = `hsla(${s.hue}, 100%, 95%, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [hueBase, hueRange]); // Re-run when colors change

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-visible">
      <div className="absolute inset-0 hero-gradient opacity-0" />
      <div
        ref={auraRef}
        className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full opacity-0 blur-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            `radial-gradient(circle, ${auraColor} 0%, ${auraColor.replace('0.5', '0.25')} 40%, transparent 85%)`,
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "brightness(1.2) contrast(1.1)" }} />
    </div>
  );
}
