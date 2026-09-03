import { useEffect, useRef, useState } from "react";

/**
 * Architecture background - shows technical diagrams and connections
 */
export function ArchitectureBackgroundImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient - teal theme
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f0f9fc");
    gradient.addColorStop(0.5, "#e8f8fb");
    gradient.addColorStop(1, "#ccf0f5");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw system boxes
    const drawBox = (x: number, y: number, width: number, height: number, label: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      // Box
      ctx.fillStyle = "rgba(20, 184, 166, 0.1)";
      ctx.fillRect(x, y, width, height);

      ctx.strokeStyle = "rgba(20, 184, 166, 0.4)";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      // Label
      ctx.fillStyle = "rgba(20, 184, 166, 0.7)";
      ctx.font = "bold 12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(label, x + width / 2, y + height / 2 + 5);

      ctx.restore();
    };

    // Draw connected boxes (network diagram)
    drawBox(950, 150, 100, 70, "Server", 0.2);
    drawBox(1100, 150, 100, 70, "DB", 0.18);
    drawBox(1000, 280, 100, 70, "API", 0.19);
    drawBox(950, 400, 100, 70, "Cache", 0.17);
    drawBox(1100, 400, 100, 70, "Queue", 0.18);

    // Draw connection lines
    ctx.strokeStyle = "rgba(20, 184, 166, 0.2)";
    ctx.lineWidth = 2;

    // Server to DB
    ctx.beginPath();
    ctx.moveTo(1050, 150);
    ctx.lineTo(1100, 150);
    ctx.stroke();

    // Server to API
    ctx.beginPath();
    ctx.moveTo(1000, 220);
    ctx.lineTo(1050, 280);
    ctx.stroke();

    // DB to API
    ctx.beginPath();
    ctx.moveTo(1100, 220);
    ctx.lineTo(1050, 280);
    ctx.stroke();

    // API to Cache
    ctx.beginPath();
    ctx.moveTo(1000, 350);
    ctx.lineTo(1000, 400);
    ctx.stroke();

    // API to Queue
    ctx.beginPath();
    ctx.moveTo(1100, 350);
    ctx.lineTo(1100, 400);
    ctx.stroke();

    // Draw nodes (connection points)
    ctx.fillStyle = "rgba(20, 184, 166, 0.5)";
    const nodes = [
      { x: 1000, y: 150 },
      { x: 1100, y: 150 },
      { x: 1050, y: 280 },
      { x: 1000, y: 400 },
      { x: 1100, y: 400 },
    ];

    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw some data flow indicators
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = `rgba(20, 184, 166, ${0.3 - i * 0.1})`;
      ctx.beginPath();
      ctx.arc(1025 + i * 10, 200 + i * 10, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw circular network nodes
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = `rgba(20, 184, 166, ${0.15 - i * 0.04})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(1050, 600 + i * 60, 40 + i * 20, 0, Math.PI * 2);
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
