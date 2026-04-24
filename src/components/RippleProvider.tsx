"use client";

import { useEffect } from "react";

export default function RippleProvider() {
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      // Skip on touch devices to avoid DOM churn and lag
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const { clientX, clientY } =
        e instanceof TouchEvent ? e.touches[0] : e;

      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${clientX}px`;
      ripple.style.top = `${clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 820);
    };

    document.addEventListener("click", handler);
    document.addEventListener("touchstart", handler as EventListener, { passive: true });

    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler as EventListener);
    };
  }, []);

  return null;
}
