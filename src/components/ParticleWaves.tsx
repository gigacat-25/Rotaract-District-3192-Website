"use client";

import { useEffect, useRef } from "react";

export default function ParticleWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particleCount = 200;
    const particles: { x: number; baseY: number; size: number; speedX: number; phase: number }[] = [];

    // Create primary particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        baseY: height * 0.2 + Math.random() * height * 0.6,
        size: Math.random() * 2.5 + 1,
        speedX: Math.random() * 0.6 + 0.2, 
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;
    let animationFrame: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Intensity alternates smoothly from light (0) to strong (1) over a continuous cycle
      // Math.sin(time) goes from -1 to 1. We map it to 0 to 1.
      const intensityPhase = (Math.sin(time * 0.003) + 1) / 2;
      
      // Amplitude grows when moving from light to strong
      const amplitude = 20 + intensityPhase * 180; 
      
      // Turbulence (higher frequency noise) appears during strong waves
      const turbulence = intensityPhase * 2.5;

      // Update and draw particles
      particles.forEach((p, idx) => {
        // Particles drift to the right, faster when waves are stronger
        p.x += p.speedX * (1 + intensityPhase * 2);
        if (p.x > width) p.x = 0; 

        // Multi-frequency wave calculation dependent on X position and time
        const baseFrequency = p.x * 0.003;
        const timeOffset = time * 0.015;
        
        const mainWave = Math.sin(baseFrequency + timeOffset + p.phase * 0.2) * amplitude;
        const turbulentWave = Math.sin(p.x * 0.015 - time * 0.04) * (20 * turbulence);
        
        const particleY = p.baseY + mainWave + turbulentWave;

        // Calculate visibility: fade out near top/bottom edges
        const centerDist = Math.abs(height / 2 - particleY) / (height / 2);
        const alpha = Math.max(0, 0.9 - centerDist) * (0.2 + intensityPhase * 0.8);

        // Save current actual Y for distance calculations later
        (p as any).currentY = particleY;

        ctx.beginPath();
        ctx.fillStyle = idx % 10 === 0 ? `rgba(133, 196, 228, ${alpha})` : `rgba(72, 141, 180, ${alpha})`; // Sky Blue and Steel Blue
        // Increase size slightly during strong phases
        ctx.arc(p.x, particleY, p.size * (1 + intensityPhase * 0.4), 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particle connections to form the "wave net" when intensity is medium-high
      if (intensityPhase > 0.1) {
        const lineAlphaMax = 0.2 * intensityPhase;
        ctx.lineWidth = 0.8;
        
        for (let i = 0; i < particleCount; i++) {
          const p1 = particles[i];
          const y1 = (p1 as any).currentY;
          
          for (let j = i + 1; j < particleCount; j++) {
            const p2 = particles[j];
            const y2 = (p2 as any).currentY;
            
            // Fast distance check squared
            const distSq = (p1.x - p2.x) ** 2 + (y1 - y2) ** 2;
            const thresholdSq = 10000; // ~100px connection distance
            
            if (distSq < thresholdSq) {
              const dist = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(133, 196, 228, ${lineAlphaMax * (1 - dist / 100)})`; // Sky Blue
              ctx.moveTo(p1.x, y1);
              ctx.lineTo(p2.x, y2);
              ctx.stroke();
            }
          }
        }
      }

      time += 1;
      animationFrame = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      // Re-distribute particles on resize
      particles.forEach(p => {
        p.x = Math.random() * width;
        p.baseY = height * 0.2 + Math.random() * height * 0.6;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none mix-blend-screen opacity-90"
    />
  );
}
