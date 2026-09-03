import { useEffect, useRef, useState } from "react";

/**
 * Training Videos background - shows film reels and play buttons
 */
export function TrainingVideosBackgroundImage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient - warm/amber theme
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fef9f5");
    gradient.addColorStop(0.5, "#fef5f0");
    gradient.addColorStop(1, "#fed7aa");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw film reels
    const drawFilmReel = (x: number, y: number, radius: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);

      // Outer reel
      ctx.fillStyle = `rgba(245, 158, 11, ${opacity})`;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(245, 158, 11, ${opacity * 1.3})`;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Reel spokes
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        ctx.save();
        ctx.rotate(angle);
        ctx.strokeStyle = `rgba(245, 158, 11, ${opacity * 0.8})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, radius * 0.8);
        ctx.stroke();
        ctx.restore();
      }

      // Center hub
      ctx.fillStyle = `rgba(245, 158, 11, ${opacity})`;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.25, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Draw film reels
    drawFilmReel(1050, 250, 90, 0.16);
    drawFilmReel(1150, 550, 75, 0.13);
    drawFilmReel(950, 750, 80, 0.14);

    // Draw play buttons
    const drawPlayButton = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);

      // Circle background
      ctx.fillStyle = `rgba(245, 158, 11, ${opacity * 0.3})`;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();

      // Circle border
      ctx.strokeStyle = `rgba(245, 158, 11, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Play triangle
      ctx.fillStyle = `rgba(245, 158, 11, ${opacity})`;
      ctx.beginPath();
      ctx.moveTo(size * 0.3, -size * 0.5);
      ctx.lineTo(size * 0.3, size * 0.5);
      ctx.lineTo(size * 1.2, 0);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    drawPlayButton(1100, 150, 40, 0.15);
    drawPlayButton(1000, 850, 45, 0.12);

    // Draw film strips
    ctx.strokeStyle = "rgba(245, 158, 11, 0.1)";
    ctx.lineWidth = 3;
    ctx.setLineDash([20, 10]);

    ctx.beginPath();
    ctx.moveTo(900, 300);
    ctx.lineTo(1200, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(900, 600);
    ctx.lineTo(1200, 600);
    ctx.stroke();

    ctx.setLineDash([]);

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
