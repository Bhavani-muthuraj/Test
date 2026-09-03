import { useEffect, useRef, useState } from "react";

/**
 * Product Training background - shows gears and mechanical elements
 */
export function ProductBackgroundImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient - pink/warm theme
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fdf5f8");
    gradient.addColorStop(0.5, "#fef0f5");
    gradient.addColorStop(1, "#fed7e2");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw gears
    const drawGear = (x: number, y: number, radius: number, teeth: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`;
      ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 1.2})`;
      ctx.lineWidth = 2;

      // Outer circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Teeth
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        ctx.save();
        ctx.rotate(angle);
        ctx.fillRect(-radius * 0.15, radius * 0.7, radius * 0.3, radius * 0.3);
        ctx.restore();
      }

      // Center hole
      ctx.fillStyle = `rgba(255, 255, 255, 0.3)`;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Draw multiple gears
    drawGear(1100, 200, 80, 12, 0.15);
    drawGear(1200, 350, 60, 10, 0.12);
    drawGear(950, 600, 100, 14, 0.13);
    drawGear(1150, 750, 70, 11, 0.11);

    // Draw circuit-like lines connecting gears
    ctx.strokeStyle = "rgba(236, 72, 153, 0.1)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(1100, 280);
    ctx.lineTo(1200, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1100, 280);
    ctx.lineTo(950, 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1150, 750);
    ctx.lineTo(1100, 280);
    ctx.stroke();

    // Draw some technical circles
    for (let i = 0; i < 3; i++) {
      const x = 950 + i * 150;
      const y = 150 + i * 100;
      ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 - i * 0.02})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, 30 + i * 15, 0, Math.PI * 2);
      ctx.stroke();
    }

    const dataURL = canvas.toDataURL("image/png");
    setBackgroundImage(dataURL);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed right-0 top-1/2 transform -translate-y-1/2 pointer-events-none z-5"
      style={{
        width: "600px",
        height: "600px",
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.9,
      }}
    />
  );
}
