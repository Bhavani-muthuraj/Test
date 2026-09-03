import { useEffect, useRef, useState } from "react";

/**
 * Knowledge Base background - shows books and documents
 */
export function KnowledgeBackgroundImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient - purple theme
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f5f3f9");
    gradient.addColorStop(0.5, "#f0ebf8");
    gradient.addColorStop(1, "#ede9f6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw stack of books
    const drawBook = (x: number, y: number, width: number, height: number, color: string, opacity: number) => {
      ctx.save();

      // Main book
      ctx.fillStyle = `${color}`;
      ctx.globalAlpha = opacity;
      ctx.fillRect(x, y, width, height);

      // Book spine (darker)
      ctx.fillStyle = color.replace(")", ", 0.8)").replace("rgba(", "rgba(");
      ctx.fillRect(x + width - 8, y, 8, height);

      // Pages detail
      ctx.strokeStyle = color.replace(")", ", 0.6)").replace("rgba(", "rgba(");
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(x + 5, y + 10 + i * 8);
        ctx.lineTo(x + width - 15, y + 10 + i * 8);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Stack of books on the right
    drawBook(1050, 200, 100, 140, "rgba(147, 51, 234, 0.2)", 0.8);
    drawBook(1080, 250, 100, 140, "rgba(147, 51, 234, 0.25)", 0.85);
    drawBook(1110, 300, 100, 140, "rgba(147, 51, 234, 0.3)", 0.9);

    // Another stack
    drawBook(950, 550, 90, 120, "rgba(147, 51, 234, 0.2)", 0.75);
    drawBook(975, 590, 90, 120, "rgba(147, 51, 234, 0.25)", 0.8);
    drawBook(1000, 630, 90, 120, "rgba(147, 51, 234, 0.3)", 0.85);

    // Draw documents/pages
    const drawDocument = (x: number, y: number, width: number, height: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      // Main page
      ctx.fillStyle = "rgba(147, 51, 234, 0.15)";
      ctx.fillRect(x, y, width, height);

      ctx.strokeStyle = "rgba(147, 51, 234, 0.35)";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      // Lines representing text
      ctx.strokeStyle = "rgba(147, 51, 234, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(x + 10, y + 20 + i * 15);
        ctx.lineTo(x + width - 10, y + 20 + i * 15);
        ctx.stroke();
      }

      ctx.restore();
    };

    drawDocument(1150, 450, 120, 100, 0.2);
    drawDocument(1050, 700, 100, 90, 0.18);

    // Draw a magnifying glass
    ctx.save();
    const mgX = 1200;
    const mgY = 200;
    const mgRadius = 35;

    ctx.strokeStyle = "rgba(147, 51, 234, 0.25)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(mgX, mgY, mgRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Handle
    ctx.beginPath();
    ctx.moveTo(mgX + mgRadius * 0.7, mgY + mgRadius * 0.7);
    ctx.lineTo(mgX + mgRadius * 1.3, mgY + mgRadius * 1.3);
    ctx.stroke();

    ctx.restore();

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
