import { useEffect, useRef, useState } from "react";

/**
 * Robot background for the Chatbot page
 * Creates a stylized robot image as background
 */
export function RobotBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    // Create a large canvas for the robot image
    const canvas = document.createElement("canvas");
    canvas.width = 1800;
    canvas.height = 1200;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f5f3f9");
    gradient.addColorStop(0.5, "#f0ebf8");
    gradient.addColorStop(1, "#ede9f6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw large robot on the right side
    const robotX = canvas.width * 0.65;
    const robotY = canvas.height * 0.50;

    ctx.save();
    ctx.translate(robotX, robotY);

    // Robot body (large)
    ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
    ctx.fillRect(-140, -200, 280, 360);
    ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
    ctx.lineWidth = 4;
    ctx.strokeRect(-140, -200, 280, 360);

    // Robot head (large)
    ctx.fillStyle = "rgba(99, 102, 241, 0.18)";
    ctx.beginPath();
    ctx.arc(0, -240, 110, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(99, 102, 241, 0.5)";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Left eye
    ctx.fillStyle = "rgba(99, 102, 241, 0.7)";
    ctx.beginPath();
    ctx.arc(-45, -260, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(147, 51, 234, 0.9)";
    ctx.beginPath();
    ctx.arc(-45, -260, 12, 0, Math.PI * 2);
    ctx.fill();

    // Right eye
    ctx.fillStyle = "rgba(99, 102, 241, 0.7)";
    ctx.beginPath();
    ctx.arc(45, -260, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(147, 51, 234, 0.9)";
    ctx.beginPath();
    ctx.arc(45, -260, 12, 0, Math.PI * 2);
    ctx.fill();

    // Antenna left
    ctx.strokeStyle = "rgba(99, 102, 241, 0.6)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(-60, -350);
    ctx.lineTo(-60, -450);
    ctx.stroke();
    ctx.fillStyle = "rgba(147, 51, 234, 0.8)";
    ctx.beginPath();
    ctx.arc(-60, -450, 12, 0, Math.PI * 2);
    ctx.fill();

    // Antenna right
    ctx.strokeStyle = "rgba(99, 102, 241, 0.6)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(60, -350);
    ctx.lineTo(60, -450);
    ctx.stroke();
    ctx.fillStyle = "rgba(147, 51, 234, 0.8)";
    ctx.beginPath();
    ctx.arc(60, -450, 12, 0, Math.PI * 2);
    ctx.fill();

    // Mouth
    ctx.strokeStyle = "rgba(99, 102, 241, 0.6)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, -210, 35, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();

    // Left arm
    ctx.fillStyle = "rgba(99, 102, 241, 0.2)";
    ctx.fillRect(-200, -80, 70, 160);
    ctx.strokeStyle = "rgba(99, 102, 241, 0.45)";
    ctx.lineWidth = 4;
    ctx.strokeRect(-200, -80, 70, 160);
    ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
    ctx.beginPath();
    ctx.arc(-165, 90, 28, 0, Math.PI * 2);
    ctx.fill();

    // Right arm
    ctx.fillStyle = "rgba(99, 102, 241, 0.2)";
    ctx.fillRect(130, -80, 70, 160);
    ctx.strokeStyle = "rgba(99, 102, 241, 0.45)";
    ctx.lineWidth = 4;
    ctx.strokeRect(130, -80, 70, 160);
    ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
    ctx.beginPath();
    ctx.arc(165, 90, 28, 0, Math.PI * 2);
    ctx.fill();

    // Chest panel
    ctx.fillStyle = "rgba(147, 51, 234, 0.12)";
    ctx.fillRect(-90, -120, 180, 180);
    ctx.strokeStyle = "rgba(147, 51, 234, 0.3)";
    ctx.lineWidth = 3;
    ctx.strokeRect(-90, -120, 180, 180);

    // Chest lights (3 vertical) - larger
    const lights = [
      { y: -70, color: "rgba(147, 51, 234, 0.8)" },
      { y: 0, color: "rgba(147, 51, 234, 0.9)" },
      { y: 70, color: "rgba(147, 51, 234, 0.7)" },
    ];

    lights.forEach((light) => {
      ctx.fillStyle = light.color;
      ctx.beginPath();
      ctx.arc(0, light.y, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(147, 51, 234, 0.5)";
      ctx.lineWidth = 3;
      ctx.stroke();
    });

    // Left leg
    ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
    ctx.fillRect(-80, 160, 60, 140);
    ctx.strokeStyle = "rgba(99, 102, 241, 0.35)";
    ctx.lineWidth = 3;
    ctx.strokeRect(-80, 160, 60, 140);
    ctx.fillStyle = "rgba(99, 102, 241, 0.2)";
    ctx.fillRect(-95, 295, 90, 35);

    // Right leg
    ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
    ctx.fillRect(20, 160, 60, 140);
    ctx.strokeStyle = "rgba(99, 102, 241, 0.35)";
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 160, 60, 140);
    ctx.fillStyle = "rgba(99, 102, 241, 0.2)";
    ctx.fillRect(5, 295, 90, 35);

    ctx.restore();

    // Digital grid overlay
    ctx.strokeStyle = "rgba(99, 102, 241, 0.08)";
    ctx.lineWidth = 1;
    const gridSize = 150;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Convert to data URL
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
        opacity: 0.95,
      }}
    />
  );
}
