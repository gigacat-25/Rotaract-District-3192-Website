"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLoggedIn = true; // Mock Auth
  const userRole = "district_admin"; // Mock Role

  const mainNavLinks = [
    { name: "District", href: "/about" },
    { name: "Clubs", href: "/clubs" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
  ];

  const dashboardLink = userRole === "district_admin" ? "/admin" : "/dashboard";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 h-20 flex items-center transition-all duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(2, 11, 24, 0.95)"
          : "rgba(2, 11, 24, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(14, 107, 168, 0.3)",
      }}
    >
      <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
          style={{
            background: "linear-gradient(90deg, #00b4d8, #caf0f8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          Rotaract Portal
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? "var(--color-reef)" : "var(--color-foam)",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  borderBottom: isActive
                    ? "2px solid var(--color-reef)"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          {/* More Dropdown */}
          <div className="relative group">
            <button
              style={{ color: "var(--color-foam)", fontWeight: 500, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
              className="transition-colors group-hover:text-[var(--color-reef)]"
            >
              Office
              <span className="material-symbols-outlined text-lg leading-none transform group-hover:rotate-180 transition-transform">
                expand_more
              </span>
            </button>
            <div
              className="absolute top-full -left-10 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3 mt-4"
              style={{
                background: "rgba(5, 30, 56, 0.97)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(14, 107, 168, 0.3)",
                borderRadius: "12px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              }}
            >
              {[
                { label: "District News", href: "/news" },
                { label: "Newsletters", href: "/newsletter" },
                { label: "Jobs", href: "/jobs" },
                { label: "Brand Hub", href: "/brand-centre" },
                { label: "Hall of Fame", href: "/hall-of-fame" },
                { label: "Leaderboard", href: "/leaderboard" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-2.5 text-sm font-semibold transition-colors"
                  style={{ color: "var(--color-foam)", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-reef)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-foam)")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <Link
              href={dashboardLink}
              className="material-symbols-outlined text-3xl cursor-pointer transition-all hover:scale-110"
              style={{ color: "var(--color-foam)", textDecoration: "none" }}
            >
              account_circle
            </Link>
          ) : (
            <Link
              href="/login"
              className="btn-primary"
              style={{ textDecoration: "none", borderRadius: "10px" }}
            >
              Login
            </Link>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{ color: "var(--color-reef)", background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-20 left-0 w-full z-50"
          style={{
            background: "rgba(2, 11, 24, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(14, 107, 168, 0.3)",
          }}
        >
          <div className="px-8 py-8 space-y-6">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xl font-bold"
                  style={{
                    color: isActive ? "var(--color-reef)" : "var(--color-foam)",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <div
              className="pt-6"
              style={{ borderTop: "1px solid rgba(14, 107, 168, 0.3)" }}
            >
              <Link
                href={dashboardLink}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary block text-center w-full"
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
