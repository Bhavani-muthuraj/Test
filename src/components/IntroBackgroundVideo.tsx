import { useEffect, useRef } from "react";

/**
 * Animated background video effect for Intro page
 * Creates a flowing, professional animated background with tech patterns
 */
export function IntroBackgroundVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationTime = 0;

    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    const drawFlowingBackground = () => {
      // Clear with gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#f5f9fc");
      gradient.addColorStop(0.5, "#eef6fc");
      gradient.addColorStop(1, "#e8f0fb");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw flowing wave patterns
      ctx.strokeStyle = "rgba(29, 95, 209, 0.15)";
      ctx.lineWidth = 2;

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const y =
            height * 0.3 +
            Math.sin((x * 0.01 + animationTime * 0.005 + i) * 0.5) * 40 +
            Math.cos((x * 0.005 + animationTime * 0.003) * 0.3) * 30 +
            i * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw floating orbs
      ctx.fillStyle = "rgba(59, 130, 246, 0.08)";
      for (let i = 0; i < 8; i++) {
        const x =
          width * 0.2 +
          Math.sin(animationTime * 0.0005 + i) * width * 0.3 +
          i * (width * 0.1);
        const y =
          height * 0.3 +
          Math.cos(animationTime * 0.0003 + i) * height * 0.2 +
          i * 20;
        const size = 60 + Math.sin(animationTime * 0.001 + i) * 40;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw animated grid pattern
      ctx.strokeStyle = "rgba(102, 126, 234, 0.12)";
      ctx.lineWidth = 1;
      const gridSize = 80 + Math.sin(animationTime * 0.0003) * 20;

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const offset =
            Math.sin((x + animationTime * 0.1) * 0.01) *
            Math.cos((y + animationTime * 0.1) * 0.01) *
            10;
          ctx.strokeRect(x + offset, y + offset, gridSize * 0.8, gridSize * 0.8);
        }
      }

      // Draw connecting lines between orbs
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        const x1 =
          width * 0.2 +
          Math.sin(animationTime * 0.0005 + i) * width * 0.3 +
          i * (width * 0.1);
        const y1 =
          height * 0.3 +
          Math.cos(animationTime * 0.0003 + i) * height * 0.2 +
          i * 20;

        const nextI = (i + 1) % 8;
        const x2 =
          width * 0.2 +
          Math.sin(animationTime * 0.0005 + nextI) * width * 0.3 +
          nextI * (width * 0.1);
        const y2 =
          height * 0.3 +
          Math.cos(animationTime * 0.0003 + nextI) * height * 0.2 +
          nextI * 20;

        const distance = Math.hypot(x2 - x1, y2 - y1);
        if (distance < 300) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      animationTime += 1;
      requestAnimationFrame(drawFlowingBackground);
    };

    drawFlowingBackground();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
