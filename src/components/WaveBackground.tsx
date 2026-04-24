"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 229;
const FRAME_PATH = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | ImageBitmap)[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isReadyRef = useRef(false);

  // Draw a specific frame to canvas, covering the full viewport (object-fit: cover)
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use actual index from array (some might be undefined if skipped)
    const img = imagesRef.current[index];
    if (!img) {
      // Find nearest loaded frame if current is missing due to skipping
      let nearest = index;
      while (nearest >= 0 && !imagesRef.current[nearest]) nearest--;
      if (nearest < 0) {
        nearest = index;
        while (nearest < TOTAL_FRAMES && !imagesRef.current[nearest]) nearest++;
      }
      const nearestImg = imagesRef.current[nearest];
      if (!nearestImg) return;
      
      renderImage(ctx, canvas, nearestImg);
      return;
    }

    renderImage(ctx, canvas, img);
  }, []);

  const renderImage = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement | ImageBitmap) => {
    const cw = canvas.width;
    const ch = canvas.height;
    
    // For ImageBitmap, naturalWidth/Height are just width/height
    const iw = (img as HTMLImageElement).naturalWidth || img.width;
    const ih = (img as HTMLImageElement).naturalHeight || img.height;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  };

  // Preload frames with mobile-aware skipping
  useEffect(() => {
    const images: (HTMLImageElement | ImageBitmap)[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const step = isMobile ? 2 : 1; // Load every 2nd frame on mobile to save ~50% memory

    // Preload first frame immediately
    const firstImg = new Image();
    firstImg.src = FRAME_PATH(1);
    firstImg.onload = async () => {
      if (window.createImageBitmap) {
        images[0] = await createImageBitmap(firstImg);
      } else {
        images[0] = firstImg;
      }
      drawFrame(0);
    };

    // Load others with skipping
    for (let i = step + 1; i <= TOTAL_FRAMES; i += step) {
      const img = new Image();
      const frameIndex = i - 1;
      img.src = FRAME_PATH(i);
      img.onload = async () => {
        if (window.createImageBitmap) {
          images[frameIndex] = await createImageBitmap(img);
        } else {
          images[frameIndex] = img;
        }
      };
    }
  }, [drawFrame]);

  // Resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const isMobile = window.matchMedia("(pointer: coarse)").matches;
      // Cap resolution for performance
      const scale = isMobile ? Math.min(dpr, 1.2) : Math.min(dpr, 2);

      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      
      drawFrame(Math.round(currentFrameRef.current));
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // Smoothed scrubbing
  useEffect(() => {
    let targetFrame = 0;
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    
    // Mobile needs higher lerp to hide the missing frames (skipping)
    const lerpFactor = isMobile ? 0.25 : 0.15;

    const update = () => {
      const diff = targetFrame - currentFrameRef.current;
      
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * lerpFactor;
        drawFrame(Math.round(currentFrameRef.current));
      }

      rafRef.current = requestAnimationFrame(update);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      targetFrame = progress * (TOTAL_FRAMES - 1);
    };

    rafRef.current = requestAnimationFrame(update);
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
          // Lower opacity on mobile for better text contrast
          opacity: 0.3,
        }}
      />
    </div>
  );
}
