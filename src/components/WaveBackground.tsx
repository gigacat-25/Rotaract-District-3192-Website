"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 229;
const FRAME_PATH = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const loadedCountRef = useRef(0);
  const isReadyRef = useRef(false);

  // Draw a specific frame to canvas, covering the full viewport (object-fit: cover)
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Object-fit: cover math
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    // Preload first frame immediately for instant display
    const firstImg = new Image();
    firstImg.src = FRAME_PATH(1);
    firstImg.onload = () => {
      images[0] = firstImg;
      loadedCountRef.current += 1;
      drawFrame(0);
    };

    // Load rest in background
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = i - 1;
      img.src = FRAME_PATH(i);
      img.onload = () => {
        images[frameIndex] = img;
        loadedCountRef.current += 1;
        if (loadedCountRef.current >= TOTAL_FRAMES) {
          isReadyRef.current = true;
        }
      };
    }
  }, [drawFrame]);

  // Resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // Scroll → frame scrub with RAF throttling
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return; // already scheduled

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        // Clamp progress to [0, 1]
        const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

        // Map to frame index
        const frameIndex = Math.round(progress * (TOTAL_FRAMES - 1));

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

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
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          willChange: "transform",
          // Subtle overlay so content stays readable on light theme
          opacity: 0.35,
        }}
      />
    </div>
  );
}
