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
        scrolled ? "bg-surface/95 backdrop-blur-md border-b border-outline-variant/30" : "bg-surface/80 backdrop-blur-md border-b border-outline-variant/10"
      }`}
    >
      <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary"
          style={{ textDecoration: "none" }}
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
                className={`font-medium transition-colors border-b-2 pb-[2px] ${isActive ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
                style={{ textDecoration: "none" }}
              >
                {link.name}
              </Link>
            );
          })}

          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-medium text-on-surface-variant transition-colors group-hover:text-primary bg-transparent border-none cursor-pointer">
              Office
              <span className="material-symbols-outlined text-lg leading-none transform group-hover:rotate-180 transition-transform">
                expand_more
              </span>
            </button>
            <div
              className="absolute top-full -left-10 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3 mt-4 bg-surface/95 backdrop-blur-md border border-outline-variant/30 rounded-xl shadow-xl"
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
                  className="block px-6 py-2.5 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
                  style={{ textDecoration: "none" }}
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
              className="material-symbols-outlined text-3xl cursor-pointer transition-all hover:scale-110 text-on-surface-variant hover:text-primary"
              style={{ textDecoration: "none" }}
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
            style={{ color: "var(--color-primary)", background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-20 left-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30"
        >
          <div className="px-8 py-8 space-y-6">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xl font-bold ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
                  style={{ textDecoration: "none" }}
                >
                  {link.name}
                </Link>
              );
            })}
            <div
              className="pt-6 border-t border-outline-variant/30"
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
