import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import WaveBackground from "@/components/WaveBackground";
import RippleProvider from "@/components/RippleProvider";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Rotaract District 3192 Portal",
  description: "Rotaract District 3192 administrative and member portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="antialiased min-h-screen flex flex-col">
          {/* Global wave canvas — fixed behind everything */}
          <WaveBackground />
          {/* Ripple on click */}
          <RippleProvider />
          {/* Page content sits above canvas */}
          <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
            <SmoothScroll>
              <PageTransition>
                {children}
              </PageTransition>
            </SmoothScroll>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
