import { ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  delay?: number;
  type?: "header" | "entrance";
}

export function AnimatedContent({
  children,
  delay = 0,
  type = "entrance",
}: AnimatedContentProps) {
  const animationClass = type === "header" ? "animate-header" : "animate-entrance";

  return (
    <div className={animationClass} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

interface AnimatedGridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
  startDelay?: number;
  itemDelay?: number;
}

export function AnimatedGrid({
  children,
  columns = 3,
  gap = "6",
  startDelay = 0.2,
  itemDelay = 0.1,
}: AnimatedGridProps) {
  return (
    <div
      className={`grid gap-${gap} lg:grid-cols-${columns}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
        gap: `${gap * 4}px`,
      }}
    >
      {children}
    </div>
  );
}
