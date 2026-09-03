import { useEffect, useRef, useState } from "react";

/**
 * Community background - shows people network and connections
 */
export function CommunityBackgroundImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient - green theme
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f0f9f6");
    gradient.addColorStop(0.5, "#e8f7f3");
    gradient.addColorStop(1, "#d1fae5");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw people circles (avatars)
    const drawPerson = (x: number, y: number, radius: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      // Head (circle)
      ctx.fillStyle = "rgba(34, 197, 94, 0.3)";
      ctx.beginPath();
      ctx.arc(x, y - radius * 0.5, radius * 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(34, 197, 94, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Body (rectangle)
      ctx.fillStyle = "rgba(34, 197, 94, 0.25)";
      ctx.fillRect(x - radius * 0.35, y - radius * 0.15, radius * 0.7, radius * 0.8);

      ctx.strokeStyle = "rgba(34, 197, 94, 0.45)";
      ctx.lineWidth = 2;
      ctx.strokeRect(x - radius * 0.35, y - radius * 0.15, radius * 0.7, radius * 0.8);

      ctx.restore();
    };

    // Draw network of people
    drawPerson(1000, 250, 50, 0.2);
    drawPerson(1100, 200, 50, 0.18);
    drawPerson(1150, 300, 50, 0.19);
    drawPerson(1050, 600, 55, 0.21);
    drawPerson(1120, 650, 55, 0.19);

    // Draw connection lines (network)
    ctx.strokeStyle = "rgba(34, 197, 94, 0.15)";
    ctx.lineWidth = 2;

    // Person 1 to Person 2
    ctx.beginPath();
    ctx.moveTo(1000, 250);
    ctx.lineTo(1100, 200);
    ctx.stroke();

    // Person 1 to Person 3
    ctx.beginPath();
    ctx.moveTo(1000, 250);
    ctx.lineTo(1150, 300);
    ctx.stroke();

    // Person 2 to Person 3
    ctx.beginPath();
    ctx.moveTo(1100, 200);
    ctx.lineTo(1150, 300);
    ctx.stroke();

    // Person 1 to Person 4
    ctx.beginPath();
    ctx.moveTo(1000, 250);
    ctx.lineTo(1050, 600);
    ctx.stroke();

    // Person 4 to Person 5
    ctx.beginPath();
    ctx.moveTo(1050, 600);
    ctx.lineTo(1120, 650);
    ctx.stroke();

    // Draw connection nodes
    ctx.fillStyle = "rgba(34, 197, 94, 0.4)";
    const connections = [
      { x: 1000, y: 250 },
      { x: 1100, y: 200 },
      { x: 1150, y: 300 },
      { x: 1050, y: 600 },
      { x: 1120, y: 650 },
    ];

    connections.forEach((conn) => {
      ctx.beginPath();
      ctx.arc(conn.x, conn.y, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw chat bubbles
    const drawChatBubble = (x: number, y: number, width: number, height: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      // Main bubble
      ctx.fillStyle = "rgba(34, 197, 94, 0.12)";
      ctx.fillRect(x, y, width, height);
      ctx.strokeStyle = "rgba(34, 197, 94, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x, y, width, height);

      // Tail
      ctx.fillStyle = "rgba(34, 197, 94, 0.12)";
      ctx.beginPath();
      ctx.moveTo(x + width - 15, y + height);
      ctx.lineTo(x + width, y + height + 10);
      ctx.lineTo(x + width - 5, y + height);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    drawChatBubble(950, 450, 120, 60, 0.2);
    drawChatBubble(1140, 500, 110, 55, 0.18);

    // Draw some text indicator lines in bubbles
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = "rgba(34, 197, 94, 0.4)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 2; i++) {
      ctx.beginPath();
      ctx.moveTo(965, 470 + i * 12);
      ctx.lineTo(1050, 470 + i * 12);
      ctx.stroke();
    }
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
