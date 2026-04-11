"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import React from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({ 
  children, 
  animation = "slide-up", 
  delay = 0, 
  duration = 0.8,
  className = "",
  style,
}: ScrollRevealProps) {
  
  const variants: Variants = {
    hidden: { 
      opacity: 0,
      y: animation === "slide-up" ? 50 : 0,
      x: animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut", // Smooth standard out ease
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Triggers slightly before element enters view
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
