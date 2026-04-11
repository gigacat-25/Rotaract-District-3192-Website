"use client";

import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = (
      phase: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 2) {
        const y =
          canvas.height * 0.55 +
          Math.sin(x * frequency + t * speed + phase) * amplitude;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Layer 1 — slow, tall
      drawWave(0, 60, 0.003, 0.3, "rgba(14, 107, 168, 0.18)");
      // Layer 2 — medium, medium height, phase π
      drawWave(Math.PI, 35, 0.005, 0.5, "rgba(0, 180, 216, 0.12)");
      // Layer 3 — fast, shallow, phase π/2
      drawWave(Math.PI / 2, 18, 0.008, 0.8, "rgba(144, 224, 239, 0.07)");

      t += 0.016;
      animationId = requestAnimationFrame(render);
    };

    resize();
    render();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%", willChange: "transform" }}
      />
    </div>
  );
}
