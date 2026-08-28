import { useEffect, useRef } from "react";

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
 * This is purely decorative and has no effect on any page's content.
 */
export function SparkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);

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

      const speed = Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py);
      const count = Math.min(6, 1 + Math.floor(speed / 9));
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spread = 2 + Math.random() * 12;
        sparks.push({
          x: pointer.x + Math.cos(angle) * spread * 0.4,
          y: pointer.y + Math.sin(angle) * spread * 0.4,
          vx: Math.cos(angle) * (0.2 + Math.random() * 1.1) + (pointer.x - pointer.px) * 0.05,
          vy: Math.sin(angle) * (0.2 + Math.random() * 1.1) + (pointer.y - pointer.py) * 0.05 - 0.25,
          life: 0,
          maxLife: 45 + Math.random() * 45,
          size: 0.7 + Math.random() * 1.9,
          hue: 200 + Math.random() * 45,
        });
      }
      if (sparks.length > 320) sparks.splice(0, sparks.length - 320);
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
        aura.style.transform = `translate3d(${eased.x - 300}px, ${eased.y - 300}px, 0)`;
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
        s.vx *= 0.965;
        s.vy = s.vy * 0.965 - 0.006;

        const t = 1 - s.life / s.maxLife;
        const alpha = t * t * 0.75;
        const r = s.size * (0.4 + t);
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 6);
        grad.addColorStop(0, `hsla(${s.hue}, 92%, 62%, ${alpha})`);
        grad.addColorStop(1, `hsla(${s.hue}, 92%, 62%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${s.hue}, 95%, 72%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * 0.6, 0, Math.PI * 2);
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
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div
        ref={auraRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-0 blur-3xl transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(29,95,209,0.30) 0%, rgba(56,189,248,0.20) 42%, transparent 70%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
