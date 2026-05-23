import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sprinkle {
  id: number;
  x: number; // horizontal spawn position (0 - 100)
  size: number;
  delay: number;
  duration: number;
  shape: "circle" | "sparkle" | "cross" | "donut" | "spring" | "zigzag";
  rotationSpeed: number;
  color: string;
  opacity: number;
}

export function Sprinkles({ count = 40, colorStyle = "colorful" }: { count?: number; colorStyle?: "white" | "colorful" }) {
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);

  useEffect(() => {
    const shapes: Array<Sprinkle["shape"]> = ["circle", "sparkle", "cross", "donut", "spring", "zigzag"];
    
    const colors = colorStyle === "white" 
      ? ["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.5)"]
      : [
          "#3b82f6", // Blue
          "#06b6d4", // Cyan
          "#8b5cf6", // Violet
          "#f59e0b", // Amber
          "#ec4899", // Pink
          "#10b981", // Emerald
        ];

    const generated: Sprinkle[] = Array.from({ length: count }).map((_, i) => {
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: i,
        x: Math.random() * 100, // spawn anywhere horizontally
        size: Math.random() * 12 + 6, // 6px to 18px (more visible!)
        delay: Math.random() * 6, // spread out start times
        duration: Math.random() * 5 + 4, // 4s to 9s fall duration
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotationSpeed: (Math.random() * 360 + 180) * (Math.random() > 0.5 ? 1 : -1), // spin direction & speed
        color: selectedColor,
        opacity: Math.random() * 0.5 + 0.4, // 0.4 to 0.9 opacity
      };
    });
    setSprinkles(generated);
  }, [count, colorStyle]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {sprinkles.map((s) => {
        return (
          <motion.div
            key={s.id}
            initial={{
              left: `${s.x}%`,
              top: "-5%",
              scale: Math.random() * 0.4 + 0.8,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              top: "105%",
              left: [`${s.x}%`, `${s.x + (Math.random() * 8 - 4)}%`], // slight diagonal drift
              rotate: s.rotationSpeed,
              opacity: [0, s.opacity, s.opacity, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "linear", // linear constant falling speed
            }}
            style={{
              position: "absolute",
              width: s.size,
              height: s.size * (s.shape === "spring" ? 2 : 1), // springs are double height
            }}
          >
            {s.shape === "circle" && (
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: s.color }}
              />
            )}
            {s.shape === "donut" && (
              <div
                className="w-full h-full rounded-full border-2 bg-transparent"
                style={{ borderColor: s.color }}
              />
            )}
            {s.shape === "cross" && (
              <svg viewBox="0 0 10 10" className="w-full h-full">
                <line x1="5" y1="0" x2="5" y2="10" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" />
                <line x1="0" y1="5" x2="10" y2="5" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
            {s.shape === "sparkle" && (
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z"
                  fill={s.color}
                />
              </svg>
            )}
            {s.shape === "spring" && (
              <svg viewBox="0 0 20 40" className="w-full h-full fill-none">
                {/* Spiral spring shape */}
                <path
                  d="M10,2 C18,7 2,13 10,18 C18,23 2,29 10,34 C18,37 8,39 10,40"
                  stroke={s.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {s.shape === "zigzag" && (
              <svg viewBox="0 0 20 20" className="w-full h-full fill-none">
                {/* Zigzag shape */}
                <path
                  d="M0,5 L7,12 L13,5 L20,12"
                  stroke={s.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
