"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 229;
const FRAME_PATH = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | ImageBitmap | null)[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Draw a specific frame to canvas
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimization: no alpha
    if (!ctx) return;

    // Find nearest loaded frame
    let nearest = Math.round(index);
    if (nearest >= TOTAL_FRAMES) nearest = TOTAL_FRAMES - 1;
    if (nearest < 0) nearest = 0;

    let img = imagesRef.current[nearest];
    
    // If current is missing, search outwards
    if (!img) {
      let offset = 1;
      while (offset < 20) { // Look up to 20 frames away
        if (nearest + offset < TOTAL_FRAMES && imagesRef.current[nearest + offset]) {
          img = imagesRef.current[nearest + offset];
          break;
        }
        if (nearest - offset >= 0 && imagesRef.current[nearest - offset]) {
          img = imagesRef.current[nearest - offset];
          break;
        }
        offset++;
      }
    }

    if (!img) return;
    renderImage(ctx, canvas, img);
  }, []);

  const renderImage = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement | ImageBitmap) => {
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = (img as HTMLImageElement).naturalWidth || img.width;
    const ih = (img as HTMLImageElement).naturalHeight || img.height;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.drawImage(img, sx, sy, sw, sh);
  };

  // Ultra-optimized preloading
  useEffect(() => {
    const images: (HTMLImageElement | ImageBitmap | null)[] = new Array(TOTAL_FRAMES).fill(null);
    imagesRef.current = images;

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    // Every 4th frame on mobile (~57 frames total)
    // Every 1st frame on desktop
    const step = isMobile ? 4 : 1; 

    const loadQueue = async () => {
      // 1. Load first frame immediately
      const first = new Image();
      first.src = FRAME_PATH(1);
      await new Promise((resolve) => {
        first.onload = async () => {
          if ("createImageBitmap" in window) {
            images[0] = await createImageBitmap(first);
          } else {
            images[0] = first;
          }
          drawFrame(0);
          resolve(null);
        };
      });

      // 2. Load others in batches to prevent main-thread choking
      const framesToLoad = [];
      for (let i = step + 1; i <= TOTAL_FRAMES; i += step) {
        framesToLoad.push(i);
      }

      const batchSize = isMobile ? 3 : 10;
      for (let i = 0; i < framesToLoad.length; i += batchSize) {
        const batch = framesToLoad.slice(i, i + batchSize);
        await Promise.all(batch.map(async (frameNum) => {
          const img = new Image();
          img.src = FRAME_PATH(frameNum);
          return new Promise((resolve) => {
            img.onload = async () => {
              const idx = frameNum - 1;
              if ("createImageBitmap" in window) {
                images[idx] = await createImageBitmap(img);
              } else {
                images[idx] = img;
              }
              resolve(null);
            };
            img.onerror = () => resolve(null);
          });
        }));
        // Small breathing room for UI
        await new Promise(r => setTimeout(r, 20));
      }
    };

    loadQueue();
  }, [drawFrame]);

  // Resolution and Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const isMobile = window.matchMedia("(pointer: coarse)").matches;
      // Force 1.0x on mobile for zero-latency painting
      const scale = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      
      drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // Scrubbing logic
  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    // High lerp for mobile to bridge the gap between fewer frames
    const lerpFactor = isMobile ? 0.35 : 0.15;

    const update = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * lerpFactor;
        drawFrame(currentFrameRef.current);
      }

      rafRef.current = requestAnimationFrame(update);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
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
        background: "#F8F9FA", // Match site background to hide canvas clears
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          willChange: "transform",
          opacity: 0.3,
          imageRendering: "auto", // Ensure smoothing
        }}
      />
    </div>
  );
}
