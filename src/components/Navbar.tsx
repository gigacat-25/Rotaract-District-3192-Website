"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isLoggedIn = true; // Mock Auth
  const userRole = 'district_admin'; // Mock Role
  
  const mainNavLinks = [
    { name: 'District', href: '/about' },
    { name: 'Clubs', href: '/clubs' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
  ];

  const dashboardLink = userRole === 'district_admin' ? '/admin' : '/dashboard';

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(108,43,217,0.06)] h-20 flex items-center">
      <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto font-body tracking-tight">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-br from-violet-600 to-blue-500 bg-clip-text text-transparent">
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
                className={`font-medium transition-all duration-300 hover:text-violet-500 hover:-translate-y-0.5 ${isActive ? 'text-violet-600 font-semibold border-b-2 border-violet-600 pb-1' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* More Dropdown */}
          <div className="relative group">
            <button className="text-slate-600 group-hover:text-violet-500 font-medium flex items-center gap-1 transition-all">
              Office
              <span className="material-symbols-outlined text-lg leading-none transform group-hover:rotate-180 transition-transform">expand_more</span>
            </button>
            <div className="absolute top-full -left-10 w-56 bg-surface-container-lowest shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3 mt-4 border border-outline-variant">
              <Link href="/news" className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-surface-container-low hover:text-primary font-bold">District News</Link>
              <Link href="/newsletter" className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-surface-container-low hover:text-primary font-bold">Newsletters</Link>
              <Link href="/jobs" className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-surface-container-low hover:text-primary font-bold">Jobs</Link>
              <Link href="/brand-centre" className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-surface-container-low hover:text-primary font-bold">Brand Hub</Link>
              <Link href="/hall-of-fame" className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-surface-container-low hover:text-primary font-bold">Hall of Fame</Link>
              <Link href="/leaderboard" className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-surface-container-low hover:text-primary font-bold">Leaderboard</Link>
            </div>
          </div>
        </div>

        {/* Auth / Actions */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <Link href={dashboardLink} className="material-symbols-outlined text-slate-600 hover:text-primary hover:scale-110 transition-all text-3xl cursor-pointer">
              account_circle
            </Link>
          ) : (
            <Link href="/login" className="px-6 py-2.5 bg-gradient-to-br from-primary-container to-secondary-container text-white rounded-xl font-semibold shadow-[0_4px_20px_rgba(108,43,217,0.3)] active:scale-95 duration-200 transition-all">
              Login
            </Link>
          )}
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-20 left-0 w-full bg-white border-t border-outline-variant z-50`}>
        <div className="px-8 py-8 space-y-6">
          {mainNavLinks.map((link) => {
             const isActive = pathname === link.href;
             return (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-xl font-bold ${isActive ? 'text-violet-600' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-outline-variant">
            {isLoggedIn ? (
              <Link 
                href={dashboardLink} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-8 py-4 bg-gradient-to-br from-primary-container to-secondary-container text-white text-center rounded-xl font-bold"
              >
                Dashboard
              </Link>
            ) : (
              <Link 
                href="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-8 py-4 bg-gradient-to-br from-primary-container to-secondary-container text-white text-center rounded-xl font-bold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
